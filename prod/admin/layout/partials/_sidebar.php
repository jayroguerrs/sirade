<?php
    // PARÁMETROS DE CONEXIÓN
    include 'connection/bd_connection.php';
?>
<!--begin::sidebar-->
<div id="kt_app_sidebar" class="app-sidebar  flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar"
    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px"
    data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
    <!--begin::Logo-->
    <div class="app-sidebar-logo d-none d-lg-flex flex-stack flex-shrink-0 px-8" id="kt_app_sidebar_logo">
        <!--begin::Logo image-->
        <a href="./?app=<?php echo $app ;?>">
            <img alt="Logo" src="assets/media/logos/default.svg" class="theme-light-show h-65px px-16" />
            <img alt="Logo" src="assets/media/logos/default-dark.svg" class="theme-dark-show h-65px px-16" />
        </a>
        <!--end::Logo image-->
        <!--begin::Menu Ajutes-->
        <!--end::Menu Ajutes-->
    </div>
    <!--end::Logo-->
    <div class="separator d-none d-lg-block"></div>
    <!--begin::Toolbar-->
    <div class="app-sidebar-toolbar d-flex flex-stack py-6 px-8">
        <!--begin::Select-->
        <select id="select-app" class="form-select form-select-custom fw-bold" data-control="select2"
            data-placeholder="Seleccione una App" data-hide-search="true">
            <option value="1">Seleccionar App</option>
            <?php                                            
                $sql = "SELECT 
                            LOWER(CAPLI_NOMBRE_PAG) CAPLI_NOMBRE_PAG,
                            LOWER(CAPLI_MARCA) CAPLI_MARCA
                        FROM SRD_APLICACIONES A 
                        INNER JOIN SRD_ROLES_APP B ON A.CAPLI_ID = B.CAPLI_ID
                        WHERE B.NROLE_ID = " . $_SESSION['rol_id'] . "
                        ORDER BY NAPLI_ORDEN ASC; ";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) { ?>
                        <option value="<?php echo $row["CAPLI_NOMBRE_PAG"];?>"  <?php echo ($app == $row["CAPLI_NOMBRE_PAG"]) ? 'selected': '' ; ?>><?php echo ucwords($row["CAPLI_MARCA"]); ?></option> <?php 
                    }
                }
            ?>
        </select>
        <!--end::Select-->
        <!--begin::Button-->
        <a href="javascript:AbrirApp();" class="btn btn-icon btn-custom fw-bold flex-shrink-0 ms-3">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
            <span class="svg-icon svg-icon-2qx">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                        fill="currentColor" />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </a>
        <!--end::Button-->
    </div>
    <!--end::Toolbar-->
    <div class="separator"></div>

    <!--begin::Sidebar menu-->
    <div class="app-sidebar-menu  app-sidebar-menu-arrow  hover-scroll-overlay-y my-5 my-lg-5 px-3"
        id="kt_app_sidebar_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_app_sidebar_toolbar, #kt_app_sidebar_footer" data-kt-scroll-offset="0">
        <!--begin::Menu-->
        <div class="menu menu-column menu-sub-indention menu-active-bg fw-semibold" id="#kt_sidebar_menu"
            data-kt-menu="true">
            
