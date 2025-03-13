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
        $V_SERVI = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_NACI = !isset($_POST["nacionalidad"]) ? null : ($_POST["nacionalidad"] == '' ? null : $_POST["nacionalidad"]);
        $V_COLAB = !isset($_POST["personal"]) ? null : ($_POST["personal"] == '' ? null : $_POST["personal"]);
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] == '' ? null : $_POST["estado"]);
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
                
                $query = "SELECT 
                                A.NJENC_ID,
                                D.CUSUA_NOMBRES,
                                E.CNACI_DESCRIPCION,
                                E.CNACI_IMAGEN,
                                C.CAREA_ID,
	                            C.NPERI_ID,
	                            D.NUSUA_ID,
                                D.CUSUA_IMG,
                                -- A.NJPRE_ID,
                                -- A.NJRESP_ID,
                                IFNULL(ROUND(SUM(B.NJRESP_VALOR) / SUM(IF(B.NJRESP_VALOR IS NULL, 0, 10)) * 100, 1), 0) AVANCE,
                                IFNULL(ROUND(SUM(B.NJRESP_VALOR) / SUM(IF(B.NJRESP_VALOR IS NULL, 0, 10)) * 20, 1), 0) PUNTAJE
                                -- SUM(B.NJRESP_VALOR),
                                -- SUM(IF(B.NJRESP_VALOR IS NULL, 0, 10)) MAXIMO
                            FROM SRD_JCI_ENCUESTAS_PREG A
                            INNER JOIN SRD_JCI_RESPUESTAS B ON A.NJRESP_ID = B.NJRESP_ID AND B.NJRESP_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                            INNER JOIN srd_jci_encuestas C ON A.NJENC_ID = C.NJENC_ID AND C.NAUDI_EST_REG = 1 AND C.NJENC_ESTADO = 1
                            INNER JOIN srd_usuarios D ON D.NUSUA_ID = C.NUSUA_ID AND D.NAUDI_EST_REG = 1 
                            INNER JOIN srd_nacionalidad E ON D.NNACI_ID = E.NNACI_ID AND E.NAUDI_EST_REG = 1 AND E.NNACI_ESTADO = 1
                            WHERE ";
                                
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    $query .= "C.NJENC_SUPERVISOR = " . $V_ID . " AND ";
                }

                if (!empty($V_SERVI) && isset($V_SERVI)) {
                    $query .= "C.CAREA_ID = '" . $V_SERVI . "' AND ";
                }

                if (!empty($V_NACI) && isset($V_NACI)) {
                    $query .= "E.NNACI_ID = '" . $V_NACI . "' AND ";
                }

                if (!empty($V_COLAB) && isset($V_COLAB)) {
                    $query .= "D.CUSUA_NOMBRES LIKE '%" . $V_COLAB . "%' AND ";
                }
        
                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "C.NPERI_ID = '" . $V_PERI . "' AND ";
                }
        
                if (!empty($V_ESTA) && isset($V_ESTA)) {
                    $query .= "C.NJENC_ESTADO = " . $V_ESTA . " AND ";
                }
                //Fin Filtros de Busqueda personalizados

                $query .= " A.NAUDI_EST_REG = 1 AND A.NJENPR_ESTADO = 1 AND ";
        
                if (isset($_POST["search"]["value"])) {
                    $query .= '(D.CUSUA_NOMBRES LIKE "%' . $_POST["search"]["value"] . '%" ';    
                    $query .= 'OR C.NPERI_ID LIKE "%' . $_POST["search"]["value"] . '%") ';
                }
        
                $query .= " GROUP BY A.NJENC_ID ";
        
                if (isset($_POST["order"])) {
                    $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
                } else {
                    $query .= 'ORDER BY D.CUSUA_NOMBRES ASC';
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
                    $sub_array[] = $row["NJENC_ID"];                                                    //[0]
                    $sub_array[] = $row["CUSUA_NOMBRES"];                                               //[1]
                    $sub_array[] = $row["CNACI_DESCRIPCION"];                                           //[2]
                    $sub_array[] = $row["CNACI_IMAGEN"];                                                //[3]
                    $sub_array[] = $row["CAREA_ID"];                                                    //[4]
                    $sub_array[] = $row["NPERI_ID"];                                                    //[5]
                    $sub_array[] = $row["NUSUA_ID"];                                                    //[6]
                    $sub_array[] = $row["CUSUA_IMG"];                                                   //[7]
                    $sub_array[] = $row["AVANCE"];                                                      //[8]
                    $sub_array[] = $row["PUNTAJE"];                                                     //[9]
                    $data[] = $sub_array;
                }
                
                function get_all_data($connect, $V_ID, $V_PERI, $V_ROL, $V_SERVI)
                {
                    $query = "SELECT count(*) AS TOTAL FROM SRD_JCI_ENCUESTAS WHERE NAUDI_EST_REG = 1 ";
                    
                    if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                        $query .= " AND NJENC_SUPERVISOR = " . $V_ID . " " ;
                    }

                    if (!empty($V_SERVI) && isset($V_SERVI)) {
                        $query .= " AND CAREA_ID = '" . $V_SERVI . "' ";
                    }
            
                    if (!empty($V_PERI) && isset($V_PERI)) {
                        $query .= " AND NPERI_ID = '" . $V_PERI . "'";
                    }
        
                    $result = $connect->query($query);
                    return $result->fetch_assoc()['TOTAL'];
                }

                $respuesta = array(
                    "draw"    => intval($_POST["draw"]),
                    "recordsTotal"  =>  get_all_data($conn, $V_ID, $V_PERI, $V_ROL, $V_SERVI),
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