<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
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
                        <!--end::Svg Icon--> <input type="text" data-kt-turno-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar turno" />
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
                            data-bs-target="#kt_turno_filtro_modal">
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
                            <button type="button" class="btn btn-light-primary me-3" id="boton-exportar-turno">
                                <i class="ki-duotone ki-exit-up fs-2">
                                    <span class="path1"></span><span class="path2"></span>
                                </i>
                                Exportar
                            </button>
                        </div>
                        <!--end::Export dropdown-->

                        <!--begin::Add turno-->
                        <div>
                            <button type="button" class="btn btn-primary" name="agregar-boton">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                </svg>
                                Agregar
                            </button>
                        </div>
                        <!--end::Add customer-->
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7 display nowrap" id="tb_turnos" style="width:100%">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                            <th class="min-w-80px">Acciones</th>
                            <th class="min-w-150px">Id</th>
                            <th class="min-w-200px">Descripción</th>
                            <th class="min-w-150px">Tipo Turno</th>
                            <th class="min-w-150px">Hora Inicio</th>
                            <th class="min-w-150px">Hora Fin</th>
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
        <!--begin::Modal - Agregar Editar - turno-->
        <div class="modal fade" id="kt_modal_agregar_turno" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_agregar_turno">
                        <!--begin::Modal header-->
                        <div class="modal-header" id="kt_modal_agregar_turno_header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold" id="titulo_modal" >Añadir un turno</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_modal_agregar_turno_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_modal_agregar_turno_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_agregar_turno_header"
                                data-kt-scroll-wrappers="#kt_modal_agregar_turno_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Item-->
                                <div class="mb-5">
                                    
                                    <!--begin::Input group-->
                                    <input type="hidden" name="id" id="key" value="">

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">ID turno</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input class="form-control form-control-solid" placeholder="Ingrese un ID de turno" name="turno" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Descripción</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input class="form-control form-control-solid" placeholder="Ingrese una descripción de turno" name="descripcion" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->

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
                            <button type="reset" id="kt_modal_agregar_turno_cancel" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="submit" id="kt_modal_agregar_turno_submit" class="btn btn-primary">
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
        <!--end::Modal - Customers - Add-->       

        <!--begin::Modal - Filtros-->
        <div class="modal fade" id="kt_turno_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_turno">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_turno_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_turno_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_turno_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">ID turno</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese un ID de turno" name="filtro-turno" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Descripción</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese una descripción de turno" name="filtro-descripcion" />
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
                            <button type="reset" id="kt_modal_filtro_turno_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_turno_submit" class="btn btn-primary">
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
        <!--end::Modal - New Card-->
        <!--end::Modals-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>