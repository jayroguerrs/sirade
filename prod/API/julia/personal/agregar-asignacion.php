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
        $V_COLABOR = !empty($_POST['colaborador']) ? trim($_POST['colaborador']) : null ;
        $V_PERIODO = !empty($_POST['periodo']) ? trim($_POST['periodo']) : null;
        $V_SERVICIO = !empty($_POST['servicio']) ? trim($_POST['servicio']) : null;

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
            if ( $V_COLABOR === NULL || $V_COLABOR == '' ) {
                $error = 'El ID del colaborador es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_COLABOR);
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

            // VALIDAMOS EL PERIODO
            if ( $V_PERIODO === NULL || $V_PERIODO == '' ) {
                $error = 'El ID del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.NPERI_ID
                                        FROM SRD_PERIODO A
                                        WHERE A.NPERI_ID = ? AND A.CAPLI_ID = 'ENF_002'
                                            AND A.NPERI_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_PERIODO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El periodo no existe o no está vigente';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL SERVICIO
            if ( $V_SERVICIO === NULL || $V_SERVICIO == '' ) {
                $error = 'Tiene que elegir un servicio en donde asignar al colaborador';
                $contador += 1;
                $earray[$contador] = $error;
            } else{
                
                $stmt = $conn->prepare("SELECT 
                                            A.CAREA_ID
                                        FROM SRD_SUPER_AREAS_PERIODO A
                                        WHERE 
                                            A.CAREA_ID = ? AND A.NPERI_ID = ?
                                            AND A.NSAPE_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("si", $V_SERVICIO, $V_PERIODO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El supervisor no tiene asignado dicho servicio';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
                
            }

            if ($contador == 0) {
                
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.NHORA_ID
                                        FROM SRD_HORARIO A
                                        INNER JOIN SRD_SUPER_AREAS_PERIODO B ON A.NSAPE_ID = B.NSAPE_ID
                                        WHERE A.NUSUA_ID = ? AND B.NPERI_ID = ? 
                                              AND B.NSAPE_ESTADO = 1 AND B.NAUDI_EST_REG = 1;");
                $stmt->bind_param("is", $V_ID, $V_PERIODO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    // La pregunta ya existe, obtén el valor actual
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'El colaborador ya se encuentra asignado a este periodo'
                        )
                    );

                } else {
                    $stmt = $conn->prepare("SELECT DISTINCT 
                                                A.NSAPE_ID
                                            FROM SRD_SUPER_AREAS_PERIODO A
                                            WHERE A.CAREA_ID = ? AND A.NPERI_ID = ? 
                                                  AND A.NSAPE_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                    $stmt->bind_param("si", $V_SERVICIO, $V_PERIODO);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        // La pregunta ya existe, obtén el valor actual
                        $stmt->bind_result($idsape);
                        $stmt->fetch();

                        $stmt = $conn->prepare("INSERT INTO SRD_HORARIO (NSAPE_ID, NUSUA_ID, NAUDI_REG_INS) VALUES (?, ?, ?);");
                        $stmt->bind_param("iii", $idsape, $V_COLABOR, $V_ID);
                        $stmt->execute();
                        $stmt->store_result();
                        if (mysqli_affected_rows($conn) > 0) {
                            
                            $respuesta = array(
                                'estado' => 1,
                                'mensaje' => '¡Se realizó la actualización exitosamente!',
                                'data' => array(
                                    'id' => $conn->insert_id
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
    
    $conn->close();
?>