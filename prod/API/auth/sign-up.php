<?php
    include '../../connection/bd_connection.php';
    /*
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require '../../mail/PhpMailer/Exception.php';
    require '../../mail/PhpMailer/PHPMailer.php';
    require '../../mail/PhpMailer/SMTP.php';
    */
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {        
        // VALOR DE LAS ENTRADAS        
        $V_NOMBRES  = isset($_POST['nombres'])  ? trim($_POST['nombres'])   : NULL ;
        $V_PATERNO  = isset($_POST['paterno'])  ? trim($_POST['paterno'])   : NULL ;
        $V_MATERNO  = isset($_POST['materno'])  ? trim($_POST['materno'])   : NULL ;
        $V_IMAGEN   = isset($_POST['imagen'])   ? trim($_POST['imagen'])    : 'blank.png' ;
        $V_CORREO   = isset($_POST['correo'])   ? trim($_POST['correo'])    : NULL ;
        $V_ROL      = isset($_POST['rol'])      ? trim($_POST['rol'])       : NULL ;
        $V_USUARIO  = isset($_POST['usuario'])  ? trim($_POST['usuario'])   : NULL ;
        $V_ESTADO  = !empty($_POST['estado'])  ? trim($_POST['estado'])   : '1' ;
        $V_PASSWORD = isset($_POST['password']) ? trim($_POST['password'])  : NULL ;
        $HEADERS    = getallheaders();

        try {
            
            $contador = 0;
            $erray = array();

            // Tamaño máximo permitido (20 MB)
            $tamanio_maximo = 20971520; // 20 MB en bytes
            
            /*
            // VALIDAMOS TOKEN DE AUTORIZACIÓN
            if ( !isset($HEADERS['Authorization']) ) {
                $error = 'Ingrese el token de autorización de tipo Bearer';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $token = getallheaders()['Authorization'];
                if (preg_match('/Bearer\s(\S+)/', $token, $matches)) {
                    $token = $matches[1];
                }
            }

            // VALIDACIÓN POR BEARER TOKEN
            if ( $token != $bearertoken && $token != '') {
                $error = 'Error: El token no es válido ';
                $contador += 1;
                $earray[$contador] = $error;
            } elseif ( $token == '' ) {
                $error = 'Error: No ha enviado el token de tipo Bearer en la cabecera de la solicitud';
                $contador += 1;
                $earray[$contador] = $error;
            }
            */

            // VALIDAMOS LOS NOMBRES
            if ( $V_NOMBRES == '' || $V_NOMBRES === NULL ) {
                $error = 'El nombre es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $V_NOMBRES = strtoupper($V_NOMBRES);
            }

            // VALIDAMOS EL APELLIDO PATERNO
            if ( $V_PATERNO == '' || $V_PATERNO === NULL ) {
                $error = 'El apellido paterno es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $V_PATERNO = strtoupper($V_PATERNO);
            }

            // VALIDAMOS EL APELLIDO MATERNO (NO ES OBLIGATORIO)
            if ( $V_MATERNO == '' || $V_MATERNO === NULL ) {
            } else {
                $V_MATERNO = strtoupper($V_MATERNO);
            }

            // VALIDAMOS EL USUARIO
            if ( $V_USUARIO === NULL || $V_USUARIO == '' ) {
                $error = 'El usuario es obligatorio y debe tener 8 dígitos como mínimo';
                $contador += 1;
                $earray[$contador] = $error;
            } else{
                $sql = "SELECT CUSUA_USERNAME FROM HMC_USUARIOS WHERE CUSUA_USERNAME = '$V_USUARIO';";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    $error = 'El usuario ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL CORREO
            if ( $V_CORREO === NULL || $V_CORREO == '' || !preg_match($pattern, $V_CORREO)) {
                $error = 'El correo es obligatorio y debe ser válido';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $V_CORREO = strtolower($V_CORREO);
                $sql = "SELECT CUSUA_CORREO FROM HMC_USUARIOS WHERE CUSUA_CORREO = '$V_CORREO';";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    $error = 'El correo ya se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }
            
            // VALIDAMOS LA IMAGEN
            if( $V_IMAGEN !== NULL && $V_IMAGEN != '') {
                if( strpos($V_IMAGEN, '.') !== false ){
                    $extension = pathinfo($V_IMAGEN, PATHINFO_EXTENSION);
                    if (!($extension === 'png' || $extension === 'jpg' || $extension === 'jpeg')) {
                        $error = 'La extensión del arhivo debe ser .png, .jpg o .jpeg';
                        $contador += 1;
                        $earray[$contador] = $error;
                    }
                } else {
                    $error = 'La extensión del arhivo debe ser .png, .jpg o .jpeg';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS EL ROL
            if ( $V_ROL === NULL || $V_ROL == '' ) {
                $error = 'El rol de usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $sql = "SELECT NROLE_ID FROM HMC_ROLES WHERE NROLE_ID = $V_ROL; ";
                $result = $conn->query($sql);                
                if ($result->num_rows == 0) {
                    $error = 'El rol de usuario ingresado no existe';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
            }

            // VALIDAMOS LA CONTRASEÑA
            if ( $V_PASSWORD === NULL || $V_PASSWORD == '' || strlen($V_PASSWORD) < 8 ) {
                $error = 'La contraseña es obligatoria y debe tener 8 dígitos como mínimo';
                $contador += 1;
                $earray[$contador] = $error;
            } 
            
            if ($contador == 0) {
                session_start();                
                //$NUSUA_ID = $_SESSION['id'];
                $NUSUA_ID = 2;
                $stmt = $conn->prepare("SELECT                                             
                                            CONCAT(RIGHT(YEAR(NOW()), 2), LPAD(NUSUA_ID, 6, '0')) CUSUA_CODIGO
                                        FROM HMC_USUARIOS 
                                        WHERE NUSUA_ID = ? AND NUSUA_ESTADO = 1; ");
                $stmt->bind_param("i", $NUSUA_ID);
                $stmt->execute();
                if($stmt->affected_rows) {
                    if($stmt->fetch()) {
                        $stmt->close();
                        $opciones = array(
                            'cost' => 12
                        );
                        $V_PASS = password_hash($V_PASSWORD, PASSWORD_BCRYPT, $opciones);
                        $V_TOKEN = bin2hex(random_bytes(48));
                        
                        $stmt = $conn->prepare( "INSERT INTO HMC_USUARIOS (                                                    
                                                    CUSUA_NOMBRES, 
                                                    CUSUA_APE_PATERNO,
                                                    CUSUA_APE_MATERNO,
                                                    CUSUA_IMG,
                                                    CUSUA_CORREO,
                                                    NROLE_ID,
                                                    CUSUA_USERNAME,
                                                    CUSUA_PASS,
                                                    CUSUA_TOKEN,
                                                    NUSUA_ESTADO,
                                                    NAUDI_EST_REG)
                                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); " );
                        $stmt->bind_param("sssssssssii", $V_NOMBRES, $V_PATERNO, $V_MATERNO, $V_IMAGEN, $V_CORREO, 
                                                       $V_ROL, $V_USUARIO, $V_PASS, $V_TOKEN, $V_ESTADO, $NUSUA_ID);
                        $stmt->execute();
                        $V_ID = $stmt->insert_id;
                        
                        $stmt->close();
                        $stmt = $conn->prepare("UPDATE SRD_USUARIOS 
                                                SET CUSUA_CODIGO = CONCAT(RIGHT(YEAR(NOW()), 2), LPAD(NUSUA_ID, 6, '0')) 
                                                WHERE NUSUA_ID = ?;" );
                        $stmt->bind_param("i", $V_ID);
                        $stmt->execute();

                        //Create an instance; passing `true` enables exceptions
                        /*
                        $mail = new PHPMailer(true);

                        try {
                            //Server settings
                            $mail->SMTPDebug = 0;                     //Enable verbose debug output
                            $mail->isSMTP();                                            //Send using SMTP
                            $mail->Host       = 'smtp.titan.email';                     //Set the SMTP server to send through
                            $mail->SMTPAuth   = true;            
                            $mail->Username   = 'notificaciones@holdingmedicoscrp.com';                     //SMTP username
                            $mail->Password   = 'hPq9$aC&MF61&s*Y5eGqsav&zgB8GBySq^bmKQ1VDxm&j3COS1';                             //SMTP password
                            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
                            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                            //Recipients
                            $mail->setFrom('notificaciones@holdingmedicoscrp.com', 'HOLDING MÉDICOS CRP');
                            $mail->addAddress($V_CORREO);              //Añadir Remitente
                        
                            //Content
                            $mail->isHTML(true);   
                            $mail->CharSet = 'UTF-8';                               //Set email format to HTML
                            $mail->Subject = '[HOLDING MEDICOS] Registro de acceso';
                            $mail->Body    = '<p> 
                                                <table border="0" width="100%" cellspacing="0" cellpadding="30" bgcolor="#f7f7f7">
                                                    <tbody>
                                                        <tr>
                                                            <td ><img src="https://holdingmedicoscrp.com/admin/assets/media/logos/LogoClinica.png" width="220" height="auto" /></td>
                                                            <td align="right" >HMC</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <p style="font-size: 13pt; font-family: Calibri,sans-serif;">Estimado(a) Sr(a): <strong>' . $V_PATERNO . ' ' . $V_MATERNO . ', ' . $V_NOMBRES . '</strong></p>
                                                                <p style="text-align: justify; font-size: 11pt; font-family: Calibri,sans-serif;">Con fecha ' . date("d/m/Y h:i A") . ' se ha registrado sus credenciales de ingreso con el rol "SOCIO" para las actividades correspondientes. En cuanto el administrador apruebe su solicitud podrá ingresar al portal de Holding Médicos.</p>
                                                                <p style="font-family: Calibri,sans-serif; margin: 2;">Gracias.<br /><br />Holding Médicos CRP</p> 
                                                                <p style="text-align: justify; font-size: 10pt; font-family: Calibri,sans-serif; margin: 2;">Si no puede visualizar el mensaje comuníquese con el siguiente correo: syriberry@crp.com.pe<br/><strong>Nota: Esta dirección de correo electrónico no puede recibir respuestas. Por favor, no responda este mensaje.</strong> </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </p>';
                            $mail->send();
                            
                        } catch (Exception $e) {
                            echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
                        }

                        //Create an instance; passing `true` enables exceptions
                        $mail2 = new PHPMailer(true);

                        try {
                            //Server settings
                            $mail2->SMTPDebug = 0;                     //Enable verbose debug output
                            $mail2->isSMTP();                                            //Send using SMTP
                            $mail2->Host       = 'smtp.titan.email';                     //Set the SMTP server to send through
                            $mail2->SMTPAuth   = true;            
                            $mail2->Username   = 'notificaciones@holdingmedicoscrp.com';                     //SMTP username
                            $mail2->Password   = 'hPq9$aC&MF61&s*Y5eGqsav&zgB8GBySq^bmKQ1VDxm&j3COS1';                             //SMTP password
                            $mail2->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
                            $mail2->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                            //Recipients
                            $mail2->setFrom('notificaciones@holdingmedicoscrp.com', 'HOLDING MÉDICOS CRP');
                            $mail2->addAddress('syriberry@crp.com.pe');              //Añadir Remitente
                        
                            //Content
                            $mail2->isHTML(true);   
                            $mail2->CharSet = 'UTF-8';                               //Set email format to HTML
                            $mail2->Subject = '[HOLDING MEDICOS] Nuevo ingreso de solicitud de acceso';
                            $mail2->Body    = ' <p> 
                                                    <table border="0" width="100%" cellspacing="0" cellpadding="30" bgcolor="#f7f7f7">
                                                        <tbody>
                                                            <tr>
                                                                <td ><img src="https://holdingmedicoscrp.com/admin/assets/media/logos/LogoClinica.png" width="220" height="auto" /></td>
                                                                <td align="right" >HMC</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <p style="font-size: 13pt; font-family: Calibri,sans-serif;">Estimado(a) Sr(a): <strong>' . $_SESSION['nombres'] . ' ' . $_SESSION['paterno'] . ', ' . $_SESSION['materno'] . '</strong></p>
                                                                    <p style="text-align: justify; font-size: 11pt; font-family: Calibri,sans-serif;">Con fecha ' . date("d/m/Y h:i A") . ' se ha ingresado una nueva solicitud de ingreso correspondiente al colaborador: <strong>'. $V_PATERNO . ' ' . $V_MATERNO . ', ' . $V_NOMBRES . '</strong>. Para poder aprobar su solicitud diríjase al admimnistrador de usuario y acontinuación cambie el estado de registro a "ACTIVO". En caso usted no reconozca este registro y desee anularlo deberá ingresar al administrador y continuar con el proceso correspondiente.</p>
                                                                    <p style="font-family: Calibri,sans-serif; margin: 2;">Gracias.<br /><br />Holding Médicos CRP</p> 
                                                                    <p style="text-align: justify; font-size: 10pt; font-family: Calibri,sans-serif; margin: 2;"><strong>Nota: Esta dirección de correo electrónico no puede recibir respuestas. Por favor, no responda este mensaje.</strong> </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </p>';
                            $mail2->send();
                            
                        } catch (Exception $e) {
                            echo "Error al enviar el mensaje: {$mail2->ErrorInfo}";
                        }
                        */
                        
                        if($stmt->affected_rows) {                        
                            $respuesta = array(
                                'estado' => 1,
                                'mensaje' => '¡El usuario ha sido creado con éxito!',
                                'data' => array(
                                    'id' => $V_ID,
                                    'nombres' => $V_NOMBRES,
                                    'paterno' => $V_PATERNO,
                                    'materno' => $V_MATERNO
                                )
                            );
                        } else {
                            $respuesta = array(
                                'estado' => 0,
                                'mensaje' => '¡Error!',
                                'data' => array(
                                    '1' => 'Ha habido un error, intente nuevamente'
                                )
                            );
                        }

                        $stmt->close();

                    } else {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => 'El usuario no tiene los privilegios de acceso al servicio'
                            )
                        );
                    }
                }

            } else {
                $respuesta = array(
                    'estado' => 0,
                    'mensaje' => '¡Error!',
                    'data' => $earray
                );
            }
        } catch(Exception $e) {
            $respuesta = array(
                'estado' => 0,
                'mensaje' => '¡Error!',
                'data' => array(
                    '1' => $e->getMessage()
                )
            );
        }
    } else {
        $respuesta = array(
            'estado' => 0,
            'mensaje' => '¡Error!',
            'data' => array(
                '1' => 'El método de solicitud no es el indicado'
            )
        );
    }    

    echo json_encode($respuesta, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    $conn->close();
?>