<?php
    /*
    include '../../../../../connection/bd_connection.php';
    
    // Variables iniciales
    $V_BUSQ = '';    //$_POST["search"]["value"]
    $V_DESE = 0;     //$_POST["V_DESE"]
    $V_OCUP = 0;    //$_POST["V_OCUP"]
    $V_NACI = 0;    //$_POST["V_NACI"]
    $V_ECOL = 1;    //$_POST["V_ECOL"]
    $V_ESTA = 1;    //$_POST["V_ESTA"]
    $V_COLO = 'CCOLA_NOMBRES';      //$column[$_POST['order']['0']['column']]
    $V_DIRO = 'ASC';      //$_POST['order']['0']['dir']
    $V_START = 0;   //$_POST['start']
    $V_PAGESIZE = 5;    //$_POST['length']

    try {
        $stmt = $conn->prepare("CALL SRD_PR_COLAB_LISTAR(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @V_RECORDC);");
        $stmt->bind_param("siiiiissii", $V_BUSQ, $V_DESE, $V_OCUP, $V_NACI, $V_ECOL, $V_ESTA, $V_COLO, $V_DIRO, 
                                        $V_START, $V_PAGESIZE);
        $stmt->execute();
        //$stmt->close();

        $result = $stmt->get_result();
        //$result = $conn->query("SELECT @V_RECORDC AS 'REG'");

        $registros = array();

        while ($row = $result->fetch_assoc()) {
            $registros[] = $row;
        }

        //$stmt->close();
        $conn->close();

    } catch(Exception $e) {
        
    }
    echo  json_encode($registros, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    */

    
    include '../../../../../connection/bd_connection.php';
    
    $column = array(
        'ID',
        'CODI',
        'NOM1',
        'NOM2',
        'DESE',
        'OCU1',
        'OCU2',
        'NACI',
        'INACI',
        'CORR',
        'CIMG',
        'ESTA',
        'CLAS'
    );
    $query = "SELECT 
                A.NNACI_ID,
                A.CNACI_DESCRIPCION,
                A.CNACI_IMAGEN,
                SRD_FN_OBTENER_USR_POR_ID(NNACI_USR_INS),
                B.CDESE_DESCRIPCION DESE,
                C.COCUP_DESCRIPCION OCU1,
                C.COCUP_DESCRIPCION OCU2,
                LOWER(D.CNACI_DESCRIPCION) NACI,
                D.CNACI_IMAGEN INAC,
                A.CCOLA_CORREO CORR,
                A.CCOLA_IMG CIMG,
                E.CESCO_DESCRIPCION ESTA,
                E.CESCO_CLASE CLAS
            FROM bdjulia.SRD_NACIONALIDAD A
            LEFT JOIN bdjulia.SRD_DESEMPENIO B ON A.NCOLA_DESEMPENIO = B.NDESE_ID
            LEFT JOIN bdjulia.SRD_OCUPACION C ON A.NCOLA_OCUPACION = C.NOCUP_ID
            LEFT JOIN bdjulia.SRD_NACIONALIDAD D ON A.NCOLA_NACIONALIDAD = D.NNACI_ID
            LEFT JOIN bdjulia.SRD_ESTADO_COLABORADORES E ON A.NCOLA_ESTADO_COL = E.NESCO_ID
        ";
    $query .= " WHERE ";
    
    //Filtros de Busqueda personalizados
    if (!empty($_POST["desempenio"]) && isset($_POST["desempenio"])) {
        $query .= "B.CDESE_DESCRIPCION = '" . $_POST["desempenio"] . "' AND ";
    }

    if (!empty($_POST["ocupacion"]) && isset($_POST["ocupacion"])) {
        $query .= "C.COCUP_DESCRIPCION = '" . $_POST["ocupacion"] . "' AND ";
    }

    if (!empty($_POST["nacionalidad"]) && isset($_POST["nacionalidad"])) {
        $query .= "D.CNACI_DESCRIPCION = '" . $_POST["nacionalidad"] . "' AND ";
    }
    
    if (!empty($_POST["estado_col"]) && isset($_POST["estado_col"])) {
        //$inicio = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 0 , 10)), "Y-m-d");
        //$fin = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 13 , 10)), "Y-m-d");
        //$query .= "(DATE(horainicio) >= '" . $inicio . "' AND DATE(horainicio) <= '" . $fin . "') AND ";
        $query .= "E.NESCO_DESCRIPCION = '" . $_POST["estado_col"] . "' AND ";
    }    
    //Fin Filtros de Busqueda personalizados

    $query .= " A.CCOLA_ESTADO = '1' AND ";

    if (isset($_POST["search"]["value"])) {
        $query .= '(A.CCOLA_NOMBRES LIKE "%' . $_POST["search"]["value"] . '%" ';    
        $query .= 'OR A.CCOLA_CODIGO LIKE "%' . $_POST["search"]["value"] . '%") ';
    }
    if (isset($_POST["order"])) {
        $query .= 'ORDER BY ' . $column[$_POST['order']['0']['column']] . ' ' . $_POST['order']['0']['dir'] . ' ';
    } else {
        $query .= 'ORDER BY NOM1 ASC ';
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
        $sub_array[] = $row["ID"];                                          //[0]
        $sub_array[] = $row["CODI"];                                        //[1]
        $sub_array[] = $row["NOM1"];                                        //[2]
        $sub_array[] = ucwords($row["NOM2"]);                               //[3]
        $sub_array[] = ucwords(strtolower($row["DESE"]));                   //[4]
        $sub_array[] = $row["OCU1"];                                        //[5]
        $sub_array[] = $row["OCU2"];                                        //[6]
        $sub_array[] = ucwords($row["NACI"]);                               //[7]
        $sub_array[] = $row["INAC"];                                        //[8]
        $sub_array[] = $row["CORR"];                                        //[9]
        $sub_array[] = $row["CIMG"];                                        //[10]
        $sub_array[] = $row["ESTA"];                                        //[11]
        $sub_array[] = $row["CLAS"];                                        //[12]
        $data[] = $sub_array;
    }
    
    function get_all_data($connect)
    {
        $query = "SELECT * FROM SRD_COLABORADORES WHERE CCOLA_ESTADO = '1';";
        $result = $connect->query($query);
        return $result->fetch_assoc();
    }
    $output = array(
        "draw"    => intval($_POST["draw"]),
        "recordsTotal"  =>  get_all_data($conn),
        "recordsFiltered" => $number_filter_row,
        "data"    => $data,
        "data2"   => $_POST['order']['0']['column']
    );
    echo json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    
?>