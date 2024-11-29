<?php
    include '../../../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_KEY = !isset($_POST["id"]) ? NULL : ($_POST["id"] == '' ? NULL : $_POST["id"]);
        $V_SOLICITANTE = !isset($_POST["solicitante"]) ? null : ($_POST["solicitante"] == '' ? null : $_POST["solicitante"]);
        $V_FECHASOL = !isset($_POST["fechasol"]) ? null : ($_POST["fechasol"] == '' ? null : $_POST["fechasol"]);
        $V_TURNOSOL = isset($_POST['turnosol']) ? trim($_POST['turnosol']) : '' ;
        $V_PERIODOSOL = !isset($_POST["periodosol"]) ? null : ($_POST["periodosol"] == '' ? null : $_POST["periodosol"]);
        $V_RECEPTOR = !isset($_POST["receptor"]) ? null : ($_POST["receptor"] == '' ? null : $_POST["receptor"]);
        $V_FECHAREC = !isset($_POST["fecharec"]) ? null : ($_POST["fecharec"] == '' ? null : $_POST["fecharec"]);
        $V_TURNOREC = isset($_POST['turnorec']) ? trim($_POST['turnorec']) : '' ;
        $V_PERIODOREC = !isset($_POST["periodorec"]) ? null : ($_POST["periodorec"] == '' ? null : $_POST["periodorec"]);
        $V_ESTADO = !isset($_POST["estado"]) ? NULL : ($_POST["estado"] == '' ? NULL : $_POST["estado"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $V_ID = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;

        try {
            
            $contador = 0;
            session_start();
            $est = 0;
            $erray = array();
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
            
            // VALIDAMOS EL ID
            if ( ($V_KEY == null || !is_numeric($V_KEY)) && $V_KEY != 0 ) {
                $error = 'El id del cambio es obligatorio y debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } elseif ( $V_KEY != null && $V_KEY != 0 ) {
                $stmt = $conn->prepare("SELECT NCATU_ID FROM SRD_CAMBIOS_TURNO WHERE NCATU_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_KEY);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El id del cambio no existe';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL SOLICITANTE
            if ( $V_SOLICITANTE === NULL || $V_SOLICITANTE == '' ) {
                $error = 'El Id del solicitante es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $idsolicitante=0;
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE CUSUA_NOMBRES = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_SOLICITANTE);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El Id del solicitante no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                } else {
                    $stmt->bind_result($idsolicitante);
                    $stmt->fetch();
                }
                $stmt->close();
            }

            // VALIDAMOS EL RECEPTOR
            if ( $V_RECEPTOR === NULL || $V_RECEPTOR == '' ) {
                $error = 'El Id del receptor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $idreceptor=0;
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE CUSUA_NOMBRES = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_RECEPTOR);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El Id del receptor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                } else {
                    $stmt->bind_result($idreceptor);
                    $stmt->fetch();
                }
                $stmt->close();
            }

            // VALIDAMOS LA FECHA DEL SOLICITANTE
            if ( $V_FECHASOL === NULL || $V_FECHASOL == '' ) {
                $error = 'La fecha del solicitante es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHASOL) ) {
                    $error = 'El formato de la fecha del solicitante es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS LA FECHA DEL RECEPTOR
            if ( $V_FECHAREC === NULL || $V_FECHAREC == '' ) {
                $error = 'La fecha del receptor es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHAREC) ) {
                    $error = 'El formato de la fecha del receptor es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL TURNO DEL SOLICITANTE
            if ( $V_TURNOSOL === NULL || $V_TURNOSOL == '' ) {
                $error = 'El turno del solicitante es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT CTURN_ID FROM SRD_TURNO WHERE CTURN_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_TURNOSOL);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El turno del solicitante no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL TURNO DEL RECEPTOR
            if ( $V_TURNOREC === NULL || $V_TURNOREC == '' ) {
                $error = 'El turno del receptor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT CTURN_ID FROM SRD_TURNO WHERE CTURN_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_TURNOREC);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El turno del receptor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL PERIODO DEL SOLICITANTE
            if ( $V_PERIODOSOL === NULL || $V_PERIODOSOL == '' ) {
                $error = 'El periodo del solicitante es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_PERIODOSOL);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El periodo del solicitante no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL PERIODO DEL RECEPTOR
            if ( $V_PERIODOREC === NULL || $V_PERIODOREC == '' ) {
                $error = 'El periodo del receptor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_PERIODOREC);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El periodo del receptor no se encuentra registrado';
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
                // Analizamos si hay marcación existente en la fecha y turno solicitado
                $stmt = $conn->prepare("SELECT 
                                            sht.NHOTU_ID,
                                            sm.DMARC_MARCA_INICIO, 
                                            sm.DMARC_MARCA_FIN  
                                        FROM srd_horario_turnos sht 
                                        LEFT JOIN srd_marcacion sm ON sht.NHOTU_ID = sm.NHOTU_ID AND sm.NMARC_ESTADO = 1 AND sm.NAUDI_EST_REG = 1
                                        INNER JOIN srd_horario sh ON sh.NHORA_ID = sht.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                        INNER JOIN srd_super_areas_periodo ssap ON ssap.NSAPE_ID = sh.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                                        WHERE   sht.NHOTU_ESTADO = 1 AND sht.NAUDI_EST_REG = 1 AND
                                                sht.DHOTU_FECHA = ? AND sh.NUSUA_ID = ? AND ssap.NPERI_ID = ? AND sht.CTURN_ID = ?;");
                $stmt->bind_param("siis", $V_FECHASOL, $idsolicitante, $V_PERIODOSOL, $V_TURNOSOL);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idmarcacion, $marcacioninicio, $marcacionfin);
                    $stmt->fetch();
                    if ( $marcacioninicio != '' || $marcacionfin != '' ) {
                        $error = 'Ya existe una marcación en el turno del solicitante';
                        $contador += 1;
                        $earray[$contador] = $error;
                    } else {
                        $stmt->close();
                        $stmt = $conn->prepare("SELECT 
                                                    sht.NHOTU_ID,
                                                    sm.DMARC_MARCA_INICIO, 
                                                    sm.DMARC_MARCA_FIN  
                                                FROM srd_horario_turnos sht 
                                                LEFT JOIN srd_marcacion sm ON sht.NHOTU_ID = sm.NHOTU_ID AND sm.NMARC_ESTADO = 1 AND sm.NAUDI_EST_REG = 1
                                                INNER JOIN srd_horario sh ON sh.NHORA_ID = sht.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                                INNER JOIN srd_super_areas_periodo ssap ON ssap.NSAPE_ID = sh.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                                                WHERE   sht.NHOTU_ESTADO = 1 AND sht.NAUDI_EST_REG = 1 AND
                                                        sht.DHOTU_FECHA = ? AND sh.NUSUA_ID = ? AND ssap.NPERI_ID = ?  AND sht.CTURN_ID = ?;");
                        $stmt->bind_param("siis", $V_FECHAREC, $idreceptor, $V_PERIODOREC, $V_TURNOREC);
                        $stmt->execute();
                        $stmt->store_result();
                        if ($stmt->num_rows > 0) {
                            $stmt->bind_result($idmarcacion, $marcacioninicio, $marcacionfin);
                            $stmt->fetch();
                            if ( $marcacioninicio != '' || $marcacionfin != '' ) {
                                $error = 'Ya existe una marcación en el turno del receptor';
                                $contador += 1;
                                $earray[$contador] = $error;
                            } else {

                                // Se procede a realizar el cambio de turno, pero antes las validaciones
                                $turnosol='';
                                $entradasol='';
                                $salidasol='';
                                // Hallamos el rango horario de solicitud con los turnos y la fecha
                                $stmt = $conn->prepare("SELECT 
                                                            CAST(
                                                                IF(
                                                                    st.TTURN_HORA_INICIO > st.TTURN_HORA_FIN, 
                                                                    CONCAT(DATE_SUB(sht.DHOTU_FECHA, INTERVAL 1 DAY), ' ', st.TTURN_HORA_INICIO), 
                                                                    CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO)
                                                                ) AS DATETIME
                                                            ) 'HORA DE ENTRADA',
                                                            CAST(
                                                                CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN) AS DATETIME
                                                            ) 'HORA DE SALIDA'
                                                        FROM SRD_HORARIO_TURNOS sht 
                                                        INNER JOIN SRD_HORARIO sh ON sht.NHORA_ID = sh.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                                        INNER JOIN srd_super_areas_periodo ssap ON ssap.NSAPE_ID = sh.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                                                        INNER JOIN SRD_TURNO st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                                        WHERE 
                                                            sht.DHOTU_FECHA = ? AND sh.NUSUA_ID = ? AND ssap.NPERI_ID = ? AND
                                                            sht.CTURN_ID = ?;");
                                $stmt->bind_param("siis", $V_FECHASOL, $idsolicitante, $V_PERIODOSOL, $V_TURNOSOL);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($entradasol, $salidasol);
                                    $stmt->fetch();
                                } 
                                $stmt->close();
                                $turnorec='';
                                $entradarec='';
                                $salidarec='';
                                // Hallamos el rango horario de solicitud con los turnos y la fecha
                                $stmt = $conn->prepare("SELECT 
                                                            CAST(
                                                                IF(
                                                                    st.TTURN_HORA_INICIO > st.TTURN_HORA_FIN, 
                                                                    CONCAT(DATE_SUB(sht.DHOTU_FECHA, INTERVAL 1 DAY), ' ', st.TTURN_HORA_INICIO), 
                                                                    CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO)
                                                                ) AS DATETIME
                                                            ) 'HORA DE ENTRADA',
                                                            CAST(
                                                                CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN) AS DATETIME
                                                            ) 'HORA DE SALIDA'
                                                        FROM SRD_HORARIO_TURNOS sht 
                                                        INNER JOIN SRD_HORARIO sh ON sht.NHORA_ID = sh.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                                        INNER JOIN srd_super_areas_periodo ssap ON ssap.NSAPE_ID = sh.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                                                        INNER JOIN SRD_TURNO st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                                        WHERE 
                                                            sht.DHOTU_FECHA = ? AND sh.NUSUA_ID = ? AND ssap.NPERI_ID = ? AND 
                                                            sht.CTURN_ID = ?;");
                                $stmt->bind_param("siis", $V_FECHAREC, $idreceptor, $V_PERIODOREC, $V_TURNOREC);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($entradarec, $salidarec);
                                    $stmt->fetch();
                                } else {
                                    $entradarec = NULL;
                                    $salidarec = NULL;        
                                }

                                if ( $V_KEY == 0 ) {
                                    // Agregar nuevo cambio en turno
                                    $conn->begin_transaction();
                                    $stmt = $conn->prepare("INSERT INTO SRD_CAMBIOS_TURNO (
                                                                NPERI_ID_SOLICITANTE,
                                                                NPERI_ID_RECEPTOR,
                                                                NUSUA_ID_SOLICITANTE, 
                                                                DCATU_FECHA_SOLICITANTE, 
                                                                CTURN_ID_SOLICITANTE,
                                                                DCATU_RANGO_INI_SOL,
                                                                DCATU_RANGO_FIN_SOL,
                                                                NUSUA_ID_RECEPTOR, 
                                                                DCATU_FECHA_RECEPTOR, 
                                                                CTURN_ID_RECEPTOR,
                                                                DCATU_RANGO_INI_REC,
                                                                DCATU_RANGO_FIN_REC,
                                                                NAUDI_REG_INS
                                                            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
                                    $stmt->bind_param("iiissssissssi", $V_PERIODOSOL, $V_PERIODOREC, $V_SOLICITANTE, $V_FECHASOL, $V_TURNOSOL, $entradasol, $salidasol, $V_RECEPTOR, $V_FECHAREC, $V_TURNOREC, $entradarec, $salidarec, $V_ID);
                                    $stmt->execute();
                                    // Verifica si se realizó el registro
                                    if ($stmt-> affected_rows > 0) {
                                        $id = $stmt->insert_id;
                                        // CON ESE ID CREA UN CÓDIGO QUE SEA SIEMPRE DE 8 DÍGITOS QUE EMPIENCE CON "CT" Y LOS ULITMOS DIGITOS SEA EL ID Y EL RESTO CON PUROS CEROS
                                        $codigo = 'CT'.str_pad($id, 6, '0', STR_PAD_LEFT);
                                        $stmt->close();
                                        $stmt = $conn->prepare("UPDATE SRD_CAMBIOS_TURNO SET NCATU_CODIGO = ? WHERE NCATU_ID = ?;");
                                        $stmt->bind_param("si", $codigo, $id);
                                        $stmt->execute();
                                        if ($stmt-> affected_rows > 0) {
                                            $respuesta = array(
                                                'estado' => 1,
                                                'mensaje' => '¡Se realizó el registro exitosamente!',
                                                'data' => array(
                                                    'id' => $id
                                                )
                                            );
                                        } else {
                                            $conn->rollback();
                                            $respuesta = array(
                                                'estado' => 0,
                                                'mensaje' => '¡Error!',
                                                'data' => array(
                                                    '1' => 'No se pudo generar el código'
                                                )
                                            );
                                        }

                                    } else {
                                        $respuesta = array(
                                            'estado' => 0,
                                            'mensaje' => '¡Error!',
                                            'data' => array(
                                                '1' => 'No se pudo realizar el registro'
                                            )
                                        );
                                    }

                                } else {
                                    $stmt = $conn->prepare("UPDATE SRD_CAMBIOS_TURNO SET 
                                                                NUSUA_ID_SOLICITANTE = ?, 
                                                                DCATU_FECHA_SOLICITANTE = ?, 
                                                                CTURN_ID_SOLICITANTE = ?,
                                                                NPERI_ID_SOLICITANTE = ?,
                                                                NPERI_ID_RECEPTOR = ?,
                                                                DCATU_RANGO_INI_SOL = ?,
                                                                DCATU_RANGO_FIN_SOL = ?,
                                                                NUSUA_ID_RECEPTOR = ?, 
                                                                DCATU_FECHA_RECEPTOR = ?, 
                                                                CTURN_ID_RECEPTOR = ?,
                                                                DCATU_RANGO_INI_REC = ?,
                                                                DCATU_RANGO_FIN_REC = ?,
                                                                NAUDI_REG_UPD = ?,
                                                                DAUDI_REG_UPD = NOW(),
                                                                NCATU_ESTADO = ?
                                                            WHERE NCATU_ID = ?;");
                                    $stmt->bind_param("issiississssiii", $idsolicitante, $V_FECHASOL, $V_TURNOSOL, $V_PERIODOSOL, $V_PERIODOREC, $entradasol, $salidasol, $idreceptor, $V_FECHAREC, $V_TURNOREC, $entradarec, $salidarec, $V_ID, $V_ESTADO, $V_KEY);
                                    $stmt->execute();
                                    if ($stmt-> affected_rows > 0) {
                                        $respuesta = array(
                                            'estado' => 1,
                                            'mensaje' => '¡Se realizó la actualización exitosamente!',
                                            'data' => array(
                                                'id' => $V_KEY
                                            )
                                        );
                                    } else {
                                        $respuesta = array(
                                            'estado' => 0,
                                            'mensaje' => '¡Error!',
                                            'data' => array(
                                                '1' => 'No se pudo realizar la actualización'
                                            )
                                        );
                                    }
                                }

                                $stmt->close();

                            }
                        } else {
                            $respuesta = array(
                                'estado' => 0,
                                'mensaje' => '¡Error!',
                                'data' => array(
                                    '1' => 'No existe un turno en la fecha solicitada para el receptor'
                                )
                            );
                        }
                    }
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'No existe un turno en la fecha solicitada para el solicitante'
                        )
                    );
                }

            } else {
                $respuesta = array(
                    'estado' => $est,
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