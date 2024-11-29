<?php

    include '../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud GET
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // VALOR DE LAS ENTRADAS
        $V_IDCOLAB = !isset($_GET["id"]) ? null : ($_GET["id"] == '' ? null : $_GET["id"]);
        $V_ID = !isset($_GET["usuario"]) ? null : ($_GET["usuario"] == '' ? null : $_GET["usuario"]);
        $V_ROL = !isset($_GET["usuario_rol"]) ? null : ($_GET["usuario_rol"] == '' ? null : $_GET["usuario_rol"]);

        try {
            
            $contador = 0;
            $contadorsession = 0;
            $est = 2;
            $erray = array();
            session_start();
            
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
            if ( $V_IDCOLAB == null || !is_numeric($V_IDCOLAB) ) {
                $error = 'El id es obligatorio y debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_IDCOLAB);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El ID del colaborador no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }
            
            if ($contador == 0) {
                // CODIGO PARA CUANDO EL USUARIO SEA DEL TIPO ADMINISTRADOR                
                $stmt = $conn->prepare("SELECT
                                            NUSUA_ID, 
                                            CUSUA_CODIGO,
                                            CUSUA_DOCUMENTO,
                                            CUSUA_NOMBRES,
                                            NDESE_ID,
                                            NOCUP_ID,
                                            NNACI_ID,
                                            CUSUA_CORREO,
                                            CUSUA_IMG,
                                            CUSUA_TOKEN,
                                            CUSUA_USERNAME,
                                            NUSUA_ESTADO
                                        FROM SRD_USUARIOS
                                        WHERE NAUDI_EST_REG = 1 AND NUSUA_ID = ?;");
                $stmt->bind_param("i", $V_ID );
                $stmt->execute();
                $stmt->bind_result( $NUSUA_ID, $CUSUA_CODIGO, $CUSUA_DOCUMENTO, $CUSUA_NOMBRES, $NDESE_ID, $NOCUP_ID, $NNACI_ID,
                                    $CUSUA_CORREO, $CUSUA_IMG, $CUSUA_TOKEN, $CUSUA_USERNAME, $NUSUA_ESTADO );
                
                if($stmt->affected_rows) {
                    if($stmt->fetch()) {
                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Ingreso Exitoso!',
                            'data' => array(
                                'id' => $NUSUA_ID,
                                'codigo' => $CUSUA_CODIGO,
                                'documento' => $CUSUA_DOCUMENTO,
                                'nombres' => $CUSUA_NOMBRES,
                                'desempenio' => $NDESE_ID,
                                'ocupacion' => $NOCUP_ID,
                                'nacionalidad' => $NNACI_ID,
                                'correo' => $CUSUA_CORREO,
                                'imagen' => $CUSUA_IMG,
                                'token' => $CUSUA_TOKEN,
                                'usuario' => $CUSUA_USERNAME,
                                'estado' => $NUSUA_ESTADO
                            )
                        );
                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'El usuario no existe'
                            )
                        );
                    }
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'El usuario no existe2'
                        )
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
    
    $conn->close();
?>