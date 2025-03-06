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
                $query0= '';
                if (!empty($V_ESTA) && isset($V_ESTA) || $V_ESTA == '0') {
                    $query0 .= "A.NJENC_ESTADO = " . $V_ESTA . " AND ";
                }

                $query = " SELECT 
                                SP.NPERI_ID,
                                SP.CPERI_DESCRIPCION,
                                SP.DPERI_INICIO,
                                SP.DPERI_FIN,
                                Z.CCADE_NOMBRE ESTADO,
                                IFNULL(SP.DAUDI_REG_UPD, SP.DAUDI_REG_INS) FEC_MODIFICACION,
                                CONCAT(Y.CUSUA_CODIGO, ' - ', Y.CUSUA_NOMBRES) AS USR_MODIFICACION
                            FROM srd_periodo SP
                            LEFT JOIN SRD_CATALOGO_DETALLE Z ON Z.NCATA_ID = 11 AND Z.CCADE_CODIGO = SP.NPERI_ESTADO
                            LEFT JOIN SRD_USUARIOS Y ON Y.NUSUA_ID = IFNULL(SP.NAUDI_REG_UPD, SP.NAUDI_REG_INS) AND Y.NUSUA_ESTADO = 1 AND Y.NAUDI_EST_REG = 1
                            WHERE SP.NPERI_ID IN ( SELECT
                                                        A.NPERI_ID
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN SRD_PERIODO B ON A.NPERI_ID = B.NPERI_ID AND B.NAUDI_EST_REG = 1 AND B.NPERI_ESTADO = 1
                                                    INNER JOIN SRD_JCI_AREAS_SUPER C ON A.CAREA_ID = C.CAREA_ID AND C.NAUDI_EST_REG = 1 AND C.NASUP_ESTADO = 1 
                                                    WHERE  " . $query0 . " A.NAUDI_EST_REG = 1  
                                                    GROUP BY A.NPERI_ID  
                            ) AND ";
                
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    //$query .= "A.NJENC_SUPERVISOR = " . $V_ID . " AND ";
                }

                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "SP.NPERI_ID = " . $V_PERI . " AND ";
                }

                if (!empty($fecha_inicio) && isset($fecha_inicio)) {
                    $query .= "SP.DPERI_INICIO >= '" . $fecha_inicio . "' AND ";
                }

                if (!empty($fecha_fin) && isset($fecha_fin)) {
                    $query .= "SP.DPERI_INICIO <= '" . $fecha_fin . "' AND ";
                }
                
                //Fin Filtros de Busqueda personalizados
        
                $query .= " SP.NPERI_ESTADO = 1 AND SP.NAUDI_EST_REG = 1 AND ";
                
                if (isset($_POST["search"]["value"])) {
                    $query .= '(SP.CPERI_DESCRIPCION LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR Z.CCADE_NOMBRE LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
                
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY SP.DPERI_FIN DESC ';
                }
                $query1 = '';
                if ($_POST["length"] != -1) {
                    $query1 .= 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
                }
                //echo $query;
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
                
                function get_all_data($connect, $V_ID, $V_ROL)
                {
                    $query2 = "SELECT 
                                    COUNT(*) as TOTAL
                                FROM srd_periodo SP
                                LEFT JOIN srd_jci_encuestas SJP ON SJP.NPERI_ID = SP.NPERI_ID AND SJP.NPERI_ID IS NULL
                                WHERE SP.NPERI_ID IN ( SELECT
                                                            A.NPERI_ID
                                                        FROM SRD_JCI_ENCUESTAS A
                                                        INNER JOIN SRD_PERIODO B ON A.NPERI_ID = B.NPERI_ID AND B.NAUDI_EST_REG = 1 AND B.NPERI_ESTADO = 1
                                                        INNER JOIN SRD_JCI_AREAS_SUPER C ON A.CAREA_ID = C.CAREA_ID AND C.NAUDI_EST_REG = 1 AND C.NASUP_ESTADO = 1 
                                                        WHERE  A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1  
                                                        GROUP BY A.NPERI_ID  
                                ) AND  SP.NPERI_ESTADO = 1 AND SP.NAUDI_EST_REG = 1 ";
                    
                    //Filtros de Busqueda personalizados
                    if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                        $query2 .= "AND SJP.NJENC_SUPERVISOR = " . $V_ID . " ";
                    }
                    //Fin Filtros de Busqueda personalizados
        
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