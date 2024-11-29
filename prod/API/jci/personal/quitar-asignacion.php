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
        $V_ID = !empty($_POST['usuario']) ? trim($_POST['usuario']) : null ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $V_ENCUESTA = !empty($_POST['encuesta']) ? trim($_POST['encuesta']) : null ;

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
            if ( $V_ENCUESTA === NULL || $V_ENCUESTA == '' ) {
                $error = 'El ID de la encuesta es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( $V_ROL == 1) {
                } else {
                    $stmt = $conn->prepare("SELECT 
                                                A.NUSUA_ID 
                                            FROM SRD_JCI_ENCUESTAS A
                                            INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID
                                            WHERE B.NUSUA_ID = ?;");
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
            }

            // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADA
            if ($contador == 0) {
                $stmt = $conn->prepare("SELECT A.NJENPR_ID FROM SRD_JCI_ENCUESTAS_PREG A
                                        WHERE A.NJENC_ID = ? AND A.NJENPR_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_ENCUESTA);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $respuesta = array(
                        'estado' => 2,
                        'mensaje' => 'La evaluación ya se encuetra en proceso, no se puede eliminar',
                        'data' => array(
                            'id' => $V_ID
                        )
                    );
                    $stmt->close();
                } else {
                    $stmt->close();
                    $stmt = $conn->prepare("UPDATE SRD_JCI_ENCUESTAS SET NAUDI_EST_REG = 0, NJENC_ESTADO = 0, NAUDI_REG_UPD = ?, DAUDI_REG_UPD = CURRENT_TIMESTAMP()
                                            WHERE NJENC_ID = ?;");
                                                
                    $stmt->bind_param("ii", $V_ID, $V_ENCUESTA );
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