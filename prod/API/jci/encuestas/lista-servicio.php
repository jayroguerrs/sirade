<?php

    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
        $V_PERI = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
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

            if ($contador == 0) {
                $query0 = '';
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query0 .= "A.NJENC_ESTADO = " . $V_ESTA . " AND ";
                }

                $query = " SELECT
                                SA.CAREA_ID,
                                SA.CAREA_DESCRIPCION,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(SA.DAUDI_REG_UPD, SA.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM srd_areas SA
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = SA.NAREA_ESTADO
                            LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(SA.NAUDI_REG_UPD, SA.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                            WHERE SA.CAREA_ID IN ( 	SELECT A.CAREA_ID
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID AND B.NASUP_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                                    INNER JOIN SRD_AREAS C ON C.CAREA_ID = B.CAREA_ID AND C.NAREA_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                                                    WHERE A.NPERI_ID = " . $V_PERI . " AND " . $query0 . " A.NAUDI_EST_REG = 1
                                                    GROUP BY A.CAREA_ID
                            ) AND ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    //$query .= "A.NJENC_SUPERVISOR = " . $V_ID . " AND ";
                }

                if (!empty($V_SERV) && isset($V_SERV) || $V_SERV == '0') {
                    $query .= "SA.CAREA_DESCRIPCION LIKE '%" . $V_SERV . "%' AND ";
                }
        
                //Fin Filtros de Busqueda personalizados
        
                $query .= " SA.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(SA.CAREA_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY SA.CAREA_DESCRIPCION ASC ';
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
                    $sub_array[] = $row["CAREA_ID"];                                                    //[0]
                    $sub_array[] = $row["CAREA_DESCRIPCION"];                                           //[1]
                    $sub_array[] = $row["ESTADO"];                                                      //[2]
                    $sub_array[] = date_format(date_create($row["FEC_MODIFICACION"]), "d/m/Y h:i:s A"); //[3]
                    $sub_array[] = $row["USR_MODIFICACION"];                                            //[4]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect, $V_ID, $V_ROL, $V_PERI) {
                    
                    $query2 = "SELECT
                                    COUNT(*) AS TOTAL
                                FROM srd_areas SA
                                LEFT JOIN srd_jci_encuestas SJP ON SJP.NPERI_ID = SA.CAREA_ID AND SJP.CAREA_ID IS NULL
                                WHERE SA.CAREA_ID IN ( 	SELECT A.CAREA_ID
                                                        FROM SRD_JCI_ENCUESTAS A
                                                        INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID AND B.NASUP_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                                        INNER JOIN SRD_AREAS C ON C.CAREA_ID = B.CAREA_ID AND C.NAREA_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                                                        WHERE A.NPERI_ID = " . $V_PERI . " AND A.NAUDI_EST_REG = 1
                                                        GROUP BY A.CAREA_ID
                                ) AND  SA.NAREA_ESTADO = 1 AND SA.NAUDI_EST_REG = 1 ";
                    
                    //Filtros de Busqueda personalizados
                    if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                        $query2 .= " AND SJP.NJENC_SUPERVISOR = " . $V_ID . " ";
                    }
                    //Fin Filtros de Busqueda personalizados
                    $result = $connect->query($query2);
                    return $result->fetch_assoc()['TOTAL'];
                }
                $respuesta = array(
                    "draw"    => intval($_POST["draw"]),
                    "recordsTotal"  =>  get_all_data($conn, $V_ID, $V_ROL, $V_PERI),
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