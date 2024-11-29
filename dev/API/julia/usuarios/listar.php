<?php
    include '../../../admin/connection/bd_connection.php';
    
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=data.csv');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
        
    // Obtener los valores enviados desde el frontend
    $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
    $V_NOMBRES = !isset($_POST["nombres"]) ? null : ($_POST["nombres"] == '' ? null : $_POST["nombres"]);
    $V_CODIGO = !isset($_POST["codigo"]) ? null : ($_POST["codigo"] == '' ? null : $_POST["codigo"]);
    $V_DOCU = !isset($_POST["documento"]) ? null : ($_POST["documento"] == '' ? null : $_POST["documento"]);
    $V_OCUP = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);
    $V_DESEM = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
    $V_NACI = !isset($_POST["nacionalidad"]) ? null : ($_POST["nacionalidad"] == '' ? null : $_POST["nacionalidad"]);
    $V_ROL_USUARIO = !isset($_POST["rol"]) ? null : ($_POST["rol"] == '' ? null : $_POST["rol"]);
    $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
    $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

    try {
        
        $contador = 0;
        $est = 0;
        $erray = array();
        session_start();
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
            $error = 'El ID del supervisor es obligatorio';
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

        // VALIDAMOS EL NOMBRE DEBE SER ALFABÉTICO Y DEBE TENER MÁXIMO 100 CARACTERES USA REGEXP
        if ($V_NOMBRES != NULL || $V_NOMBRES != '') {
        } else {
            if (preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,100}$/', $V_NOMBRES)) {
            } else {
                $error = 'El nombre debe ser alfabético y tener máximo 100 caracteres';
                $contador += 1;
                $earray[$contador] = $error;
            }
        }

        // VALIDAMOS EL CÓDIGO DEBE SER NUMÉRICO Y PUEDE EMPEZAR CON CERO Y SER DE 7 DÍGITOS USA REGEXP
        if ($V_CODIGO != NULL || $V_CODIGO != '') {
        } else {
            if (preg_match('/^\d{7}$/', $V_CODIGO)) {
            } else {
                $error = 'El código debe ser numérico y de 7 dígitos';
                $contador += 1;
                $earray[$contador] = $error;
            }
        }

        // VALIDAMOS EL DOCUMENTO DEBE SER NUMÉRICO Y PUEDE EMPEZAR CON CERO Y SER DE 7 DÍGITOS USA REGEXP
        if ($V_DOCU != NULL || $V_DOCU != '') {
        } else {
            if (preg_match('/^\d{7, 15}$/', $V_DOCU)) {
            } else {
                $error = 'El documento debe ser numérico y menor a 15 dígitos';
                $contador += 1;
                $earray[$contador] = $error;
            }
        }

        // VALIDAMOS EL ID DEL DESEMPEÑO
        if ( $V_DESEM === NULL || $V_DESEM == '' ) {
        } else {
            $stmt = $conn->prepare("SELECT NDESE_ID FROM SRD_DESEMPENIO WHERE NDESE_ID = ? AND NAUDI_EST_REG = 1 AND NDESE_ESTADO = 1;");
            $stmt->bind_param("i", $V_DESEM);
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

        // VALIDAMOS EL ID DE LA OCUPACIÓN
        if ( $V_OCUP === NULL || $V_OCUP == '' ) {
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

        // VALIDAMOS EL ID DE LA NACIONALIDAD
        if ( $V_NACI === NULL || $V_NACI == '' ) {
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

        // VALIDAMOS EL ID DEL ROL DE USUARIO
        if ( $V_ROL_USUARIO === NULL || $V_ROL_USUARIO == '' ) {
        } else {
            $stmt = $conn->prepare("SELECT NROLE_ID FROM SRD_ROLES WHERE NROLE_ID = ? AND NAUDI_EST_REG = 1 AND NROLE_ESTADO = 1;");
            $stmt->bind_param("i", $V_ROL_USUARIO);
            $stmt->execute();
            $stmt->store_result();
            if ($stmt->num_rows > 0) {
            } else {
                $error = 'El ID del rol de usuario no se encuentra registrado';
                $contador += 1;
                $earray[$contador] = $error;
            }
            $stmt->close();
        }

        if ($contador == 0) {
            
            $query = "  SELECT
                            A.NUSUA_ID ID,
                            A.CUSUA_CODIGO 'CÓDIGO',
                            A.CUSUA_DOCUMENTO 'DOCUMENTO',
                            A.CUSUA_NOMBRES 'NOMBRES',
                            C.COCUP_DESCRIPCION 'OCUPACIÓN',
                            B.CDESE_DESCRIPCION 'DESEMPEÑO',
                            D.CNACI_DESCRIPCION 'NACIONALIDAD',
                            A.CUSUA_CORREO 'CORREO',
                            GROUP_CONCAT(E.CROLE_NOMBRE SEPARATOR ', ') AS ROLES,
                            Z.CCADE_NOMBRE ESTADO,
                            IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) 'FECHA DE MODIFICACIÓN',
                            CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS 'USUARIO DE MODIFICACIÓN'
                        FROM SRD_USUARIOS A
                        LEFT JOIN SRD_DESEMPENIO B ON A.NDESE_ID = B.NDESE_ID AND B.NAUDI_EST_REG = 1 AND B.NDESE_ESTADO = 1
                        LEFT JOIN SRD_OCUPACION C ON A.NOCUP_ID = C.NOCUP_ID AND C.NAUDI_EST_REG = 1 AND C.NOCUP_ESTADO = 1
                        LEFT JOIN SRD_NACIONALIDAD D ON A.NNACI_ID = D.NNACI_ID AND D.NAUDI_EST_REG = 1 AND D.NNACI_ESTADO = 1
                        LEFT JOIN SRD_ROLES_USUARIO F ON A.NUSUA_ID = F.NUSUA_ID AND F.NROSU_ESTADO = 1 AND F.NAUDI_EST_REG = 1
                        LEFT JOIN SRD_ROLES E ON F.NROLE_ID = E.NROLE_ID AND E.NAUDI_EST_REG = 1 AND E.NROLE_ESTADO = 1
                        LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NUSUA_ESTADO
                        LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                        WHERE ";
            
            //Filtros de Busqueda personalizados
            if (!empty($V_NOMBRES) && isset($V_NOMBRES)) {
                $query .= "A.CUSUA_NOMBRES LIKE '%" . $V_NOMBRES . "%' AND ";
            }

            if (!empty($V_CODIGO) && isset($V_CODIGO)) {
                $query .= "A.CUSUA_CODIGO = '" . $V_CODIGO . "' AND ";
            }
            
            if (!empty($V_DOCU) && isset($V_DOCU)) {
                $query .= "A.CUSUA_DOCUMENTO = '" . $V_DOCU . "' AND ";
            }         

            if (!empty($V_DESEM) && isset($V_DESEM)) {
                $query .= "A.NDESE_ID = " . $V_DESEM . " AND ";
            }

            if (!empty($V_OCUP) && isset($V_OCUP)) {
                $query .= "A.NOCUP_ID = " . $V_OCUP . " AND ";
            }
            
            if (!empty($V_NACI) && isset($V_NACI)) {
                $query .= "A.NNACI_ID = " . $V_NACI . " AND ";
            }

            if (!empty($V_ROL_USUARIO) && isset($V_ROL_USUARIO)) {
                $query .= "E.NROLE_ID = " . $V_ROL_USUARIO . " AND ";
            }
            
            if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                $query .= "A.NUSUA_ESTADO = " . $V_ESTA . " AND ";
            }
            //Fin Filtros de Busqueda personalizados
    
            $query .= " A.NAUDI_EST_REG = 1
                        GROUP BY A.NUSUA_ID, Z.CCADE_NOMBRE, Y.CUSUA_CODIGO, Y.CUSUA_NOMBRES; ";
            
            // Ejecutar la consulta
            $result = $conn->query($query);

            // Verificar si hay resultados
            if ($result->num_rows > 0) {
                // Abrir la salida CSV
                $output = fopen('php://output', 'w');
                fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

                // Obtener los nombres de las columnas
                $columnas = $result->fetch_fields();
                $encabezados = [];
                foreach ($columnas as $columna) {
                    $encabezados[] = $columna->name;
                }
                
                // Escribir cabecera del CSV
                fputcsv($output, $encabezados);
                
                // Escribir filas del resultado en el CSV
                while ($row = $result->fetch_assoc()) {
                    $row['CÓDIGO'] = '="' . $row['CÓDIGO'] . '"';
                    $row['DOCUMENTO'] = '="' . $row['DOCUMENTO'] . '"';
                    fputcsv($output, $row);
                }

                // Cerrar el archivo CSV
                fclose($output);
            } else {
                echo 'No hay datos disponibles para exportar.';
            }

            // Cerrar la conexión
            $conn->close();
            exit();

        } else {
            
            // Crear un archivo CSV con los errores
            $output = fopen('php://output', 'w');
            fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));
            fputcsv($output, $earray);
            fclose($output);
            exit();
            
        }

    } catch(Exception $e) {
        // Manejo de errores
        echo 'Error: ' . $e->getMessage();
    }

?>