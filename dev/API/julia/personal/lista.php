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
        $V_NACI = !isset($_POST["nacionalidad"]) ? null : ($_POST["nacionalidad"] == '' ? null : $_POST["nacionalidad"]);
        $V_DESE = !isset($_POST["desempenio"]) ? null : ($_POST["desempenio"] == '' ? null : $_POST["desempenio"]);
        $V_OCUP = !isset($_POST["ocupacion"]) ? null : ($_POST["ocupacion"] == '' ? null : $_POST["ocupacion"]);

        $column = array(
            'NUSUA_ID',
            'CUSUA_CODIGO',
            'CUSUA_NOMBRES',
            'CDESE_DESCRIPCION',
            'COCUP_DESCRIPCION',
            'CNACI_DESCRIPCION',
            'CNACI_IMAGEN',
            'CUSUA_CORREO',
            'CUSUA_IMG',
            'NUSUA_ESTADO'
        );
        $query = "SELECT 
                    A.NUSUA_ID,
                    A.CUSUA_CODIGO,
                    A.CUSUA_NOMBRES,
                    LOWER(B.CDESE_DESCRIPCION) CDESE_DESCRIPCION,
                    C.COCUP_DESCRIPCION,
                    LOWER(D.CNACI_DESCRIPCION) CNACI_DESCRIPCION,
                    D.CNACI_IMAGEN,
                    A.CUSUA_CORREO,
                    A.CUSUA_IMG,
                    A.NUSUA_ESTADO
                FROM SRD_USUARIOS A
                LEFT JOIN SRD_DESEMPENIO B ON A.NDESE_ID = B.NDESE_ID
                LEFT JOIN SRD_OCUPACION C ON A.NOCUP_ID = C.NOCUP_ID
                LEFT JOIN SRD_NACIONALIDAD D ON A.NNACI_ID = D.NNACI_ID
            ";
        $query .= " WHERE ";
        
        //Filtros de Busqueda personalizados
        if (!empty($V_DESE) && isset($V_DESE)) {
            $query .= "B.CDESE_DESCRIPCION = '" . $V_DESE . "' AND ";
        }

        if (!empty($V_OCUP) && isset($V_OCUP)) {
            $query .= "C.COCUP_DESCRIPCION = '" . $V_OCUP . "' AND ";
        }

        if (!empty($V_NACI) && isset($V_NACI)) {
            $query .= "D.CNACI_DESCRIPCION = '" . $V_NACI . "' AND ";
        }
        
        if (!empty($V_ESTA) && isset($V_ESTA)) {
            //$inicio = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 0 , 10)), "Y-m-d");
            //$fin = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 13 , 10)), "Y-m-d");
            //$query .= "(DATE(horainicio) >= '" . $inicio . "' AND DATE(horainicio) <= '" . $fin . "') AND ";
            $query .= "A.NUSUA_ESTADO = " . $V_ESTA . " AND ";
        }    
        //Fin Filtros de Busqueda personalizados

        $query .= " A.NAUDI_EST_REG = 1 AND ";

        if (isset($_POST["search"]["value"])) {
            $query .= '(A.CUSUA_NOMBRES LIKE "%' . $_POST["search"]["value"] . '%" ';    
            $query .= 'OR A.CUSUA_CODIGO LIKE "%' . $_POST["search"]["value"] . '%") ';
        }
        if (isset($_POST["order"])) {
            $query .= 'ORDER BY ' . $column[$_POST['order']['0']['column']] . ' ' . $_POST['order']['0']['dir'] . ' ';
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
            $sub_array[] = $row["CDESE_DESCRIPCION"] != null ? ucwords(strtolower($row["CDESE_DESCRIPCION"])) : null;      //[3]
            $sub_array[] = $row["COCUP_DESCRIPCION"];                           //[4]
            $sub_array[] = ucwords($row["CNACI_DESCRIPCION"]);                  //[5]
            $sub_array[] = $row["CNACI_IMAGEN"];                                //[6]
            $sub_array[] = $row["CUSUA_CORREO"];                                //[7]
            $sub_array[] = $row["CUSUA_IMG"];                                   //[8]
            $sub_array[] = $row["NUSUA_ESTADO"];                                //[9]
            $data[] = $sub_array;
        }
        
        function get_all_data($connect)
        {
            $query = "SELECT count(*) AS TOTAL FROM SRD_USUARIOS WHERE NAUDI_EST_REG = 1;";
            $result = $connect->query($query);
            return $result->fetch_assoc()['TOTAL'];
        }
        $output = array(
            "draw"    => intval($_POST["draw"]),
            "recordsTotal"  =>  get_all_data($conn),
            "recordsFiltered" => $number_filter_row,
            "data"    => $data,
            "sql" => $query
        );

        echo json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    }
?>