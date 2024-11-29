<?php
    include '../../../../admin/connection/bd_connection.php';

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=data.csv');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Obtener los valores enviados desde el frontend
    $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
    $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
    $V_SUPER = !isset($_POST["supervisor"]) ? null : ($_POST["supervisor"] == '' ? null : $_POST["supervisor"]);
    $V_PERIODO = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
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
            
            $stmt = $conn->prepare("SELECT DPERI_INICIO, DPERI_FIN FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1 AND NPERI_ESTADO = 1;");
            $stmt->bind_param("i", $V_PERIODO);
            $stmt->execute();
            $stmt->store_result();
            if ($stmt->num_rows > 0) {
                $stmt->bind_result($periodo_ini, $periodo_fin);
                $stmt->fetch();

                // Convert dates to DateTime objects for iteration
                $start_date = new DateTime($periodo_ini);
                $end_date = new DateTime($periodo_fin);
                $end_date->modify('+1 day'); // Include end date in iteration

                // Generate dynamic SQL parts for each day
                $sql_parts = [];
                $interval = new DateInterval('P1D');
                $period = new DatePeriod($start_date, $interval, $end_date);
                foreach ($period as $date) {
                    $day = $date->format('Y-m-d');
                    $sql_parts[] = "GROUP_CONCAT(CASE WHEN DHOTU_FECHA = '$day' THEN CTURN_ID ELSE NULL END ORDER BY CTURN_ID SEPARATOR '---') AS `$day`";
                    $header_parts[] = "turnos.`$day`";
                }

                $sql_select_parts = implode(", ", $sql_parts);
                $header_select_parts = implode(", ", $header_parts);

                $query = "SELECT
                                su.CUSUA_NOMBRES AS 'COLABORADOR',
                                sa.CAREA_DESCRIPCION AS 'AREA PERIODO',
                                so.COCUP_DESCRIPCION AS 'OCUPACIÓN',
                                sd.CDESE_DESCRIPCION AS 'DESEMPEÑO',
                                sh.NHORA_ID AS 'ID HORARIO',
                                $header_select_parts,
                                IFNULL(ROUND(SUM(turno_duracion.total_horas), 2), 0) AS 'HORAS TOTALES'
                            FROM srd_horario sh
                            LEFT JOIN srd_usuarios su ON sh.NUSUA_ID = su.NUSUA_ID AND su.NUSUA_ESTADO = 1 AND su.NAUDI_EST_REG = 1
                            LEFT JOIN srd_super_areas_periodo ssap ON sh.NSAPE_ID = ssap.NSAPE_ID AND ssap.NSAPE_ESTADO = 1 AND ssap.NAUDI_EST_REG = 1
                            LEFT JOIN srd_areas sa ON ssap.CAREA_ID = sa.CAREA_ID AND sa.NAUDI_EST_REG = 1 AND sa.NAREA_ESTADO = 1
                            LEFT JOIN srd_desempenio sd ON sd.NDESE_ID = su.NDESE_ID AND sd.NAUDI_EST_REG = 1 AND sd.NDESE_ESTADO = 1
                            LEFT JOIN srd_ocupacion so ON so.NOCUP_ID = su.NOCUP_ID AND so.NAUDI_EST_REG = 1 AND so.NOCUP_ESTADO = 1
                            LEFT JOIN (
                                SELECT
                                    NHORA_ID,
                                    $sql_select_parts
                                FROM srd_horario_turnos
                                WHERE NAUDI_EST_REG = 1 AND NHOTU_ESTADO = 1
                                GROUP BY NHORA_ID
                            ) AS turnos ON turnos.NHORA_ID = sh.NHORA_ID
                            LEFT JOIN (
                                SELECT 
                                    sht.NHORA_ID,
                                    SUM(TIMESTAMPDIFF(MINUTE, st.TTURN_HORA_INICIO, st.TTURN_HORA_FIN) / 60) AS total_horas
                                FROM srd_horario_turnos sht
                                LEFT JOIN srd_turno st ON sht.CTURN_ID = st.CTURN_ID
                                WHERE sht.NAUDI_EST_REG = 1 AND sht.NHOTU_ESTADO = 1
                                GROUP BY sht.NHORA_ID
                            ) AS turno_duracion ON turno_duracion.NHORA_ID = sh.NHORA_ID
                            WHERE  ";
                
                //Filtros de Busqueda personalizados
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

                $query .= "SH.NHORA_ESTADO = 1 AND SH.NAUDI_EST_REG = 1 
                            GROUP BY su.CUSUA_NOMBRES, sa.CAREA_DESCRIPCION, so.COCUP_DESCRIPCION, sd.CDESE_DESCRIPCION, sh.NHORA_ID
                            ORDER BY su.CUSUA_NOMBRES; ";

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
                        fputcsv($output, $row);
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