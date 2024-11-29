<?php
    include '../../../../../connection/bd_connection.php';

    //Modelo para el control del signin de admin
    if (($_POST['registro']) == 'editar-personal') {
        $id = $_POST['id'];
        try {
            $stmt = $conn->prepare("SELECT 
                                        A.NCOLA_ID,
                                        A.CCOLA_CODIGO,
                                        A.CCOLA_DOCUMENTO,
                                        A.CCOLA_NOMBRES,
                                        A.NCOLA_DESEMPENIO,
                                        A.NCOLA_OCUPACION,
                                        A.NCOLA_NACIONALIDAD,
                                        A.CCOLA_CORREO,
                                        A.CCOLA_IMG,
                                        A.NCOLA_USR_INS,
                                        A.NCOLA_USR_UPD,
                                        A.DCOLA_FEC_INS,
                                        A.DCOLA_FEC_UPD,
                                        A.NCOLA_ESTADO_COL,
                                        A.CCOLA_ESTADO
                                    FROM bdjulia.SRD_COLABORADORES A
                                    WHERE A.NCOLA_ID = ?;");
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $stmt->bind_result($NCOLA_ID, $CCOLA_CODIGO, $CCOLA_DOCUMENTO, $CCOLA_NOMBRES, $NCOLA_DESEMPENIO, 
                               $NCOLA_OCUPACION, $NCOLA_NACIONALIDAD, $CCOLA_CORREO, $CCOLA_IMG, $NCOLA_USR_INS, 
                               $NCOLA_USR_UPD, $DCOLA_FEC_INS, $DCOLA_FEC_UPD, $NCOLA_ESTADO_COL, $CCOLA_ESTADO);
            if($stmt->affected_rows) {
                if($stmt->fetch()) {                
                    $respuesta = array(
                        'resultado' => 'editar-ok',
                        'NCOLA_ID' => $NCOLA_ID,
                        'CCOLA_CODIGO' => $CCOLA_CODIGO,
                        'CCOLA_DOCUMENTO' => $CCOLA_DOCUMENTO,
                        'CCOLA_NOMBRES' => $CCOLA_NOMBRES,
                        'NCOLA_DESEMPENIO' => $NCOLA_DESEMPENIO,
                        'NCOLA_OCUPACION' => $NCOLA_OCUPACION,
                        'NCOLA_NACIONALIDAD' => $NCOLA_NACIONALIDAD,
                        'CCOLA_CORREO' => $CCOLA_CORREO,
                        'CCOLA_IMG' => $CCOLA_IMG,
                        'NCOLA_USR_INS' => $NCOLA_USR_INS,
                        'NCOLA_USR_UPD' => $NCOLA_USR_UPD,
                        'DCOLA_FEC_INS' => date_format(date_create($DCOLA_FEC_INS), "d/m/Y"),
                        'DCOLA_FEC_UPD' => date_format(date_create($DCOLA_FEC_UPD), "d/m/Y"),
                        'NCOLA_ESTADO_COL' => $NCOLA_ESTADO_COL,
                        'CCOLA_ESTADO' => $CCOLA_ESTADO                        
                    );                
                } else {
                    $respuesta = array(
                        'resultado' => 'editar-x1'
                    );
                }
            } else {
                $respuesta = array(
                    'resultado' => 'editar-x2'
                );
            }                        
        } catch(Exception $e) {
            $respuesta = array(
                'resultado' => 'editar-x3'
            );
        }
        echo json_encode($respuesta);
    } 
?>