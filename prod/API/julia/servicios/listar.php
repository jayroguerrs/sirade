<?php
    include '../../../admin/connection/bd_connection.php';
    
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=data.csv');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
        
    // Obtener los valores enviados desde el frontend
    $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
    $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
    $V_DESC = !isset($_POST["descripcion"]) ? null : ($_POST["descripcion"] == '' ? null : $_POST["descripcion"]);
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
                                    WHERE A.NUSUA_ID = ? AND A.NAUDI_EST_REG = 1 AND B.NROLE_ID = ?;");
            $stmt->bind_param("ii", $V_ID, $V_ROL);
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

        // VALIDAMOS EL ID DEL SERVICIO
        if ( $V_SERV === NULL || $V_SERV == '' ) {
        } else {
            $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1 AND NAREA_ESTADO = 1;");
            $stmt->bind_param("s", $V_SERV);
            $stmt->execute();
            $stmt->store_result();
            if ($stmt->num_rows > 0) {
            } else {
                $error = 'El ID del servicio no se encuentra registrado';
                $contador += 1;
                $earray[$contador] = $error;
            }
            $stmt->close();
        }

        if ($contador == 0) {
            
            $query = " SELECT
                            A.CAREA_ID 'ID SERVICIO',
                            A.CAREA_DESCRIPCION 'DESCRIPCIÓN',
                            Z.CCADE_NOMBRE ESTADO,
                            IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) 'FECHA DE MODIFICACIÓN',
                            CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS 'USUARIO DE MODIFICACIÓN'
                        FROM SRD_AREAS A
                        LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NAREA_ESTADO
                        LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                        WHERE ";
            
            //Filtros de Busqueda personalizados
            if (!empty($V_SERV) && isset($V_SERV)) {
                $query .= "A.CAREA_ID = '" . $V_SERV . "' AND ";
            }

            if (!empty($V_DESC) && isset($V_DESC)) {
                $query .= "A.CAREA_DESCRIPCION = '" . $V_DESC . "' AND ";
            }
            
            if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                $query .= "A.NAREA_ESTADO = " . $V_ESTA . " AND ";
            }
            //Fin Filtros de Busqueda personalizados
    
            $query .= " A.NAUDI_EST_REG = 1; ";
            
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
                    //$row['CÓDIGO'] = '="' . $row['CÓDIGO'] . '"';
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