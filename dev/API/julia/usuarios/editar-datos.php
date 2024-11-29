<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_KEY = !isset($_POST["key"]) ? null : ($_POST["key"] == '' ? null : $_POST["key"]);
        $V_CODIGO = !isset($_POST["codigo"]) ? null : ($_POST["codigo"] == '' ? null : $_POST["codigo"]);
        $V_DOCU = !isset($_POST["documento"]) ? null : ($_POST["documento"] == '' ? null : $_POST["documento"]);
        $V_NOMBRES = !isset($_POST["nombres"]) ? null : ($_POST["nombres"] == '' ? null : $_POST["nombres"]);
        $V_CORREO = !isset($_POST["correo"]) ? null : ($_POST["correo"] == '' ? null : $_POST["correo"]);
        $V_ROLCOLAB = !isset($_POST["rol"]) ? null : ($_POST["rol"] == '' ? null : $_POST["rol"]);
        $V_ESTADO = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_OCUP = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);
        $V_DESE = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
        $V_NACI = !isset($_POST["nacionalidad"]) ? null : ($_POST["nacionalidad"] == '' ? null : $_POST["nacionalidad"]);
        $V_ESTADO = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        // SOBRE EL USUARIO
        $V_ID = !isset($_POST["usuario"]) ? NULL : ($_POST["usuario"] == '' ? NULL : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $est = 0;
            $contadorsession = 0;
            $V_IMAGEN = 'blank.png';
            
            // VALIDAMOS EL ID
            if ( ($V_KEY == null || !is_numeric($V_KEY)) && $V_KEY != 0 ) {
                $error = 'El id del colaborador es obligatorio y debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } elseif ( $V_KEY != null && $V_KEY != 0 ) {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_KEY);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El id del usuario no existe';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
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

            // Verificamos si se ha cargado una imagen
            if (isset($_FILES['imagen'])) {
                $imagen = $_FILES['imagen'];

                // Verificamos si no hay errores en la carga
                if ($imagen['error'] === UPLOAD_ERR_OK) {
                    // Obtenemos la extensión del archivo
                    $extension = pathinfo($imagen['name'], PATHINFO_EXTENSION);

                    // Validamos la extensión
                    $extensiones_permitidas = ['jpg', 'jpeg', 'png'];
                    if (in_array($extension, $extensiones_permitidas)) {
                        // Validamos el tamaño del archivo (máximo 20 MB)
                        $tamano_maximo = 20 * 1024 * 1024; // 20 MB en bytes
                        if ($imagen['size'] <= $tamano_maximo) {
                            // Generamos un nombre único para el archivo
                            $nombre_archivo = $V_ID . '.' . $extension;

                            // Ruta completa donde se guardará la imagen
                            $ruta_destino = $_SERVER["DOCUMENT_ROOT"] . '/assets/img/team/' . $nombre_archivo;

                            // Movemos la imagen al directorio de destino
                            if (move_uploaded_file($imagen['tmp_name'], $ruta_destino)) {
                                // La imagen se cargó correctamente
                                $V_IMAGEN = $nombre_archivo;
                            } else {
                                // Ocurrió un error al mover la imagen
                                $error = 'Error al cargar la imagen.';
                                $contador += 1;
                                $earray[$contador] = $error;
                            }
                        } else {
                            // El tamaño del archivo supera el límite
                            $error = 'La imagen es demasiado grande (máximo 20 MB).';
                            $contador += 1;
                            $earray[$contador] = $error;
                        }
                    } else {
                        // La extensión del archivo no es válida
                        $error = 'La imagen debe ser en formato JPG, JPEG o PNG.';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                } else {
                    // Ocurrió un error en la carga de la imagen
                    $error = 'Error al cargar la imagen.';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL NOMBRE DEL USUARIO
            if ( $V_NOMBRES === NULL || $V_NOMBRES == '' ) {
                $error = 'El nombre del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS EL CORREO
            if ( isset($V_CORREO) && !preg_match($pattern, $V_CORREO) ) {
                $error = 'El correo debe ser válido';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_CORREO != null ) {
                $stmt = $conn->prepare("SELECT 
                                            CUSUA_CODIGO
                                        FROM SRD_USUARIOS 
                                        WHERE NAUDI_EST_REG = 1 AND NUSUA_ID <> ? AND CUSUA_CORREO = ?;");
                $stmt->bind_param("ss", $V_KEY, $V_CORREO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $error = 'El correo ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                } 
                $stmt->close();
                // VALIDAMOS QUE EL CORREO NO SE ENCUENTRE REGISTRADO

                $V_CORREO = strtolower($V_CORREO);
                $stmt = $conn->prepare("SELECT 
                                            CUSUA_CORREO 
                                        FROM SRD_USUARIOS 
                                        WHERE CUSUA_CORREO = ? AND NAUDI_EST_REG = 1 AND CUSUA_CODIGO != ? ;");
                $stmt->bind_param("ss", $V_CORREO, $V_COD);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $error = 'El correo ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL CÓDIGO DEL USUARIO
            if ( $V_CODIGO === NULL || $V_CODIGO == '' ) {
                $error = 'El código del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT CUSUA_CODIGO FROM SRD_USUARIOS WHERE NUSUA_ID <> ? AND CUSUA_CODIGO = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("is", $V_KEY, $V_CODIGO);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $error = 'El código del usuario ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL DOCUMENTO DEL USUARIO
            if ( $V_DOCU === NULL || $V_DOCU == '' ) {
                $error = 'El documento del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_DESE === NULL || $V_DESE == '' ) {
                $error = 'El desempeño es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NDESE_ID FROM SRD_DESEMPENIO WHERE NDESE_ID = ? AND NAUDI_EST_REG = 1 AND NDESE_ESTADO = 1;");
                $stmt->bind_param("i", $V_DESE);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del desempeño no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS LA OCUPACIÓN
            if ( $V_OCUP === NULL || $V_OCUP == '' ) {
                $error = 'La ocupación es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NOCUP_ID FROM SRD_OCUPACION WHERE NOCUP_ID = ? AND NAUDI_EST_REG = 1 AND NOCUP_ESTADO = 1;");
                $stmt->bind_param("i", $V_OCUP);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la ocupación no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS LA NACIONALIDAD
            if ( $V_NACI === NULL || $V_NACI == '' ) {
                $error = 'La nacionalidad es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NNACI_ID FROM SRD_NACIONALIDAD WHERE NNACI_ID = ? AND NAUDI_EST_REG = 1 AND NNACI_ESTADO = 1;");
                $stmt->bind_param("i", $V_NACI);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la nacionalidad no se encuentra registrado';
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
                if ( $V_ESTADO != 1 && $V_ESTADO != 0 ) {
                    $error = 'El estado no es válido';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL ROL
            if ($V_ROLCOLAB === NULL || $V_ROLCOLAB == '') {
                $error = 'El rol es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                // Dividir los roles por comas
                $roles = explode(',', $V_ROLCOLAB);
                foreach ($roles as $role) {
                    $role = trim($role); // Eliminar espacios en blanco
                    $stmt = $conn->prepare("SELECT NROLE_ID FROM SRD_ROLES WHERE NROLE_ID = ? AND NAUDI_EST_REG = 1 AND NROLE_ESTADO = 1;");
                    $stmt->bind_param("i", $role);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        // El rol es válido
                    } else {
                        $error = 'El ID del rol ' . $role . ' no se encuentra registrado';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                    $stmt->close();
                }
            }

            if ($contador == 0) {
                if ( $V_KEY == 0 ) {
                    // Agregar nuevo usuario
                    $stmt = $conn->prepare("INSERT INTO SRD_USUARIOS (
                                                CUSUA_CODIGO, 
                                                CUSUA_DOCUMENTO, 
                                                CUSUA_NOMBRES, 
                                                NDESE_ID, 
                                                NOCUP_ID, 
                                                NNACI_ID, 
                                                CUSUA_CORREO, 
                                                CUSUA_IMG, 
                                                CUSUA_USERNAME,  
                                                NAUDI_REG_INS
                                            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
                    $stmt->bind_param("sssiisssis", $V_CODIGO, $V_DOCU, $V_NOMBRES, $V_DESE, $V_OCUP, $V_NACI, $V_CORREO, $V_IMAGEN, $V_ID, $V_ID);
                    $stmt->execute();

                    // Verifica si se realizó el registro
                    if ($stmt-> affected_rows > 0) {
                        $id = $stmt->insert_id;

                        // Agregar roles
                        foreach ($roles as $role) {
                            $role = trim($role); // Eliminar espacios en blanco
                            $stmt = $conn->prepare("INSERT INTO SRD_ROLES_USUARIO (
                                                        NUSUA_ID, 
                                                        NROLE_ID, 
                                                        NAUDI_REG_INS
                                                    ) VALUES (?, ?, ?);");
                            $stmt->bind_param("iii", $id, $role, $V_ID);
                            $stmt->execute();
                        }

                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Se realizó el registro exitosamente!',
                            'data' => array(
                                'id' => $id
                            )
                        );
                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'No se pudo realizar el registro'
                            )
                        );
                    }
                } else {
                    // Actualizar usuario
                    $stmt = $conn->prepare("UPDATE SRD_USUARIOS SET 
                                                CUSUA_CODIGO = ?, 
                                                CUSUA_DOCUMENTO = ?, 
                                                CUSUA_NOMBRES = ?, 
                                                CUSUA_IMG = ?, 
                                                NDESE_ID = ?, 
                                                NOCUP_ID = ?, 
                                                NNACI_ID = ?, 
                                                CUSUA_CORREO = ?, 
                                                DAUDI_REG_UPD = NOW(),
                                                NAUDI_REG_UPD = ?
                                            WHERE NUSUA_ID = ?;");
                    $stmt->bind_param("ssssiiisii", $V_CODIGO, $V_DOCU, $V_NOMBRES, $V_IMAGEN, $V_DESE, $V_OCUP, $V_NACI, $V_CORREO, $V_ID, $V_KEY);
                    $stmt->execute();

                    // Verifica si se realizaron cambios
                    if ($stmt-> affected_rows > 0) {

                        // Eliminar roles
                        $stmt = $conn->prepare("UPDATE SRD_ROLES_USUARIO SET NROSU_ESTADO = 0 AND NAUDI_EST_REG = 0 WHERE NUSUA_ID = ?;");
                        $stmt->bind_param("i", $V_KEY);
                        $stmt->execute();
                        $rolagregado = 0;
                        // Agregar roles
                        foreach ($roles as $role) {
                            $role = trim($role); // Eliminar espacios en blanco

                            // Agregar rol
                            $stmt = $conn->prepare("INSERT INTO SRD_ROLES_USUARIO (
                                                        NUSUA_ID, 
                                                        NROLE_ID, 
                                                        NAUDI_REG_INS
                                                    ) VALUES (?, ?, ?);");
                            $stmt->bind_param("iii", $V_KEY, $role, $V_ID);
                            $stmt->execute();
                            $rolagregado += 1;
                        }

                        if ($rolagregado > 0) {
                            $respuesta = array(
                                'estado' => 1,
                                'mensaje' => '¡Se realizó el registro exitosamente!'
                            );
                        } else {
                            $respuesta = array(
                                'estado' => 0,
                                'mensaje' => '¡Error!',
                                'data' => array(
                                    '1' => 'No se pudo realizar el registro'
                                )
                            );
                        }
                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'El usuario no existe'
                            )
                        );
                    }
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