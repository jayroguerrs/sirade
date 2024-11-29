<?php
  
    // Cargar el contenido del archivo JSON
    $config = file_get_contents(__DIR__ . '/../../config.json');
    // Decodificar el contenido JSON en un array asociativo
    $configArray = json_decode($config, true);

    // Extraer información específica
    $host = $configArray['database']['host'];
    $username = $configArray['database']['username'];
    $password = $configArray['database']['password'];
    $database = $configArray['database']['databaseName'];
    $debugMode = $configArray['debug_mode'];
    $mailhost = $configArray['phpmailer']['host'];
    $mailauth = $configArray['phpmailer']['SMTPAuth'];
    $mailuser = $configArray['phpmailer']['username'];
    $mailpass = $configArray['phpmailer']['key'];
    $mailport = $configArray['phpmailer']['port'];
    $mailcorreo = $configArray['phpmailer']['email'];
    $mailname = $configArray['phpmailer']['name'];
    $bearertoken = $configArray['token'];
    
    if ($debugMode) {
      // Realizar acciones de depuración
      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);
    } 

    $conn = new mysqli($host, $username, $password, $database);
    $conn->set_charset("utf8");
    date_default_timezone_set('America/Lima');
    
    if($conn->connect_error) {
      echo $conn->connect_error;
    }
?>