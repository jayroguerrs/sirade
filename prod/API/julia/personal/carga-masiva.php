<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo 
    $pattern2 = '/^[0-9]+$/';                                               //RegExp para números

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $V_ID               = isset($_POST['usuario']) ? trim($_POST['usuario']) : '' ;
        $V_ROL              = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        $TIPO_ARCHIVO       = $_FILES['file']['type'];
        $TAMANIO_ARCHIVO    = $_FILES['file']['size'];
        $ARCHIVO_TEMP       = $_FILES['file']['tmp_name'];

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

            // VALIDAMOS QUE SÓLO SEA UN ARCHIVO
            if ( count($_FILES['file']) == 1 ) {
                $error = 'Sólo se permite un archivo';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS EL TIPO DE ARCHIVO SEA SÓLO CSV
            if ( $TIPO_ARCHIVO != 'text/csv' ) {
                $error = 'El tipo de archivo no es el correcto';
                $contador += 1;
                $earray[$contador] = $error;
            }

            // VALIDAMOS EL TAMAÑO DEL ARCHIVO SEA MENOR A 30MB
            if ( $TAMANIO_ARCHIVO > 30000000 ) {
                $error = 'El tamaño del archivo es mayor a 30MB';
                $contador += 1;
                $earray[$contador] = $error;
            }

            if ($contador == 0) {
                $lineas = file($ARCHIVO_TEMP);
                $i = 0;
                $num_actualizado = 0;
                $num_ingresados = 0;
                $num_procesados = 0;
                $contador2 = 0;
                $contador3 = 0;
                foreach ($lineas as $linea) {
                    $cantidad_registros = count($lineas);
                    $cantidad_regist_agregados =  ($cantidad_registros - 1);

                    if ($i > 3) {
                        $datos = explode(";", $linea);
                        $codigo         = !empty($datos[0])  ? trim($datos[0]) : '';
                        $documento      = !empty($datos[1])  ? trim($datos[1]) : '';
                        $nombre         = !empty($datos[2])  ? trim($datos[2]) : '';
                        $nacionalidad   = !empty($datos[3])  ? trim($datos[3]) : '';
                        $ocupacion      = !empty($datos[4])  ? trim($datos[4]) : '';
                        $estado         = !empty($datos[5])  ? trim($datos[5]) : '';
                        $correo         = !empty($datos[7])  ? trim($datos[7]) : '';
                        
                        //VALIDAMOS EL CÓDIGO
                        if ( $codigo === NULL || $codigo == '' || strlen($codigo) != 7 || !preg_match($pattern2, $codigo)) {
                            $contador2 += 1;
                        } 

                        //VALIDAMOS EL DOCUMENTO
                        if ( $documento === NULL || $documento == '' || strlen($documento) > 15 || !preg_match($pattern2, $documento)) {
                            $contador2 += 1;
                        }
                        
                        //VALIDAMOS EL NOMBRE
                        if ( $nombre === NULL || $nombre == '' || strlen($nombre) > 200 ) {
                            $contador2 += 1;
                        }
                        
                        //VALIDAMOS LA NACIONALIDAD
                        if ( $nacionalidad === NULL || $nacionalidad == '' ) {
                            $contador2 += 1;
                        }

                        //VALIDAMOS LA OCUPACIÓN
                        if ( $ocupacion === NULL || $ocupacion == '' ) {
                            $contador2 += 1;
                        }

                        //VALIDAMOS EL ESTADO
                        if ( $estado === NULL || $estado == '' ) {
                            $contador2 += 1;
                        }

                        //VALIDAMOS EL CORREO
                        if ( $correo === NULL || $correo == '' || !preg_match($pattern, $correo) || strlen($correo) > 120 ) {
                            $contador2 += 1;
                        }
                        
                        if ($contador2 == 0) {
                            //VERIFICAMOS SI EL USUARIO EXISTE
                            $stmt = $conn->prepare("SELECT 
                                                        A.NUSUA_ID, 
                                                        Z.CCADE_NOMBRE ESTADO
                                                    FROM SRD_USUARIOS A
                                                    LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NUSUA_ESTADO
                                                    WHERE A.CUSUA_CODIGO = ? AND A.NAUDI_EST_REG = 1;");
                            $stmt->bind_param("s", $codigo);
                            $stmt->execute();
                            $stmt->store_result();
                            if ($stmt->num_rows > 0) {
                                $stmt->bind_result($idusuario, $estadousuario);
                                $stmt->fetch();
                                if ($estadousuario != $estado) {
                                    //ACTUALIZAMOS EL ESTADO DEL USUARIO
                                    $estado = ($estado == 'ACTIVO') ? 1 : 0;
                                    $stmt = $conn->prepare("UPDATE SRD_USUARIOS SET NUSUA_ESTADO = ? WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                                    $stmt->bind_param("ii", $estado, $idusuario);
                                    $stmt->execute();
                                    if ($stmt->affected_rows > 0) {
                                        $num_actualizado++;
                                    }
                                }
                            } else {
                                //OBTENEMOS LA NACIONALIDAD A PARTIR DE SU DESCRIPCIÓN
                                $stmt = $conn->prepare("SELECT NNACI_ID FROM SRD_NACIONALIDAD WHERE CNACI_DESCRIPCION = ? AND NAUDI_EST_REG = 1;");
                                $stmt->bind_param("s", $nacionalidad);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($idnac);
                                    $stmt->fetch();
                                } else {
                                    $idnac = null;
                                }

                                //OBTENEMOS LA OCUPACIÓN A PARTIR DE SU DESCRIPCIÓN
                                $stmt = $conn->prepare("SELECT NOCUP_ID FROM SRD_OCUPACION WHERE COCUP_DESCRIPCION = ? AND NAUDI_EST_REG = 1;");
                                $stmt->bind_param("s", $ocupacion);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($idocu);
                                    $stmt->fetch();
                                } else {
                                    $idocu = null;
                                }

                                $stmt = $conn->prepare("INSERT INTO SRD_USUARIOS (CUSUA_CODIGO, CUSUA_DOCUMENTO, CUSUA_NOMBRES, NNACI_ID, NOCUP_ID, CUSUA_CORREO, NAUDI_REG_INS, NROLE_ID)
                                                        VALUES(?, ?, ?, ?, ?, ?, ?, 2);");
                                $stmt->bind_param("sssiisi", $codigo, $documento, $nombre, $idnac, $idocu, $correo, $V_ID);
                                $stmt->execute();
                                if ($stmt->affected_rows > 0) {
                                    $num_ingresados++;
                                }
                            }
                            $num_procesados++;
                        } else {
                            $error2 = 'El archivo contiene errores en la fila '.($i+1);
                            $contador3 += 1;
                            $earray[$contador3] = $error2;
                        }
                    }
                    $i++;
                }
                //$stmt->close();

                $respuesta = array(
                    'estado' => 1,
                    'mensaje' => '¡Éxito!',
                    'data' => array(
                        '1' => 'Se procesó en total '.$num_procesados.' registro(s)',
                        '2' => 'Se agregaron '.$num_ingresados.' registro(s)',
                        '3' => 'Se actualizaron '.$num_actualizado.' registro(s)',
                        '4' => $contador3 == 0 ? 'No se encontraron errores' : 'Se encontraron '.$contador3.' error(es)'
                    )
                );
                
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