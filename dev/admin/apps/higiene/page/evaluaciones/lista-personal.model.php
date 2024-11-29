<?php
    /*
    define('ALUMNI_HOST', '127.0.0.1');
    define('ALUMNI_DB_USUARIO', 'root');          //centrumfi
    define('ALUMNI_DB_PASSWORD', '');             //6uj.67ki
    define('ALUMNI_DB_DATABASE', 'centrumpucp');

    $conn = new mysqli(ALUMNI_HOST, ALUMNI_DB_USUARIO, ALUMNI_DB_PASSWORD, ALUMNI_DB_DATABASE);
    $conn->set_charset("utf8");
    if($conn->connect_error) {
        echo $conn->connect_error;
    }
    */
    //include
    $connect = mysqli_connect("127.0.0.1", "root", '', 'centrumpucp');
    mysqli_set_charset($connect,"utf8");
    
    $column = array(
        'cod',
        'paterno',
        'materno',
        'nombres',
        'nombCompuesto',
        'cod',
        'genero',
        'tipo',
        'numdoc',
        'fecnac',
        'ecivil',
        'paisnac',
        'paisres',
        'depres',
        'epucp',
        'epersonal',
        'linkedin',
        'prefijo',
        'numcel',
        'carrerapre',
        'img',
        'programa',
        'situacionlab',
        'rubro',
        'comp',
        'cargo',
        'cargoe',
        'laboresdoc',
        'aniograd',
        'dist',
        'cat',
        'tipopos',
    );
    $query = "SELECT 
                A.`codPucp` cod, 
                A.`TipoDoc` tipo, 
                A.`numDoc` numdoc, 
                A.`emailPucp` epucp,
                A.`emailPersonal` epersonal,
                A.`fechaNac` fecnac, 
                A.`genero` genero, 
                A.`apellidoPaterno` paterno, 
                A.`apellidoMaterno` materno, 
                A.`nombres` nombres, 
                CONCAT(`apellidoPaterno`, ' ', `apellidoMaterno`, ', ', `nombres`) nombCompleto, 
                CONCAT(`apellidoPaterno`, ' ', `apellidoMaterno`, ', ', LEFT(`nombres`, 1)) nombCompuesto, 
                A.`estadoCivil` ecivil,
                A.`paisNac` paisnac,
                A.`paisRes` paisres,
                A.`departamentoRes` depres,
                A.`linkedinPersonal` linkedin,
                A.`prefijoTel` prefijo,
                A.`numCel` numcel,
                A.`carreraPre` carrerapre,
                A.`img` img,
                D.`nombreProgram` programa,
                D.`situacionLab` situacionlab,
                D.`rubro` rubro,
                D.`compania` comp,
                D.`cargoActual` cargo,
                D.`cargo` cargoe,
                D.`laboresDoc` laboresdoc,
                D.`anioGrad` aniograd,
                D.`distincion` dist,
                D.`categoria` cat,
                D.`tipopostgrado` tipopos
            FROM 
                `alumni` A
            INNER JOIN datosalumni D ON A.codPucp = D.cod 
    ";
    $query .= " WHERE ";
    /*

    //Filtros de Busqueda personalizados
    if (!empty($_POST["conformidad"]) && isset($_POST["conformidad"])) {
        $query .= "conformidad = '" . $_POST["conformidad"] . "' AND ";
    }

    if (!empty($_POST["responsable"]) && isset($_POST["responsable"])) {
        $query .= "responsable = '" . $_POST["responsable"] . "' AND ";
    }

    if (!empty($_POST["estado"]) && isset($_POST["estado"])) {
        $query .= "estado_llamada = '" . $_POST["estado"] . "' AND ";
    }

    if (!empty($_POST["fechain"]) && isset($_POST["fechain"])) {
        $inicio = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 0 , 10)), "Y-m-d");
        $fin = date_format(date_create_from_format("d/m/Y", substr($_POST["fechain"], 13 , 10)), "Y-m-d");
        $query .= "(DATE(horainicio) >= '" . $inicio . "' AND DATE(horainicio) <= '" . $fin . "') AND ";
    }
    */

    //Fin Filtros de Busqueda personalizados

    if (isset($_POST["search"]["value"])) {
        $query .= '(TRIM(CONCAT(A.`apellidoPaterno`, " ", A.`apellidoMaterno`, ", ", A.`nombres`)) LIKE "%' . $_POST["search"]["value"] . '%" ';    
        $query .= 'OR A.`estadoCivil` LIKE "%' . $_POST["search"]["value"] . '%") ';
    }
    if (isset($_POST["order"])) {
        $query .= 'ORDER BY ' . $column[$_POST['order']['0']['column']] . ' ' . $_POST['order']['0']['dir'] . ' ';
    } else {
        $query .= 'ORDER BY paterno ASC ';
    }
    $query1 = '';
    if ($_POST["length"] != -1) {
        $query1 .= 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
    }
    $number_filter_row = mysqli_num_rows(mysqli_query($connect, $query));
    $result = mysqli_query($connect, $query . $query1);
    $data = array();
    while ($row = mysqli_fetch_array($result)) {
        $sub_array = array();
        $sub_array[] = $row["cod"];                                         //[0]
        $sub_array[] = $row["paterno"];                                     //[1]
        $sub_array[] = $row["materno"];                                     //[2]
        $sub_array[] = $row["nombres"];                                     //[3]
        $sub_array[] = ucwords(strtolower($row["nombCompuesto"]));          //[4]
        $sub_array[] = $row["cod"];                                         //[5]
        $sub_array[] = $row["genero"];                                      //[6]
        $sub_array[] = $row["tipo"];                                        //[7]
        $sub_array[] = ucwords($row["numdoc"]);                             //[8]
        $sub_array[] = date_format(date_create($row["fecnac"]), "d/m/Y");   //[9]
        $sub_array[] = $row["ecivil"];                                      //[10]
        $sub_array[] = $row["paisnac"];                                     //[11]
        $sub_array[] = $row["paisres"];                                     //[12]
        $sub_array[] = $row["depres"];                                      //[13]
        $sub_array[] = $row["epucp"];                                       //[14]
        $sub_array[] = $row["epersonal"];                                   //[15]
        $sub_array[] = $row["linkedin"];                                    //[16]
        $sub_array[] = $row["prefijo"];                                     //[17]
        $sub_array[] = $row["numcel"];                                      //[18]
        $sub_array[] = $row["carrerapre"];                                  //[19]    
        $sub_array[] = $row["img"];                                         //[20]
        $sub_array[] = $row["programa"];                                    //[21]
        $sub_array[] = $row["situacionlab"];                                //[22]
        $sub_array[] = $row["rubro"];                                       //[23]
        $sub_array[] = $row["comp"];                                        //[24]
        $sub_array[] = $row["cargo"];                                       //[25]
        $sub_array[] = $row["cargoe"];                                      //[26]
        $sub_array[] = $row["laboresdoc"];                                  //[27]
        $sub_array[] = $row["aniograd"];                                    //[28]
        $sub_array[] = $row["dist"];                                        //[29]
        $sub_array[] = $row["cat"];                                         //[30]
        $sub_array[] = $row["tipopos"];                                     //[31]
        $data[] = $sub_array;
    }
    function get_all_data($connect)
    {
        $query = "SELECT * FROM alumni";
        $result = mysqli_query($connect, $query);
        return mysqli_num_rows($result);
    }
    $output = array(
        "draw"    => intval($_POST["draw"]),
        "recordsTotal"  =>  get_all_data($connect),
        "recordsFiltered" => $number_filter_row,
        "data"    => $data,
        "extra"    => $column[$_POST['order']['0']['column']]
    );
    echo json_encode($output);
?>