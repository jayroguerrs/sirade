<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">

    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <div class="d-flex flex-column flex-lg-row">
            <!--begin::Aside-->
            <div class="flex-column flex-md-row-auto w-100 w-lg-250px w-xxl-275px">
                <!--begin::Nav-->
                <div class="card mb-6 mb-xl-9" data-kt-sticky="true" data-kt-sticky-name="account-settings"
                    data-kt-sticky-offset="{default: false, lg: 300}" data-kt-sticky-width="{lg: '250px', xxl: '275px'}"
                    data-kt-sticky-left="auto" data-kt-sticky-top="100px" data-kt-sticky-zindex="95">
                    <!--begin::Card body-->
                    <div class="card-body py-10 px-6">
                        <!--begin::Menu-->
                        <ul id="kt_account_settings"
                            class="nav nav-flush menu menu-column menu-rounded menu-title-gray-600 menu-bullet-gray-300 menu-state-bg menu-state-bullet-primary fw-semibold fs-6 mb-2">
                            <li class="menu-item px-3 pt-0 pb-1">
                                <a href="#kt_account_settings_profile_details" data-kt-scroll-toggle="true"
                                    class="menu-link px-3 nav-link">
                                    <span class="menu-bullet"><span class="bullet bullet-vertical"></span></span>
                                    <span class="menu-title">Detalles del Perfil</span>
                                </a>
                            </li>
                            <li class="menu-item px-3 pt-0 pb-1">
                                <a href="#kt_account_settings_signin_method" data-kt-scroll-toggle="true"
                                    class="menu-link px-3 nav-link">
                                    <span class="menu-bullet"><span class="bullet bullet-vertical"></span></span>
                                    <span class="menu-title">Métodos de Inicio</span>
                                </a>
                            </li>
                            <li class="menu-item px-3 pt-0 pb-1">
                                <a href="#kt_account_settings_signin_method" data-kt-scroll-toggle="true"
                                    class="menu-link px-3 nav-link">
                                    <span class="menu-bullet"><span class="bullet bullet-vertical"></span></span>
                                    <span class="menu-title">Desactivar Cuenta</span>
                                </a>
                            </li>
                        </ul>
                        <!--end::Menu-->
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Nav-->

                <!--begin::Card body-->
                <div class="card-body mb-6 mb-xl-9 text-center pt-0" data-kt-sticky="true" data-kt-sticky-name="account-imagen"
                    data-kt-sticky-offset="{default: false, lg: 300}" data-kt-sticky-width="{lg: '250px', xxl: '275px'}"
                    data-kt-sticky-left="auto" data-kt-sticky-top="325px" data-kt-sticky-zindex="95">
                    <!--begin::Image input-->

                    <form id="image_form" class="form" novalidate="novalidate">
                        
                        <!--begin::Input group-->
                        <input type="hidden" name="img" value="">
                        <!--end::Input group-->
                        
                        <div class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                            data-kt-image-input="true">
                            <!--begin::Preview existing avatar-->
                            <div id="sh_img" class="image-input-wrapper w-150px h-150px" style="background-image: url(assets/media/avatars/blank.png)"></div>
                            <!--end::Preview existing avatar-->
    
                            <!--begin::Label-->
                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                <i class="bi bi-pencil-fill fs-7"></i>
    
                                <!--begin::Inputs-->
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                <input type="hidden" name="avatar_remove" />
                                <!--end::Inputs-->
                            </label>
                            <!--end::Label-->
    
                            <!--begin::Cancel-->
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                            <!--end::Cancel-->
    
                            <!--begin::Remove-->
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                <i class="bi bi-x fs-2"></i>
                            </span>
                            <!--end::Remove-->
                        </div>
                        <!--end::Image input-->
    
                        <!--begin::Description-->
                        <div class="text-muted fs-7">Puede colocar una foto de contacto. Sólo archivos *.png, *.jpg and *.jpeg son aceptados</div>
                        <!--end::Description-->

                        <!--begin::Actions-->
                        <div class="d-flex justify-content-evenly mt-5">
                            <button type="submit" class="btn btn-primary fw-bolder" id="btn_img_guardar">Guardar Cambios</button>
                        </div>
                        <!--end::Actions-->

                    </form>
                </div>
                <!--end::Card body-->
                
            </div>
            <!--end::Aside-->

            <!--begin::Layout-->
            <div class="flex-md-row-fluid ms-lg-12">
                
                <!--begin::Basic info-->
                <div class="card mb-5 mb-xl-10">
                    <!--begin::Card header-->
                    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
                        data-bs-target="#kt_account_profile_details" aria-expanded="true"
                        aria-controls="kt_account_profile_details">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bold m-0">Detalles del Perfil</h3>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->

                    <!--begin::Content-->
                    <div id="kt_account_settings_profile_details" class="collapse show">
                        <!--begin::Form-->
                        <form id="kt_account_profile_details_form" class="form" novalidate="novalidate">
                            <!--begin::Card body-->
                            <div class="card-body border-top p-9">
                                <!--begin::Input group-->                                    
                                <input name="hd_id" type="hidden" class="form-control" value="<?php echo isset($_GET['id']) ? $_GET['id']: $_SESSION['id']; ?>"/>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Código usuario</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" name="sh_cod" class="form-control form-control-solid mb-2"
                                        placeholder="Escriba el número de documento" value="" readonly/>
                                        <!--end::Input-->
                                    </div>
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Num. Documento</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" name="documento" class="form-control form-control-solid mb-2"
                                        placeholder="Escriba el usuario" value=""/>
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="col-md-12 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Apellidos y Nombres</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" name="nombres" class="form-control form-control-solid mb-2"
                                        placeholder="Escriba el nombre del colaborador" value="" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Ocupación</label>
                                        <!--end::Label-->

                                        <!--begin::Select-->
                                        <select name="ocupacion" class="form-select form-select-solid" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="true" disabled>
                                            <option></option>
                                            <?php
                                                $sql = "SELECT
                                                            NOCUP_ID,
                                                            COCUP_DESCRIPCION
                                                        FROM SRD_OCUPACION
                                                        WHERE NOCUP_ESTADO = 1
                                                        ORDER BY COCUP_DESCRIPCION;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NOCUP_ID"]; ?>" data-kt-clase=""><?php echo $row["COCUP_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select-->
                                    </div>
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Correo Electrónico</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" name="correo" class="form-control form-control-solid mb-2"
                                        placeholder="Escriba el correo del colaborador" value="" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Nacionalidad</label>
                                        <!--end::Label-->
                                        
                                        <!--begin::Select-->
                                        <select name="nacionalidad" class="form-select form-select-solid select-iconos" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="false" disabled>
                                            <option value=""></option>
                                            <?php
                                                $sql = "SELECT 
                                                            NNACI_ID, 
                                                            LOWER(CNACI_DESCRIPCION) CNACI_DESCRIPCION,
                                                            CNACI_IMAGEN
                                                        FROM SRD_NACIONALIDAD WHERE NNACI_ESTADO = 1 ORDER BY CNACI_DESCRIPCION ASC;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NNACI_ID"]; ?>" data-kt-select2-pais="assets/media/flags/<?php echo $row["CNACI_IMAGEN"]; ?>"><?php echo ucwords($row["CNACI_DESCRIPCION"]); ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select-->
                                    </div>
                                    <div class="col-md-6 mb-7 fv-row">
                                        <!--begin::Label-->
                                        <label class="required form-label">Desempeño</label>
                                        <!--end::Label-->

                                        <!--begin::Select-->
                                        <select name="desempenio" class="form-select" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="true">
                                            <option></option>
                                            <?php
                                                $sql = "SELECT
                                                            NDESE_ID,
                                                            CDESE_DESCRIPCION
                                                        FROM SRD_DESEMPENIO
                                                        WHERE NDESE_ESTADO = 1
                                                        ORDER BY CDESE_DESCRIPCION;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NDESE_ID"]; ?>" data-kt-clase=""><?php echo $row["CDESE_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Card body-->

                            <!--begin::Actions-->
                            <div class="card-footer d-flex justify-content-end py-6 px-9">
                                <button type="submit" class="btn btn-primary"
                                    id="kt_account_profile_details_submit">Guardar Cambios</button>
                            </div>
                            <!--end::Actions-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Basic info-->
                
                <!--begin::Sign-in Method-->
                <div class="card  mb-5 mb-xl-10">
                    <!--begin::Card header-->
                    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
                        data-bs-target="#kt_account_signin_method">
                        <div class="card-title m-0">
                            <h3 class="fw-bold m-0">Métodos de Inicio</h3>
                        </div>
                    </div>
                    <!--end::Card header-->

                    <!--begin::Content-->
                    <div id="kt_account_settings_signin_method" class="collapse show">
                        <!--begin::Card body-->
                        <div class="card-body border-top p-9">
                            <!--begin::Usuario-->
                            <div class="d-flex flex-wrap align-items-center">
                                <!--begin::Label-->
                                <div id="kt_usuario">
                                    <div class="fs-6 fw-bold mb-1">Usuario</div>
                                    <div id="lbl_usuario" class="fw-semibold text-gray-600"></div>
                                </div>
                                <!--end::Label-->

                                <!--begin::Edit-->
                                <div id="kt_usuario_edit" class="flex-row-fluid d-none">
                                    <!--begin::Form-->
                                    <form id="kt_usuario_cambio" class="form" novalidate="novalidate">
                                        <div class="row mb-6">
                                            <div class="col-lg-6 mb-4 mb-lg-0">
                                                <div class="fv-row mb-0">
                                                    <label for="usuario" class="form-label fs-6 fw-bold mb-3">Ingrese nuevo usuario</label>
                                                    <input type="text"
                                                        class="form-control form-control-lg form-control-solid"
                                                        id="usuariocolab" placeholder="Nombre de usuario"
                                                        name="usuariocolab" value="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="fv-row mb-0">
                                                    <label for="confirmusuariopassword"
                                                        class="form-label fs-6 fw-bold mb-3">Confirmar Contraseña</label>
                                                    <input type="password"
                                                        class="form-control form-control-lg form-control-solid"
                                                        name="password1" id="password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <button id="kt_signin_submit" type="button"
                                                class="btn btn-primary  me-2 px-6">Actualizar Usuario</button>
                                            <button id="kt_signin_cancel" type="button"
                                                class="btn btn-color-gray-500 btn-active-light-primary px-6">Cancelar</button>
                                        </div>
                                    </form>
                                    <!--end::Form-->
                                </div>
                                <!--end::Edit-->

                                <!--begin::Action-->
                                <div id="kt_usuario_button" class="ms-auto">
                                    <button class="btn btn-light btn-active-light-primary">Cambiar Usuario</button>
                                </div>
                                <!--end::Action-->
                            </div>
                            <!--end::Email Address-->

                            <!--begin::Separator-->
                            <div class="separator separator-dashed my-6"></div>
                            <!--end::Separator-->

                            <!--begin::Password-->
                            <div class="d-flex flex-wrap align-items-center mb-10">
                                <!--begin::Label-->
                                <div id="kt_signin_password">
                                    <div class="fs-6 fw-bold mb-1">Contraseña</div>
                                    <div class="fw-semibold text-gray-600">************</div>
                                </div>
                                <!--end::Label-->

                                <!--begin::Edit-->
                                <div id="kt_signin_password_edit" class="flex-row-fluid d-none">
                                    <!--begin::Form-->
                                    <form id="kt_signin_change_password" class="form" novalidate="novalidate">
                                        <div class="row mb-1">
                                            <div class="col-lg-4">
                                                <div class="fv-row mb-0">
                                                    <label for="password1"
                                                        class="form-label fs-6 fw-bold mb-3">Contraseña Actual</label>
                                                    <input type="password"
                                                        class="form-control form-control-lg form-control-solid "
                                                        name="password1" id="password1" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="fv-row mb-0">
                                                    <label for="password2" class="form-label fs-6 fw-bold mb-3">Nueva Contraseña</label>
                                                    <input type="password"
                                                        class="form-control form-control-lg form-control-solid "
                                                        name="password2" id="password2" />
                                                </div>
                                            </div>

                                            <div class="col-lg-4">
                                                <div class="fv-row mb-0">
                                                    <label for="confirmpassword"
                                                        class="form-label fs-6 fw-bold mb-3">Confirmar Nueva Contraseña</label>
                                                    <input type="password"
                                                        class="form-control form-control-lg form-control-solid "
                                                        name="confirmpassword" id="confirmpassword" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-text mb-5">Contraseña debe tener como mínimo 8 caracteres</div>

                                        <div class="d-flex">
                                            <button id="kt_password_submit" type="button"
                                                class="btn btn-primary me-2 px-6">Actualizar Contraseña</button>
                                            <button id="kt_password_cancel" type="button"
                                                class="btn btn-color-gray-500 btn-active-light-primary px-6">Cancelar</button>
                                        </div>
                                    </form>
                                    <!--end::Form-->
                                </div>
                                <!--end::Edit-->

                                <!--begin::Action-->
                                <div id="kt_signin_password_button" class="ms-auto">
                                    <button class="btn btn-light btn-active-light-primary">Cambiar Contraseña</button>
                                </div>
                                <!--end::Action-->
                            </div>
                            <!--end::Password-->


                            <!--begin::Notice-->
                            <div
                                class="notice d-flex bg-light-primary rounded border-primary border border-dashed  p-6">
                                <!--begin::Icon-->
                                <i class="ki-duotone ki-shield-tick fs-2tx text-primary me-4"><span
                                        class="path1"></span><span class="path2"></span></i>
                                <!--end::Icon-->

                                <!--begin::Wrapper-->
                                <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                    <!--begin::Content-->
                                    <div class="mb-3 mb-md-0 fw-semibold">
                                        <h4 class="text-gray-900 fw-bold">Por seguridad...</h4>

                                        <div class="fs-6 text-gray-700 pe-7">
                                            Se recomienda colocar contraseñas seguras de mínimo 8 caracteres, 
                                            recuerde que su uso es estrictamente personal y no debe compartirse con nadie.
                                        </div>
                                    </div>
                                    <!--end::Content-->
                                </div>
                                <!--end::Wrapper-->
                            </div>
                            <!--end::Notice-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Sign-in Method-->
               
                <!--begin::Deactivate Account-->
                <div class="card">
                    <!--begin::Card header-->
                    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
                        data-bs-target="#kt_account_deactivate" aria-expanded="true"
                        aria-controls="kt_account_deactivate">
                        <div class="card-title m-0">
                            <h3 id="titulo" class="fw-bold m-0">Desactivar Cuenta</h3>
                        </div>
                    </div>
                    <!--end::Card header-->

                    <!--begin::Content-->
                    <div id="kt_account_settings_deactivate" class="collapse show">
                        <!--begin::Form-->
                        <form id="kt_account_deactivate_form" class="form">

                            <!--begin::Card body-->
                            <div class="card-body border-top p-9">

                                <!--begin::Notice-->
                                <div id="notice-div" class="notice d-flex bg-light-warning border-warning rounded border border-dashed mb-9 p-6">
                                    <!--begin::Icon-->
                                    <i id="notice-icono" class="ki-duotone ki-information fs-2tx text-warning me-4">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                    </i>
                                    <!--end::Icon-->

                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-stack flex-grow-1 ">
                                        <!--begin::Content-->
                                        <div class=" fw-semibold">
                                            <h4 id="titulo-aviso" class="text-gray-900 fw-bold">Estas desactivando esta cuenta</h4>

                                            <div class="fs-6 text-gray-700 ">
                                                Por motivos de seguridad, esta acción requiere que confirme su 
                                                respuesta para continuar con la operación de su cuenta.
                                                <br /><a class="fw-bold" href="#">Leer más</a></div>
                                        </div>
                                        <!--end::Content-->

                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Notice-->

                                <!--begin::Form input row-->
                                <div class="form-check form-check-solid fv-row">
                                    <input name="deactivate" class="form-check-input" type="checkbox" value=""
                                        id="deactivate" />
                                    <label class="form-check-label fw-semibold ps-2 fs-6" for="deactivate">Confirmo el cambio de estado de esta cuenta</label>
                                    <input name="estado" type="hidden" value="" />
                                </div>
                                <!--end::Form input row-->
                            </div>
                            <!--end::Card body-->

                            <!--begin::Card footer-->
                            <div class="card-footer d-flex justify-content-end py-6 px-9">
                                <button id="kt_account_deactivate_account_submit" type="submit"
                                    class="btn btn-danger fw-semibold">Desactivar Cuenta</button>
                            </div>
                            <!--end::Card footer-->

                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Deactivate Account-->
            </div>
            <!--end::Layout-->
        </div>
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>