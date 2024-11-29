<!--begin::User account menu-->
<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
        <div class="menu-content d-flex align-items-center px-3">
            <!--begin::Avatar-->
            <div class="symbol symbol-50px me-5">
                <img alt="Logo" src="assets/media/avatars/<?php echo $_SESSION['imagen']; ?>"/>
            </div>
            <!--end::Avatar-->
            <!--begin::Username-->
            <div class="d-flex flex-column">
                <div class="fw-bold d-flex align-items-center fs-5">
                <?php echo ucwords(strtolower($_SESSION['nombres'])); ?>
                    <span class="badge badge-light-primary fw-bold fs-8 px-2 py-1 ms-2"><?php echo ucwords(strtolower($_SESSION['rol'])); ?></span>
                </div>
                <a href="#" class="fw-semibold text-muted text-hover-primary fs-7"><?php echo strtolower($_SESSION['correo']); ?></a>
            </div>
            <!--end::Username-->
        </div>
    </div>
    <!--end::Menu item-->
    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->
    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="?app=jci&&page=mantenimiento/perfil/editar" class="menu-link px-5">
            Mi Perfil
        </a>
    </div>
    <!--end::Menu item-->
    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->    
    <!--begin::Menu item-->
    <div class="menu-item px-5 my-1">
        <a href="?app=jci&page=mantenimiento/perfil/editar" class="menu-link px-5">
            Configuraciones de Cuenta
        </a>
    </div>
    <!--end::Menu item-->
    <!--begin::Menu item-->
    <div class="menu-item px-5">
        <a href="javascript:CerrarSesion();" class="menu-link px-5">
            Cerrar Sesión
        </a>
    </div>
    <!--end::Menu item-->
</div>
<!--end::User account menu-->