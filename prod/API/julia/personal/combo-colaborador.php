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
        $V_ROL = isset($_GET['usuario_rol']) ? trim($_GET['usuario_rol']) : '' ;
        $V_PERI = isset($_GET['id_periodo']) ? trim($_GET['id_periodo']) : '' ;
        $V_SERV = isset($_GET['id_servicio']) ? trim($_GET['id_servicio']) : '' ;

        try {
            
            $contador = 0;
            $erray = array();
            
            if ($contador == 0) {
                // CODIGO PARA CUANDO EL USUARIO SEA DEL TIPO ADMINISTRADOR             
                $query = "SELECT DISTINCT 
                            A.NUSUA_ID ID_COLABORADOR,
                            C.CUSUA_NOMBRES,
                            A.NJENC_ID 
                        FROM SRD_JCI_ENCUESTAS A
                        INNER JOIN SRD_JCI_AREAS_SUPER B ON A.CAREA_ID = B.CAREA_ID
                        INNER JOIN SRD_USUARIOS C ON C.NUSUA_ID = A.NUSUA_ID
                        WHERE ";
                        
                //Filtros de Busqueda personalizados
                if (!empty($V_USER) && isset($V_USER) && $V_ROL != 1) {
                    $query .= "A.NJENC_SUPERVISOR = " . $V_USER . " AND ";
                }

                if (!empty($V_PERI) && isset($V_PERI)) {
                    $query .= "A.CJPER_ID = '" . $V_PERI . "' AND ";
                }

                if (!empty($V_SERV) && isset($V_SERV)) {
                    $query .= "A.CAREA_ID = '" . $V_SERV . "' AND ";
                }
                //Fin Filtros de Busqueda personalizados
                
                $query .= " A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND 
                            B.NASUP_ESTADO = 1 AND B.NAUDI_EST_REG = 1 AND 
                            C.NUSUA_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                        ORDER BY C.CUSUA_NOMBRES ASC;";
                
                $result = $conn->query($query);
                $data = array();
                while($row = $result->fetch_assoc()) {
                    $data[] = array(
                        'id_colaborador' => $row['ID_COLABORADOR'],
                        'nom_colaborador' => $row['CUSUA_NOMBRES'],
                        'id_encuesta' => $row['NJENC_ID']
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