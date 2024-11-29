<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // VALOR DE LAS ENTRADAS
        $V_USER = isset($_GET['usuario']) ? trim($_GET['usuario']) : '' ;
        $V_PERI = isset($_GET['id_periodo']) ? trim($_GET['id_periodo']) : '' ;
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();

            // VALIDAMOS EL USUARIO SUPERVISOR
            if ( $V_USER === NULL || $V_USER == '' ) {
                $error = 'El ID del supervisor es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NUSUA_ID FROM SRD_USUARIOS WHERE NUSUA_ID = ? AND NAUDI_EST_REG = 1;");
                $stmt->bind_param("i", $V_USER);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del supervisor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }

            // VALIDAMOS EL PERIODO
            if ( $V_PERI === NULL || $V_PERI == '' ) {
                $error = 'El ID del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else{
                $stmt = $conn->prepare("SELECT DISTINCT 
                                            A.NHPER_ID
                                        FROM SRD_HIG_ENCUESTAS A
                                        INNER JOIN SRD_HIG_PERIODO B ON A.NHPER_ID = B.NHPER_ID
                                        INNER JOIN SRD_HIG_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                        WHERE C.NUSUA_ID = ? AND A.NHPER_ID = ? AND
                                            B.NHPER_ESTADO = 1 AND B.NAUDI_EST_REG = 1 AND 
                                            A.NHENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("is", $V_USER, $V_PERI);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                } else {
                    $error = 'El ID del periodo no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }
            
            if ($contador == 0) {
                // CODIGO PARA CUANDO EL USUARIO SEA DEL TIPO ADMINISTRADOR             
                $query = "SELECT DISTINCT 
                            A.CAREA_ID,
                            C.CAREA_DESCRIPCION
                        FROM SRD_HIG_ENCUESTAS A
                        INNER JOIN SRD_HIG_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID
                        INNER JOIN SRD_AREAS C ON C.CAREA_ID = B.CAREA_ID WHERE ";
                        
                //Filtros de Busqueda personalizados
                if (!empty($V_USER) && isset($V_USER) && $V_ROL != 1) {
                    $query .= "B.NUSUA_ID = " . $V_USER . " AND ";
                }

                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "A.NHPER_ID = '" . $V_PERI . "' AND ";
                }
                //Fin Filtros de Busqueda personalizados
                
                $query .= " A.NHENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND 
                            
                            C.NAREA_ESTADO = 1 AND C.NAUDI_EST_REG = 1 
                            ORDER BY A.CAREA_ID ASC";
                
                $result = $conn->query($query);
                $data = array();
                while($row = $result->fetch_assoc()) {
                    $data[] = array(
                        'id_area' => $row['CAREA_ID'],
                        'nom_area' => $row['CAREA_DESCRIPCION']
                    );
                }
                
               if($result->num_rows > 0) {
                   $respuesta = array(
                       'estado' => 1,
                       'mensaje' => '¡Ingreso Exitoso!',
                       'total' => $result->num_rows,
                       'data' => $data
                   );
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => array(
                            '1' => 'No se encontraron registros'
                        )
                    );
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
?>