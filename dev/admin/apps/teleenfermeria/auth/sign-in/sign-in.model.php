<?php
    include '../../connection/bd_connection.php';

//Modelo para el control del signin de alumni
if ($_POST['registro'] == 'signin') {
    $url = "http://galeno.crp.com.pe/wsSecurity/WebServicesSecurity.asmx?WSDL";
    $user = $_POST['username'];
    $psw = $_POST['password'];
    $num = '19';

    $Parametros = $user . '|' . $psw . '|' . $num;

    try {
        $client = new SoapClient($url, [ "trace" => 1 ] );
        $result = $client->getLista($Parametros);
        $data = json_encode($result);

        $getdata = json_decode($data,true);

        $res = $getdata['EAutorizacionLst']['EAutorizacion'][0]['Valor'];
        $app = $getdata['EAutorizacionLst']['EAutorizacion'][11]['Valor'];

        if ($res == '1' && $app = 'ENF_001') {
            $id = $getdata['EAutorizacionLst']['EAutorizacion'][6]['Valor'];
            $nombres = $getdata['EAutorizacionLst']['EAutorizacion'][2]['Valor'];
            $usuario = $getdata['EAutorizacionLst']['EAutorizacion'][1]['Valor'];
            $rol = '';
            $correo = '';
            $img = '/assets/img/avatars/blank.png';

            session_start();
            $_SESSION['id_telef'] = $id;
            $_SESSION['nombres'] = $nombres;
            $_SESSION['rol'] = $rol;
            $_SESSION['correo'] = $correo;
            $_SESSION['img'] = $img;
            $_SESSION['usuario'] = $usuario;
            $respuesta = array(
                'resultado' => 'signinok',
                'usuario' => $nombres
            );
        } else {
            $respuesta = array(
                'resultado' => 'signinx'            
            );            
        }
        echo json_encode($respuesta);
    } catch ( SoapFault $e ) {
        echo $e->getMessage();
    }
}
/*
//Modelo para el control del signin de admin
if ($_POST['registro'] == 'signin' && $_POST['tipo'] == 'admin') {
    $cod = $_POST['username'];
    $password = $_POST['password'];
    try {
        $stmt = $conn->prepare("SELECT codPucp, nombres, apellidoPaterno, apellidoMaterno, rol, emailPucp, clave, img FROM usuarios WHERE codPucp = ?;");
        $stmt->bind_param("s", $cod);
        $stmt->execute();
        $stmt->bind_result($cod,  $nombres, $paterno, $materno, $rol, $correo, $psw, $img);
        if($stmt->affected_rows) {
            if($stmt->fetch()) {
                if(password_verify($password, $psw)){
                    session_start();
                    $_SESSION['tipo'] = 'admin';
                    $_SESSION['cod'] = $cod;
                    $_SESSION['nombres'] = $nombres;
                    $_SESSION['paterno'] = $paterno;
                    $_SESSION['materno'] = $materno;
                    $_SESSION['rol'] = $rol;
                    $_SESSION['correo'] = $correo;
                    $_SESSION['img'] = $img;
                    $respuesta = array(
                        'resultado' => 'signinok',
                        'usuario' => $nombres
                    );
                } else {
                    $respuesta = array(
                        'resultado' => 'signinx1'
                    );
                }
            } else {
                $respuesta = array(
                    'resultado' => 'signinx2'
                );
            }
        } else {
            $respuesta = array(
                'resultado' => 'signinx3'
            );
        }                        
    } catch(Exception $e) {
        $respuesta = array(
            'resultado' => 'signinx4'
        );
    }
    echo json_encode($respuesta);
}

// Para restablecer la contraseña alumni
if ($_POST['registro'] == 'restablecer' && $_POST['tipo'] == 'alumni') {
    $email = $_POST['email'];
    try {
        $stmt = $conn->prepare("SELECT codPucp, nombres FROM alumni WHERE emailPucp = ?; ");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($id, $nombres);
        if($stmt->affected_rows) {
            if($stmt->fetch()) {
                $stmt->close();
                $token = bin2hex(random_bytes(24));
                $stmt = $conn->prepare("UPDATE alumni SET cambiar_clave = 'SI', token_clave = ?, fechaRegistro = CURRENT_TIMESTAMP() WHERE codPucp = ? ");
                $stmt->bind_param("ss", $token, $id);
                $stmt->execute();
                $rows = $stmt->affected_rows;
                if($rows>0) {
                    include_once '../enviar_email.php';
                    $respuesta = array(
                        'resultado' => 'restablecerok'
                    );
                } else {
                    $respuesta = array(
                        'resultado' => 'restablecerx'
                    );
                }                
            } else {
                $respuesta = array(
                    'resultado' => 'restablecerx'
                );
            }
        } else {
          $respuesta = array(
              'resultado' => 'restablecerx'
          );
        } 
        $stmt->close();
        $conn->close();
    } catch(Exception $e) {
        $respuesta = array(
            'resultado' => 'restablecerx'
        );
    }
    echo json_encode($respuesta);
}

// Para restablecer la contraseña admin
if ($_POST['registro'] == 'restablecer' && $_POST['tipo'] == 'admin') {
    $email = $_POST['email'];
    try {
        $stmt = $conn->prepare("SELECT codPucp, nombres FROM usuarios WHERE emailPucp = ?; ");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($id, $nombres);
        if($stmt->affected_rows) {
            if($stmt->fetch()) {
                $stmt->close();
                $token = bin2hex(random_bytes(24));
                $stmt = $conn->prepare("UPDATE usuarios SET cambiar_clave = 'SI', token_clave = ?, fechaRegistro = CURRENT_TIMESTAMP() WHERE codPucp = ? ");
                $stmt->bind_param("ss", $token, $id);
                $stmt->execute();
                $rows = $stmt->affected_rows;
                if($rows>0) {
                    $tipo = $_POST['tipo'];
                    include_once '../enviar_email.php';
                    $respuesta = array(
                        'resultado' => 'restablecerok'
                    );
                } else {
                    $respuesta = array(
                        'resultado' => 'restablecerx'
                    );
                }                
            } else {
                $respuesta = array(
                    'resultado' => 'restablecerx'
                );
            }
        } else {
          $respuesta = array(
              'resultado' => 'restablecerx'
          );
        } 
        $stmt->close();
        $conn->close();
    } catch(Exception $e) {
        $respuesta = array(
            'resultado' => 'restablecerx'
        );
    }
    echo json_encode($respuesta);
}

// Para la nueva contraseña alumni
if ($_POST['registro'] == 'nuevopass' && $_POST['tipo'] == 'alumni') {
    $pass = $_POST['password'];
    $cod = $_POST['id'];
    try {
        $opciones = array(
            'cost' => 12
        );
        $hash_password = password_hash($pass, PASSWORD_BCRYPT, $opciones);
        $stmt = $conn->prepare("UPDATE alumni SET clave = ?, fechaRegistro = CURRENT_TIMESTAMP(), cambiar_clave = 'NO', token_clave = NULL WHERE codPucp = ?");
        $stmt->bind_param("ss", $hash_password, $cod);
        $stmt->execute();
        if($stmt->affected_rows) {
            $respuesta = array(
                'resultado' => 'nuevopassok'
            );
        } else {
          $respuesta = array(
              'resultado' => 'nuevopassx'
          );
        } 
        $stmt->close();
        $conn->close();
        } catch(Exception $e) {
            $respuesta = array(
                'resultado' => 'nuevopassx'
            );
        }
    echo json_encode($respuesta);
}

// Para la nueva contraseña admin
if ($_POST['registro'] == 'nuevopass' && $_POST['tipo'] == 'admin') {
    $pass = $_POST['password'];
    $cod = $_POST['id'];
    try {
        $opciones = array(
            'cost' => 12
        );
        $hash_password = password_hash($pass, PASSWORD_BCRYPT, $opciones);
        $stmt = $conn->prepare("UPDATE usuarios SET clave = ?, fechaRegistro = CURRENT_TIMESTAMP(), cambiar_clave = 'NO', token_clave = NULL WHERE codPucp = ?");
        $stmt->bind_param("ss", $hash_password, $cod);
        $stmt->execute();
        if($stmt->affected_rows) {
            $respuesta = array(
                'resultado' => 'nuevopassok'
            );
        } else {
          $respuesta = array(
              'resultado' => 'nuevopassx'
          );
        } 
        $stmt->close();
        $conn->close();
        } catch(Exception $e) {
            $respuesta = array(
                'resultado' => 'nuevopassx'
            );
        }
    echo json_encode($respuesta);
}
*/
?>