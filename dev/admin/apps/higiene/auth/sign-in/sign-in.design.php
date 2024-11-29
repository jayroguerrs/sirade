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
        <!--Begin::Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FS8GGP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!--End::Google Tag Manager (noscript) -->        
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root" id="kt_app_root">
            <!--begin::Authentication - Sign-in -->
            <div class="d-flex flex-column flex-lg-row flex-column-fluid">
                <!--begin::Aside-->
                <div class="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                        <!--begin::Header-->
                        <div class="d-flex flex-row-fluid flex-center flex-column text-center p-5 p-lg-5">          
                            <!--begin::Logo-->
                            <a href="./" class="py-6 pt-lg-20">
                                <img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-65px h-lg-90px"/>                    
                            </a>    
                            <!--end::Logo-->
                            <!--begin::Title-->
                            <h1 class="d-none d-lg-block fw-bold text-white fs-2qx pb-5 pb-md-10">
                                Bienvenido(a)
                            </h1>
                            <!--end::Title-->

                            <!--begin::Description-->
							<p class="d-none d-lg-block fw-semibold fs-2 text-white">Sistema de Control de Higiene 
							<br />Lavado de Manos</p>
							<!--end::Description-->
                        </div>
                        <!--end::Header-->

                        <!--begin::Illustration-->
						<div class="d-none d-lg-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-200px min-h-lg-350px mb-20" style="background-image: url(assets/media/illustrations/sketchy-1/13.png)"></div>
						<!--end::Illustration-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--begin::Aside-->

                <!--begin::Body-->
				<div class="d-flex flex-column flex-lg-row-fluid py-10">
					<!--begin::Content-->
					<div class="d-flex flex-center flex-column flex-column-fluid">
						<!--begin::Wrapper-->
						<div class="w-lg-500px p-10 p-lg-15 mx-auto">
							<!--begin::Form-->
							<form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="./" action="login">
								<!--begin::Heading-->
								<div class="text-center mb-10">
									<!--begin::Title-->
									<h1 class="text-dark mb-3">Ingreso a la aplicación</h1>
									<!--end::Title-->
									<!--begin::Link-->
                                    <!--
									<div class="text-gray-400 fw-semibold fs-4">¿Nuevo aquí?
									<a href="restablecer-contraseña?tipo=admin" class="link-primary fw-bold">Crea una cuenta</a></div>
                                    -->
									<!--end::Link-->
								</div>
								<!--begin::Heading-->
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<!--begin::Label-->
									<label class="form-label fs-6 fw-bold text-dark">Usuario</label>
									<!--end::Label-->
									<!--begin::Input-->
									<input class="form-control form-control-lg form-control-solid" type="text" name="username" autocomplete="off" />
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<!--begin::Wrapper-->
									<div class="d-flex flex-stack mb-2">
										<!--begin::Label-->
										<label class="form-label fw-bold text-dark fs-6 mb-0">Contraseña</label>
										<!--end::Label-->
										<!--begin::Link-->
                                        <!--
										<a href="restablecer-contraseña?tipo=admin" class="link-primary fs-6 fw-bold">¿Olvidaste tu contraseña ?</a>
                                        -->
										<!--end::Link-->
									</div>
									<!--end::Wrapper-->
									<!--begin::Input-->
									<input class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
									<!--end::Input-->
								</div>
								<!--end::Input group-->                                
								<!--begin::Actions-->
								<div class="text-center">
									<!--begin::Submit button-->
									<button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
										<span class="indicator-label">Continuar</span>
										<span class="indicator-progress">Por favor espere...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
									<!--end::Submit button-->
                                </div>
                                <input type="hidden" name="registro" value="signin"/>
								<!--end::Actions-->
							</form>
							<!--end::Form-->
						</div>
						<!--end::Wrapper-->
					</div>
					<!--end::Content-->
                    <!--begin::Footer-->
                    <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
						<!--begin::Links-->
						<div class="d-flex flex-center fw-semibold fs-6">							
                            <a href="../" class="text-muted text-hover-primary px-2" >Inicio</a>                            
							<a href="../" class="text-muted text-hover-primary px-2">Página Web</a>
						</div>
						<!--end::Links-->
					</div>
					<!--end::Footer-->
				</div>
				<!--end::Body-->
            </div>
            <!--end::Authentication - Sign-in-->
        </div>
        <!--end::Root-->
          
       <!--begin::Javascript-->
       <script>
            var hostUrl = "assets/";        
        </script>
        <!--begin::Global Javascript Bundle(used by all pages)-->
        <script src="assets/plugins/global/plugins.bundle.js"></script>
        <script src="assets/js/scripts.bundle.js"></script>
        <!--end::Global Javascript Bundle-->
        <!--begin::Custom Javascript(used by this page)-->
        <script src="apps/higiene/auth/sign-in/sign-in.model.js"></script>
        <!--end::Custom Javascript-->
        <!--end::Javascript-->
    </body>
    <!--end::Body-->
</html>
