<?php

    include '../../../../admin/connection/bd_connection.php';

    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    
    // Verificar si es una solicitud POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener los valores enviados desde el frontend
        $V_ESTA = !isset($_POST["estado"]) ? null : ($_POST["estado"] === '0' ? '0' : ($_POST["estado"] == '' ? null : $_POST["estado"]));
        $V_CAMBIOS = !isset($_POST["cambios"]) ? null : ($_POST["cambios"] == '' ? null : $_POST["cambios"]);
        
        $V_ID = !isset($_POST["usuario"]) ? null : ($_POST["usuario"] == '' ? null : $_POST["usuario"]);
        $V_ROL = !isset($_POST["usuario_rol"]) ? NULL : ($_POST["usuario_rol"] == '' ? NULL : $_POST["usuario_rol"]);
        
        try {
            
            $contador = 0;
            $earray = array();
            session_start();
            $contadorsession = 0;

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
                
                $data = json_decode($V_CAMBIOS, true);
                // Ahora puedes acceder a los datos en $data
                foreach ($data as $change) {

                    $colaborador    = $change['colaborador'];
                    $id_horario     = $change['id_horario'];
                    $area_desc      = $change['area'];
                    $area_dia       = ($change['area_dia'] == NULL ? $change['area'] : $change['area']);
                    $id_periodo     = $change['id_periodo'];
                    $nombre_columna = $change['nombre_columna'];
                    $valor_nuevo    = $change['valor_nuevo'];
                    $valor_anterior = $change['valor_anterior'];

                    if ($id_horario != null || $id_horario != 0) {

                        // Verificar si el horario tiene marcación
                        $stmt = $conn->prepare("SELECT A.NMARC_ID 
                                                FROM SRD_MARCACION A
                                                WHERE A.NHOTU_ID IN (SELECT NHOTU_ID FROM SRD_HORARIO_TURNOS WHERE DHOTU_FECHA = ? AND NHORA_ID = ?) AND NMARC_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                        $stmt->bind_param("ss", $nombre_columna, $id_horario);
                        $stmt->execute();
                        $stmt->store_result();
                        if ($stmt->num_rows > 0) {
                            $error = 'El horario tiene marcaciones, no se puede modificar';
                            $contador += 1;
                            $earray[$contador] = $error;
                        } else {

                            // Eliminamos todos los turnos del día en mención
                            $stmt = $conn->prepare("DELETE FROM srd_horario_turnos WHERE DHOTU_FECHA = ? AND NHORA_ID = ?;");
                            $stmt->bind_param("ss", $nombre_columna, $id_horario);
                            $stmt->execute();

                            // Verifica si se realizaron cambios
                            if ($stmt-> affected_rows > 0) {
                                $respuesta = array(
                                    'estado' => 1,
                                    'mensaje' => '¡Se realizó el registro exitosamente!',
                                    'data' => array(
                                        'id' => $V_ID
                                    )
                                );
                            }
                        }

                        if ($valor_nuevo != null && $valor_nuevo != '') {
                            // Separar el valor nuevo por el guion
                            $valor_nuevo = explode("---", $valor_nuevo);
                            $sql_valor_nuevo = implode("','", $valor_nuevo);  

                            // Insertamos cada turno
                            foreach ($valor_nuevo as $valor) {

                                // Verificar si el turno existe
                                $stmt = $conn->prepare("SELECT CTURN_ID 
                                                        FROM SRD_TURNO
                                                        WHERE CTURN_ID = ? AND NTURN_ESTADO = 1 AND NAUDI_EST_REG = 1;");
                                $stmt->bind_param("s", $valor);
                                $stmt->execute();
                                $stmt->store_result();
                                if ($stmt->num_rows > 0) {
                                    $stmt->bind_result($turno);
                                    $stmt->fetch();
                                    $stmt = $conn->prepare("INSERT INTO 
                                                                SRD_HORARIO_TURNOS (
                                                                    NHORA_ID, 
                                                                    CTURN_ID, 
                                                                    CAREA_ID, 
                                                                    DHOTU_FECHA, 
                                                                    NAUDI_REG_INS) 
                                                            VALUES (?, ?, (SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_DESCRIPCION = ? AND NAREA_ESTADO = 1 AND NAUDI_EST_REG = 1), ?, ?);");
                                    $stmt->bind_param("isssi", $id_horario, $turno, $area_dia, $nombre_columna, $V_ID);
                                    $stmt->execute();
                                    
                                    // Verifica si se agregaron los turnos
                                    if ($stmt-> affected_rows > 0) {
                                    } else {
                                        $error = '1. No se puede agregar el turno: ' . $turno . ' de la fecha: ' . $nombre_columna;
                                        $contador += 1;
                                        $earray[$contador] = $error;
                                    }
                                }
                            }
                        } 

                    } else {
                        // Iniciar la transacción
                        $conn->begin_transaction();

                        // CREAMOS EL REGISTRO DE RELACIÓN DE SUPERVISOR CON AREA POR PERIODO
                        $stmt = $conn->prepare("SELECT NSAPE_ID 
                                                FROM SRD_SUPER_AREAS_PERIODO A
                                                WHERE A.CAREA_ID = (SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_DESCRIPCION = ?) AND NPERI_ID = ? AND NSAPE_ESTADO = 1 AND NAUDI_EST_REG = 1;");

                        $stmt->bind_param("si", $area_desc, $id_periodo);
                        $stmt->execute();
                        $stmt->store_result();
                        if ($stmt->num_rows > 0) {
                            $stmt->bind_result($NSAPE_ID);
                            $stmt->fetch();
                            
                            $stmt = $conn->prepare("INSERT INTO 
                                                        SRD_HORARIO (
                                                            NSAPE_ID, 
                                                            NUSUA_ID, 
                                                            NAUDI_REG_INS) 
                                                    VALUES (?, (SELECT NUSUA_ID FROM SRD_USUARIOS WHERE CUSUA_NOMBRES = ? AND NUSUA_ESTADO = 1 AND NAUDI_EST_REG = 1), ?);");
                            $stmt->bind_param("isi", $NSAPE_ID, $colaborador, $V_ID);
                            $stmt->execute();
                            
                            // Verifica si se realizaron cambios
                            if ($stmt-> affected_rows > 0) {
                                // Encontrar el id del horario insertado
                                $NHORA_ID = $conn->insert_id;

                                if ($valor_nuevo != null && $valor_nuevo != '') {
                                    // Separar el valor nuevo por el guion
                                    $valor_nuevo = explode("---", $valor_nuevo);
                                    $sql_valor_nuevo = implode("','", $valor_nuevo);  
                                    
                                    // Insertamos cada turno
                                    foreach ($valor_nuevo as $valor) {
                                        $stmt = $conn->prepare("INSERT INTO 
                                                                    SRD_HORARIO_TURNOS (
                                                                        NHORA_ID, 
                                                                        CTURN_ID, 
                                                                        CAREA_ID, 
                                                                        DHOTU_FECHA, 
                                                                        NAUDI_REG_INS) 
                                                                VALUES (?, ?, (SELECT CAREA_ID FROM SRD_AREAS WHERE CAREA_DESCRIPCION = ? AND NAREA_ESTADO = 1 AND NAUDI_EST_REG = 1), ?, ?);");
                                        $stmt->bind_param("isssi", $NHORA_ID, $valor, $area_desc, $nombre_columna, $V_ID);
                                        $stmt->execute();
                                        
                                        if ($stmt-> affected_rows > 0) {
                                            // Si todo va bien, se confirma la transacción
                                            $conn->commit();
                                        } else {
                                            $error = '2. No se puede agregar el turno: ' . $valor . ' de la fecha: ' . $nombre_columna;
                                            $contador += 1;
                                            $earray[$contador] = $error;
                                            $conn->rollback();
                                        }
                                    }
                                }

                            } else {
                                $error = '3. No se puede agregar el turno: ' . $valor . ' de la fecha: ' . $nombre_columna;
                                $contador += 1;
                                $earray[$contador] = $error;
                                $conn->rollback();
                            }

                        } else {
                            $error = 'No se encontró el área en el periodo: ' . $id_periodo;
                            $contador += 1;
                            $earray[$contador] = $error;
                            $conn->rollback();
                        }

                    }
                }

                if ($contador == 0) {
                    $respuesta = array(
                        'estado' => 1,
                        'mensaje' => '¡Éxito',
                    );
                } else {
                    $respuesta = array(
                        'estado' => 0,
                        'mensaje' => '¡Error!',
                        'data' => $earray
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
    
    $conn->close();
?>