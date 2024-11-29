<?php
    header('Content-Type: application/json');

    $env = file_get_contents(__DIR__ . '/config.json');
    $data = json_decode($env, true); // El segundo argumento convierte el objeto en array
    $respuesta = [
        'url' => $data['URL']
    ];
    echo json_encode($respuesta, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
?>
