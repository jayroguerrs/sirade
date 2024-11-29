<?php
    session_start();
    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();
    
    $respuesta = array(
        'resultado' => 'signout'
    );

    echo json_encode($respuesta);
?>