<?php
    include '../../../../connection/bd_connection.php';
    
    session_start();
    if(!isset($_SESSION['rol'])){
        $id = $_SESSION['id_julia'];
        // Ahora revisamos si el usuario está registrado en BD
        $stmt = $conn->prepare("SELECT 
                                    A.CUSER_JULIA_ROL,
                                    B.CTIRO_DESCRIPCION,
                                    A.CUSER_JULIA_IMG,
                                    A.CUSER_JULIA_CORREO
                                FROM bdjulia.SRD_JULIA_USR A
                                INNER JOIN bdjulia.SRD_TIPO_ROL B ON A.CUSER_JULIA_ROL = B.NTIRO_ID
                                WHERE A.CUSER_JULIA_ESTADO = 1 AND A.CUSER_JULIA_CODIGO = ?;");
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $stmt->bind_result($rol, $descrol, $img, $correo);
        if($stmt->affected_rows) {
            if($stmt->fetch()) {                
                $_SESSION['rol'] = $rol;
                $_SESSION['descrol'] = $descrol;
                $_SESSION['correo'] = $correo;
                $_SESSION['img'] = $img;
                $respuesta = array(
                    'resultado' => 'verifyok'
                );
            } else {
                $respuesta = array(
                    'resultado' => 'verifyx'
                );
            }
        } else {
            $respuesta = array(
                'resultado' => 'verifyx'
            );
        }
    } else {
        session_start();
        // remove all session variables
        session_unset();
        // destroy the session
        session_destroy();

        $respuesta = array(
            'resultado' => 'verifyx'
        );
    }    

    echo json_encode($respuesta);

    $conn->close();
?>