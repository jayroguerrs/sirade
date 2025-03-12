<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_PERI = !isset($_POST["periodo"]) ? NULL : ($_POST["periodo"] == '' ? NULL : $_POST["periodo"]);
        $V_RFECHA = !isset($_POST["fecha"]) ? NULL : ($_POST["fecha"] == '' ? NULL : $_POST["fecha"]);
        $V_ESTADO = !isset($_POST["estado"]) ? NULL : ($_POST["estado"] == '' ? NULL : $_POST["estado"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $V_ID = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;
        $V_KEY = !isset($_POST["id"]) ? NULL : ($_POST["id"] == '' ? NULL : $_POST["id"]);

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
            
            // VALIDAMOS EL ID
            if ( ($P_KEY == null || !is_numeric($P_KEY)) && $P_KEY != 0 ) {
                $error = 'El id del usuario es obligatorio y debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_KEY);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El key no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS LA FECHA
            if ( $V_RFECHA === NULL || $V_RFECHA == '' ) {
                $error = 'La fecha es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                // SEPARAMOS LA FECHA QUE VIENE EN FORMATO 'YYYY-MM-DD al YYYY-MM-DD'
                $fecha = explode(' al ', $V_RFECHA);
                $fecha_inicio = $fecha[0];
                $fecha_fin = $fecha[1];
                // VALIDAMOS QUE LAS FECHA SEAN VÁLIDAS Y QUE LA FECHA DE INICIO SEA MENOR A LA FECHA DE FIN
                if ( !strtotime($fecha_inicio) || !strtotime($fecha_fin) || strtotime($fecha_inicio) > strtotime($fecha_fin) ) {
                    $error = 'La fecha es incorrecta';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL ID DEL USUARIO
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del usuario es obligatorio';
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
                    
                    // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADO
                    if ($contadorsession != 0) {
                        session_destroy();
                    }
                } else {
                    $error = 'El ID del usuario no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL PERIODO
            if ( $V_PERI === NULL || $V_PERI == '' ) {
                $error = 'El nombre del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE CJPER_DESCRIPCION = ? AND NPERI_ID <> ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("si", $V_PERI, $V_KEY);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $error = 'El nombre de periodo ya se encuentra registrado';
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

                if ( $P_KEY == 0 ) {
                    $stmt = $conn->prepare("INSERT INTO SRD_PERIODO (
                                                CAPLI_ID,
                                                CPERI_DESCRIPCION, 
                                                DPERI_INICIO, 
                                                DPERI_FIN,
                                                NAUDI_REG_INS,
                                                DAUDI_REG_INS)
                                            VALUES ('ENF_002', ?, ?, ?, ?, CURRENT_TIMESTAMP());");
                    $stmt->bind_param("sssi", $V_PERI, $fecha_inicio, $fecha_fin, $V_ID);
                    //OBTENER EL ID GENERADO
                    $stmt->execute();
                    $NPERI_ID = $stmt->insert_id;

                } else if ( $P_KEY != 0 ) {
                    $stmt = $conn->prepare("UPDATE SRD_PERIODO
                                            SET CJPER_DESCRIPCION = ?,                                             
                                                DPERI_INICIO = ?, 
                                                DPERI_FIN = ?, 
                                                NPERI_ESTADO = ?, 
                                                DAUDI_REG_UPD = CURRENT_TIMESTAMP(), 
                                                NAUDI_REG_UPD = ?
                                            WHERE NPERI_ID = ? ;");
                                                    
                    $stmt->bind_param("sssiss", $V_PERI, $fecha_inicio, $fecha_fin, $V_ESTADO, $V_ID, $V_KEY);
                    $stmt->execute();
                    $NPERI_ID = $P_KEY;
                }

                // Verifica si se realizaron cambios
                if ($stmt->affected_rows > 0) {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se realizó la actualización exitosamente!',
                        'data' => array(
                            'id' => $NPERI_ID
                        )
                    );
                
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error, no se ha podido realizar el registro!'
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