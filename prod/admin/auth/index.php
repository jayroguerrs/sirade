<?php 
    //Se captura la información de la página
    $auth = !isset($_GET['page']) ? 'index' : $_GET['page'] ;
        
    if($auth == 'reset-pass'){
        include 'reset-pass/reset-pass.design.php';
    } elseif($auth == 'newpass'){
        include 'new-pass/new-pass.design.php';
    }
?>