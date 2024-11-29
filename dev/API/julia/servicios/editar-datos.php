<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_KEY = !isset($_POST["id"]) ? NULL : ($_POST["id"] == '' ? NULL : $_POST["id"]);
        $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_DESC = !isset($_POST["descripcion"]) ? null : ($_POST["descripcion"] == '' ? null : $_POST["descripcion"]);
        $V_MODO = isset($_POST['modo']) ? trim($_POST['modo']) : '' ;
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
            
            // VALIDAMOS EL ID QUE NO SEA NUMÉRICO
            if ( is_numeric($V_KEY) ) {
                $error = 'El key no es válido';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( $V_MODO == 'editar' ) {
                    $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("s", $V_KEY);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows == 0) {
                        $error = 'El key no se encuentra registrado';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                    $stmt->close();
                } else {
                    $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("s", $V_KEY);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        $error = 'El key ya se encuentra registrado';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                    $stmt->close();
                }
            }

            // VALIDAMOS LA DESCRIPCIÓN
            if ( $V_DESC === NULL || $V_DESC == '' ) {
                $error = 'La descripción es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                if ( $V_MODO == 'editar' ) {
                    $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_DESCRIPCION = ? AND CAREA_ID <> ? AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("si", $V_DESC, $V_KEY);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        $error = 'La descripción ya se encuentra registrada';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                    $stmt->close();
                } else {
                    $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_DESCRIPCION = ? AND NAUDI_EST_REG = 1;");
                    $stmt->bind_param("s", $V_DESC);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        $error = 'La descripción ya se encuentra registrada';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                    $stmt->close();
                }
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
                
                if ( $V_MODO == 'agregar' ) {
                    $stmt = $conn->prepare("INSERT INTO SRD_AREAS (CAREA_ID, CAREA_DESCRIPCION, NAREA_ESTADO, DAUDI_REG_INS, NAUDI_REG_INS) VALUES (?, ?, ?, NOW(), ?);");
                    $stmt->bind_param("ssis", $V_SERV, $V_DESC, $V_ESTADO, $V_ID);
                    $stmt->execute();
                } else {
                    $stmt = $conn->prepare("UPDATE SRD_AREAS 
                                            SET CAREA_ID = ?, CAREA_DESCRIPCION = ?, NAREA_ESTADO = ?, DAUDI_REG_UPD = NOW(), NAUDI_REG_UPD = ? 
                                            WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1;");
                                                    
                    $stmt->bind_param("ssiis", $V_SERV, $V_DESC, $V_ESTADO, $V_ID, $V_KEY);
                    $stmt->execute();
                }

                // Verifica si se realizaron cambios
                if (mysqli_affected_rows($conn) > 0) {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se realizó la actualización exitosamente!',
                        'data' => array(
                            'id' => $V_ID
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