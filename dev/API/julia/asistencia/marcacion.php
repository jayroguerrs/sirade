<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $P_CODIGO = !empty($_POST['codigo-colaborador']) ? $_POST['codigo-colaborador'] : NULL;
        $P_FECHAHORA = !empty($_POST['fecha_hora']) ? $_POST['fecha_hora'] : NULL;
        
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            $earray = array();
            session_start();
            $contadorsession = 0;

            // VALIDAMOS EL SI LAS VARIABLES DE SESIÓN ESTÁN INICIADAS
            if ( !isset($_SESSION['id']) || !isset($_SESSION['rol_id']) ) {
                $error = 'No se ha iniciado una sesión';
                $contador += 1;
                $earray[$contador] = $error;
                // Inciamos variables con valores nulos
                $_SESSION['id'] = NULL;
                $_SESSION['rol_id'] = NULL;
            }

            // VALIDAMOS EL ID DEL SUPERVISOR
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

            if ($contador == 0) {
                
                // Encontrar el nombre del usuario
                $stmt = $conn->prepare("SELECT CUSUA_NOMBRES, CUSUA_IMG FROM SRD_USUARIOS WHERE CUSUA_CODIGO = ? AND NUSUA_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $P_CODIGO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($nombre, $imagen);
                    $stmt->fetch();

                    // Seprar la fecha y la hora
                    $fecha = explode(' ', $P_FECHAHORA);
                    $P_FECHA = $fecha[0];
                    $P_HORA = $fecha[1];
                    $area_marca = '';
                    $hora_marca = '';
                    $tipo_marca = '';
                    $obs = '';

                    $stmt = $conn->prepare("SELECT
                                                sht.NHOTU_ID
                                            FROM srd_horario_turnos sht
                                            INNER JOIN srd_horario sh ON sh.NHORA_ID = sht.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                            INNER JOIN srd_usuarios su ON su.NUSUA_ID = sh.NUSUA_ID AND su.NUSUA_ESTADO = 1 AND su.NAUDI_EST_REG = 1
                                            WHERE 
                                                su.CUSUA_CODIGO = ?
                                                AND sht.DHOTU_FECHA = ?;");
                    $stmt->bind_param("ss", $P_CODIGO, $P_FECHA);
                    $stmt->execute();
                    $stmt->store_result();

                    if ($stmt->num_rows > 0) {

                        // Consultar si es Entrada o Salida
                        $stmt = $conn->prepare("SELECT
                                                    su.CUSUA_NOMBRES,
                                                    sht.NHOTU_ID,
                                                    sht.CTURN_ID,
                                                    sht.CAREA_ID,                                                
                                                    CASE 
                                                        WHEN ? BETWEEN DATE_SUB(st.TTURN_HORA_INICIO, INTERVAL 1 HOUR) 
                                                                            AND DATE_ADD(st.TTURN_HORA_INICIO, INTERVAL 1 HOUR)
                                                            THEN 'ENTRADA'
                                                        WHEN ? BETWEEN DATE_SUB(st.TTURN_HORA_FIN, INTERVAL 1 HOUR) 
                                                                            AND DATE_ADD(st.TTURN_HORA_FIN, INTERVAL 1 HOUR)
                                                            THEN 'SALIDA'
                                                        ELSE 'FUERA DEL RANGO'
                                                    END AS TIPO_MARCA
                                                FROM srd_horario_turnos sht
                                                INNER JOIN srd_horario sh ON sh.NHORA_ID = sht.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                                INNER JOIN srd_usuarios su ON su.NUSUA_ID = sh.NUSUA_ID AND su.NUSUA_ESTADO = 1 AND su.NAUDI_EST_REG = 1
                                                INNER JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                                WHERE 
                                                    su.CUSUA_CODIGO = ? 
                                                    AND sht.DHOTU_FECHA = ?
                                                    AND (
                                                        ? BETWEEN DATE_SUB(st.TTURN_HORA_INICIO, INTERVAL 1 HOUR) 
                                                                    AND DATE_ADD(st.TTURN_HORA_INICIO, INTERVAL 1 HOUR)
                                                        OR
                                                        ? BETWEEN DATE_SUB(st.TTURN_HORA_FIN, INTERVAL 1 HOUR) 
                                                                    AND DATE_ADD(st.TTURN_HORA_FIN, INTERVAL 1 HOUR)
                                                    )
                                                ORDER BY st.TTURN_HORA_INICIO ASC;");
                                $stmt->bind_param("ssssss", $P_HORA, $P_HORA, $P_CODIGO, $P_FECHA, $P_HORA, $P_HORA);
                                $stmt->execute();
                                $stmt->store_result();
                                $stmt->bind_result($nombre, $idhorario_turno, $idturno, $idarea, $tipo);

                                if ($stmt->num_rows > 0) {
                                    $hora_marca = $P_FECHAHORA;
                                    $cont = 1;
                                    while ($stmt->fetch()) {
                                        if ($tipo == 'ENTRADA') {
                                            // Verificar si ya se marcó la entrada
                                            $stmt2 = $conn->prepare("SELECT DMARC_MARCA_INICIO FROM srd_marcacion WHERE NHOTU_ID = ? AND NMARC_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                                            $stmt2->bind_param("i", $idhorario_turno);
                                            $stmt2->execute();
                                            $stmt2->store_result();
                                            if ($stmt2->num_rows == 0) {
                                                $stmt2 = $conn->prepare("INSERT INTO srd_marcacion (NHOTU_ID, DMARC_MARCA_INICIO, NAUDI_REG_INS) VALUES (?, ?, ?);");
                                                $stmt2->bind_param("iss", $idhorario_turno, $P_FECHAHORA, $V_ID);
                                                $stmt2->execute();
                                                $stmt2->close();
                                                $area_marca = $idarea;
                                                $tipo_marca = 'ENTRADA TURNO ' . $cont;
                                                break;
                                            } else {
                                                $stmt2->bind_result($marca_inicio);
                                                $stmt2->fetch();
                                                if ($marca_inicio == NULL || $marca_inicio == '') {
                                                    $stmt2 = $conn->prepare("UPDATE srd_marcacion SET DMARC_MARCA_INICIO = ?, NAUDI_REG_UPD = ? WHERE NHOTU_ID = ? AND NMARC_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                                                    $stmt2->bind_param("ssi", $P_FECHAHORA, $V_ID, $idhorario_turno);
                                                    $stmt2->execute();
                                                    $stmt2->close();
                                                    $area_marca = $idarea;
                                                    $tipo_marca = 'ENTRADA TURNO ' . $cont;
                                                    break;
                                                } else {
                                                    $obs = "Marcación de entrada repetida";
                                                    $tipo_marca = 'MARCACIÓN REPETIDA';
                                                    
                                                }
                                            }
                                            
                                        } elseif ($tipo == 'SALIDA') {
                                            // Verificar si ya se marcó la salida
                                            $stmt2 = $conn->prepare("SELECT DMARC_MARCA_FIN FROM srd_marcacion WHERE NHOTU_ID = ? AND NMARC_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                                            $stmt2->bind_param("i", $idhorario_turno);
                                            $stmt2->execute();
                                            $stmt2->store_result();
                                            if ($stmt2->num_rows == 0) {
                                                $stmt2 = $conn->prepare("INSERT INTO srd_marcacion (NHOTU_ID, DMARC_MARCA_FIN, NAUDI_REG_INS) VALUES (?, ?, ?);");
                                                $stmt2->bind_param("iss", $idhorario_turno, $P_FECHAHORA, $V_ID);
                                                $stmt2->execute();
                                                $stmt2->close();
                                                $area_marca = $idarea;
                                                $tipo_marca = 'SALIDA TURNO ' . $cont;
                                                break;
                                            } else {
                                                $stmt2->bind_result($marca_fin);
                                                $stmt2->fetch();
                                                if ($marca_fin == NULL || $marca_fin == '') {
                                                    $stmt2 = $conn->prepare("UPDATE srd_marcacion SET DMARC_MARCA_FIN = ?, NAUDI_REG_UPD = ? WHERE NHOTU_ID = ? AND NMARC_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                                                    $stmt2->bind_param("ssi", $P_FECHAHORA, $V_ID, $idhorario_turno);
                                                    $stmt2->execute();
                                                    $stmt2->close();
                                                    $area_marca = $idarea;
                                                    $tipo_marca = 'SALIDA TURNO ' . $cont;
                                                    break;
                                                } else {
                                                    $obs = "Marcación de salida repetida";
                                                    $tipo_marca = 'MARCACIÓN REPETIDA';
                                                    
                                                }
                                            }
                                        } 
                                        $cont += 1;
                                    }

                                } else {
                                    $tipo_marca = 'FUERA DEL RANGO';
                                }

                                $respuesta = array(
                                    'estado' => 1,
                                    'mensaje' => '¡Éxito!',
                                    'data' => array(
                                        'nombre' => $nombre,
                                        'imagen' => $imagen,
                                        'tipo' => $tipo_marca,
                                        'area' => $area_marca,
                                        'hora' => $hora_marca,
                                        'obs' =>  $obs
                                    )
                                );

                    } else {
                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                'nombre' => '---',
                                'obs' => 'El colaborador no tiene un horario asignado para la fecha seleccionada',
                            )
                        );
                    }

                } else {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            'nombre' => '---',
                            'obs' => 'El código del colaborador no se encuentra registrado',
                        )
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