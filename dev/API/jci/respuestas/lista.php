<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
        $V_RESP = !isset($_POST["respuesta"]) ? null : ($_POST["respuesta"] == '' ? null : $_POST["respuesta"]);
        $V_VALOR = !isset($_POST["valor"]) ? null : ($_POST["valor"] == '' ? null : $_POST["valor"]);
        $V_ORDEN = !isset($_POST["orden"]) ? null : ($_POST["orden"] == '' ? null : $_POST["orden"]);
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            $erray = array();
            session_start();
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

            // VALIDAMOS EL ID DE LA RESPUESTA
            if ( $V_RESP === NULL || $V_RESP == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT NJRESP_ID FROM SRD_JCI_RESPUESTA WHERE NJRESP_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_RESP);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID de la respuesta no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }
            
            // VALIDAMOS EL ORDEN
            if ( $V_ORDEN === NULL || $V_ORDEN == '' ) {
            } else {
                // EL ORDEN DEBE SER UN NÚMERO
                if ( !is_numeric($V_ORDEN) ) {
                    $error = 'El orden debe ser un número';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $column = array(
                    'NJRESP_ID',
                    'CJRESP_DESCRIPCION',
                    'NJRESP_VALOR',
                    'CJRESP_CLASE',
                    'CJRESP_ICONO',
                    'NJRESP_ORDEN',
                    'ESTADO',
                    'FEC_MODIFICACION',
                    'USR_MODIFICACION'
                );
                $query = " SELECT
                                A.NJRESP_ID,
                                A.CJRESP_DESCRIPCION,
                                A.NJRESP_VALOR,
                                A.CJRESP_CLASE,
                                A.CJRESP_ICONO,
                                A.NJRESP_ORDEN,
                                FN_OBTENER_NOMBRE_ESTADO(A.NJRESP_ESTADO) ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                FN_OBTENER_NOMBRE_POR_ID(IFNULL(A.NAUDI_REG_UPD , A.NAUDI_REG_INS)) USR_MODIFICACION
                            FROM SRD_JCI_RESPUESTAS A
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_PREG) && isset($V_PREG)) {
                    $query .= "A.CJRESP_DESCRIPCION LIKE %'" . $V_PREG . "'% AND ";
                }
                
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query .= "A.NJPRE_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CJRESP_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR A.NJRESP_VALOR LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR FN_OBTENER_NOMBRE_ESTADO(A.NJRESP_ESTADO) LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY A.NJRESP_ORDEN ASC ';
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
                    $sub_array[] = $row["NJRESP_ID"];                                                   //[0]
                    $sub_array[] = $row["CJRESP_DESCRIPCION"];                                          //[1]
                    $sub_array[] = $row["NJRESP_VALOR"];                                                //[2]
                    $sub_array[] = $row["CJRESP_CLASE"];                                                //[3]
                    $sub_array[] = $row["CJRESP_ICONO"];                                                //[4]
                    $sub_array[] = $row["NJRESP_ORDEN"];                                                //[5]
                    $sub_array[] = $row["ESTADO"];                                                      //[6]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[7]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[8]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect) {
                    
                    $query2 = "SELECT COUNT(DISTINCT A.NJRESP_ID) AS TOTAL
                                FROM SRD_JCI_RESPUESTAS A 
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