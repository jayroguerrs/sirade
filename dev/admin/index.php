<?php
    // PARÁMETROS DE CONEXIÓN
    include 'connection/bd_connection.php';

    $app = !isset($_GET['app']) ? 'no_app' : $_GET['app'];
    $sql = "SELECT 
                CAPLI_ID, 
                CAPLI_NOMBRE_PAG,
                CAPLI_MARCA,
                CAPLI_DESCRIPCION
                FROM 
                    SRD_APLICACIONES 
                WHERE 
                    CAPLI_NOMBRE_PAG = '$app' AND 
                    NAPLI_ESTADO = 1 AND NAUDI_EST_REG = 1;";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {           
            //Se captura la información de la página
            $page = !isset($_GET['page']) ? 'index' : $_GET['page'];
            //Se inicia la sesión de variables globales
            session_start();
            if(isset($_SESSION['nombres'])){
                if(isset($_SESSION['codapp'])){
                    if($_SESSION['codapp'] == $row['CAPLI_ID']){
                        include 'layout/partials/_start.php';
                    }else {
                        $sql = "SELECT CAPLI_ID FROM SRD_APLICACIONES WHERE NAPLI_ESTADO = 1 AND NAUDI_EST_REG = 1;";
                        $result2 = $conn->query($sql);
                        if ($result2->num_rows > 0) {
                            include 'auth/sign-in/sign-in.design.php';
                        } else {
                            include 'auth/404/404.design.php';
                        }
                        $conn->close();
                    }
                } else {
                    include 'auth/verify-usr/verify-usr.design.php';
                }
            } else { 
                include 'auth/sign-in/sign-in.design.php';
            }            
        }        
    } else {
        include 'auth/404/404.design.php';
    }    
?>

