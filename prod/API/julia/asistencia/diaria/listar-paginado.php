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
        $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_SUPER = !isset($_POST["supervisor"]) ? null : ($_POST["supervisor"] == '' ? null : $_POST["supervisor"]);
        $V_FECHA = !isset($_POST["fecha"]) ? null : ($_POST["fecha"] == '' ? null : $_POST["fecha"]);
        $V_COLABORADOR = !isset($_POST["colaborador"]) ? null : ($_POST["colaborador"] == '' ? null : $_POST["colaborador"]);
        $V_OCUPACION = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);
        $V_DESEMPEÑO = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
        $V_AREAPERIODO = !isset($_POST["areaperiodo"]) ? null : ($_POST["areaperiodo"] == '' ? null : $_POST["areaperiodo"]);
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            $erray = array();
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

            // VALIDAMOS EL ID DE OCUPACIÓN
            if ( $V_OCUPACION === NULL || $V_OCUPACION == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT NOCUP_ID FROM SRD_OCUPACION WHERE NOCUP_ID = ? AND NAUDI_EST_REG = 1 AND NOCUP_ESTADO = 1;");
                $stmt->bind_param("i", $V_OCUPACION);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de ocupación no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ID DE DESEMPEÑO
            if ( $V_DESEMPEÑO === NULL || $V_DESEMPEÑO == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT NDESE_ID FROM SRD_DESEMPENIO WHERE NDESE_ID = ? AND NAUDI_EST_REG = 1 AND NDESE_ESTADO = 1;");
                $stmt->bind_param("i", $V_DESEMPEÑO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de desempeño no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ID DEL ÁREA DE PERIODO
            if ( $V_AREAPERIODO === NULL || $V_AREAPERIODO == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1 AND NAREA_ESTADO = 1;");
                $stmt->bind_param("s", $V_AREAPERIODO);
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

            if ($contador == 0) {
                
                $query = "SELECT
                                su.CUSUA_NOMBRES COLABORADOR,
                                ssap.CAREA_ID AS 'AREA PERIODO',
                                -- so.COCUP_DESCRIPCION 'OCUPACIÓN',
                                sd.CDESE_DESCRIPCION 'DESEMPEÑO',
                                sht.NHOTU_ID 'ID_HORARIO_TURNO',
                                sht.DHOTU_FECHA 'FECHA',
                                sht.CTURN_ID 'TURNO',
                                sht.CAREA_ID 'AREA',
                                CAST(
                                    IF(
                                        st.TTURN_HORA_INICIO > st.TTURN_HORA_FIN, 
                                        CONCAT(DATE_SUB(sht.DHOTU_FECHA, INTERVAL 1 DAY), ' ', st.TTURN_HORA_INICIO), 
                                        CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO)
                                    ) AS DATETIME
                                ) 'HORA DE ENTRADA',
                                CAST(
                                    CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN) AS DATETIME
                                ) 'HORA DE SALIDA',
                                sm.DMARC_MARCA_INICIO 'MARCACIÓN DE ENTRADA',
                                sm.DMARC_MARCA_FIN 'MARCACIÓN DE SALIDA',
                                sht.CHOTU_OBS_INICIAL 'OBSERVACIÓN ENTRADA',
                                sht.CHOTU_OBS_FINAL 'OBSERVACIÓN SALIDA'
                            FROM srd_horario sh
                            LEFT JOIN srd_usuarios su ON sh.NUSUA_ID = su.NUSUA_ID AND su.NUSUA_ESTADO = 1 AND su.NAUDI_EST_REG = 1
                            LEFT JOIN srd_super_areas_periodo ssap ON sh.NSAPE_ID = ssap.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                            -- LEFT JOIN srd_areas sa ON ssap.CAREA_ID = sa.CAREA_ID AND sa.NAUDI_EST_REG = 1 AND sa.NAREA_ESTADO = 1
                            LEFT JOIN srd_desempenio sd ON sd.NDESE_ID = su.NDESE_ID AND sd.NAUDI_EST_REG = 1 AND sd.NDESE_ESTADO = 1
                            LEFT JOIN srd_ocupacion so ON so.NOCUP_ID = su.NOCUP_ID AND so.NAUDI_EST_REG = 1 AND so.NOCUP_ESTADO = 1
                            LEFT JOIN srd_horario_turnos sht ON sht.NHORA_ID = sh.NHORA_ID AND sht.NAUDI_EST_REG = 1 AND sht.NHOTU_ESTADO = 1
                            LEFT JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                            LEFT JOIN srd_marcacion sm ON sm.NHOTU_ID = sht.NHOTU_ID AND sm.NMARC_ESTADO = 1 AND sm.NAUDI_EST_REG = 1
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_FECHA) && isset($V_FECHA)) {
                    $query .= "sht.DHOTU_FECHA = '" . $V_FECHA . "' AND ";
                }

                if (!empty($V_OCUPACION) && isset($V_OCUPACION)) {
                    $query .= "SO.NOCUP_ID = '" . $V_OCUPACION . "' AND ";
                }

                if (!empty($V_DESEMPEÑO) && isset($V_DESEMPEÑO)) {
                    $query .= "SD.NDESE_ID = '" . $V_DESEMPEÑO . "' AND ";
                }

                if (!empty($V_AREAPERIODO) && isset($V_AREAPERIODO)) {
                    $query .= "SA.CAREA_ID = '" . $V_AREAPERIODO . "' AND ";
                } 
        
                if (!empty($V_COLABORADOR) && isset($V_COLABORADOR)) {
                    $query .= "SU.CUSUA_NOMBRES LIKE '%" . $V_COLABORADOR . "%' AND ";
                }

                $query .= " SH.NHORA_ESTADO = 1 AND SH.NAUDI_EST_REG = 1 
                            ORDER BY su.CUSUA_NOMBRES, st.TTURN_HORA_INICIO ; ";

                $stmt = $conn->prepare($query);
                $stmt->execute();
                $result = $stmt->get_result();
                $stmt->close();

                $data = array();
                while ($row = $result->fetch_assoc()) {
                    $row['FECHA'] = date_format(date_create($row["FECHA"]), "d/m/Y");
                    $fields = ['HORA DE ENTRADA', 'HORA DE SALIDA', 'MARCACIÓN DE ENTRADA', 'MARCACIÓN DE SALIDA'];
                    foreach ($fields as $field) {
                        if (isset($row[$field])) {
                            $row[$field] = date_format(date_create($row[$field]), "d/m/Y h:i:s A");
                        }
                    }
                    $data[] = $row;
                }

                $respuesta = array(
                    'estado' => 1,
                    'mensaje' => '¡Éxito!',
                    'data' => $data
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