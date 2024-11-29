<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_ID = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;
        $V_SERV = isset($_POST['servicio']) ? trim($_POST['servicio']) : '' ;
        $V_SUPER = isset($_POST['supervisor']) ? trim($_POST['supervisor']) : '' ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $V_ESTADO = !isset($_POST["estado"]) ? NULL : ($_POST["estado"] == '' ? NULL : $_POST["estado"]);
        $V_KEY = !isset($_POST["id"]) ? NULL : ($_POST["id"] == '' ? NULL : $_POST["id"]);

        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $contadorsession = 0;
            
            // VALIDAMOS EL KEY
            if ( $V_KEY === NULL || $V_KEY == '' ) {
                $error = 'El ID es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NASUP_ID FROM SRD_HIG_AREAS_SUPER WHERE NASUP_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_KEY);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El key no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }


            // VALIDAMOS EL ID DEL USUARIO
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID, NROLE_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_ID);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idusuario, $idrol);
                    $stmt->fetch();
                    if ( $idusuario != $_SESSION['id'] ) {
                        $error = 'El usuario no puede realizar dicha operación';
                        $contador += 1;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    if ( $idrol != $_SESSION['rol_id'] ) {
                        $error = 'El rol del usuario no corresponde a la operación';
                        $contador += 1;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    
                    // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADO
                    if ($contadorsession != 0) {
                        session_destroy();
                    }
                } else {
                    $error = 'El ID del usuario no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_SUPER === NULL || $V_SUPER == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NROLE_ID = 3 AND NAUDI_EST_REG = 1 AND NUSUA_ESTADO = 1;");
                $stmt->bind_param("s", $V_SUPER);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del supervisor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ESTADO
            if ( $V_ESTADO === NULL || $V_ESTADO == '' ) {
                $error = 'El estado es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( $V_ESTADO != 0 && $V_ESTADO != 1 ) {
                    $error = 'El estado es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $stmt = $conn->prepare("UPDATE SRD_HIG_AREAS_SUPER 
                                        SET NASUP_ESTADO = ?, DAUDI_REG_UPD = NOW(), NAUDI_REG_UPD = ?, NUSUA_ID = ? 
                                        WHERE NASUP_ID = ? AND NAUDI_EST_REG = 1;");
                                                
                $stmt->bind_param("iiii", $V_ESTADO, $V_ID, $V_SUPER, $V_KEY);
                $stmt->execute();

                // Verifica si se realizaron cambios
                if (mysqli_affected_rows($conn) > 0) {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se realizó la actualización exitosamente!',
                        'data' => array(
                            'id' => $V_ID
                        )
                    );
                
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'El usuario no existe'
                        )
                    );
                }

                $stmt->close();

            } else {
                $respuesta = array(
                    'estado' => 0,
                    'mensaje' => '¡Error!',
                    'data' => $earray
                );
            }
        } catch(Exception $e) {
            $respuesta = array(
                'estado' => 0,
                'mensaje' => '¡Error!',
                'data' => array(
                    '1' => $e->getMessage()
                )
            );
        }
    } else {
        $respuesta = array(
            'estado' => 0,
            'mensaje' => '¡Error!',
            'data' => array(
                '1' => 'El método de solicitud no es el indicado'
            )
        );
    }

    echo json_encode($respuesta, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
?>