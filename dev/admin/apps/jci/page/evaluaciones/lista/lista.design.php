<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <div class="pb-5">
            Para poder iniciar por favor seleccione la fila que contenga el <span class="text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Categoría que agrupa las evaluaciones en un rango de fechas">periodo</span> de su elección.
        </div>
        <!--begin::Card-->
        <div class="card" id="div-periodos">
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
                        <!--end::Svg Icon--> <input type="text" data-kt-periodo-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar periodo" />
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div class="d-flex justify-content-end" data-kt-periodo-table-toolbar="base">
                        <!--begin::Filter-->
                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                            data-bs-target="#kt_periodos_filtro_modal">
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
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7" id="tb_periodos">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                            <th>Key</th>
                            <th class="min-w-175px">Periodo</th>
                            <th class="min-w-85px">Inicio</th>
                            <th class="min-w-85px">Fin</th>
                            <th class="min-w-80px">Estado</th>
                            <th class="min-w-175px">Creado</th>
                            <th class="min-w-200px">Creado por</th>
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
        
        <!--begin::Card-->
        <div class="card d-none" id="div-servicios">
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
                        <!--end::Svg Icon--> <input type="text" data-kt-servicio-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar servicio" />
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div class="d-flex justify-content-end" data-kt-servicio-table-toolbar="base">
                        <!--begin::Filter-->
                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                            data-bs-target="#kt_servicio_filtro_modal">
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
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7" id="tb_servicios">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                            <th class="min-w-175px">Key</th>
                            <th class="min-w-175px">Servicio</th>
                            <th class="min-w-80px">Estado</th>
                            <th class="min-w-175px">Creado</th>
                            <th class="min-w-200px">Creado por</th>
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
        
        <!--begin::Card-->
        <div class="card d-none" id="div-personal">
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
                        <!--end::Svg Icon--> <input type="text" data-kt-colaborador-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar colaborador" />
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div class="d-flex justify-content-end" data-kt-colaborador-table-toolbar="base">
                        <!--begin::Filter-->
                        <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal"
                            data-bs-target="#kt_encuesta_filtro_modal">
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
                        <button type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="ki-duotone ki-exit-up fs-2">
                                <span class="path1"></span><span class="path2"></span>
                            </i>
                            Exportar
                        </button>
                        <!--begin::Menu-->
                        <div id="kt_ecommerce_report_views_export_menu" class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4" data-kt-menu="true">
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a href="#" id="custom-copy" class="menu-link px-3" data-kt-ecommerce-export="copy">
                                    Copiar Tabla
                                </a>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a href="#" id="custom-excel" class="menu-link px-3" data-kt-ecommerce-export="excel">
                                    Exportar como Excel
                                </a>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a href="#" id="custom-csv" class="menu-link px-3" data-kt-ecommerce-export="csv">
                                    Exportar como CSV
                                </a>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <a href="#" id="custom-pdf" class="menu-link px-3" data-kt-ecommerce-export="pdf">
                                    Exportar como PDF
                                </a>
                            </div>
                            <!--end::Menu item-->
                        
                        </div>
                        <!--end::Menu-->
                        <!--end::Export dropdown-->
                        
                    </div>
                    <!--end::Toolbar-->

                    <!--begin::Group actions-->
                    <div class="d-flex justify-content-end align-items-center d-none"
                        data-kt-customer-table-toolbar="selected">
                        <div class="fw-bold me-5">
                            <span class="me-2" data-kt-customer-table-select="selected_count"></span> Seleccionados
                        </div>

                        <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected">
                            Eliminar Selección
                        </button>
                    </div>
                    <!--end::Group actions-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5" id="tb_personal">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="text-start text-gray-400 fw-bold fs-8 text-uppercase gs-0">
                            <th class="min-w-80px">Acciones</th>
                            <th>Key</th>
                            <th>Código Trabajador</th>
                            <th>Imagen Trabajador</th>
                            <th class="min-w-300px">Colaborador</th>
                            <th>Correo</th>
                            <th>Servicio</th>
                            <th class="min-w-125px">Nacionalidad</th>
                            <th>Imagen Nac</th>
                            <th>Periodo</th>
                            <th class="min-w-75px">Avance</th>
                            <th>Puntaje</th>
                            <th>Maximo</th>
                            <th class="min-w-85px">Nota</th>
                            <th>Contestadas</th>
                            <th>Total Preguntas</th>
                            <th class="min-w-100px">Estado</th>
                            <th class="min-w-100px">Creado</th>
                            <th class="min-w-100px">Creado por</th>
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
        
        <!--begin::Modal - Filtro Periodo-->
        <div class="modal fade" id="kt_periodos_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_periodos">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Filtros de Búsqueda</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_periodos_filtro_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_periodos_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_periodos_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_periodos_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Select2 group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Periodo</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select form-select-solid mb-2" name="filtro-periodo" data-control="select2"
                                            data-placeholder="Seleccione un periodo" data-allow-clear="true" data-dropdown-parent="#kt_periodos_filtro_modal">
                                        <option></option>
                                        <?php
                                            $sql = "SELECT 
                                                        A.NPERI_ID,
                                                        A.CPERI_DESCRIPCION
                                                    FROM SRD_PERIODO A
                                                    WHERE A.NAUDI_EST_REG = 1
                                                    ORDER BY A.DPERI_INICIO DESC;";
                                            $result = $conn->query($sql);
                                            if ($result->num_rows > 0) {
                                                // output data of each row
                                                while($row = $result->fetch_assoc()) { ?>
                                                    <option value="<?php echo $row["NPERI_ID"]; ?>"><?php echo $row["CPERI_DESCRIPCION"]; ?></option> <?php
                                                }
                                            }
                                        ?>
                                    </select>
                                    <!--end::Select2-->
                                </div>
                                <!--end::Select2 group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="fs-5 fw-semibold form-label mb-5">Rango del periodo:</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Seleccione un rango" name="filtro-fecha" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->

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
                            <button type="reset" id="kt_modal_filtro_periodos_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_periodos_submit" class="btn btn-primary" data-bs-dismiss="modal">
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
        <!--end::Modal - Filtro Periodo-->
        
        <!--begin::Modal - Filtro Servicio-->
        <div class="modal fade" id="kt_servicio_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_servicio">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Filtros de Búsqueda</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_servicio_filtro_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_servicio_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_servicio_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_servicio_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Servicio</label>
                                    <!--end::Label-->

                                    <!--begin::Input group-->
                                    <input type="text" class="form-control form-control-solid" name="filtro2-servicio" placeholder="Ingrese el nombre del servicio" />
                                    <!--end::Input group-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Estado</label>
                                    <!--end::Label-->

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="1" id="op_filtro2_activo" name="filtro2-estado" />
                                        <label class="form-check-label" for="op_filtro2_activo">
                                            ACTIVO
                                        </label>
                                    </div>

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="0" id="op_filtro2_inactivo" name="filtro2-estado"/>
                                        <label class="form-check-label" for="op_filtro2_inactivo">
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
                            <button type="reset" id="kt_modal_filtro_servicio_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_servicio_submit" class="btn btn-primary" data-bs-dismiss="modal">
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
        <!--end::Modal - Filtro Servicio-->
        
        <!--begin::Modal - Filtro Encuesta-->
        <div class="modal fade" id="kt_encuesta_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_encuesta">
                        <!--begin::Modal header-->
                        <div class="modal-header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold">Filtros de Búsqueda</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_encuesta_filtro_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_encuesta_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_encuesta_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_encuesta_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Personal</label>
                                    <!--end::Label-->

                                    <!--begin::Input group-->
                                    <input type="text" class="form-control form-control-solid" name="filtro3-personal" placeholder="Ingrese el nombre del colaborador" />
                                    <!--end::Input group-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Select2 group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Nacionalidad</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select form-select-solid mb-2" name="filtro3-nacionalidad" data-control="select2"
                                            data-placeholder="Seleccione una nacionalidad" data-allow-clear="true" data-dropdown-parent="#kt_encuesta_filtro_modal">
                                        <option></option>
                                        <?php
                                            $sql = "SELECT DISTINCT 
                                                        A.NNACI_ID,
                                                        A.CNACI_DESCRIPCION
                                                    FROM SRD_NACIONALIDAD A
                                                    WHERE A.NAUDI_EST_REG = 1
                                                    ORDER BY A.CNACI_DESCRIPCION;";
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
                                <!--end::Select2 group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Estado</label>
                                    <!--end::Label-->

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="1" id="op_filtro3_activo" name="filtro3-estado" />
                                        <label class="form-check-label" for="op_filtro3_activo">
                                            ACTIVO
                                        </label>
                                    </div>

                                    <div class="form-check form-check-custom form-check-solid my-4">
                                        <input class="form-check-input" type="radio" value="0" id="op_filtro3_inactivo" name="filtro3-estado"/>
                                        <label class="form-check-label" for="op_filtro3_inactivo">
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
                            <button type="reset" id="kt_modal_filtro_encuesta_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_encuesta_submit" class="btn btn-primary" data-bs-dismiss="modal">
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
        <!--end::Modal - Filtro Servicio-->
        <!--end::Modals-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>