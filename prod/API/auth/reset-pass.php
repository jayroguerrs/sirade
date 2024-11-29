<?php
    include '../../admin/connection/bd_connection.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require '../libs/PhpMailer/Exception.php';
    require '../libs/PhpMailer/PHPMailer.php';
    require '../libs/PhpMailer/SMTP.php';
    
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';        //RegExp para el correo

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {        
        // VALOR DE LAS ENTRADAS        
        $V_CORREO   = isset($_POST['correo'])   ? trim($_POST['correo'])    : NULL ;
        $V_TIPO     = isset($_POST['tiporol'])     ? trim($_POST['tiporol'])      : NULL ;
        $HEADERS    = getallheaders();

        try {
            
            $errores = [];

            // VALIDAMOS EL CORREO
            if ( $V_CORREO === NULL || $V_CORREO == '' || !preg_match($pattern, $V_CORREO)) {
                $errores[] = 'El correo es obligatorio y debe ser válido';
            }

           
            
            if (empty($errores)) {
                
                $V_CORREO = strtolower($V_CORREO);
                
                $stmt = $conn->prepare("SELECT 
                                            NUSUA_ID, 
                                            CUSUA_NOMBRES, 
                                            CUSUA_TOKEN 
                                        FROM SRD_USUARIOS
                                        WHERE CUSUA_CORREO = ? AND NAUDI_EST_REG = 1 AND NUSUA_ESTADO = 1;");
                
                $stmt->bind_param("s", $V_CORREO);
                $stmt->execute();
                
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $V_ID = $row["NUSUA_ID"];
                        $V_NOMBRES = $row["CUSUA_NOMBRES"];
                        $V_TOKEN = $row["CUSUA_TOKEN"];
                    }
                
                    //Create an instance; passing `true` enables exceptions
                    $mail = new PHPMailer(true);

                    try {
                        //Server settings
                        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                          //Enable verbose debug output
                        $mail->isSMTP();                                    //Send using SMTP
                        $mail->Host       = 'smtp.gmail.com';                          //Set the SMTP server to send through
                        $mail->SMTPAuth   = true;                          //SMTP Auth
                        $mail->Username   = 'jayroguerreros@gmail.com';                          //SMTP username
                        $mail->Password   = 'Nmevamddnmd123';                          //SMTP password
                        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS ;    //Enable implicit TLS encryption
                        $mail->Port       = 465;                          //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                        //Recipients
                        $mail->setFrom($mailcorreo, $mailname);
                        $mail->addAddress($V_CORREO);                           //Añadir Remitente
                    
                        //Content
                        $mail->isHTML(true);   
                        $mail->CharSet = 'UTF-8';                               //Set email format to HTML
                        $mail->Subject = '[' . $mailname . '] RESTABLECIMIENTO DE CONTRASEÑA';
                        $mail->Body    = '  <p> 
                                                <table border="0" width="100%" cellspacing="0" cellpadding="30" bgcolor="#f7f7f7">
                                                    <tbody>
                                                        <tr>
                                                            <td ><img src="https://holdingmedicoscrp.com/admin/assets/media/logos/LogoClinica.png" width="220" height="auto" /></td>
                                                            <td align="right" >SIRADE CRP</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" style="font-family: Calibri,sans-serif;">
                                                                <p style="font-size: 13pt;">Estimado(a) Sr(a): ' . $V_NOMBRES . '</strong></p>
                                                                <p style="text-align: justify; font-size: 11pt;">Con fecha ' . date('d/m/Y') . ' se ha ingresado su solicitud de cambio de contraseña. En caso usted reconozca este registro y desee proceder con el restablecimiento diríjase a la siguiente dirección: .</p>                    
                                                                <p><button class="button button2">Restablecer Contraseña</button></p>
                                                                <p style="font-family: Calibri,sans-serif; margin: 2;">Gracias.<br /><br />SIRADE CRP</p> 
                                                                <p style="text-align: justify; font-size: 10pt; font-family: Calibri,sans-serif; margin: 2;">Si no puede visualizar el mensaje comuníquese con el siguiente correo <br/><strong>Nota: Esta dirección de correo electrónico no puede recibir respuestas. Por favor, no responda este mensaje.</strong> </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            <p>';
                        $mail->send();

                        $respuesta = array(
                            'estado' => 1,
                            'mensaje' => '¡Se ha enviado las instrucciones a su correo!',

                        );
                        
                    } catch (Exception $e) {
                        $respuesta = array(
                            'estado' => 0,
                            'mensaje' => '¡Error!',
                            'data' => array(
                                '1' => "{$mail->ErrorInfo}"
                            )
                        );
                    }
                } else {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Se ha enviado las instrucciones a su correo!'
                    );
                }

            } else {
                $respuesta = array(
                    'estado' => 0,
                    'mensaje' => '¡Error!',
                    'data' => $errores
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