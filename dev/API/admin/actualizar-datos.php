<?php
    include '../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_IDCOLAB = !isset($_POST["id"]) ? null : ($_POST["id"] == '' ? null : $_POST["id"]);
        $V_NOMBRES = !isset($_POST["nombres"]) ? null : ($_POST["nombres"] == '' ? null : $_POST["nombres"]);
        $V_CORREO = !isset($_POST["correo"]) ? null : ($_POST["correo"] == '' ? null : $_POST["correo"]);
        $V_USUARIO = !isset($_POST["usuariocolab"]) ? null : ($_POST["usuariocolab"] == '' ? null : $_POST["usuariocolab"]);
        $V_ROLCOLAB = !isset($_POST["rol"]) ? null : ($_POST["rol"] == '' ? null : $_POST["rol"]);
        $V_ESTADO = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_PASSWORD = !isset($_POST["password1"]) ? null : ($_POST["password1"] == '' ? null : $_POST["password1"]);
        $V_PASSWORD2 = !isset($_POST["password2"]) ? null : ($_POST["password2"] == '' ? null : $_POST["password2"]);
        $V_OCUP = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);
        $V_DESE = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
        $V_NACI = !isset($_POST["nacionalidad"]) ? null : ($_POST["nacionalidad"] == '' ? null : $_POST["nacionalidad"]);
        // SOBRE EL USUARIO
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? null : ($_POST["usuario_rol"] == '' ? null : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();
            $contadorsession = 0;
            session_start();
            $V_IMAGEN = null;

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

            // VALIDAMOS EL NOMBRE
            if ( isset($V_NOMBRES) && strlen($V_NOMBRES) >= 300 ) {
                $error = 'El nombre es obligatorio y debe tener 300 dígitos como máximo';
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
                                        WHERE NAUDI_EST_REG = 1 AND NUSUA_ID = ?;");
                $stmt->bind_param("i", $V_ID);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($V_COD);
                } else {
                    $V_COD = '';
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

            // VALIDAMOS EL USUARIO
            if ( isset($V_USUARIO) && (strlen($V_USUARIO) < 8 || strlen($V_USUARIO) > 20) ) {
                $error = 'El usuario debe tener 8 dígitos como mínimo';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_USUARIO != null) {
                $stmt = $conn->prepare("SELECT CUSUA_USERNAME
                                        FROM SRD_USUARIOS 
                                        WHERE CUSUA_USERNAME = ? AND NUSUA_ID <> ? AND NAUDI_EST_REG = 1 ");
                $stmt->bind_param("si", $V_USUARIO, $V_IDCOLAB);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $error = 'El usuario ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                } else if ($V_PASSWORD != null) {
                    $stmt->close();
                    $stmt = $conn->prepare("SELECT
                                                CUSUA_PASS
                                            FROM SRD_USUARIOS 
                                            WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1 ");
                    $ID = ($V_ROL == 1 ? $V_ID : $V_IDCOLAB);
                    $stmt->bind_param("i", $ID);
                    $stmt->execute();
                    $stmt->store_result();
                    if ($stmt->num_rows > 0) {
                        $stmt->bind_result($CUSUA_PASS);
                        $stmt->fetch();
                        if( !password_verify( $V_PASSWORD, $CUSUA_PASS ) ) {
                            $error = 'La contraseña no coincide con el usuario';
                            $contador += 1;
                            $earray[$contador] = $error;
                        }
                    } else {
                        $error = 'El usuario no se encuentra registrado';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                } else {
                    $error = 'El usuario no brindó el password';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ROL
            if ( isset($V_ROLCOLAB) && !is_numeric($V_ROLCOLAB) ) {
                $error = 'El rol debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_ROLCOLAB != null ) {
                $stmt = $conn->prepare("SELECT 
                                            NROLE_ID 
                                        FROM SRD_ROLES 
                                        WHERE NROLE_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_ROLCOLAB);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El rol no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL ESTADO
            if ( isset($V_ESTADO) && !is_numeric($V_ESTADO) ) {
                $error = 'El estado es obligatorio y debe ser numérico';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_ESTADO != null && $V_ESTADO != 1 && $V_ESTADO != 0 ) {
                $error = 'El estado debe ser válido';
                $contador += 1;
                $earray[$contador] = $error;

            }

            // VALIDAMOS LA CONTRASEÑA
            if ( isset($V_PASSWORD) && strlen($V_PASSWORD) < 8 && strlen($V_PASSWORD) > 20 ) {
                $error = 'La contraseña debe tener 8 dígitos como mínimo';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_PASSWORD != null ) {
                $stmt = $conn->prepare("SELECT
                                        CUSUA_PASS
                                    FROM SRD_USUARIOS 
                                    WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1 ");
                $ID = ($V_ROL == 1 ? $V_ID : $V_IDCOLAB);
                $stmt->bind_param("i", $ID);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($CUSUA_PASS);
                    $stmt->fetch();
                    if( !password_verify( $V_PASSWORD, $CUSUA_PASS ) ) {
                        $error = 'La contraseña no coincide con el usuario';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                } else {
                    $error = 'El usuario no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                
                $stmt->close();
            }

            // VALIDAMOS LA OCUPACIÓN
            if ( isset($V_OCUP) && !is_numeric($V_OCUP) ) {
                $error = 'La ocupación debe ser válido';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_OCUP != null) {
                $stmt = $conn->prepare("SELECT 
                                            NOCUP_ID
                                        FROM SRD_OCUPACION
                                        WHERE NOCUP_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_OCUP);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'La ocupación no se encuentra registrada';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL DESEMPEÑO
            if ( isset($V_DESE) && !is_numeric($V_DESE) ) {
                $error = 'El desempeño debe tener 300 dígitos como máximo';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ($V_DESE != null) {
                $stmt = $conn->prepare("SELECT 
                                            NDESE_ID
                                        FROM SRD_DESEMPENIO
                                        WHERE NDESE_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_DESE);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'El desempeño no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS LA NACIONALIDAD
            if ( isset($V_NACI) && !is_numeric($V_NACI) ) {
                $error = 'La nacionalidad debe ser válido';
                $contador += 1;
                $earray[$contador] = $error;
            } else if ( $V_NACI != null ) {
                $stmt = $conn->prepare("SELECT 
                                            NNACI_ID
                                        FROM SRD_NACIONALIDAD
                                        WHERE NNACI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_NACI);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'La nacionalidad no se encuentra registrada';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            if ($contador == 0) {
                
                $set_part = '';
                $variables = '';
                $params = array();

                if ($V_NOMBRES !== null && $V_ROL == 1) {
                    $set_part .= "CUSUA_NOMBRES = ? , ";
                    $variables .= "s";
                    $params[] = $V_NOMBRES;
                }

                if ($V_CORREO !== null && $V_ROL == 1) {
                    $set_part .= "CUSUA_CORREO = ? , ";
                    $variables .= "s";
                    $params[] = $V_CORREO;
                }

                if ($V_USUARIO !== null) {
                    $set_part .= "CUSUA_USERNAME = ?, ";
                    $variables .= "s";
                    $params[] = $V_USUARIO;
                }

                if ($V_ROLCOLAB !== null && $V_ROL == 1) {
                    $set_part .= "NROLE_ID = ? , ";
                    $variables .= "i";
                    $params[] = $V_ROLCOLAB;
                }

                if ($V_ESTADO !== null && $V_ROL == 1) {
                    $set_part .= "NUSUA_ESTADO = ? , ";
                    $variables .= "i";
                    $params[] = $V_ESTADO;
                }

                if ($V_IMAGEN !== null && $V_ROL == 1) {
                    $set_part .= "CUSUA_IMG = ? , ";
                    $variables .= "s";
                    $params[] = $V_IMAGEN;
                }

                if ($V_OCUP !== null && $V_ROL == 1) {
                    $set_part .= "NOCUP_ID = ? , ";
                    $variables .= "i";
                    $params[] = $V_OCUP;
                }

                if ($V_DESE !== null && $V_ROL == 1) {
                    $set_part .= "NDESE_ID = ? , ";
                    $variables .= "i";
                    $params[] = $V_DESE;
                }

                if ($V_NACI !== null && $V_ROL == 1) {
                    $set_part .= "NNACI_ID = ? , ";
                    $variables .= "i";
                    $params[] = $V_NACI;
                }

                if ($V_PASSWORD2 !== null) {
                    $opciones = array(
                        'cost' => 12
                    );
                    $pass_hash = password_hash($V_PASSWORD2, PASSWORD_BCRYPT, $opciones);
                    $V_TOKEN = bin2hex(random_bytes(48));
                    $set_part .= "CUSUA_PASS = ?, CUSUA_TOKEN = ?, ";
                    $variables .= "ss";
                    $params[] = $pass_hash;
                    $params[] = $V_TOKEN;
                }

                if ($set_part !== '') {

                    // Construir la sentencia SQL
                    $sql = "UPDATE SRD_USUARIOS SET $set_part NAUDI_REG_UPD = ?, DAUDI_REG_UPD = CURRENT_TIMESTAMP() WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;";
                    $params[] = $V_ID;
                    $params[] = $V_IDCOLAB;
                    $variables .= "ii";

                    // Preparar y ejecutar la sentencia SQL
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param($variables, ...$params );
                    $stmt->execute();

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
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'No tiene los permisos necesarios para actualizar los campos'
                        )
                    );
                }
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