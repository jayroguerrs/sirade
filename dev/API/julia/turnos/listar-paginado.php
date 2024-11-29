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
        $V_TURNO = !isset($_POST["turno"]) ? null : ($_POST["turno"] == '' ? null : $_POST["turno"]);
        $V_TIPO = !isset($_POST["tipo"]) ? null : ($_POST["tipo"] == '' ? null : $_POST["tipo"]);
        $V_INICIO = !isset($_POST["inicio"]) ? null : ($_POST["inicio"] == '' ? null : $_POST["inicio"]);
        $V_FIN = !isset($_POST["fin"]) ? null : ($_POST["fin"] == '' ? null : $_POST["fin"]);
        $V_DESC = !isset($_POST["descripcion"]) ? null : ($_POST["descripcion"] == '' ? null : $_POST["descripcion"]);
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

            // VALIDAMOS EL ID DEL SERVICIO
            if ( $V_TURNO === NULL || $V_TURNO == '' ) {
            } else {
                $stmt = $conn->prepare("SELECT CTURN_ID FROM SRD_TURNO WHERE CTURN_ID = ? AND NAUDI_EST_REG = 1 AND NTURN_ESTADO = 1;");
                $stmt->bind_param("s", $V_SERV);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del turno no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL INICIO QUE DEBE SER DEL TIPO "HH:MM:SS"
            if ( $V_INICIO === NULL || $V_INICIO == '' ) {
            } else {
                if ( !preg_match('/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/', $V_INICIO) ) {
                    $error = 'La hora de inicio no tiene el formato correcto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL FIN QUE DEBE SER DEL TIPO "HH:MM:SS"
            if ( $V_FIN === NULL || $V_FIN == '' ) {
            } else {
                if ( !preg_match('/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/', $V_FIN) ) {
                    $error = 'La hora de fin no tiene el formato correcto';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            if ($contador == 0) {
                
                $query = " SELECT
                                A.CTURN_ID,
                                A.CTURN_DESCRIPCION,
                                A.CTURN_TIPO,
                                A.TTURN_HORA_INICIO,
                                A.TTURN_HORA_FIN,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM SRD_TURNO A
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NTURN_ESTADO
                            LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_TURNO) && isset($V_TURNO)) {
                    $query .= "A.CTURN_ID = '" . $V_TURNO . "' AND ";
                }

                if (!empty($V_DESC) && isset($V_DESC)) {
                    $query .= "A.CTURN_DESCRIPCION = '" . $V_DESC . "' AND ";
                }

                if (!empty($V_TIPO) && isset($V_TIPO)) {
                    $query .= "A.CTURN_TIPO LIKE '%" . $V_TIPO . "%' AND ";
                }

                if (!empty($V_INICIO) && isset($V_INICIO)) {
                    $query .= "A.TTURN_HORA_INICIO = '" . $V_INICIO . "' AND ";
                }

                if (!empty($V_FIN) && isset($V_FIN)) {
                    $query .= "A.TTURN_HORA_FIN = '" . $V_FIN . "' AND ";
                }
                
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query .= "A.NTURN_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CTURN_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY B.CTURN_DESCRIPCION ASC ';
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
                    $sub_array[] = $row["CTURN_ID"];                                                        //[0]
                    $sub_array[] = $row["CTURN_DESCRIPCION"];                                               //[1]
                    $sub_array[] = $row["CTURN_TIPO"];                                                      //[2]
                    if ($row["TTURN_HORA_INICIO"] == '') {
                        $sub_array[] = '-';                                                                 //[3]
                    } else {
                        $sub_array[] = date_format(date_create($row["TTURN_HORA_INICIO"]), "h:i:s A");                                                           //[3]
                    }
                    if ($row["TTURN_HORA_FIN"] == '') {
                        $sub_array[] = '-';                                                                 //[4]
                    } else {
                        $sub_array[] = date_format(date_create($row["TTURN_HORA_FIN"]), "h:i:s A");                                                             //[4]
                    }
                    $sub_array[] = $row["ESTADO"];                                                          //[5]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A");     //[6]
                    $sub_array[] = $row["USR_MODIFICACION"];                                                //[7]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect) {
                    
                    $query2 = "SELECT COUNT(DISTINCT A.CTURN_ID) AS TOTAL
                                FROM SRD_TURNO A 
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