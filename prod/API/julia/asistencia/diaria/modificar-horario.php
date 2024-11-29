<?php

    include '../../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
        $V_CAMBIOS = !isset($_POST["cambios"]) ? null : ($_POST["cambios"] == '' ? null : $_POST["cambios"]);
        
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            $earray = array();
            session_start();
            $contadorsession = 0;

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
                
                $data = json_decode($V_CAMBIOS, true);
                $cambios = 0;
                // Ahora puedes acceder a los datos en $data
                foreach ($data as $change) {

                    $colaborador        = $change['colaborador'];
                    $fecha              = $change['fecha'];
                    $id_horario_turno   = $change['id_horario_turno'];
                    $valor              = $change['valor_nuevo'];
                    $columna            = $change['columna'];
                    
                    switch ($columna) {
                        case 'TURNO':
                            // Modificar Turno
                            if ( $valor !== NULL && $valor != '' ) {

                                // Verificar que no exista marcación para la fecha
                                $stmt = $conn->prepare("SELECT NMARC_ID 
                                                        FROM SRD_MARCACION 
                                                        WHERE  NHOTU_ID = ? AND (DMARC_MARCA_INICIO <> NULL || DMARC_MARCA_INICIO <> '') 
                                                                            AND NAUDI_EST_REG = 1;");
                                $stmt->bind_param("i", $id_horario_turno);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows == 0) {
                                    $stmt = $conn->prepare("SELECT CTURN_ID FROM SRD_TURNO WHERE CTURN_ID = ? AND NAUDI_EST_REG = 1;");
                                    $stmt->bind_param("s", $valor);
                                    $stmt->execute();
                                    $stmt->store_result();
                                    if ($stmt->num_rows > 0) {
                                        $stmt->bind_result($id_turno);
                                        $stmt->fetch();

                                        $stmt = $conn->prepare("UPDATE SRD_HORARIO_TURNOS 
                                                                SET CTURN_ID = ?, 
                                                                    NAUDI_REG_UPD = ?,
                                                                    DAUDI_REG_UPD = NOW()
                                                                WHERE NHOTU_ID = ?;");
                                        $stmt->bind_param("sii", $id_turno, $V_ID, $id_horario_turno);
                                        $stmt->execute();
                                        // Verificar si se llegó a realizar el cambio
                                        if ($stmt->affected_rows > 0) {
                                            $cambios +=1;
                                        }
                                    } 
                                    $stmt->close();
                                }
                            }
                            break;

                        case 'AREA':
                            // Modificar Área
                            if ( $valor !== NULL && $valor != '' ) {
                                $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1;");
                                $stmt->bind_param("s", $valor);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($id_area);
                                    $stmt->fetch();

                                    $stmt = $conn->prepare("UPDATE SRD_HORARIO_TURNOS 
                                                            SET CAREA_ID = ?, 
                                                                NAUDI_REG_UPD = ?,
                                                                DAUDI_REG_UPD = NOW()
                                                            WHERE NHOTU_ID = ?;");
                                    $stmt->bind_param("ssi", $id_area, $V_ID, $id_horario_turno);
                                    $stmt->execute();
                                    if ($stmt->affected_rows > 0) {
                                        $cambios +=1;
                                    }
                                } 
                                $stmt->close();
                            }
                            break;

                        case 'MARCACIÓN DE ENTRADA':
                            // Modificar Marcación de Entrada
                            if ( $valor !== NULL && $valor != '' ) {
                                // El valor debe terner el formato DD/MM/YYYY HH:MM:SS AM/PM por ejemplo: 01/05/2024 01:10:00 PM
                                if ( preg_match('/^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/\d{4} ((0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (AM|PM))$/', $valor) ) {
                                    // Validarmos que la marcación de entrada se encuentre en el rango permitido
                                    $valor = date('Y-m-d H:i:s', strtotime(str_replace('/', '-', $valor)));
                                    $stmt = $conn->prepare("SELECT sht.NHOTU_ID 
                                                            FROM srd_horario_turnos sht
                                                            INNER JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                                            WHERE sht.NHOTU_ID = ? AND sht.NAUDI_EST_REG = 1 AND 
                                                            IF (st.TTURN_HORA_INICIO < st.TTURN_HORA_FIN,
                                                                ? BETWEEN 
                                                                    DATE_SUB(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR) AND 
                                                                    DATE_ADD(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR),
                                                                ? BETWEEN 
                                                                    DATE_SUB(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR) AND 
                                                                    DATE_ADD(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR)
                                                            );");
                                    $stmt->bind_param("iss", $id_horario_turno, $valor, $valor);
                                    $stmt->execute();
                                    $stmt->store_result();
                                    if ($stmt->num_rows > 0) {
                                        //Analizamos si hay marcación previa si no agregamos una nueva
                                        $stmt = $conn->prepare("SELECT NHOTU_ID FROM SRD_MARCACION WHERE NHOTU_ID = ? AND NAUDI_EST_REG = 1 AND NMARC_ESTADO = 1;");
                                        $stmt->bind_param("i", $id_horario_turno);
                                        $stmt->execute();
                                        $stmt->store_result();
                                        if ($stmt->num_rows > 0) {
                                            $stmt = $conn->prepare("UPDATE SRD_MARCACION 
                                                                    SET DMARC_MARCA_INICIO = ?, 
                                                                        NAUDI_REG_UPD = ?,
                                                                        DAUDI_REG_UPD = NOW()
                                                                    WHERE NHOTU_ID = ?;");
                                            $stmt->bind_param("sii", $valor, $V_ID, $id_horario_turno);
                                            $stmt->execute();
                                            if ($stmt->affected_rows > 0) {
                                                $cambios +=1;
                                            }
                                        } else {
                                            $stmt = $conn->prepare("INSERT INTO SRD_MARCACION (NHOTU_ID, DMARC_MARCA_INICIO, NAUDI_REG_INS, DAUDI_REG_INS) VALUES (?, ?, ?, NOW());");
                                            $stmt->bind_param("isi", $id_horario_turno, $valor, $V_ID);
                                            $stmt->execute();
                                            if ($stmt->affected_rows > 0) {
                                                $cambios +=1;
                                            }
                                        }
                                    }
                                    $stmt->close();
                                }
                            } else {
                                // Eliminar Marcación de Entrada
                                $stmt = $conn->prepare("UPDATE SRD_MARCACION 
                                                        SET DMARC_MARCA_INICIO = NULL, 
                                                            NAUDI_REG_UPD = ?,
                                                            DAUDI_REG_UPD = NOW()
                                                        WHERE NHOTU_ID = ?;");
                                $stmt->bind_param("ii", $V_ID, $id_horario_turno);
                                $stmt->execute();
                                if ($stmt->affected_rows > 0) {
                                    $cambios +=1;
                                }
                                $stmt->close();
                            }
                            break;

                        case 'MARCACIÓN DE SALIDA':
                            // Modificar Marcación de Salida
                            if ( $valor !== NULL && $valor != '' ) {
                                // El valor debe terner el formato DD/MM/YYYY HH:MM:SS AM/PM por ejemplo: 01/05/2024 01:10:00 PM
                                if ( preg_match('/^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/\d{4} ((0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (AM|PM))$/', $valor) ) {
                                    // Validarmos que la marcación de salida se encuentre en el rango permitido
                                    $valor = date('Y-m-d H:i:s', strtotime(str_replace('/', '-', $valor)));
                                    $stmt = $conn->prepare("SELECT sht.NHOTU_ID 
                                                            FROM srd_horario_turnos sht
                                                            INNER JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                                            WHERE sht.NHOTU_ID = ? AND sht.NAUDI_EST_REG = 1 AND 
                                                            IF (st.TTURN_HORA_INICIO < st.TTURN_HORA_FIN,
                                                                ? BETWEEN 
                                                                    DATE_SUB(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR) AND 
                                                                    DATE_ADD(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR),
                                                                ? BETWEEN 
                                                                    DATE_SUB(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 HOUR) AND 
                                                                    DATE_ADD(DATE_ADD(STR_TO_DATE(CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN), '%Y-%m-%d %H:%i:%s'), INTERVAL 1 DAY), INTERVAL 1 HOUR)
                                                            );");
                                    $stmt->bind_param("iss", $id_horario_turno, $valor, $valor);
                                    $stmt->execute();
                                    $stmt->store_result();
                                    if ($stmt->num_rows > 0) {
                                        //Analizamos si hay marcación previa si no agregamos una nueva
                                        $stmt = $conn->prepare("SELECT NHOTU_ID FROM SRD_MARCACION WHERE NHOTU_ID = ? AND NAUDI_EST_REG = 1 AND NMARC_ESTADO = 1;");
                                        $stmt->bind_param("i", $id_horario_turno);
                                        $stmt->execute();
                                        $stmt->store_result();
                                        if ($stmt->num_rows > 0) {
                                            $stmt = $conn->prepare("UPDATE SRD_MARCACION 
                                                                    SET DMARC_MARCA_FIN = ?, 
                                                                        NAUDI_REG_UPD = ?,
                                                                        DAUDI_REG_UPD = NOW()
                                                                    WHERE NHOTU_ID = ?;");
                                            $stmt->bind_param("sii", $valor, $V_ID, $id_horario_turno);
                                            $stmt->execute();
                                            if ($stmt->affected_rows > 0) {
                                                $cambios +=1;
                                            }
                                        } else {
                                            $stmt = $conn->prepare("INSERT INTO SRD_MARCACION (NHOTU_ID, DMARC_MARCA_FIN, NAUDI_REG_INS, DAUDI_REG_INS) VALUES (?, ?, ?, NOW());");
                                            $stmt->bind_param("isi", $id_horario_turno, $valor, $V_ID);
                                            $stmt->execute();
                                            if ($stmt->affected_rows > 0) {
                                                $cambios +=1;
                                            }
                                        }
                                    }
                                    $stmt->close();
                                }
                            } else {
                                // Eliminar Marcación de Salida
                                $stmt = $conn->prepare("UPDATE SRD_MARCACION 
                                                        SET DMARC_MARCA_FIN = NULL, 
                                                            NAUDI_REG_UPD = ?,
                                                            DAUDI_REG_UPD = NOW()
                                                        WHERE NHOTU_ID = ?;");
                                $stmt->bind_param("ii", $V_ID, $id_horario_turno);
                                $stmt->execute();
                                if ($stmt->affected_rows > 0) {
                                    $cambios +=1;
                                }
                                $stmt->close();
                            }
                            break;

                        case 'OBSERVACIÓN ENTRADA':
                            // Modificar Observación Entrada y máximo 200 caracteres
                            if ( $valor !== NULL && $valor != '' && strlen($valor) <= 200 ) {
                                $stmt = $conn->prepare("UPDATE SRD_HORARIO_TURNOS 
                                                        SET CHOTU_OBS_INICIAL = ?, 
                                                            NAUDI_REG_UPD = ?,
                                                            DAUDI_REG_UPD = NOW()
                                                        WHERE NHOTU_ID = ?;");
                                $stmt->bind_param("sii", $valor, $V_ID, $id_horario_turno);
                                $stmt->execute();
                                if ($stmt->affected_rows > 0) {
                                    $cambios +=1;
                                }
                                $stmt->close();
                            }
                            break;

                        case 'OBSERVACIÓN SALIDA':
                            // Modificar Observación Salida y máximo 200 caracteres
                            if ( $valor !== NULL && $valor != '' && strlen($valor) <= 200 ) {
                                $stmt = $conn->prepare("UPDATE SRD_HORARIO_TURNOS 
                                                        SET CHOTU_OBS_FINAL = ?, 
                                                            NAUDI_REG_UPD = ?,
                                                            DAUDI_REG_UPD = NOW()
                                                        WHERE NHOTU_ID = ?;");
                                $stmt->bind_param("sii", $valor, $V_ID, $id_horario_turno);
                                $stmt->execute();
                                if ($stmt->affected_rows > 0) {
                                    $cambios +=1;
                                }
                                $stmt->close();
                            }
                            break;

                        default:
                            break;
                    }

                }

                $respuesta = array(
                    'estado' => 1,
                    'mensaje' => '¡Éxito',
                    'data' => array(
                        'registros' => count($data),
                        'cambios' => $cambios
                    )
                );
                

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