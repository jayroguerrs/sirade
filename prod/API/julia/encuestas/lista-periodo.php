<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_FECH = !isset($_POST["fecinicio"]) ? null : ($_POST["fecinicio"] == '' ? null : $_POST["fecinicio"]);
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

            if ($contador == 0) {
                $column = array(
                    'CJPER_ID',
                    'DPERI_INICIO',
                    'DPERI_FIN',
                    'ESTADO',
                    'FEC_MODIFICACION',
                    'USR_MODIFICACION'
                );
                $query = " SELECT
                                A.CJPER_ID,
                                B.DPERI_INICIO,
                                B.DPERI_FIN,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(A.DAUDI_REG_UPD, A.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM SRD_JCI_ENCUESTAS A
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = A.NJPER_ESTADO
                            LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(A.NAUDI_REG_UPD, A.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                            INNER JOIN SRD_PERIODO B ON A.CJPER_ID = B.CJPER_ID
                            INNER JOIN SRD_JCI_AREAS_SUPER C ON A.CAREA_ID = C.CAREA_ID
                            WHERE ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    $query .= "A.NJENC_SUPERVISOR = " . $V_ID . " AND ";
                }
        
                if (!empty($V_ESTA) && isset($V_ESTA)) {
                    $query .= "B.NPERI_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados
        
                $query .= " A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(A.CJPER_ID LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                $query .= " GROUP BY CJPER_ID  ";
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $column[$_POST['order']['0']['column']] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY B.DPERI_FIN DESC ';
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
                    $sub_array[] = $row["CJPER_ID"];                                                    //[0]
                    $sub_array[] = date_format(date_create($row["DPERI_INICIO"]), "d/m/Y");             //[1]
                    $sub_array[] = date_format(date_create($row["DPERI_FIN"]), "d/m/Y");                //[2]
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
                                        A.CJPER_ID TOTAL
                                    FROM SRD_PERIODO A
                                    INNER JOIN SRD_JCI_ENCUESTAS B ON B.CJPER_ID = A.CJPER_ID
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