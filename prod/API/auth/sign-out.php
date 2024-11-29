<?php

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        session_start();
        // remove all session variables
        session_unset();

        // destroy the session
        session_destroy();
        
        // check if the session was successfully destroyed
        if (session_status() == PHP_SESSION_NONE) {
            $respuesta = array(
                'estado' => 1
            );
        } else {
            $respuesta = array(
                'estado' => 0
            );
        }

        echo json_encode($respuesta);

    }
?>