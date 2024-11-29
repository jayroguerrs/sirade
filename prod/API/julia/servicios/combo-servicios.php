<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // VALOR DE LAS ENTRADAS
        $V_ID = isset($_GET['usuario']) ? trim($_GET['usuario']) : '' ;
        $V_PERI = isset($_GET['id_periodo']) ? trim($_GET['id_periodo']) : '' ;
        $V_ROL = !isset($_GET["usuario_rol"]) ? NULL : ($_GET["usuario_rol"] == '' ? NULL : $_GET["usuario_rol"]);

        try {
            
            $contador = 0;
            $erray = array();

            // VALIDAMOS EL SI LAS VARIABLES DE SESIÓN ESTÁN INICIADAS
            if ( !isset($_SESSION['id']) || !isset($_SESSION['rol_id']) ) {
                $error = 'No se ha iniciado una sesión';
                $contador += 1;
                $earray[$contador] = $error;
                // Inciamos variables con valores nulos
                $_SESSION['id'] = NULL;
                $_SESSION['rol_id'] = NULL;
            }

            // VALIDAMOS EL ID DEL SUPERVISOR
            if ( $V_ID === NULL || $V_ID == '' ) {
                $error = 'El ID del usuario es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT A.NUSUA_ID, B.NROLE_ID 
                                        FROM SRD_USUARIOS A
                                        INNER JOIN SRD_ROLES_USUARIO B ON A.NUSUA_ID = B.NUSUA_ID AND B.NROSU_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                        WHERE A.NUSUA_ID = ? AND B.NROLE_ID = ? AND A.NAUDI_EST_REG = 1;");
                $stmt->bind_param("ii", $V_ID, $V_ROL);
                $stmt->execute();
                $stmt->store_result();
                if ($stmt->num_rows > 0) {
                    $stmt->bind_result($idusuario, $idrol);
                    $stmt->fetch();
                    if ( $idusuario != $_SESSION['id'] ) {
                        $error = 'El usuario no puede realizar dicha operación';
                        $contador += 1;
                        $est = 2;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    if ( $idrol != $_SESSION['rol_id'] ) {
                        $error = 'El rol del usuario no corresponde a la operación';
                        $contador += 1;
                        $est = 2;
                        $contadorsession += 1;
                        $earray[$contador] = $error;
                    }
                    
                    // VALIDAMOS QUE LA SESIÓN HAYA SIDO INICIADA
                    if ($contadorsession != 0) {
                        session_destroy();
                    }
                } else {
                    $error = 'El ID del supervisor no se encuentra registrado';
                    $contador += 1;
                    $earray[$contador] = $error;
                }
                $stmt->close();
            }
            
            if ($contador == 0) {
                // CODIGO PARA CUANDO EL USUARIO SEA DEL TIPO ADMINISTRADOR             
                $query = "SELECT DISTINCT 
                            A.CAREA_ID,
                            A.CAREA_DESCRIPCION
                        FROM SRD_AREAS A ON A.CAREA_ID = B.CAREA_ID WHERE ";
                        
                //Filtros de Busqueda personalizados
                if (!empty($V_ID) && isset($V_ID) && $V_ROL != 1) {
                    $query .= "A.NAREA_SUPERVISOR = " . $V_ID . " AND ";
                }

                //Fin Filtros de Busqueda personalizados
                
                $query .= " A.NAREA_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
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