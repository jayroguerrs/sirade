<!DOCTYPE html>
<!--
Author: JAYRO GUERREROS ECHIA
Product Name: SIRADE - SISTEMA DE REGISTRO ADMINISTRATIVO DE LA DIRECCIÓN DE ENFERMERÍA
Contact: jayroguerreros@gmail.com
Follow: www.instagram.com/jayroguerrs
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/jayroguerreros
License: Todos los derechos CLÍNICA RICARDO PALMA.
-->
<html lang="en" >
    <!--begin::Head-->
    <head><base href=""/>
        <title>SIRADE | Julia</title>
        <meta charset="utf-8"/>
        <meta name="description" content="<?php echo $row['CAPLI_MARCA'] ;?>, <?php echo $row['CAPLI_DESCRIPCION'] ;?>"/>
        <meta name="keywords" content="Asistencias, control, gestión, clínicas, médicos, enfermería, hospital, clínicas"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="<?php echo $row['CAPLI_MARCA'] ;?>, <?php echo $row['CAPLI_DESCRIPCION'] ;?>" />
        <meta property="og:site_name" content="Hay un dron en mi sopa | Julia" />
        <link rel="canonical" href="https://hayundronenmisopa.com/julia"/>
        <link rel="shortcut icon" href="assets/media/logos/favicon.png"/>
        <!--begin::Fonts-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"/>
        <!--end::Fonts-->
        <!--begin::Vendor Stylesheets(used by this page)-->
        <link href="assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css"/>
        <!--end::Vendor Stylesheets-->
        <!--begin::Global Stylesheets Bundle(used by all pages)-->
        <link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
        <!--end::Global Stylesheets Bundle-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@12.1.0/dist/handsontable.full.min.css">
    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <input type="hidden" id="session_usuario_id" value="<?php echo $_SESSION['id']; ?>" >
    <input type="hidden" id="session_rol_id" value="<?php echo $_SESSION['rol_id']; ?>" >
    <body  data-kt-name="good" id="kt_app_body" data-kt-app-page-loading-enabled="true" data-kt-app-page-loading="on" data-kt-app-layout="light-sidebar" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true"  class="app-default" >
    <?php include 'partials/theme-mode/_init.php' ?>
    <?php include 'layout/partials/_page-loader.php' ?>
    <?php include 'layout/_default.php' ?>
    <?php include 'partials/_scrolltop.php' ?>
        <!--begin::Javascript-->
        <input type="hidden" id="app_nombre" value="<?php echo $_SESSION['nomapp']; ?>">
        <input type="hidden" id="app_id" value="<?php echo $_SESSION['codapp']; ?>">
        <!--begin::Global Javascript Bundle(used by all pages)-->
        <script src="assets/plugins/global/plugins.bundle.js"></script>
        <script src="assets/js/scripts.bundle.js"></script>
        <script src="auth/sign-out/sign-out.model.js" type="module"></script>
        <!--end::Global Javascript Bundle-->
        <!--begin::Vendors Javascript(used by this page)-->
        <script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>
        <!--end::Vendors Javascript-->
        <!--begin::Custom Javascript(used by this page)-->
        <script src="<?php echo $archivo ;?>.model.js" type="module"></script>
        <!--end::Custom Javascript-->
        <script src="https://cdn.jsdelivr.net/npm/handsontable@12.1.0/dist/handsontable.full.min.js"></script>
    <!--end::Javascript-->
    </body>
    <!--end::Body-->
</html>