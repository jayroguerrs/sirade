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
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
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

            if ($contador == 0) {
                
                $stmt = $conn->prepare("SELECT 
                                            A.NASUP_ID,
                                            A.CAREA_ID,
                                            A.NUSUA_ID,
                                            A.NASUP_ESTADO
                                        FROM SRD_HIG_AREAS_SUPER A
                                        INNER JOIN SRD_AREAS B ON A.CAREA_ID = B.CAREA_ID
                                        WHERE A.NAUDI_EST_REG = 1 AND A.NASUP_ID = ?;");
                                                
                $stmt->bind_param("i", $V_KEY );
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($id, $idservicio, $usuario, $estado);
                    $stmt->fetch();
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Registro obtenido exitosamente!',
                        'data' => array(
                            'id' => $id,
                            'servicio' => $idservicio,
                            'usuario' => $usuario,
                            'estado' => $estado
                        )
                    );
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error! No se encontraron registros',
                        'data' => $earray
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