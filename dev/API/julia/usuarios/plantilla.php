<?php
    include '../../connection/bd_connection.php';

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=data.csv');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');

    try {

        // Aquí no usas sentencias preparadas, así que puedes ejecutar la consulta directamente
        $query = "SELECT 
                        NUSUA_ID 'CÓDIGO',
                        NUSUA_ID 'NÚMERO DOCUMENTO',
                        NUSUA_ID 'NOMBRES',
                        NUSUA_ID 'DESEMPEÑO',
                        NUSUA_ID 'OCUPACIÓN',
                        NUSUA_ID 'PAIS NACIMIENTO',    
                        NUSUA_ID 'CORREO ELECTRÓNICO',
                        NUSUA_ID 'USUARIO',
                        NUSUA_ID 'ROL',
                        NUSUA_ID 'ESTADO'
                    FROM SRD_USUARIOS au 
                    WHERE 1 = 0
                    UNION 
                    SELECT 
                        '0100050',
                        '77462442',
                        'MIÑANO GUZMAN, SUSANA NANCY', 
                        (SELECT sd.CDESE_DESCRIPCION FROM srd_desempenio sd WHERE sd.NAUDI_EST_REG = 1 AND sd.NDESE_ESTADO = 1 LIMIT 1), 
                        (SELECT so.COCUP_DESCRIPCION FROM srd_ocupacion so WHERE so.NAUDI_EST_REG = 1 AND so.NOCUP_ESTADO = 1 LIMIT 1), 
                        (SELECT sn.CNACI_DESCRIPCION FROM srd_nacionalidad sn WHERE sn.NAUDI_EST_REG = 1 AND sn.NNACI_ESTADO = 1 LIMIT 1), 
                        'colaborador@gmail.com',
                        '77462442',
                        (SELECT sr.CROLE_DESCRIPCION FROM srd_roles sr WHERE sr.NAUDI_EST_REG = 1 AND sr.NROLE_ESTADO = 1 LIMIT 1),
                        (SELECT scd.CCADE_NOMBRE FROM srd_catalogo_detalle scd WHERE scd.NCATA_ID = 11 AND scd.NAUDI_EST_REG = 1 AND scd.NCADE_ESTADO = 1 LIMIT 1); ";

        // Ejecutar la consulta
        $result = $conn->query($query);

        // Verificar si hay resultados
        if ($result->num_rows > 0) {
            // Abrir la salida CSV
            $output = fopen('php://output', 'w');
            fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));
            
            // Obtener los nombres de las columnas
            $columnas = $result->fetch_fields();
            $encabezados = [];
            foreach ($columnas as $columna) {
                $encabezados[] = $columna->name;
            }

            // Escribir cabecera del CSV
            fputcsv($output, $encabezados);

            // Escribir filas del resultado en el CSV
            while ($row = $result->fetch_assoc()) {
                $row['CÓDIGO'] = '="' . $row['CÓDIGO'] . '"';
                $row['NÚMERO DOCUMENTO'] = '="' . $row['NÚMERO DOCUMENTO'] . '"';
                $row['USUARIO'] = '="' . $row['USUARIO'] . '"';

                fputcsv($output, $row);
            }

            // Cerrar el archivo CSV
            fclose($output);
        } else {
            echo 'No hay datos disponibles para exportar.';
        }

        // Cerrar la conexión
        $conn->close();
        exit();
        

    } catch(Exception $e) {
        // Manejo de errores
        echo 'Error: ' . $e->getMessage();
    }
    ?>
