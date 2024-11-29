<?php
    if($page == 'index'){
        // Divide la cadena en partes usando el carácter "/"
        $partes = explode("/", $page2);
        $page = $page2;
    } else {
        // Divide la cadena en partes usando el carácter "/"
        $partes = explode("/", $page);
    }

    // Obtiene el último elemento de la matriz
    $ultimo_elemento = end($partes); 
    
    // Agrega la extensión al último elemento
    $archivo = "apps/" . $app . "/page/" . $page . "/" . $ultimo_elemento;
    $nuevapagina = $archivo . '.design.php';
    
    include $nuevapagina;
?>
