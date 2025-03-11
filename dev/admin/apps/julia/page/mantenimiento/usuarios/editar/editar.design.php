<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Card-->
        <div class="card">
            <!--begin::Card header-->
            <div class="card-header border-0 pt-6">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Search-->
                    <div class="d-flex align-items-center position-relative my-1">
                        <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                        <span class="svg-icon svg-icon-1 position-absolute ms-6"><svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                    transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                <path
                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        <!--end::Svg Icon--> <input type="text" data-kt-usuario-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar usuario" />
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                        <!--begin::Filter-->
                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                            data-bs-target="#kt_usuario_filtro_modal">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
                            <span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            Filtros
                        </button>                        
                        <!--end::Filter-->

                        <!--begin::Export dropdown-->
                        <div>
                        <button type="button" class="btn btn-light-primary me-3" id="boton-exportar-usuario">
                                <i class="ki-duotone ki-exit-up fs-2">
                                    <span class="path1"></span><span class="path2"></span>
                                </i>
                                Exportar
                            </button>
                        </div>
                        <!--end::Export dropdown-->

                        <!--begin::Add Usuario-->
                        <div>
                            <button type="button" class="btn btn-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-attach="parent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                </svg>
                                Agregar
                            </button>
                            <!--begin::Menu-->
                            <div id="kt_usuario_menu" class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4" data-kt-menu="true">
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                    <a href="javascript:AbrirModalUsuario(null, null, 'agregar')" class="menu-link px-3">
                                        Carga Unitaria
                                    </a>
                                </div>
                                <!--end::Menu item-->

                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                    <a href="#" id="carga-masiva" class="menu-link px-3">
                                        Carga Masiva
                                    </a>
                                </div>
                                <!--end::Menu item-->
                            </div>
                            <!--end::Menu-->
                        </div>
                        <!--end::Add Usuario-->
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7 display nowrap" id="tb_usuarios" style="width:100%">
                    <!--begin::Table head-->
                    <thead>
                    <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                            <th class="min-w-80px">Acciones</th>
                            <th>Key</th>
                            <th class="min-w-175px">Nombres</th>
                            <th class="min-w-175px">Ocupacion</th>
                            <th class="min-w-175px">Nacionalidad</th>
                            <th class="min-w-175px">Imagen Nacionalidad</th>
                            <th class="min-w-175px">Correo</th>
                            <th class="min-w-175px">Imagen</th>
                            <th class="min-w-175px">Rol</th>
                            <th class="min-w-100px">Estado</th>
                            <th class="min-w-175px">Modificado</th>
                            <th class="min-w-200px">Modificado por</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 fw-semibold">
                    </tbody>
                    <!--end::Table body-->
                </table>
                <!--end::Table-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Card-->

        <!--begin::Modals-->
        <!--begin::Modal - Carga Masiva-->
        <div class="modal fade" id="kt_usuario_masiva_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-650px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_masiva_usuario">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Carga Masiva</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_usuario_masiva_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                <span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Close-->
                        </div>
                        <!--end::Modal header-->

                        <!--begin::Modal body-->
                        <div class="modal-body py-10 px-lg-17">
                            <!--begin::Scroll-->
                            <div class="scroll-y me-n7 pe-7" id="kt_usuario_masiva_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_usuario_masiva_modal_header"
                                data-kt-scroll-wrappers="#kt_usuario_masiva_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Dropzone-->
                                    <div class="dropzone" id="kt_modal_masiva_usuario_files_upload">
                                        <!--begin::Message-->
                                        <div class="dz-message needsclick">
                                            <!--begin::Icon-->
                                            <i class="ki-duotone ki-file-up fs-3hx text-primary"><span class="path1"></span><span class="path2"></span></i>                    <!--end::Icon-->

                                            <!--begin::Info-->
                                            <div class="ms-4">
                                                <h3 class="dfs-3 fw-bold text-gray-900 mb-1">Arraste el archivo aquí o presione para cargar.</h3>
                                                <span class="fw-semibold fs-4 text-muted">Cargar máximo un archivo</span>
                                            </div>
                                            <!--end::Info-->
                                        </div>
                                    </div>
                                    <!--end::Dropzone-->
                                    <!--begin::Hint-->
                                    <div class="mt-3">
                                        <span class="form-text text-muted">El tamaño máximo del archivo es 10MB y sólo es permitido 1 archivo.</span>
                                    </div>
                                    <!--end::Hint-->
                                    
                                    <!--begin::Plantilla-->
                                    <div class="mt-3">
                                        <span class="form-text text-muted ml-3">Puede descargar la plantilla aquí. 
                                            <button class="btn btn-light-primary" id="btn-plantilla">
                                                <i class="ki-duotone ki-paper-clip fs-2"></i>
                                                <span>Plantilla.csv</span>
                                            </button>
                                        </span>
                                    </div>
                                    <!--end::Plantilla-->
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Scroll-->
                        </div>
                        <!--end::Modal body-->

                        <!--begin::Modal footer-->
                        <div class="modal-footer flex-center">
                            <!--begin::Button-->
                            <button type="reset" id="kt_modal_masiva_usuario_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_masiva_usuario_submit" class="btn btn-primary">
                                <span class="indicator-label">
                                    Cargar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... 
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </div>
                        <!--end::Modal footer-->

                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Modal content-->
            </div>
            <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Carga Masiva-->

        <!--begin::Modal - Agregar Editar - Usuario-->
        <div class="modal fade" id="kt_modal_agregar_usuario" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_agregar_usuario">
                        <!--begin::Modal header-->
                        <div class="modal-header" id="kt_modal_agregar_usuario_header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold" id="titulo_modal" >Añadir un Usuario</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_modal_agregar_usuario_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                <span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>

                                </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Close-->
                        </div>
                        <!--end::Modal header-->

                        <!--begin::Modal body-->
                        <div class="modal-body py-10 px-lg-17">
                            <!--begin::Scroll-->
                            <div class="scroll-y me-n7 pe-7" id="kt_modal_agregar_usuario_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_agregar_usuario_header"
                                data-kt-scroll-wrappers="#kt_modal_agregar_usuario_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Item-->
                                <div class="mb-5">
                                    
                                    <!--begin::Input group-->
                                    <input type="hidden" name="id" id="key" value="">
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Card body-->
                                        <div class="card-body mb-6 mb-xl-9 text-center pt-0" data-kt-sticky="true" data-kt-sticky-name="account-imagen"
                                            data-kt-sticky-offset="{default: false, lg: 300}" data-kt-sticky-width="{lg: '250px', xxl: '275px'}"
                                            data-kt-sticky-left="auto" data-kt-sticky-top="325px" data-kt-sticky-zindex="95">
                                            <!--begin::Image input-->
                                            <div class="image-input image-input-empty image-input-outline image-input-placeholder m-5"
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
                                                    data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancelar">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                                <!--end::Cancel-->
    
                                                <!--begin::Remove-->
                                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                    data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Eliminar imagen">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                                <!--end::Remove-->
                                            </div>
                                            <!--end::Image input-->
    
                                            <!--begin::Description-->
                                            <div class="text-muted fs-7">Puede colocar una foto de contacto. Sólo archivos *.png, *.jpg and *.jpeg son aceptados</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Card body-->
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Nombres</label>
                                        <!--end::Label-->

                                        <!--begin::input-->
                                        <input type="text" name="nombres" class="form-control form-control-solid mb-2" placeholder="Ingrese el nombre" />
                                        <!--end::input-->
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::group-->
                                    <div class="row">
                                        <!--begin::Input codigo-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Código</label>
                                            <!--end::Label-->

                                            <!--begin::input-->
                                            <input type="text" name="codigo" class="form-control form-control-solid mb-2" placeholder="Ingrese el código" />
                                            <!--end::input-->
                                        </div>
                                        <!--end::Input codigo-->

                                        <!--begin::Input documento-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Número de Documento</label>
                                            <!--end::Label-->

                                            <!--begin::input-->
                                            <input type="text" name="documento" class="form-control form-control-solid mb-2" placeholder="Ingrese número de documento" />
                                            <!--end::input-->
                                        </div>
                                        <!--end::Input documento-->
                                    </div>
                                    <!--end::group-->

                                    <!--begin::group-->
                                    <div class="row">
                                        <!--begin::Input group-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Desempeño</label>
                                            <!--end::Label-->

                                            <!--begin::Select2-->
                                            <select class="form-select form-select-solid mb-2" name="desempenio" data-control="select2"
                                                    data-placeholder="Seleccione un desempeño" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_usuario">
                                                <option></option>
                                                <?php
                                                    $sql = "SELECT DISTINCT 
                                                                A.NDESE_ID,
                                                                A.CDESE_DESCRIPCION
                                                            FROM SRD_DESEMPENIO A
                                                            WHERE A.NDESE_ESTADO = 1 AND A.NAUDI_EST_REG = 1
                                                            ORDER BY A.CDESE_DESCRIPCION ASC;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NDESE_ID"]; ?>"><?php echo $row["CDESE_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select2-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Ocupación</label>
                                            <!--end::Label-->

                                            <!--begin::Select2-->
                                            <select class="form-select form-select-solid mb-2" name="ocupacion" data-control="select2"
                                                    data-placeholder="Seleccione una ocupación" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_usuario">
                                                <option></option>
                                                <?php
                                                    $sql = "SELECT DISTINCT 
                                                                A.NOCUP_ID,
                                                                A.COCUP_DESCRIPCION
                                                            FROM SRD_OCUPACION A
                                                            WHERE A.NOCUP_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                            ORDER BY A.COCUP_DESCRIPCION ASC;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NOCUP_ID"]; ?>"><?php echo $row["COCUP_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select2-->
                                        </div>
                                        <!--end::Input group-->
                                    </div>
                                    <!--end::group-->
                                    
                                    <!--begin::group-->
                                    <div class="row">
                                        <!--begin::Input nacionalidad-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Nacionalidad</label>
                                            <!--end::Label-->
    
                                            <!--begin::Select2-->
                                            <select class="form-select form-select-solid mb-2" name="nacionalidad" data-control="select2"
                                                    data-placeholder="Seleccione una nacional" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_usuario">
                                                <option></option>
                                                <?php
                                                    $sql = "SELECT DISTINCT 
                                                                A.NNACI_ID,
                                                                A.CNACI_DESCRIPCION
                                                            FROM SRD_NACIONALIDAD A
                                                            WHERE A.NNACI_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                            ORDER BY A.CNACI_DESCRIPCION ASC;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NNACI_ID"]; ?>"><?php echo $row["CNACI_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select2-->
                                        </div>
                                        <!--end::Input nacionalidad-->
                                        
                                        <!--begin::Input rol-->
                                        <div class="fv-row mb-7 col-md-6">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Rol</label>
                                            <!--end::Label-->

                                            <!--begin::Select2-->
                                            <select class="form-select form-select-solid mb-2" name="rol" data-control="select2"
                                                    data-placeholder="Seleccione un rol" data-allow-clear="true" multiple="multiple" data-dropdown-parent="#kt_modal_agregar_usuario">
                                                <?php
                                                    $sql = "SELECT DISTINCT 
                                                                A.NROLE_ID,
                                                                A.CROLE_DESCRIPCION
                                                            FROM SRD_ROLES A
                                                            WHERE A.NROLE_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                            ORDER BY A.CROLE_DESCRIPCION ASC;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NROLE_ID"]; ?>"><?php echo $row["CROLE_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select2-->
                                        </div>
                                        <!--end::Input rol-->
                                    </div>
                                    <!--end::group-->
                                    
                                    <!--begin::Input Correo-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Correo</label>
                                        <!--end::Label-->

                                        <!--begin::input-->
                                        <input type="text" name="correo" class="form-control form-control-solid mb-2" placeholder="Ingrese el correo" />
                                        <!--end::input-->
                                    </div>
                                    <!--end::Input Correo-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7" id="div-estado">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Estado</label>
                                        <!--end::Label-->

                                        <div class="form-check form-check-custom form-check-solid my-4">
                                            <input class="form-check-input" type="radio" value="1" id="op_activo" name="estado" />
                                            <label class="form-check-label" for="op_activo">
                                                ACTIVO
                                            </label>
                                        </div>
                                        <div class='separator separator-dashed my-5'></div>
                                        <div class="form-check form-check-custom form-check-solid my-4">
                                            <input class="form-check-input" type="radio" value="0" id="op_inactivo" name="estado"/>
                                            <label class="form-check-label" for="op_inactivo">
                                                INACTIVO
                                            </label>
                                        </div>
                                    </div>
                                    <!--end::Input group-->
                                    
                                </div>
                                <!--end::Item-->
                                
                            </div>
                            <!--end::Scroll-->
                        </div>
                        <!--end::Modal body-->

                        <!--begin::Modal footer-->
                        <div class="modal-footer flex-center">
                            <!--begin::Button-->
                            <button type="reset" id="kt_modal_agregar_usuario_cancel" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="submit" id="kt_modal_agregar_usuario_submit" class="btn btn-primary">
                                <span class="indicator-label">
                                    Guardar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... <span
                                        class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </div>
                        <!--end::Modal footer-->
                    </form>
                    <!--end::Form-->
                </div>
            </div>
        </div>
        <!--end::Modal - Agregar Editar - Usuario-->       

        <!--begin::Modal - Filtros-->
        <div class="modal fade" id="kt_usuario_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_usuario">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Filtros de Búsqueda</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_personal_filtro_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                <span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Close-->
                        </div>
                        <!--end::Modal header-->

                        <!--begin::Modal body-->
                        <div class="modal-body py-10 px-lg-17">
                            <!--begin::Scroll-->
                            <div class="scroll-y me-n7 pe-7" id="kt_usuario_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_usuario_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_usuario_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Nombres</label>
                                    <!--end::Label-->

                                    <!--begin::input-->
                                    <input type="text" name="filtro-nombres" class="form-control form-control-solid mb-2" placeholder="Ingrese el nombre" />
                                    <!--end::input-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::group-->
                                <div class="row">
                                    <!--begin::Input codigo-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Código</label>
                                        <!--end::Label-->

                                        <!--begin::input-->
                                        <input type="text" name="filtro-codigo" class="form-control form-control-solid mb-2" placeholder="Ingrese el código" />
                                        <!--end::input-->
                                    </div>
                                    <!--end::Input codigo-->

                                    <!--begin::Input documento-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Número de Documento</label>
                                        <!--end::Label-->

                                        <!--begin::input-->
                                        <input type="text" name="filtro-documento" class="form-control form-control-solid mb-2" placeholder="Ingrese número de documento" />
                                        <!--end::input-->
                                    </div>
                                    <!--end::Input documento-->
                                </div>
                                <!--end::group-->

                                <!--begin::group-->
                                <div class="row">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Desempeño</label>
                                        <!--end::Label-->

                                        <!--begin::Select2-->
                                        <select class="form-select form-select-solid mb-2" name="filtro-desempenio" data-control="select2"
                                                data-placeholder="Seleccione un desempeño" data-allow-clear="true" data-dropdown-parent="#kt_usuario_filtro_modal">
                                            <option></option>
                                            <?php
                                                $sql = "SELECT DISTINCT 
                                                            A.NDESE_ID,
                                                            A.CDESE_DESCRIPCION
                                                        FROM SRD_DESEMPENIO A
                                                        WHERE A.NDESE_ESTADO = 1 AND A.NAUDI_EST_REG = 1
                                                        ORDER BY A.CDESE_DESCRIPCION ASC;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NDESE_ID"]; ?>"><?php echo $row["CDESE_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select2-->
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Ocupación</label>
                                        <!--end::Label-->

                                        <!--begin::Select2-->
                                        <select class="form-select form-select-solid mb-2" name="filtro-ocupacion" data-control="select2"
                                                data-placeholder="Seleccione una ocupación" data-allow-clear="true" data-dropdown-parent="#kt_usuario_filtro_modal">
                                            <option></option>
                                            <?php
                                                $sql = "SELECT DISTINCT 
                                                            A.NOCUP_ID,
                                                            A.COCUP_DESCRIPCION
                                                        FROM SRD_OCUPACION A
                                                        WHERE A.NOCUP_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                        ORDER BY A.COCUP_DESCRIPCION ASC;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NOCUP_ID"]; ?>"><?php echo $row["COCUP_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select2-->
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::group-->
                                
                                <!--begin::group-->
                                <div class="row">
                                    <!--begin::Input nacionalidad-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Nacionalidad</label>
                                        <!--end::Label-->

                                        <!--begin::Select2-->
                                        <select class="form-select form-select-solid mb-2" name="filtro-nacionalidad" data-control="select2"
                                                data-placeholder="Seleccione una nacional" data-allow-clear="true" data-dropdown-parent="#kt_usuario_filtro_modal">
                                            <option></option>
                                            <?php
                                                $sql = "SELECT DISTINCT 
                                                            A.NNACI_ID,
                                                            A.CNACI_DESCRIPCION
                                                        FROM SRD_NACIONALIDAD A
                                                        WHERE A.NNACI_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                        ORDER BY A.CNACI_DESCRIPCION ASC;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NNACI_ID"]; ?>"><?php echo $row["CNACI_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select2-->
                                    </div>
                                    <!--end::Input nacionalidad-->
                                    
                                    <!--begin::Input rol-->
                                    <div class="fv-row mb-7 col-md-6">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Rol</label>
                                        <!--end::Label-->

                                        <!--begin::Select2-->
                                        <select class="form-select form-select-solid mb-2" name="filtro-rol" data-control="select2"
                                                data-placeholder="Seleccione un rol" data-allow-clear="true" data-dropdown-parent="#kt_usuario_filtro_modal">
                                            <?php
                                                $sql = "SELECT DISTINCT 
                                                            A.NROLE_ID,
                                                            A.CROLE_DESCRIPCION
                                                        FROM SRD_ROLES A
                                                        WHERE A.NROLE_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
                                                        ORDER BY A.CROLE_DESCRIPCION ASC;";
                                                $result = $conn->query($sql);
                                                if ($result->num_rows > 0) {
                                                    // output data of each row
                                                    while($row = $result->fetch_assoc()) { ?>
                                                        <option value="<?php echo $row["NROLE_ID"]; ?>"><?php echo $row["CROLE_DESCRIPCION"]; ?></option> <?php
                                                    }
                                                }
                                            ?>
                                        </select>
                                        <!--end::Select2-->
                                    </div>
                                    <!--end::Input rol-->
                                </div>
                                <!--end::group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Estado</label>
                                    <!--end::Label-->

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="1" id="op_filtro_activo" name="filtro-estado" />
                                        <label class="form-check-label" for="op_filtro_activo">
                                            ACTIVO
                                        </label>
                                    </div>

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="0" id="op_filtro_inactivo" name="filtro-estado"/>
                                        <label class="form-check-label" for="op_filtro_inactivo">
                                            INACTIVO
                                        </label>
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Scroll-->
                        </div>
                        <!--end::Modal body-->

                        <!--begin::Modal footer-->
                        <div class="modal-footer flex-center">
                            <!--begin::Button-->
                            <button type="reset" id="kt_modal_filtro_usuario_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_usuario_submit" class="btn btn-primary">
                                <span class="indicator-label">
                                    Filtrar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... 
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </div>
                        <!--end::Modal footer-->

                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Modal content-->
            </div>
            <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Filtros-->

        <!--begin::Modal - Masiva-->
        <div class="modal fade" id="kt_usuario_masiva_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-650px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_masiva_usuario">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Carga Masiva</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_usuario_masiva_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                <span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Close-->
                        </div>
                        <!--end::Modal header-->

                        <!--begin::Modal body-->
                        <div class="modal-body py-10 px-lg-17">
                            <!--begin::Scroll-->
                            <div class="scroll-y me-n7 pe-7" id="kt_usuario_masiva_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_usuario_masiva_modal_header"
                                data-kt-scroll-wrappers="#kt_usuario_masiva_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Dropzone-->
                                    <div class="dropzone" id="kt_modal_masiva_usuario_files_upload">
                                        <!--begin::Message-->
                                        <div class="dz-message needsclick">
                                            <!--begin::Icon-->
                                            <i class="ki-duotone ki-file-up fs-3hx text-primary"><span class="path1"></span><span class="path2"></span></i>                    <!--end::Icon-->

                                            <!--begin::Info-->
                                            <div class="ms-4">
                                                <h3 class="dfs-3 fw-bold text-gray-900 mb-1">Arraste el archivo aquí o presione para cargar.</h3>
                                                <span class="fw-semibold fs-4 text-muted">Cargar máximo un archivo</span>
                                            </div>
                                            <!--end::Info-->
                                        </div>
                                    </div>
                                    <!--end::Dropzone-->
                                    <!--begin::Hint-->
                                    <div class="mt-3">
                                        <span class="form-text text-muted">El tamaño máximo del archivo es 10MB y sólo es permitido 1 archivo.</span>
                                    </div>
                                    <!--end::Hint-->
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Scroll-->
                        </div>
                        <!--end::Modal body-->

                        <!--begin::Modal footer-->
                        <div class="modal-footer flex-center">
                            <!--begin::Button-->
                            <button type="reset" id="kt_modal_masiva_usuario_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_masiva_usuario_submit" class="btn btn-primary">
                                <span class="indicator-label">
                                    Cargar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... 
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </div>
                        <!--end::Modal footer-->

                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Modal content-->
            </div>
            <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Masiva-->
        <!--end::Modals-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>