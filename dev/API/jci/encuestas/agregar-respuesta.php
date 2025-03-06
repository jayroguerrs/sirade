<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_SUPER = isset($_POST['id_supervisor']) ? trim($_POST['id_supervisor']) : '' ;
        $V_ENCUE = isset($_POST['id_encuesta']) ? trim($_POST['id_encuesta']) : '' ;
        $V_PERIO = isset($_POST['periodo']) ? trim($_POST['periodo']) : '' ;
        $V_SERVI = isset($_POST['servicio']) ? trim($_POST['servicio']) : '' ;

        try {
            
            $contador = 0;
            $earray = array();

            // VALIDAMOS EL PERIODO
            if ( $V_PERIO === NULL || $V_PERIO == '' ) {
                $error = 'El ID del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.NPERI_ID
                                        FROM SRD_JCI_ENCUESTAS A
                                        INNER JOIN srd_periodo B ON A.NPERI_ID = B.NPERI_ID
                                        INNER JOIN SRD_JCI_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                        WHERE C.NUSUA_ID = ? AND 
                                            A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_SUPER);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del periodo no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL SERVICIO
            if ( $V_SERVI === NULL || $V_SERVI == '' ) {
                $error = 'El ID del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else{
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.CAREA_ID
                                        FROM SRD_JCI_ENCUESTAS A
                                        INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID
                                        INNER JOIN SRD_AREAS C ON C.CAREA_ID = B.CAREA_ID 
                                        WHERE B.NUSUA_ID = ? AND A.NPERI_ID = ? AND 
                                            A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("is", $V_SUPER, $V_PERIO);
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

            // VALIDAMOS EL SUPERVISOR
            if ( $V_SUPER === NULL || $V_SUPER == '' ) {
                $error = 'El ID del supervisor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_SUPER);
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

            // VALIDAMOS EL ID DE LA ENCUESTA
            if ( $V_ENCUE === NULL || $V_ENCUE == '' ) {
                $error = 'El ID de la encuesta es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else{
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.NJENC_ID 
                                        FROM SRD_JCI_ENCUESTAS A
                                        INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID
                                        INNER JOIN SRD_USUARIOS C ON C.NUSUA_ID = A.NUSUA_ID
                                        WHERE B.NUSUA_ID = ? AND A.NPERI_ID = ? AND A.CAREA_ID = ? AND A.NJENC_ID = ? AND
                                            A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("issi", $V_SUPER, $V_PERIO, $V_SERVI, $V_ENCUE);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la encuesta no se encuentra registrada';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // Iterar a través de los grupos de radios
            $conterror = 0;
            foreach ($_POST as $name => $value) {
                if (preg_match('/^radio_preg_(\d+)$/', $name, $matches)) {
                    // $matches[1] contendrá el número de pregunta
                    $pregunta = $matches[1];
                    $stmt = $conn->prepare("SELECT NJPRE_ID FROM SRD_JCI_PREGUNTAS WHERE NJPRE_ID = ? AND NJPRE_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("i", $pregunta);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                    } else {
                        $conterror += 1;
                    }
                    $stmt->close();
                }
            }

            if ( $conterror != 0 ) {
                $error = 'Una o varias llaves de preguntas son erróneas o la pregunta ya fue respondida';
                $contador += 1;
                $earray[$contador] = $error;
            }
            
            if ($contador == 0) {
                
                $contok = 0;
                // Iterar a través de los grupos de radios
                foreach ($_POST as $name => $value) {
                    if (preg_match('/^radio_preg_(\d+)$/', $name, $matches)) {
                        $pregunta = $matches[1]; // Extrae el número de pregunta
                
                        // Comprobar si la pregunta ya existe en la tabla
                        $stmt = $conn->prepare("SELECT NJRESP_ID FROM SRD_JCI_ENCUESTAS_PREG WHERE NJENC_ID = ? AND NJPRE_ID = ?");
                        $stmt->bind_param("ii", $V_ENCUE, $pregunta);
                        $stmt->execute();
                        $stmt->store_result();
                
                        if ($stmt->num_rows > 0) {
                            // La pregunta ya existe, obtén el valor actual
                            $stmt->bind_result($respuestaActual);
                            $stmt->fetch();
                
                            // Compara la respuesta actual con la nueva
                            if ($respuestaActual != $value) {
                                // La respuesta ha sido modificada, actualiza el registro
                                $stmt = $conn->prepare("UPDATE SRD_JCI_ENCUESTAS_PREG SET NJRESP_ID = ?, NAUDI_REG_UPD = ?, DAUDI_REG_UPD = CURRENT_TIMESTAMP() WHERE NJENC_ID = ? AND NJPRE_ID = ?");
                                $stmt->bind_param("iiii", $value, $V_SUPER, $V_ENCUE, $pregunta);
                                $stmt->execute();
                            }
                        } else {
                            // La pregunta no existe en la tabla, inserta un nuevo registro
                            $stmt = $conn->prepare("INSERT INTO SRD_JCI_ENCUESTAS_PREG (NJENC_ID, NJPRE_ID, NJRESP_ID, NAUDI_REG_INS) 
                                                    VALUES (?, ?, ?, ?);");
                            $stmt->bind_param("iiii", $V_ENCUE, $pregunta, $value, $V_SUPER);
                            $stmt->execute();
                        }
                
                        $contok += 1;
                    }
                }                

                if ($contok != 0) {
                    $stmt->close();
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se ha registrado la respuesta con éxito!'
                    );
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error, no se guardó ninguna respuesta!'
                    );
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