<?php
    $sql = "SELECT DISTINCTROW
                B.NSECC_ID,
                LOWER(B.CSECC_DESCRIPCION) CSECC_DESCRIPCION,
                B.CSECC_NOMBRE_PAG,
                B.CSECC_ICONO,
                B.NSECC_ORDEN
            FROM SRD_SUBSECCIONES A
            INNER JOIN SRD_SECCIONES B ON A.NSECC_ID = B.NSECC_ID
            INNER JOIN SRD_APLICACIONES C ON C.CAPLI_ID = B.CAPLI_ID
            INNER JOIN SRD_ROLES_SUBSECCION D ON D.NSUBS_ID = A.NSUBS_ID 
            WHERE C.CAPLI_NOMBRE_PAG = '$app' AND D.NROLE_ID = " . $_SESSION['rol_id'] . "
                AND A.NAUDI_EST_REG  = 1 AND A.NSUBS_ESTADO = 1
                AND B.NAUDI_EST_REG  = 1 AND B.NSECC_ESTADO = 1
                AND C.NAUDI_EST_REG  = 1 AND C.NAPLI_ESTADO = 1
                AND D.NAUDI_EST_REG  = 1 AND D.NROSU_ESTADO = 1
            ORDER BY B.NSECC_ORDEN;";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) { ?>
            <!--begin:Menu DASHBOARDS-->
            <div data-kt-menu-trigger="click"
                class="menu-item here <?php echo ($menu == ucwords($row['CSECC_NOMBRE_PAG'])) ? 'show': ''; ?> menu-accordion">
                <!--begin:Menu link-->
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone <?php echo $row['CSECC_ICONO'] ;?> fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </i>
                    </span>
                    <span class="menu-title"><?php echo ucwords($row['CSECC_DESCRIPCION']) ;?></span>
                    <span class="menu-arrow"></span>
                </span>
                <!--end:Menu link-->
                <?php                     
                    $id_seccion = $row['NSECC_ID'];
                    $archivo2 = '';
                    $sql = "SELECT 
                                A.NSUBS_ID,
                                LOWER(CSUBS_DESCRIPCION) CSUBS_DESCRIPCION,
                                CSUBS_HREF
                            FROM SRD_SUBSECCIONES A
                            INNER JOIN SRD_ROLES_SUBSECCION B ON B.NSUBS_ID = A.NSUBS_ID 
                            WHERE NSECC_ID = $id_seccion AND B.NROLE_ID = " . $_SESSION['rol_id'] . "
                                AND A.NAUDI_EST_REG  = 1 AND A.NSUBS_ESTADO = 1
                                AND B.NAUDI_EST_REG  = 1 AND B.NROSU_ESTADO = 1
                            ORDER BY NSUBS_ORDEN;";
                    $result2 = $conn->query($sql);
                    
                    if ($result2->num_rows > 0) {
                        // output data of each row
                        while($row2 = $result2->fetch_assoc()) { 
                            //if( $row2['CSUBS_URL'] == 'index' ) {
                            //    $page2 = $row2['CSUBS_HREF'];
                            //}
                            $page2 = $row2['CSUBS_HREF'];
                        ?>
                            <!--begin:Menu sub-->
                            <div class="menu-sub menu-sub-accordion">                                
                                <!--begin:Menu item-->
                                <div class="menu-item">
                                    <!--begin:Menu link-->
                                    <a class="menu-link <?php echo ($page == $row2['CSUBS_HREF'] ? 'active' : '' ); ?>" href="?app=<?php echo $app; ?>&page=<?php echo $row2['CSUBS_HREF'];?>">
                                        <span class="menu-bullet">
                                            <span class="bullet bullet-dot"></span>
                                        </span>
                                        <span
                                            class="menu-title"><?php echo ucwords($row2['CSUBS_DESCRIPCION']); ?>
                                        </span>
                                    </a>
                                    <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                            </div>
                            <!--end:Menu sub-->
                        <?php }
                    } ?>
            </div>
            <!--end:Menu DASHBOARDS-->                                    
<?php } 
    }
?>
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Sidebar menu-->   

    <!--begin::User-->
    <div class="app-sidebar-user d-flex flex-stack py-5 px-8">
        <!--begin::User avatar-->
        <div class="d-flex me-5">
            <!--begin::Menu wrapper-->
            <div class="me-5">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px cursor-pointer" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
                    <img src="assets/media/avatars/<?php echo $_SESSION['imagen']; ?>" alt="" />
                </div>
                <!--end::Symbol-->
                <?php include 'partials/menus/_user-account-menu.php' ?>
            </div>
            <!--end::Menu wrapper-->
            <!--begin::Info-->
            <div class="me-2">
                <!--begin::Username-->
                <span class="app-sidebar-username text-gray-800 text-hover-primary fs-6 fw-semibold lh-0"><?php echo ucwords(strtolower($_SESSION['nombres'])); ?></span>
                <!--end::Username-->
                <!--begin::Description-->
                <span class="app-sidebar-deckription text-gray-400 fw-semibold d-block fs-8"><?php echo ucwords(strtolower($_SESSION['rol'])); ?></span>
                <!--end::Description-->
            </div>
            <!--end::Info-->
        </div>
        <!--end::User avatar-->
        <!--begin::Action-->
        <button class="btn btn-icon btn-active-color-primary btn-icon-custom-color me-n4"
            data-bs-toggle="tooltip" title="Haga click aquí para cerrar su sesión" id="kt_sign_out_button">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr076.svg-->
            <span class="svg-icon svg-icon-2 svg-icon-gray-400"><svg width="24" height="24" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.3" width="12" height="2" rx="1" transform="matrix(-1 0 0 1 15.5 11)"
                        fill="currentColor" />
                    <path
                        d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                        fill="currentColor" />
                    <path
                        d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                        fill="currentColor" />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </button>
        <!--end::Action-->
    </div>
    <!--end::User-->
</div>
<!--end::sidebar-->

<?php
    $conn->close();
?>