<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_ID       = !isset($_POST["usuario"])     ? NULL : ($_POST["usuario"] == ''       ? NULL      :   $_POST["usuario"]);
        $V_ROL      = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == ''   ? NULL      :   $_POST["usuario_rol"]);
        $V_HORARIO  = !isset($_POST["horario"])     ? NULL : ($_POST["horario"] == ''       ? NULL      :   $_POST["horario"]);

        try {
            
            $contador = 0;
            $erray = array();
            session_start();
            $contadorsession = 0;

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del supervisor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT A.NUSUA_ID, B.NROLE_ID 
                                        FROM SRD_USUARIOS A
                                        INNER JOIN SRD_ROLES_USUARIO B ON A.NUSUA_ID = B.NUSUA_ID AND B.NROSU_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                        WHERE A.NUSUA_ID = ? AND A.NAUDI_EST_REG = 1;");
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
            
            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_HORARIO === NULL || $V_HORARIO == '' ) {
                $error = 'El ID del horario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT 
                                            A.NHORA_ID 
                                        FROM SRD_HORARIO A
                                        WHERE A.NHORA_ID = ? AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_ID);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la encuesta no se encuentra asignado al supervisor';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADA
            if ($contador == 0) {
                $stmt = $conn->prepare("SELECT A.NHOTU_ID FROM SRD_HORARIO_TURNOS A
                                        WHERE A.NHORA_ID = ? AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_HORARIO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idhorario);
                    $stmt->fetch();
                    $respuesta = array(
                        'estado' => 2,
                        'mensaje' => 'El personal ya cuenta con horario programado, no se puede realizar la operación',
                        'data' => array(
                            'id' => $V_ID
                        )
                    );
                    $stmt->close();
                } else {
                    $stmt->close();
                    $stmt = $conn->prepare("UPDATE SRD_HORARIO SET NAUDI_EST_REG = 0, NHORA_ESTADO = 0, NAUDI_REG_UPD = ?, DAUDI_REG_UPD = CURRENT_TIMESTAMP()
                                            WHERE NHORA_ID = ?;");
                                                
                    $stmt->bind_param("ii", $V_ID, $V_HORARIO );
                    $stmt->execute();
                    
                    // Verifica si se realizaron cambios
                    if (mysqli_affected_rows($conn) > 0) {
                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Se realizó la actualización exitosamente!',
                            'data' => array(
                                'id' => $V_HORARIO
                            )
                        );
                    
                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'No se ha podido realizar la solicitud, intente más tarde'
                            )
                        );
                    }
                    $stmt->close();
                }

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
    
    $conn->close();
?>