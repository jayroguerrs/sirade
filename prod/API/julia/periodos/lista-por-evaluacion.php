<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_PERI = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_RFECHA = !isset($_POST["fecha"]) ? null : ($_POST["fecha"] == '' ? null : $_POST["fecha"]);
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();
            session_start();
            $contadorsession = 0;

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del supervisor es obligatorio';
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

            // VALIDAMOS LA FECHA
            if ( $V_RFECHA === NULL || $V_RFECHA == '' ) {
            } else {
                // SEPARAMOS LA FECHA QUE VIENE EN FORMATO 'YYYY-MM-DD al YYYY-MM-DD'
                $fecha = explode(' al ', $V_RFECHA);
                $fecha_inicio = $fecha[0];
                $fecha_fin = $fecha[1];
                // VALIDAMOS QUE LAS FECHA SEAN VÁLIDAS Y QUE LA FECHA DE INICIO SEA MENOR A LA FECHA DE FIN
                if ( !strtotime($fecha_inicio) || !strtotime($fecha_fin) || strtotime($fecha_inicio) > strtotime($fecha_fin) ) {
                    $error = 'La fecha es incorrecta';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $query = " SELECT
                                A.NJPER_ID,
                                B.CJPER_DESCRIPCION,
                                B.DJPER_INICIO,
                                B.DJPER_FIN,
                                FN_OBTENER_NOMBRE_ESTADO(B.NJPER_ESTADO) ESTADO,
                                IFNULL(B.DAUDI_REG_UPD, B.DAUDI_REG_INS) FEC_MODIFICACION,
                                FN_OBTENER_NOMBRE_POR_ID(IFNULL(B.NAUDI_REG_UPD, B.NAUDI_REG_INS)) USR_MODIFICACION
                            FROM SRD_JCI_ENCUESTAS A
                            INNER JOIN SRD_JCI_PERIODO B ON A.CJPER_ID = B.CJPER_ID
                            INNER JOIN SRD_JCI_AREAS_SUPER C ON A.CAREA_ID = C.CAREA_ID
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    $query .= "A.NJENC_SUPERVISOR = " . $V_ID . " AND ";
                }

                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "B.CJPER_DESCRIPCION = '" . $V_PERI . "' AND ";
                }

                if (!empty($fecha_inicio) && isset($fecha_inicio)) {
                    $query .= "B.DJPER_INICIO >= '" . $fecha_inicio . "' AND ";
                }

                if (!empty($fecha_fin) && isset($fecha_fin)) {
                    $query .= "B.DJPER_INICIO <= '" . $fecha_fin . "' AND ";
                } 
        
                if (!empty($V_ESTA) && isset($V_ESTA)) {
                    $query .= "B.NJPER_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.NJPER_ID LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR FN_OBTENER_NOMBRE_ESTADO(B.NJPER_ESTADO) LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                $query .= " GROUP BY CJPER_ID  ";
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY B.DJPER_FIN DESC ';
                }
                $query1 = '';
                if ($_POST["length"] != -1) {
                    $query1 .= 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
                }
        
                $result = $conn->query($query);
                $number_filter_row = $result->num_rows;
        
                $result = $conn->query($query . $query1);
                $data = array();
            
                while($row = $result->fetch_assoc()) {
                    $sub_array = array();
                    $sub_array[] = $row["NJPER_ID"];                                                    //[0]
                    $sub_array[] = date_format(date_create($row["DJPER_INICIO"]), "d/m/Y");             //[1]
                    $sub_array[] = date_format(date_create($row["DJPER_FIN"]), "d/m/Y");                //[2]
                    $sub_array[] = $row["ESTADO"];                                                      //[3]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[4]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[5]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect, $V_ID, $V_ROL)
                {
                    $query2 = "SELECT COUNT(TOTAL) AS TOTAL
                                FROM(
                                    SELECT DISTINCT
                                        A.NJPER_ID TOTAL
                                    FROM SRD_JCI_PERIODO A
                                    INNER JOIN SRD_JCI_ENCUESTAS B ON B.NJPER_ID = A.NJPER_ID
                                    WHERE A.NAUDI_EST_REG = 1 ";
                    
                    //Filtros de Busqueda personalizados
                    if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                        $query2 .= "AND B.NJENC_SUPERVISOR = " . $V_ID . " ";
                    }
                    //Fin Filtros de Busqueda personalizados
        
                    $query2 .= " ) AS subconsulta;";
        
                    $result = $connect->query($query2);
                    return $result->fetch_assoc()['TOTAL'];
                }
                $respuesta = array(
                    "draw"    => intval($_POST["draw"]),
                    "recordsTotal"  =>  get_all_data($conn, $V_ID, $V_ROL),
                    "recordsFiltered" => $number_filter_row,
                    "data"    => $data
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
    
    $conn->close();
?>