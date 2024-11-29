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
        $V_PREG = !isset($_POST["pregunta"]) ? NULL : ($_POST["pregunta"] == '' ? NULL : $_POST["pregunta"]);
        $V_CATE = !isset($_POST["categoria"]) ? NULL : ($_POST["categoria"] == '' ? NULL : $_POST["categoria"]);
        $V_ORDEN = !isset($_POST["orden"]) ? NULL : ($_POST["orden"] == '' ? NULL : $_POST["orden"]);
        $V_SUPER = isset($_POST['supervisor']) ? trim($_POST['supervisor']) : '' ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $contadorsession = 0;
            
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
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    if ( $idrol != $_SESSION['rol_id'] ) {
                        $error = 'El rol del usuario no corresponde a la operación';
                        $contador += 1;
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

            // VALIDAMOS EL ID DE LA PREGUNTA
            if ( $V_PREG === NULL || $V_PREG == '' ) {
                $error = 'El ID de la pregunta es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS EL ID DE LA CATEGORIA
            if ( $V_CATE === NULL || $V_CATE == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT NHCAP_ID FROM SRD_HIG_CATEGORIA_PREG WHERE NHCAP_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_CATE);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la categoría no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ORDEN
            if ( $V_ORDEN === NULL || $V_ORDEN == '' ) {
            } else {
                // VALIDAMOS QUE EL ORDEN SEA NUMÉRICO
                if ( !is_numeric($V_ORDEN) ) {
                    $error = 'El orden debe ser numérico';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $stmt = $conn->prepare("INSERT INTO SRD_HIG_PREGUNTAS (CHPRE_DESCRIPCION, NHCAP_ID, NHPRE_ORDEN, NAUDI_REG_INS) 
                                        VALUES (?, ?, ?, ?);");
                                                
                $stmt->bind_param("siii", $V_PREG, $V_CATE, $V_ORDEN, $V_ID);
                $stmt->execute();

                // Verifica si se realizaron cambios
                if ($stmt->affected_rows > 0) {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se realizó el registro exitosamente!',
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