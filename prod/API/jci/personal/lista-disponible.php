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
        $V_PERI = !isset($_POST["periodo"]) ? null : ($_POST["periodo"] == '' ? null : $_POST["periodo"]);
        $V_SERV = !isset($_POST["servicio"]) ? null : ($_POST["servicio"] == '' ? null : $_POST["servicio"]);
        $V_DESE = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);

        $query = "SELECT 
                    A.NUSUA_ID,
                    A.CUSUA_CODIGO,
                    A.CUSUA_NOMBRES,
                    A.CUSUA_IMG,
                    C.CNACI_DESCRIPCION,
                    C.CNACI_IMAGEN,
                    '' CAREA_ID,
                    D.CDESE_DESCRIPCION
                FROM SRD_USUARIOS A
                INNER JOIN SRD_NACIONALIDAD C ON C.NNACI_ID = A.NNACI_ID
                LEFT JOIN SRD_DESEMPENIO D ON D.NDESE_ID = A.NDESE_ID 
                WHERE NUSUA_ID NOT IN ( SELECT NUSUA_ID FROM SRD_JCI_ENCUESTAS B WHERE 1 = 1 ";
        
        //Inicio Filtros de Busqueda personalizados
        if (!empty($V_PERI) && isset($V_PERI)) {
            $query .= " AND B.NPERI_ID = " . $V_PERI . "";
        }

        if (!empty($V_SERV) && isset($V_SERV)) {
            $query .= " AND B.CAREA_ID = '" . $V_SERV . "' ";
        }
        //Fin Filtros de Busqueda personalizados

        $query .= " ) ";

        //Inicio Filtros de Busqueda personalizados
        if (!empty($V_DESE) && isset($V_DESE)) {
            $query .= " AND D.NDESE_ID = '" . $V_DESE . "' ";
        } 
        //Fin Filtros de Busqueda personalizados

        if (isset($_POST["search"]["value"])) {
            $query .= 'AND (A.CUSUA_NOMBRES LIKE "%' . $_POST["search"]["value"] . '%") ';
        }
        if (isset($_POST["order"])) {
            $query .= 'ORDER BY ' . $_POST['columns'][$_POST['order']['0']['column']]['name'] . ' ' . $_POST['order']['0']['dir'] . ' ';
        } else {
            $query .= 'ORDER BY A.CUSUA_NOMBRES ASC ';
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
            $sub_array[] = $row["NUSUA_ID"];                                    //[0]
            $sub_array[] = $row["CUSUA_CODIGO"];                                //[1]
            $sub_array[] = ucwords($row["CUSUA_NOMBRES"]);                      //[2]
            $sub_array[] = $row["CUSUA_IMG"];                                   //[3]
            $sub_array[] = ucwords($row["CNACI_DESCRIPCION"]);                  //[4]
            $sub_array[] = $row["CNACI_IMAGEN"];                                //[5]
            $sub_array[] = $row["CAREA_ID"];                                    //[6]
            $sub_array[] = $row["CDESE_DESCRIPCION"];                           //[7]
            $data[] = $sub_array;
        }
        
        function get_all_data($connect, $V_PERI, $V_SERV)
        {
            $query = "SELECT 
                        count(*) AS TOTAL 
                    FROM SRD_USUARIOS A
                    WHERE NUSUA_ID NOT IN ( SELECT NUSUA_ID FROM SRD_JCI_ENCUESTAS B WHERE 1 = 1 ";
            
            //Inicio Filtros de Busqueda personalizados
            if (!empty($V_PERI) && isset($V_PERI)) {
                $query .= " AND B.NPERI_ID = " . $V_PERI . " ";
            }
            
            if (!empty($V_SERV) && isset($V_SERV)) {
                $query .= " AND B.CAREA_ID = '" . $V_SERV . "' ";
            }
            //Fin Filtros de Busqueda personalizados

            $query .= " ) ";

            $result = $connect->query($query);
            return $result->fetch_assoc()['TOTAL'];
        }
        $output = array(
            "draw"    => intval($_POST["draw"]),
            "recordsTotal"  =>  get_all_data($conn, $V_PERI, $V_SERV),
            "recordsFiltered" => $number_filter_row,
            "data"    => $data
        );

        echo json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    }
?>