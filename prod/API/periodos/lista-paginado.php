<?php

    include '../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_APP = !isset($_POST["idapp"]) ? null : ($_POST["idapp"] == '' ? null : $_POST["idapp"]);
        $V_PERIO = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_RFECHA = !isset($_POST["fecha"]) ? null : ($_POST["fecha"] == '' ? null : $_POST["fecha"]);
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();
            $est = 0;
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

            // VALIDAMOS UNA APLICACIÓN CORRECTA
            if ( $V_APP === NULL || $V_APP == '' ) {
                $error = 'La aplicación es obligatoria';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT CAPLI_ID FROM SRD_APLICACIONES WHERE CAPLI_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_APP);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows == 0) {
                    $error = 'La aplicación no se encuentra registrada';
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
                                A.NPERI_ID,
                                A.CPERI_DESCRIPCION,
                                A.DPERI_INICIO,
                                A.DPERI_FIN,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM SRD_PERIODO A
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NPERI_ESTADO
                            LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                            WHERE A.CAPLI_ID = '" . $V_APP . "' AND ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_PERIO) && isset($V_PERIO)) {
                    $query .= "A.CPERI_DESCRIPCION = '" . $V_PERIO . "' AND ";
                }

                if (!empty($fecha_inicio) && isset($fecha_inicio)) {
                    $query .= "A.DPERI_INICIO >= '" . $fecha_inicio . "' AND ";
                }

                if (!empty($fecha_fin) && isset($fecha_fin)) {
                    $query .= "A.DPERI_INICIO <= '" . $fecha_fin . "' AND ";
                } 
        
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query .= "A.NPERI_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CPERI_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY A.DPERI_FIN DESC ';
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
                    $sub_array[] = $row["NPERI_ID"];                                                    //[0]
                    $sub_array[] = $row["CPERI_DESCRIPCION"];                                           //[1]
                    $sub_array[] = date_format(date_create($row["DPERI_INICIO"]), "d/m/Y");             //[2]
                    $sub_array[] = date_format(date_create($row["DPERI_FIN"]), "d/m/Y");                //[3]
                    $sub_array[] = $row["ESTADO"];                                                      //[4]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[5]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[6]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect, $V_APP)
                {
                    $query2 = "SELECT COUNT(DISTINCT A.NPERI_ID) AS TOTAL
                                FROM SRD_PERIODO A 
                                WHERE A.NAUDI_EST_REG = 1 AND A.CAPLI_ID = '" . $V_APP . "' ";
        
                    $result = $connect->query($query2);
                    return $result->fetch_assoc()['TOTAL'];
                }
                $respuesta = array(
                    "draw"    => intval($_POST["draw"]),
                    "recordsTotal"  =>  get_all_data($conn, $V_APP),
                    "recordsFiltered" => $number_filter_row,
                    "data"    => $data
                );
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
    
    $conn->close();
?>