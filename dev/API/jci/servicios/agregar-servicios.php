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

        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $contadorsession = 0;
            
            // VALIDAMOS EL ID DEL USUARIO
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT A.NUSUA_ID, B.NROLE_ID 
                                        FROM SRD_USUARIOS A
                                        INNER JOIN SRD_ROLES_USUARIO B ON A.NUSUA_ID = B.NUSUA_ID AND B.NROSU_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                        WHERE A.NUSUA_ID = ? AND B.NROLE_ID = ? AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("ii", $V_ID, $V_ROL);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idusuario, $idrol);
                    $stmt->fetch();
                    if ( $idusuario != $_SESSION['id'] ) {
                        $error = 'El usuario no puede realizar dicha operación';
                        $contador += 1;
                        $est = 2;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    if ( $idrol != $_SESSION['rol_id'] ) {
                        $error = 'El rol del usuario no corresponde a la operación';
                        $contador += 1;
                        $est = 2;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    
                    // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADA
                    if ($contadorsession != 0) {
                        session_destroy();
                    }
                } else {
                    $error = 'El ID del supervisor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ID DEL SERVICIO
            if ( $V_SERV === NULL || $V_SERV == '' ) {
                $error = 'El ID del servicio es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1 AND NAREA_ESTADO = 1;");
                $stmt->bind_param("s", $V_SERV);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del servicio no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_SUPER === NULL || $V_SUPER == '' ) {
                $error = 'El ID del supervisor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
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

            if ($contador == 0) {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_JCI_AREAS_SUPER WHERE CAREA_ID = ? AND NASUP_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_SERV);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'El servicio ya se encuentra registrado'
                        )
                    );
                } else {
                    $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_JCI_AREAS_SUPER WHERE CAREA_ID = ? AND NASUP_ESTADO = ? AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("si", $V_SERV, $V_SUPER);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'El supervisor ya se encuentra asignado al servicio'
                            )
                        );
                    } else {
                        $stmt = $conn->prepare("INSERT INTO SRD_JCI_AREAS_SUPER (CAREA_ID, NUSUA_ID, NAUDI_REG_INS)
                                                VALUES(?, ?, ?);");
                                                        
                        $stmt->bind_param("sii", $V_SERV, $V_SUPER, $V_ID );
                        $stmt->execute();

                        // Verifica si se realizaron cambios
                        if (mysqli_affected_rows($conn) > 0) {
                            $respuesta = array(
                                'estado' => 1,
                                'mensaje' => '¡Se realizó el registro exitosamente!',
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
                    }
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