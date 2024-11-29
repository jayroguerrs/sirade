<?php    

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    include '../../connection/bd_connection.php';

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // VALOR DE LAS ENTRADAS
        $user = isset($_POST['username']) ? trim($_POST['username']) : '';
        $psw = isset($_POST['password']) ? trim($_POST['password']) : '';
        $cod = isset($_POST['cod']) ? trim($_POST['cod']) : '';     
        try {

            $e_array = array();
            $contador = 0;

            // Validación: Usuario
            if ($user == '') {
                $error = 'El usuario es obligatorio';
                $contador += 1;
                $e_array[$contador] = $error;
            }
            
            // Validación: Password
            if ($psw == '') {
                $error = 'La contraseña es obligatoria';
                $contador += 1;
                $e_array[$contador] = $error;
            }

            // Validación: Código de Aplicación
            if ($cod == '') {
                $error = 'El código de la aplicación es obligatorio';
                $contador += 1;
                $e_array[$contador] = $error;
            }

            // Verificación de validaciones
            if ($contador == 0) {
                $url = "http://galeno.crp.com.pe/wsSecurity/WebServicesSecurity.asmx?WSDL";
                $num = '19';
                $Parametros = $user . '|' . $psw . '|' . $num;
                $client = new SoapClient($url, [ "trace" => 1 ] );
                $result = $client->getLista($Parametros);
                $data = json_encode($result);
                $getdata = json_decode($data, true);

                // Validación de usuario
                if(isset($getdata['EAutorizacionLst']['EAutorizacion'][0]['Valor'])){
                    // Validación de contraseña
                    if($getdata['EAutorizacionLst']['EAutorizacion'][0]['Valor'] != '0'){
                        $id = $getdata['EAutorizacionLst']['EAutorizacion'][6]['Valor'];            //CODIGO USUARIO
                        $nombres = $getdata['EAutorizacionLst']['EAutorizacion'][2]['Valor'];       //NOMBRE USUARIO
                        $usuario = $getdata['EAutorizacionLst']['EAutorizacion'][1]['Valor'];       //USERNAME
                        $valor = $getdata['EAutorizacionLst']['EAutorizacion'];
                        $tamaño = count($valor);
                        $fila = 0;
                        for ($i = 0; $i < $tamaño; $i++){
                            $valor = trim($getdata['EAutorizacionLst']['EAutorizacion'][$i]['Valor']);
                            $orden = trim($getdata['EAutorizacionLst']['EAutorizacion'][$i]['Orden']);                    
                            if( $cod == $valor && $orden == 99 ){
                                $fila = $i;
                                break;
                            }
                        }

                        // Validamos si la aplicación ingresada existe y si tiene acceso a esta
                        if($fila > 0){
                            session_start();
                            $_SESSION['codigo'] = $id;                          // CÓDIGO USUARIO
                            $_SESSION['nombres'] = $nombres;                    // NOMBRES USUARIO
                            $mensaje = trim($getdata['EAutorizacionLst']['EAutorizacion'][$fila]['Mensaje']);
                            $stmt = $conn->prepare("SELECT 
                                                        CADMI_CORREO,
                                                        CADMI_IMAGEN,
                                                        STR.CTIRO_DESCRIPCION,
                                                        SRA.CROAP_APLICACION 
                                                    FROM SRD_ADMIN ADM
                                                    INNER JOIN SRD_TIPO_ROL STR ON STR.NTIRO_ID = ADM.NTIRO_ID
                                                    INNER JOIN SRD_ROLES_APLICACION SRA ON SRA.NTIRO_ID = ADM.NTIRO_ID
                                                    INNER JOIN SRD_APLICACIONES SA ON SA.CAPLI_ID = SRA.CROAP_APLICACION
                                                    WHERE CADMI_CODIGO = ? AND NADMI_ESTADO = 1 AND SA.CAPLI_CODIGO = ?;");
                            $stmt->bind_param("ss", $id, $cod);
                            $stmt->execute();
                            $stmt->bind_result($CADMI_CORREO, $CADMI_IMAGEN, $CTIRO_DESCRIPCION, $CROAP_APLICACION);
                            if($stmt->affected_rows) {
                                if($stmt->fetch()) {
                                    $_SESSION['imagen'] = $CADMI_IMAGEN;                // IMAGEN USUARIO
                                    $_SESSION['correo'] = $CADMI_CORREO;                // IMAGEN USUARIO
                                    $_SESSION['rol'] = $CTIRO_DESCRIPCION;              // ROL USUARIO
                                    $_SESSION['codapp'] = $CROAP_APLICACION;   // ID APLICACIÓN
                                    $respuesta = array(
                                        'estado' => 1,
                                        'mensaje' => '¡Ingreso Exitoso!',
                                        'data' => array(
                                            'Codigo' => $id,
                                            'Nombre' => $nombres,
                                            'Usuario' => $usuario,
                                            'TipoRol' => $CTIRO_DESCRIPCION,
                                            'Correo' => $CADMI_CORREO,
                                            'Imagen' => $CADMI_IMAGEN,
                                            'Aplicacion' => $mensaje,
                                            'Id_aplicacion' => $cod
                                        )
                                    );
                                    $stmt->close();
                                } else {
                                    $respuesta = array(
                                        'estado' => 2,
                                        'mensaje' => '¡Ingreso Incompleto!',
                                        'data' => array(
                                            'Codigo' => $id,
                                            'Nombre' => $nombres,
                                            'Usuario' => $usuario,
                                            'Aplicacion' => $mensaje,
                                            'Id_aplicacion' => $cod
                                        )
                                    );
                                }
                            } else {
                                $respuesta = array(
                                    'estado' => 2,
                                    'mensaje' => '¡Ingreso Incompleto!',
                                    'data' => array(
                                        'Codigo' => $id,
                                        'Nombre' => $nombres,
                                        'Usuario' => $usuario,
                                        'Aplicacion' => $mensaje,
                                        'Id_aplicacion' => $cod
                                    )
                                );
                            }
                        } else {
                            $respuesta = array(
                                'estado' => '0',
                                'mensaje' => "¡Error!",
                                'data' => array(
                                    '1'=> 'El usuario no tiene acceso a la aplicación ' . $cod . ' o no existe'
                                )
                            );
                        }
                    } else {
                        $respuesta = array(
                            'estado' => '0',
                            'mensaje' => "¡Error!",
                            'data' => array(
                                '1'=> 'La contraseña ingresada es incorrecta'
                            )
                        ); 
                    }
                    
                } else {
                    $respuesta = array(
                        'estado' => '0',
                        'mensaje' => "¡Error!",
                        'data' => array(
                            '1'=> 'El usuario ingresado es incorrecto'
                        )
                    );   
                }
            }else {
                $respuesta = array(
                    'estado' => '0',
                    'mensaje' => "¡Error!",
                    'data' => $e_array
                );     
            }
        } catch (Exception $e) {
            $respuesta = array(
                'estado' => '0',
                'mensaje' => '¡Error!',
                'data' => $e->getMessage()
            );
        }
    } else {
        $respuesta = array(
            'estado' => '0',
            'mensaje' => '¡Error!',
            'data' => array(
                '1'=> 'El método indicado no es el correcto'
            )
        );
    }

    echo json_encode($respuesta, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    $conn->close();

?>