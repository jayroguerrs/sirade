<?php
    include '../../../../admin/connection/bd_connection.php';

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=data.csv');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Obtener los valores enviados desde el frontend
    $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
    $V_COLABORADOR = !isset($_POST["colaborador"]) ? null : ($_POST["colaborador"] == '' ? null : $_POST["colaborador"]);
    $V_OCUPACION = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);
    $V_DESEMPEÑO = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
    $V_AREAPERIODO = !isset($_POST["areaperiodo"]) ? null : ($_POST["areaperiodo"] == '' ? null : $_POST["areaperiodo"]);
    $V_PERIODO = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
    $V_FECHA = !isset($_POST["fecha"]) ? null : ($_POST["fecha"] == '' ? null : $_POST["fecha"]);
    $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
    $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
    $V_TIPO_M = !isset($_POST["tipo_m"]) ? null : ($_POST["tipo_m"] == '' ? null : $_POST["tipo_m"]);
    $V_TIPO_T = !isset($_POST["tipo_t"]) ? null : ($_POST["tipo_t"] == '' ? null : $_POST["tipo_t"]);
    $V_TIPO_N = !isset($_POST["tipo_n"]) ? null : ($_POST["tipo_n"] == '' ? null : $_POST["tipo_n"]);

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
        

        // VALIDAMOS EL PERIODO (OBLIGATORIO)
        if ( $V_PERIODO === NULL || $V_PERIODO == '' ) {
            $error = 'El ID del periodo es obligatorio';
            $contador += 1;
            $earray[$contador] = $error;
        } else {
            $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1;");
            $stmt->bind_param("i", $V_PERIODO);
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

        // VALIDAMOS LA FECHA, DEBE TENER FORMATO "YYYY-MM-DD" Y DEBE ESTAR DENTRO DEL RANGO DEL PERIODO
        if ( $V_FECHA === NULL || $V_FECHA == '' ) {
            $error = 'La fecha es obligatoria';
            $contador += 1;
            $earray[$contador] = $error;
        } else {
            if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHA) ) {
                $error = 'El formato de la fecha es incorrecto';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $V_FECHA = date('Y-m-d', strtotime($V_FECHA));
                $stmt = $conn->prepare("SELECT A.NPERI_ID FROM SRD_PERIODO A
                                        WHERE A.NPERI_ID = ? AND A.DPERI_INICIO <= ? AND A.DPERI_FIN >= ? AND A.NPERI_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("iss", $V_PERIODO, $V_FECHA, $V_FECHA);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'La fecha no se encuentra dentro del rango del periodo';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }
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
                            sht.NHOTU_ID 'ID HORARIO',
                            su.CUSUA_NOMBRES COLABORADOR,
                            so.COCUP_DESCRIPCION 'OCUPACIÓN',
                            sd.CDESE_DESCRIPCION 'DESEMPEÑO',
                            ssap.CAREA_ID AS 'AREA PERIODO',
                            sht.DHOTU_FECHA 'FECHA',
                            IF(sht.NHOEX_ID IS NULL, sht.CTURN_ID, she.CTURN_ID) 'TURNO',
                            sht.CTURN_TIPO 'TIPO TURNO',
                            sht.CAREA_ID 'AREA',
                            IF(sht.NHOEX_ID IS NULL, '', she.CHOEX_CODIGO) 'HORAS EXTRAS',
                            CAST(
                                IF(
                                    sht.NHOEX_ID IS NULL,
                                    IF(
                                        st.TTURN_HORA_INICIO > st.TTURN_HORA_FIN, 
                                        CONCAT(DATE_SUB(sht.DHOTU_FECHA, INTERVAL 1 DAY), ' ', st.TTURN_HORA_INICIO), 
                                        CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_INICIO)
                                    ),
                                    she.DHOEX_FECHA_INICIAL
                                ) AS DATETIME
                            ) 'HORA DE ENTRADA',
                            CAST(
                                IF(
                                    sht.NHOEX_ID IS NULL,
                                    CONCAT(sht.DHOTU_FECHA, ' ', st.TTURN_HORA_FIN),
                                    she.DHOEX_FECHA_FINAL
                                ) AS DATETIME
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
                        LEFT JOIN srd_horas_extras she ON she.NHOEX_ID = sht.NHOEX_ID AND she.NHOEX_ESTADO = 1 AND she.NAUDI_EST_REG = 1
                        LEFT JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                        LEFT JOIN srd_marcacion sm ON sm.NHOTU_ID = sht.NHOTU_ID AND sm.NMARC_ESTADO = 1 AND sm.NAUDI_EST_REG = 1
                        WHERE ";
            
            //Filtros de Busqueda personalizados
            if (!empty($V_PERIODO) && isset($V_PERIODO)) {
                $query .= "ssap.NPERI_ID = " . $V_PERIODO . " AND ";
            }

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

            // Filtros de tipo de turno
            $tipoTurnoConditions = [];
            if (!empty($V_TIPO_M) && isset($V_TIPO_M)) {
                $tipoTurnoConditions[] = "ST.CTURN_TIPO LIKE '%" . $V_TIPO_M . "%'";
            }

            if (!empty($V_TIPO_T) && isset($V_TIPO_T)) {
                $tipoTurnoConditions[] = "ST.CTURN_TIPO LIKE '%" . $V_TIPO_T . "%'";
            }

            if (!empty($V_TIPO_N) && isset($V_TIPO_N)) {
                $tipoTurnoConditions[] = "ST.CTURN_TIPO LIKE '%" . $V_TIPO_N . "%'";
            }

            if (!empty($tipoTurnoConditions)) {
                $query .= " (" . implode(" OR ", $tipoTurnoConditions) . ") AND ";
            }
            //Fin Filtros de Busqueda personalizados


            $query .= " SH.NHORA_ESTADO = 1 AND SH.NAUDI_EST_REG = 1 
                        ORDER BY su.CUSUA_NOMBRES, st.TTURN_HORA_INICIO ; ";

            // Ejecutar la consulta
            $result = $conn->query($query);

            // Verificar si hay resultados
            if ($result->num_rows > 0) {
                // Abrir la salida CSV
                $output = fopen('php://output', 'w');
                fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));
                
                // Obtener los nombres de las columnas
                $columnas = $result->fetch_fields();
                $encabezados = [];
                foreach ($columnas as $columna) {
                    $encabezados[] = $columna->name;
                }
    
                // Escribir cabecera del CSV
                fputcsv($output, $encabezados);
    
                // Escribir filas del resultado en el CSV
                while ($row = $result->fetch_assoc()) {
                    //$row['CÓDIGO'] = '="' . $row['CÓDIGO'] . '"';
                    if (!empty(array_filter($row))) { // Verifica que la fila no esté vacía
                        fputcsv($output, $row);
                    }
                }
    
                // Cerrar el archivo CSV
                fclose($output);
            } else {
                echo 'No hay datos disponibles para exportar.';
            }
    
            // Cerrar la conexión
            $conn->close();
            exit();

        } else {
            // Crear un archivo CSV con los errores
            $output = fopen('php://output', 'w');
            fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));
            fputcsv($output, $earray);
            fclose($output);
            exit();
        }
    } catch(Exception $e) {
        // Manejo de errores
        echo 'Error: ' . $e->getMessage();
    }
    ?>