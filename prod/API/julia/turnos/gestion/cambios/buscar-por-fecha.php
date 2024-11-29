<?php
    include '../../../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_COLABORADOR = !isset($_POST["colaborador"]) ? NULL : ($_POST["colaborador"] == '' ? NULL : $_POST["colaborador"]);
        $V_FECHA = !isset($_POST["fecha"]) ? NULL : ($_POST["fecha"] == '' ? NULL : $_POST["fecha"]);
        $V_PERIODO = !isset($_POST["periodo"]) ? NULL : ($_POST["periodo"] == '' ? NULL : $_POST["periodo"]);
        $V_ID = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            session_start();
            $earray = array();
            $est = 0;
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
            
            // VALIDAMOS EL COLABORADOR
            if ( $V_COLABORADOR === NULL || $V_COLABORADOR == '' ) {
                $error = 'El nombre del colaborador es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $idcolaborador = 0;
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE CUSUA_NOMBRES = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("s", $V_COLABORADOR);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idcolaborador);
                    $stmt->fetch();
                } else {
                    $error = 'El colaborador no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS LA FECHA VÁLIDA 'YYYY-MM-DD'
            if ( $V_FECHA === NULL || $V_FECHA == '' ) {
                $error = 'La fecha es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHA) ) {
                    $error = 'El formato de la fecha es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL PERIODO
            if ( $V_PERIODO === NULL || $V_PERIODO == '' ) {
                $error = 'El periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_PERIODO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El periodo no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            if ($contador == 0) {
                
                $stmt = $conn->prepare("SELECT 
                                            sht.CTURN_ID, 
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
                                        FROM srd_horario_turnos sht 
                                        INNER JOIN srd_horario sh ON sht.NHORA_ID = sh.NHORA_ID AND sh.NHORA_ESTADO = 1 AND sh.NAUDI_EST_REG = 1
                                        INNER JOIN srd_super_areas_periodo sap ON sap.NSAPE_ID = sh.NSAPE_ID AND sap.NSAPE_ESTADO = 1 AND sap.NAUDI_EST_REG = 1
                                        INNER JOIN srd_turno st ON st.CTURN_ID = sht.CTURN_ID AND st.NTURN_ESTADO = 1 AND st.NAUDI_EST_REG = 1
                                        WHERE 
                                            sap.NPERI_ID = ? AND
                                            sht.DHOTU_FECHA = ? AND sh.NUSUA_ID = ? AND
                                            sht.NHOTU_ESTADO  = 1 AND sht.NAUDI_EST_REG = 1;");
                                                
                $stmt->bind_param("isi", $V_PERIODO, $V_FECHA, $idcolaborador );
                $stmt->execute();
                $stmt->store_result();
                $result = array();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($CTURN_ID, $HORA_ENTRADA, $HORA_SALIDA);
                    while ($stmt->fetch()) {
                        $result[] = array(
                            'Id' => $CTURN_ID,
                            'HoraEntrada' => date_format(date_create($HORA_ENTRADA), "d/m/Y h:i:s A"),
                            'HoraSalida' => date_format(date_create($HORA_SALIDA), "d/m/Y h:i:s A")
                        );
                    }
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Éxito!',
                        'data' => $result
                    );
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error! No se encontraron registros',
                        'data' => $earray
                    );
                }

                $stmt->close();

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