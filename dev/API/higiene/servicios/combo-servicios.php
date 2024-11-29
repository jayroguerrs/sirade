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
        $V_ROL = !isset($_GET["usuario_rol"]) ? NULL : ($_GET["usuario_rol"] == '' ? NULL : $_GET["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();
            
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
                    $query .= "A.NJENC_SUPERVISOR = " . $V_USER . " AND ";
                }

                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "A.CJPER_ID = '" . $V_PERI . "' AND ";
                }
                //Fin Filtros de Busqueda personalizados
                
                $query .= " A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND 
                            B.NASUP_ESTADO = 1 AND B.NAUDI_EST_REG = 1 AND
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