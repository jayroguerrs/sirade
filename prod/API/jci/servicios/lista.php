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
        $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_SUPER = !isset($_POST["supervisor"]) ? null : ($_POST["supervisor"] == '' ? null : $_POST["supervisor"]);
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

            // VALIDAMOS EL ID DEL SERVICIO
            if ( $V_SERV === NULL || $V_SERV == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT CAREA_ID FROM SRD_JCI_AREAS_SUPER WHERE CAREA_ID = ? AND NAUDI_EST_REG = 1 AND NASUP_ESTADO = 1;");
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
                
                $column = array(
                    'NASUP_ID',
                    'CAREA_DESCRIPCION',
                    'ESTADO',
                    'FEC_MODIFICACION',
                    'USR_MODIFICACION',
                    'SUPERVISOR'
                );
                $query = " SELECT
                                A.NASUP_ID,
                                B.CAREA_DESCRIPCION,
                                FN_OBTENER_NOMBRE_ESTADO(A.NASUP_ESTADO) ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                FN_OBTENER_NOMBRE_POR_ID(IFNULL(A.NAUDI_REG_UPD , A.NAUDI_REG_INS)) USR_MODIFICACION,
                                C.CUSUA_NOMBRES SUPERVISOR
                            FROM SRD_JCI_AREAS_SUPER A
                            LEFT JOIN SRD_AREAS B ON A.CAREA_ID = B.CAREA_ID
                            LEFT JOIN SRD_USUARIOS C ON A.NUSUA_ID = C.NUSUA_ID
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_SUPER) && isset($V_SUPER)) {
                    $query .= "A.NUSUA_ID = " . $V_SUPER . " AND ";
                }

                if (!empty($V_SERV) && isset($V_SERV)) {
                    $query .= "A.CAREA_ID = '" . $V_SERV . "' AND ";
                }
                
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query .= "A.NASUP_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(B.CAREA_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR FN_OBTENER_NOMBRE_ESTADO(A.NASUP_ESTADO) LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY B.CAREA_DESCRIPCION ASC ';
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
                    $sub_array[] = $row["NASUP_ID"];                                                    //[0]
                    $sub_array[] = $row["CAREA_DESCRIPCION"];                                           //[1]
                    $sub_array[] = $row["ESTADO"];                                                      //[2]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[3]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[4]
                    $sub_array[] = $row["SUPERVISOR"];                                                  //[5]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect) {
                    
                    $query2 = "SELECT COUNT(DISTINCT A.CAREA_ID) AS TOTAL
                                FROM SRD_JCI_AREAS_SUPER A 
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