<?php 
    // PARÁMETROS DE CONEXIÓN
    include 'connection/bd_connection.php';
    
    $campo1 = ($page == 'index') ? '' : " CSUBS_HREF = '$page' AND ";
    $campo2 = ($page == 'index') ? 'LIMIT 1' : '';
    
    $sql = "SELECT 
                A.NSUBS_ID,
                LOWER(CSECC_DESCRIPCION) CSECC_DESCRIPCION,
                CSUBS_DESCRIPCION,
                CSUBS_HREF,
                CSUBS_TITULO,
                -- CSUBS_URL,
                CAPLI_NOMBRE_PAG
            FROM SRD_SUBSECCIONES A
            INNER JOIN SRD_SECCIONES B ON A.NSECC_ID = B.NSECC_ID
            INNER JOIN SRD_APLICACIONES C ON B.CAPLI_ID = C.CAPLI_ID
            INNER JOIN SRD_ROLES_SUBSECCION D ON A.NSUBS_ID = D.NSUBS_ID 
            WHERE CAPLI_NOMBRE_PAG = '$app' AND " . $campo1 . " D.NROLE_ID = " . $_SESSION['rol_id'] . "
            ORDER BY NSECC_ORDEN, NSUBS_ORDEN " . $campo2 . " ;";
    
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // output data of each row
        $first = true;
        while($row = $result->fetch_assoc()) {
            //Menú
            $menu = ucwords($row['CSECC_DESCRIPCION']);
            //Breadcumbs
            $titulo = ucwords($row['CSUBS_TITULO']); $subtitulo = array('Inicio');
            //Guardar el primer registro de CSUBS_TITULO en la variable $page
            if ($first) {
                $page = $row['CSUBS_HREF'];
                $first = false;
            } ?>
            <!--begin::App-->
            <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
                <!--begin::Page-->
                <div class="app-page  flex-column flex-column-fluid " id="kt_app_page">
            <?php include 'layout/partials/_header.php' ?>
                    <!--begin::Wrapper-->
                    <div class="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
            <?php include 'layout/partials/_sidebar.php' ?>
                        <!--begin::Main-->
                        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                            <!--begin::Content wrapper-->
                            <div class="d-flex flex-column flex-column-fluid">
            <?php include 'layout/_content.php'; ?>
                            </div>
                            <!--end::Content wrapper-->
            <?php include 'layout/partials/_footer.php'; ?>
                        </div>
                        <!--end:::Main-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Page-->
            </div>
            <!--end::App-->
            <?php //include 'partials/_drawers.php' ?>

        <?php }  
    } else {
        include 'auth/404/404.design.php';
    }
    
?>