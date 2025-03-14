<?php
    include '../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: *');

    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // VALOR DE LAS ENTRADAS
        $V_PERIODO = isset($_GET['periodo']) ? trim($_GET['periodo']) : '' ;
        $V_ID = isset($_GET['usuario']) ? trim($_GET['usuario']) : '' ;
        $V_ROL = !isset($_GET["usuario_rol"]) ? NULL : ($_GET["usuario_rol"] == '' ? NULL : $_GET["usuario_rol"]);

        try {
            
            $contador = 0;
            session_start();
            $erray = array();
            $contadorsession = 0;

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

            // VALIDAMOS EL ID DEL PERIODO
            if ( $V_PERIODO === NULL || $V_PERIODO == '' ) {
                $error = 'El ID del periodo es obligatorio';
                $contador += 1;
                $earray[$contador] = $error;
            } else {
                $stmt = $conn->prepare("SELECT NPERI_ID FROM SRD_PERIODO WHERE NPERI_ID = ? AND NAUDI_EST_REG = 1 AND NPERI_ESTADO = 1;");
                $stmt->bind_param("i", $V_PERIODO);
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
                            B.CAREA_DESCRIPCION
                        FROM SRD_SUPER_AREAS_PERIODO A 
                        INNER JOIN SRD_AREAS B ON A.CAREA_ID = B.CAREA_ID AND B.NAUDI_EST_REG = 1 AND B.NAREA_ESTADO = 1
                        WHERE ";
                        
                //Filtros de Busqueda personalizados
                if (!empty($V_USER) && isset($V_USER)) {
                    $query .= "A.NUSUA_ID_SUPERVISOR = " . $V_ID . " AND ";
                }

                if (!empty($V_PERIODO) && isset($V_PERIODO)) {
                    $query .= "A.NPERI_ID = " . $V_PERIODO . " AND ";
                }

                //Fin Filtros de Busqueda personalizados
                
                $query .= " A.NSAPE_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                            ORDER BY A.CAREA_ID ASC";
                
                $result = $conn->query($query);
                $data = array();
                while($row = $result->fetch_assoc()) {
                    $data[] = array(
                        'idArea' => $row['CAREA_ID'],
                        'nombreArea' => $row['CAREA_DESCRIPCION']
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