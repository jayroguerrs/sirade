<!DOCTYPE html>
<!--
Author: JAYRO GUERREROS ECHIA
Product Name: CENTRUM ALUMNI - SISTEMA DE GESTIÓN DE DATOS ALUMNI CENTRUM PUCP PERÚ
Contact: jayroguerreros@gmail.com
Follow: www.instagram.com/jayroguerrs
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/jayroguerreros
License: Todos los derechos CENTRUM ALUMNI PUCP.
-->
<html lang="en" >
    <!--begin::Head-->
    <head><base href=""/>
        <title>Good – Bootstrap 5 HTML Asp.Net Core, Blazor, Django & Flask Admin Dashboard Template by Keenthemes</title>
        <meta charset="utf-8"/>
        <meta name="description" content="Good admin dashboard live demo. Check out all the features of the admin panel. A large number of settings, additional services and widgets."/>
        <meta name="keywords" content="Good, bootstrap, bootstrap 5, admin themes, Asp.Net Core & Django starter kits, admin themes, bootstrap admin, bootstrap dashboard, bootstrap dark mode"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Good - Bootstrap 5 HTML Asp.Net Core, Blazor, Django & Flask Admin Dashboard Template" />
        <meta property="og:url" content="https://themes.getbootstrap.com/product/good-bootstrap-5-admin-dashboard-template"/>
        <meta property="og:site_name" content="Keenthemes | Good" />
        <link rel="canonical" href="https://preview.keenthemes.com/good"/>
        <link rel="shortcut icon" href="assets/media/logos/favicon.png"/>
        <!--begin::Fonts-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"/>        <!--end::Fonts-->
        <!--begin::Vendor Stylesheets(used by this page)-->
        <link href="assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css"/>
        <link href="assets/plugins/custom/vis-timeline/vis-timeline.bundle.css" rel="stylesheet" type="text/css"/>
        <!--end::Vendor Stylesheets-->
        <!--begin::Global Stylesheets Bundle(used by all pages)-->
        <link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
            <!--end::Global Stylesheets Bundle-->
    </head>
    <!--end::Head-->
    <!--begin::Body-->
    <body  data-kt-name="good" id="kt_app_body" data-kt-app-page-loading-enabled="true" data-kt-app-page-loading="on" data-kt-app-layout="light-sidebar" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true"  class="app-default" >
<?php include 'partials/theme-mode/_init.php' ?>
<?php include 'layout/partials/_page-loader.php' ?>
<?php include 'layout/_default.php' ?>
<?php include 'partials/_scrolltop.php' ?>
                    <!--begin::Modals-->
<?//php include 'partials/modals/_upgrade-plan.php' ?>
<?//php include 'partials/modals/create-project/_main.php' ?>
<?//php include 'partials/modals/create-app/_main.php' ?>
<?//php include 'partials/modals/create-campaign/_main.php' ?>
<?//php include 'partials/modals/users-search/_main.php' ?>
<?//php include 'partials/modals/_invite-friends.php' ?>
            <!--end::Modals-->
        <!--begin::Javascript-->
        <script> var hostUrl = "assets/"; </script>
        <!--begin::Global Javascript Bundle(used by all pages)-->
        <script src="assets/plugins/global/plugins.bundle.js"></script>
        <script src="assets/js/scripts.bundle.js"></script>
        <script src="apps/teleenfermeria/auth/sign-out/sign-out.model.js"></script>
        <!--end::Global Javascript Bundle-->
        <!--begin::Vendors Javascript(used by this page)-->
        <script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>
        <script src="assets/plugins/custom/vis-timeline/vis-timeline.bundle.js"></script>
        <!--end::Vendors Javascript-->
        <!--begin::Custom Javascript(used by this page)-->
<?php
    if($page == 'index'){ ?>
        <script src="page/dashboards/demografico/demografico.model.js"></script> <?php
    } elseif ($page == 'lista-alumni') {?>
        <script src="page/alumni/lista/lista-alumni.model.js"></script> <?php
    }
?>

        <script src="assets/js/widgets.bundle.js"></script>
        <script src="assets/js/custom/widgets.js"></script>
        <!--
        <script src="assets/js/custom/apps/chat/chat.js"></script>
        <script src="assets/js/custom/utilities/modals/upgrade-plan.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/type.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/budget.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/settings.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/team.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/targets.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/files.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/complete.js"></script>
        <script src="assets/js/custom/utilities/modals/create-project/main.js"></script>
        <script src="assets/js/custom/utilities/modals/create-app.js"></script>
        <script src="assets/js/custom/utilities/modals/create-campaign.js"></script>
        <script src="assets/js/custom/utilities/modals/users-search.js"></script>
        -->
        <!--end::Custom Javascript-->
        
    <!--end::Javascript-->
    </body>
    <!--end::Body-->
</html>