<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Card-->
        <div class="card" id="div-cambios">
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
                        <!--end::Svg Icon--> <input type="text" data-kt-cambio-table-filter="search"
                            class="form-control form-control-solid w-250px ps-15" placeholder="Buscar código" />
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
                            data-bs-target="#kt_cambio_filtro_modal">
                            <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            Filtros
                        </button>                        
                        <!--end::Filter-->

                        <!--begin::Export dropdown-->
                        <div>
                            <button type="button" class="btn btn-light-primary me-3" id="boton-exportar-cambio">
                                <i class="ki-duotone ki-exit-up fs-2">
                                    <span class="path1"></span><span class="path2"></span>
                                </i>
                                Exportar
                            </button>
                        </div>
                        <!--end::Export dropdown-->

                        <!--begin::Add Camnbio-->
                        <div>
                            <button type="button" class="btn btn-primary" name="agregar-boton">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                </svg>
                                Agregar
                            </button>
                        </div>
                        <!--end::Add Cambio-->
                    </div>
                    <!--end::Toolbar-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">

                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7 display nowrap" id="tb_cambios" style="width:100%">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                            <th class="min-w-80px">Acciones</th>
                            <th class="min-w-100px d-none">Key</th>
                            <th class="min-w-100px">Código</th>
                            <th class="min-w-180px">Solicitante</th>
                            <th class="min-w-180px">Fecha Solicitante</th>
                            <th class="min-w-180px">Turno Sol.</th>
                            <th class="min-w-180px">Rango Solicitud</th>
                            <th class="min-w-180px">Receptor</th>
                            <th class="min-w-180px">Fecha Receptor</th>
                            <th class="min-w-180px">Turno Rec.</th>
                            <th class="min-w-180px">Rango Receptor</th>
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
        <!--begin::Modal - Agregar Editar - cambio-->
        <div class="modal fade" id="kt_modal_agregar_cambio" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-1500px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_agregar_cambio">
                        <!--begin::Modal header-->
                        <div class="modal-header" id="kt_modal_agregar_cambio_header">
                            <!--begin::Modal title-->
                            <h2 class="fw-bold" id="titulo_modal" >Añadir un cambio</h2>
                            <!--end::Modal title-->

                            <!--begin::Close-->
                            <div id="kt_modal_agregar_cambio_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_modal_agregar_cambio_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="#kt_modal_agregar_cambio_header"
                                data-kt-scroll-wrappers="#kt_modal_agregar_cambio_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Item-->
                                <div class="mb-5">
                                    
                                    <!--begin::Input group-->
                                    <input type="hidden" name="id" id="key" value="">

                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="required fs-6 fw-semibold mb-2">Código de Solicitud</label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input class="form-control form-control-solid" placeholder="Ingrese un ID de cambio" name="codigo" readonly/>
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::Card-->
                                    <div class="card p-6 bg-light-primary">
                                        <!--begin::Row-->
                                        <div class="row">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-5 col-sm-5">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Solicitante</label>
                                                <!--end::Label-->
        
                                                <!--begin::Input-->
                                                <input class="form-control form-control-solid" placeholder="Seleccione un solicitante" name="solicitante" usuario-id="" readonly/>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
    
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-5 col-sm-2">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Fecha</label>
                                                <!--end::Label-->
        
                                                <!--begin::Input-->
                                                <input class="form-control form-control-solid" placeholder="Seleccione una fecha" name="fechasol"/>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-5 col-sm-3">
                                                
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Periodo</label>
                                                <!--end::Label-->

                                                <!--begin::Select2-->
                                                <select class="form-select form-select-solid mb-2" name="periodosol" data-control="select2"
                                                        data-placeholder="Seleccione un periodo" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_cambio">
                                                    <option></option>
                                                    <?php
                                                        $sql = "SELECT DISTINCT 
                                                                    A.NPERI_ID,
                                                                    A.CPERI_DESCRIPCION
                                                                FROM SRD_PERIODO A
                                                                WHERE A.NPERI_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND CAPLI_ID = 'ENF_002'
                                                                ORDER BY A.CPERI_DESCRIPCION ASC;";
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
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-5 col-sm-2">
                                                <div class="mt-0 mt-sm-7">
                                                    <!--begin::Input-->
                                                    <button type="button" class="btn btn-primary w-100 w-sm-auto" id="btn_solicitante">
                                                        <i class="ki-duotone ki-magnifier">
                                                            <span class="path1"></span>
                                                            <span class="path2"></span>
                                                        </i>
                                                    </button>
                                                    <!--end::Input-->
                                                </div>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Card-->

                                    
                                    <!--begin::Card-->
                                    <div class="card mt-7 p-6">
                                        <!--begin::Row-->
                                        <div class="row">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-7 col-md-12">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Turno</label>
                                                <!--end::Label-->
        
                                                <!--begin::Select2-->
                                                <select class="form-select form-select-solid mb-2" name="turnosol" id="turnosol"
                                                        data-placeholder="Seleccione un turno" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_cambio" readonly>
                                                </select>
                                                <!--end::Select2-->
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Card-->
                                    
                                    <!--begin::Card-->
                                    <div class="card mt-7 p-6 bg-light-primary">
                                        <!--begin::Row-->
                                        <div class="row mt-7">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-7 col-sm-4">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Receptor</label>
                                                <!--end::Label-->
        
                                                <!--begin::Input-->
                                                <input class="form-control form-control-solid" placeholder="Seleccione un receptor" name="receptor" usuario-id="" readonly/>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
    
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-7 col-sm-3">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Fecha</label>
                                                <!--end::Label-->
        
                                                <!--begin::Input-->
                                                <input class="form-control form-control-solid" placeholder="Seleccione una fecha" name="fecharec"/>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-5 col-sm-3">
                                                
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Periodo</label>
                                                <!--end::Label-->

                                                <!--begin::Select2-->
                                                <select class="form-select form-select-solid mb-2" name="periodorec" data-control="select2"
                                                        data-placeholder="Seleccione un periodo" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_cambio">
                                                    <option></option>
                                                    <?php
                                                        $sql = "SELECT DISTINCT 
                                                                    A.NPERI_ID,
                                                                    A.CPERI_DESCRIPCION
                                                                FROM SRD_PERIODO A
                                                                WHERE A.NPERI_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND CAPLI_ID = 'ENF_002'
                                                                ORDER BY A.CPERI_DESCRIPCION ASC;";
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
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-7 col-sm-2">
                                                <div class="mt-0 mt-sm-7">
                                                    <!--begin::Input-->
                                                    <button type="button" class="btn btn-primary w-100 w-sm-auto" id="btn_receptor">
                                                        <i class="ki-duotone ki-magnifier">
                                                            <span class="path1"></span>
                                                            <span class="path2"></span>
                                                        </i>
                                                    </button>
                                                    <!--end::Input-->
                                                </div>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Card-->
                                    
                                    <!--begin::Card-->
                                    <div class="card mt-7 p-6 bg-light-secondary">
                                        <div class="row">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-7 col-md-12">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Turno</label>
                                                <!--end::Label-->
        
                                                <!--begin::Select2-->
                                                <select class="form-select form-select-solid mb-2" name="turnorec"
                                                        data-placeholder="Seleccione un turno" data-allow-clear="true" data-dropdown-parent="#kt_modal_agregar_cambio" readonly>
                                                </select>
                                                <!--end::Select2-->
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                    </div>
                                    <!--end::Card-->

                                    <!--begin::Input group-->
                                    <div class="fv-row mt-7 mb-7" id="div-estado">
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
                            <button type="reset" id="kt_modal_agregar_cambio_cancel" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="submit" id="kt_modal_agregar_cambio_submit" class="btn btn-primary">
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
        <div class="modal fade" id="kt_cambio_filtro_modal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-850px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Form-->
                    <form class="form" action="#" id="form_modal_filtro_cambio">
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
                            <div class="scroll-y me-n7 pe-7" id="kt_cambio_filtro_modal_scroll" data-kt-scroll="true"
                                data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                data-kt-scroll-dependencies="kt_cambio_filtro_modal_header"
                                data-kt-scroll-wrappers="#kt_cambio_filtro_modal_scroll" data-kt-scroll-offset="300px">
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Código</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese un código de transacción" name="filtro-codigo" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Solicitante</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese nombre o coincidencia de solicitante" name="filtro-solicitante" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Fecha Solicitante</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese fecha solicitante" name="filtro-fechasol" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Receptor</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese nombre o coincidencia de receptor" name="filtro-receptor" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="fv-row mb-7">
                                    <!--begin::Label-->
                                    <label class="required fs-6 fw-semibold mb-2">Fecha receptor</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input class="form-control form-control-solid" placeholder="Ingrese fecha solicitante" name="filtro-fecharec" />
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
                            <button type="reset" id="kt_modal_filtro_cambio_limpiar" class="btn btn-light me-3" data-bs-dismiss="modal">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="kt_modal_filtro_cambio_submit" class="btn btn-primary">
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

        <!--begin::Modal - Formulario Usuario-->
        <div class="modal fade" id="kt_buscar_usuario" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-950px">
                <!--begin::Modal content-->
                <div class="modal-content">

                    <!--begin::Modal header-->
                    <div class="modal-header" id="kt_modal_buscar_usuario_header">
                        <!--begin::Modal title-->
                        <h2 class="fw-bold" id="titulo_modal_usuario">Seleccione un colaborador</h2>
                        <!--end::Modal title-->

                        <!--begin::Close-->
                        <div id="kt_modal_buscar_usuario_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
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
                        <div class="scroll-y me-n7 pe-7" id="kt_modal_buscar_usuario_scroll" data-kt-scroll="true"
                            data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                            data-kt-scroll-dependencies="#kt_modal_buscar_usuario_header"
                            data-kt-scroll-wrappers="#kt_modal_buscar_usuario_scroll" data-kt-scroll-offset="300px">
                            
                            <div class="card">
                                <!--begin::Card header-->
                                <div class="card-header border-0 pt-6">
                                    <!--begin::Card title-->
                                    <div class="card-title">
                                        <!--begin::Search-->
                                        <div class="d-flex align-items-center position-relative my-1">
                                            <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                                <i class="ki-duotone ki-magnifier">
                                                    <span class="path1"></span>
                                                    <span class="path2"></span>
                                                </i>
                                            </span>
                                            <!--end::Svg Icon-->
                                            <input type="text" data-kt-usuario-table-filter="Buscar"
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
                                            <button type="button" class="btn btn-light-primary me-3" id="btn-actualizar-usuario">
                                                <i class="ki-duotone ki-arrow-circle-right fs-2">
                                                    <span class="path1"></span>
                                                    <span class="path2"></span>
                                                </i>
                                                <span>Actualizar</span>
                                            </button>
                                            <!--end::Filter-->
    
                                            <!--begin::Export dropdown-->
                                            <div>
                                                <button href="?page=" type="button" class="btn btn-light-primary me-3">
                                                    <i class="ki-duotone ki-plus fs-2"></i>
                                                    <span>Agregar</span>
                                                </button>
    
                                            </div>
                                            <!--end::Export dropdown-->
                                        </div>
                                        <!--end::Toolbar-->
                                    </div>
                                    <!--end::Card toolbar-->
                                </div>
                                <!--end::Card header-->
    
                                <!--begin::Card body-->
                                <div class="card-body pt-0">
                                    <!--begin::Table-->
                                    <table class="table align-middle table-row-dashed fs-7 gy-5 gs-7 display nowrap" id="tb_usuario" style="width:100%">
                                        <!--begin::Table head-->
                                        <thead>
                                            <tr class="text-start text-gray-400 fw-bold fs-8 px-7 text-uppercase">
                                                <th class="d-none">Key</th>    
                                                <th class="min-w-200px">Nombres</th>
                                                <th class="text-end min-w-80px">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-gray-600 fw-semibold">
                                        </tbody>
                                        <!--end::Table body-->
                                    </table>
                                </div>
                                <!--end::Card body-->
                            </div>
                        </div>
                        <!--end::Scroll-->
                    </div>
                    <!--end::Modal body-->

                    <!--begin::Modal footer-->
                    <div class="modal-footer flex-center">
                        <!--begin::Button-->
                        <button type="reset" id="kt_modal_buscar_usuario_cancel" class="btn btn-light me-3" data-bs-dismiss="modal">
                            Cancelar
                        </button>
                        <!--end::Button-->
                    </div>
                    <!--end::Modal footer-->
                </div>
            </div>
            <!--end::Modal - Formulario Empleabilidad-->
        </div>
        <!--end::Modal - Formulario Compañía-->

        <!--end::Modals-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>