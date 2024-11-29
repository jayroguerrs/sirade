<?php

    include '../../../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_CODIGO = !isset($_POST["codigo"]) ? null : ($_POST["codigo"] == '' ? null : $_POST["codigo"]);
        $V_SOLICITANTE= !isset($_POST["solicitante"]) ? null : ($_POST["solicitante"] == '' ? null : $_POST["solicitante"]);
        $V_FECHASOL = !isset($_POST["fechasol"]) ? null : ($_POST["fechasol"] == '' ? null : $_POST["fechasol"]);
        $V_FECHAREC = !isset($_POST["fecharec"]) ? null : ($_POST["fecharec"] == '' ? null : $_POST["fecharec"]);
        $V_RECEPTOR = !isset($_POST["receptor"]) ? null : ($_POST["receptor"] == '' ? null : $_POST["receptor"]);
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
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

            // VALIDAMOS FECHAS DE SOLICITUD TENGAN FORMATO CORRECTO
            if ( $V_FECHASOL === NULL || $V_FECHASOL === '' ) {
            } else {
                if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHASOL) ) {
                    $error = 'El formato de la fecha de solicitud es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS FECHAS DE RECEPTOR TENGAN FORMATO CORRECTO
            if ( $V_FECHAREC === NULL || $V_FECHAREC === '' ) {
            } else {
                if ( !preg_match('/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/', $V_FECHAREC) ) {
                    $error = 'El formato de la fecha de receptor es incorrecto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $query = " SELECT
                                A.NCATU_ID,
                                A.CCATU_CODIGO,
                                B.CUSUA_NOMBRES SOLICITANTE,
                                A.DCATU_FECHA_SOLICITANTE,
                                A.CTURN_ID_SOLICITANTE,
                                A.DCATU_RANGO_INI_SOL,
                                A.DCATU_RANGO_FIN_SOL,
                                C.CUSUA_NOMBRES RECEPTOR,
                                A.DCATU_FECHA_RECEPTOR,
                                A.CTURN_ID_RECEPTOR,
                                A.DCATU_RANGO_INI_REC,
                                A.DCATU_RANGO_FIN_REC,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM SRD_CAMBIOS_TURNO A
                            LEFT JOIN SRD_USUARIOS B ON B.NUSUA_ID = A.NUSUA_ID_SOLICITANTE AND B.NUSUA_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                            LEFT JOIN SRD_USUARIOS C ON C.NUSUA_ID = A.NUSUA_ID_RECEPTOR AND C.NUSUA_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NCATU_ESTADO
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
                    $query .= "A.NCATU_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CCATU_CODIGO LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY A.CCATU_CODIGO ASC ';
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
                    $sub_array[] = $row["NCATU_ID"];                                                            //[0]
                    $sub_array[] = $row["CCATU_CODIGO"];                                                        //[1]
                    $sub_array[] = $row["SOLICITANTE"];                                                         //[2]
                    $sub_array[] = date_format(date_create($row["DCATU_FECHA_SOLICITANTE"]), "d/m/Y");          //[3]
                    $sub_array[] = $row["CTURN_ID_SOLICITANTE"];                                                //[4]
                    if ($row["DCATU_RANGO_INI_SOL"] != NULL && $row["DCATU_RANGO_INI_SOL"] != '') {
                        $ran_i_sol = date_format(date_create($row["DCATU_RANGO_INI_SOL"]), "d/m/Y h:i:s A");
                    } else {
                        $ran_i_sol = '';
                    }

                    if ($row["DCATU_RANGO_FIN_SOL"] != NULL && $row["DCATU_RANGO_FIN_SOL"] != '') {
                        $ran_f_sol = date_format(date_create($row["DCATU_RANGO_FIN_SOL"]), "d/m/Y h:i:s A");
                    } else {
                        $ran_f_sol = '';
                    }
                    $sub_array[] = $ran_i_sol . " - " . $ran_f_sol;                                             //[5]
                    $sub_array[] = $row["RECEPTOR"];                                                            //[6]
                    $sub_array[] = date_format(date_create($row["DCATU_FECHA_RECEPTOR"]), "d/m/Y");             //[7]
                    $sub_array[] = $row["CTURN_ID_RECEPTOR"];                                                   //[8]
                    if ($row["DCATU_RANGO_INI_REC"] != NULL && $row["DCATU_RANGO_INI_REC"] != '') {
                        $ran_i_rec = date_format(date_create($row["DCATU_RANGO_INI_REC"]), "d/m/Y h:i:s A");
                    } else {
                        $ran_i_rec = '';
                    }

                    if ($row["DCATU_RANGO_FIN_REC"] != NULL && $row["DCATU_RANGO_FIN_REC"] != '') {
                        $ran_f_rec = date_format(date_create($row["DCATU_RANGO_FIN_REC"]), "d/m/Y h:i:s A");
                    } else {
                        $ran_f_rec = '';
                    }
                    $sub_array[] = $ran_i_rec . " - " . $ran_f_rec;                                             //[9]
                    $sub_array[] = $row["ESTADO"];                                                              //[10]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A");         //[11]
                    $sub_array[] = $row["USR_MODIFICACION"];                                                    //[12]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect) {
                    
                    $query2 = "SELECT COUNT(A.NCATU_ID) AS TOTAL
                                FROM SRD_CAMBIOS_TURNO A 
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