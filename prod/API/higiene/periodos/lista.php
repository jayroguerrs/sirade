<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_PERIO = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
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
                                A.NHPER_ID,
                                A.CHPER_DESCRIPCION,
                                A.DHPER_INICIO,
                                A.DHPER_FIN,
                                FN_OBTENER_NOMBRE_ESTADO(A.NHPER_ESTADO) ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                FN_OBTENER_NOMBRE_POR_ID(IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS)) USR_MODIFICACION
                            FROM SRD_HIG_PERIODO A
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_PERIO) && isset($V_PERIO)) {
                    $query .= "A.CHPER_DESCRIPCION = '" . $V_PERIO . "' AND ";
                }

                if (!empty($fecha_inicio) && isset($fecha_inicio)) {
                    $query .= "A.DHPER_INICIO >= '" . $fecha_inicio . "' AND ";
                }

                if (!empty($fecha_fin) && isset($fecha_fin)) {
                    $query .= "A.DHPER_INICIO <= '" . $fecha_fin . "' AND ";
                } 
        
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query .= "A.NHPER_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CHPER_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR FN_OBTENER_NOMBRE_ESTADO(A.NHPER_ESTADO) LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY A.DHPER_FIN DESC ';
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
                    $sub_array[] = $row["NHPER_ID"];                                                    //[0]
                    $sub_array[] = $row["CHPER_DESCRIPCION"];                                           //[1]
                    $sub_array[] = date_format(date_create($row["DHPER_INICIO"]), "d/m/Y");             //[2]
                    $sub_array[] = date_format(date_create($row["DHPER_FIN"]), "d/m/Y");                //[3]
                    $sub_array[] = $row["ESTADO"];                                                      //[4]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[5]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[6]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect)
                {
                    $query2 = "SELECT COUNT(DISTINCT A.NHPER_ID) AS TOTAL
                                FROM SRD_HIG_PERIODO A 
                                WHERE A.NAUDI_EST_REG = 1 ";
        
                    $result = $connect->query($query2);
                    return $result->fetch_assoc()['TOTAL'];
                }
                $respuesta = array(
                    "draw"    => intval($_POST["draw"]),
                    "recordsTotal"  =>  get_all_data($conn),
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