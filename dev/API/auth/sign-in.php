<?php
    include '../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_USER = !isset($_POST["username"]) ? null : ($_POST["username"] == '' ? null : $_POST["username"]);
        $V_PASS = !isset($_POST["password"]) ? null : ($_POST["password"] == '' ? null : $_POST["password"]);
        $V_CODA = !isset($_POST["codapp"]) ? null : ($_POST["codapp"] == '' ? null : $_POST["codapp"]);

        try {
            
            $contador = 0;
            $erray = array();

            // VALIDAMOS EL USUARIO
            if ( $V_USER == null || strlen($V_USER) < 8 || strlen($V_USER) > 20) {
                $error = 'El usuario es obligatorio y debe tener 8 dígitos como mínimo y 20 como máximo';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS LA CONTRASEÑA
            if ( $V_PASS == null || strlen($V_PASS) < 8 || strlen($V_PASS) > 20) {
                $error = 'La contraseña es obligatoria y debe tener 8 dígitos como mínimo y 20 como máximo';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS LA CONTRASEÑA
            if ( $V_CODA == null ) {
                $error = 'El código de la aplicación es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            }
            
            if ($contador == 0) {
                // CODIGO PARA CUANDO EL USUARIO SEA DEL TIPO ADMINISTRADOR                
                $stmt = $conn->prepare("SELECT
                                            su.NUSUA_ID,
                                            su.CUSUA_CODIGO,
                                            su.CUSUA_NOMBRES,
                                            su.CUSUA_CORREO,
                                            su.CUSUA_IMG,
                                            sru.NROLE_ID,
                                            sr.CROLE_NOMBRE,
                                            su.CUSUA_PASS,
                                            su.CUSUA_TOKEN,
                                            sa.CAPLI_NOMBRE_PAG 
                                        FROM srd_usuarios su
                                        INNER JOIN srd_roles_usuario sru ON su.NUSUA_ID = sru.NUSUA_ID AND sru.NROSU_ESTADO = 1 AND sru.NAUDI_EST_REG = 1
                                        INNER JOIN srd_roles sr ON sr.NROLE_ID = sru.NROLE_ID AND sr.NROLE_ESTADO = 1 AND sr.NAUDI_EST_REG = 1
                                        INNER JOIN srd_roles_app sra ON sra.NROLE_ID = sr.NROLE_ID
                                        INNER JOIN srd_aplicaciones sa ON sa.CAPLI_ID = sra.CAPLI_ID AND sa.NAPLI_ESTADO = 1 AND sa.NAUDI_EST_REG = 1
                                        WHERE su.CUSUA_USERNAME = ? AND sra.CAPLI_ID = ?
                                        ORDER BY sr.NROLE_ORDENAMIENTO ASC
                                        LIMIT 1;");
                $stmt->bind_param( "ss", $V_USER, $V_CODA );
                $stmt->execute();
                $stmt->bind_result( $NUSUA_ID, $CUSUA_CODIGO, $CUSUA_NOMBRES, $CUSUA_CORREO, $CUSUA_IMG, 
                                    $NROLE_ID, $CROLE_NOMBRE, $CUSUA_PASS, $CUSUA_TOKEN, $CAPLI_NOMBRE_PAG );
                
                if($stmt->affected_rows) {
                    if($stmt->fetch()) {
                        if(password_verify( $V_PASS, $CUSUA_PASS )){
                            session_start();
                            $_SESSION['id'] = $NUSUA_ID;
                            $_SESSION['codigo'] = $CUSUA_CODIGO;
                            $_SESSION['nombres'] = $CUSUA_NOMBRES;
                            $_SESSION['rol'] = $CROLE_NOMBRE;
                            $_SESSION['rol_id'] = $NROLE_ID;
                            $_SESSION['correo'] = $CUSUA_CORREO;
                            $_SESSION['imagen'] = $CUSUA_IMG;
                            //$_SESSION['tiporol'] = $CROLE_NOMBRE;
                            $_SESSION['token'] = $CUSUA_TOKEN;
                            $_SESSION['codapp'] = $V_CODA;
                            $_SESSION['nomapp'] = $CAPLI_NOMBRE_PAG;
                            $respuesta = array(
                                'estado' => 1,
                                'mensaje' => '¡Ingreso Exitoso!',
                                'data' => array(
                                    'key_id' => $NUSUA_ID,
                                    'codigo' => $CUSUA_CODIGO,
                                    'nombres' => $CUSUA_NOMBRES,
                                    //'nombrerol' => $CROLE_NOMBRE,
                                    'token' => $CUSUA_TOKEN,
                                    'codapp' => $V_CODA
                                )
                            );
                        } else {
                            $respuesta = array(
                                'estado' => 0,
                                'mensaje' => '¡Error!',
                                'data' => array(
                                    '1' => 'La contraseña no es correcta'
                                )
                            );
                        }
                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'El usuario no existe o no tiene acceso a la aplicación'
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