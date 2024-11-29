<?php
    include '../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_ROL_NUEVO = !isset($_POST["rol"]) ? null : ($_POST["rol"] == '' ? null : $_POST["rol"]);
        // SOBRE EL USUARIO
        $V_ID = !isset($_POST["usuario"]) ? NULL : ($_POST["usuario"] == '' ? NULL : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            session_start();
            $est = 0;
            $contadorsession = 0;
            $erray = array(); 

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
                              
                $stmt = $conn->prepare("SELECT
                                            sru.NROLE_ID,
                                            sr.CROLE_NOMBRE  
                                        FROM srd_roles_usuario sru
                                        INNER JOIN srd_roles sr ON sru.NROLE_ID = sr.NROLE_ID AND sr.NROLE_ESTADO = 1 AND sr.NAUDI_EST_REG = 1
                                        WHERE sru.NUSUA_ID = ? AND sru.NROSU_ESTADO = 1 AND sru.NAUDI_EST_REG = 1 AND sr.NROLE_ID = ?;");
                $stmt->bind_param( "ii", $V_ID, $V_ROL_NUEVO );
                $stmt->execute();
                $stmt->store_result();
                
                if($stmt->affected_rows) {
                    
                    $stmt->bind_result($rol_id, $rol_nombre);
                    $stmt->fetch();

                    $_SESSION['rol'] = $rol_nombre;
                    $_SESSION['rol_id'] = $rol_id;
                    
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Éxito!'
                    );
                    
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'El usuario no tiene el rol seleccionado'
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