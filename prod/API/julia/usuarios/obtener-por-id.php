<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_ID = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $V_KEY = !isset($_POST["id"]) ? NULL : ($_POST["id"] == '' ? NULL : $_POST["id"]);

        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $est = 0;
            $contadorsession = 0;
            
            // VALIDAMOS EL KEY
            if ( $V_KEY === NULL || $V_KEY == '' ) {
                $error = 'El ID es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
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
                                            A.NUSUA_ID,
                                            A.CUSUA_CODIGO,
                                            A.CUSUA_DOCUMENTO,
                                            A.CUSUA_NOMBRES,
                                            A.NDESE_ID,
                                            A.NOCUP_ID,
                                            A.NNACI_ID,
                                            A.CUSUA_CORREO,
                                            A.CUSUA_IMG,
                                            A.NUSUA_ESTADO
                                        FROM SRD_USUARIOS A
                                        WHERE A.NAUDI_EST_REG = 1 AND A.NUSUA_ID = ?;");
                                                
                $stmt->bind_param("i", $V_KEY );
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idusuario, $codigo, $documento, $nombres, $desem, $ocup, $naci, $correo, $img, $estado);
                    $stmt->fetch();
                    
                    $stmt = $conn->prepare("SELECT 
                                                B.NROLE_ID,
                                                B.CROLE_DESCRIPCION
                                            FROM SRD_ROLES_USUARIO A
                                            INNER JOIN SRD_ROLES B ON A.NROLE_ID = B.NROLE_ID AND B.NROLE_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                            WHERE A.NAUDI_EST_REG = 1 AND A.NROSU_ESTADO = 1 AND A.NUSUA_ID = ?;");
                    $stmt->bind_param("i", $idusuario);
                    $stmt->execute();
                    $stmt->store_result();
                    $roles = array();
                    if ($stmt->num_rows > 0) {
                        $stmt->bind_result($rol_id, $rol_descripcion);
                        while ($stmt->fetch()) {
                            $roles[] = array(
                                'id' => $rol_id,
                                'descripcion' => $rol_descripcion
                            );
                        }
                        
                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Registro obtenido exitosamente!',
                            'data' => array(
                                'idusuario' => $idusuario,
                                'codigo' => $codigo,
                                'documento' => $documento,
                                'nombres' => $nombres,
                                'desem' => $desem,
                                'ocup' => $ocup,
                                'naci' => $naci,
                                'correo' => $correo,
                                'img' => $img,
                                'estado' => $estado,
                                'rol' => $roles
                            )
                        );
                    }
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
?>