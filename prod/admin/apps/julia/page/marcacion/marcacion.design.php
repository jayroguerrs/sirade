<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container container-fluid">

        <!--begin::Contacts App- View Contact-->
        <div class="row g-7">
           
            <!--begin::Content-->
            <div class="col-xl-12">

                <!--begin::Contacts-->
                <div class="card card-flush h-lg-100" id="kt_contacts_main">
                    <!--begin::Card header-->
                    <div class="card-header pt-7 mb-4" id="kt_chat_contacts_header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-1 me-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                                    <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            <h2>Detalles de la Marcación</h2>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-3">
                        <div class="card card-dashed px-7 pb-5 pt-7">
                            <div class="row gy-10">
                                <!--begin::Col-->
                                <div class="col-sm-4">
                                    <!--begin::Option-->
                                    <input type="radio" class="btn-check" name="tipo_marca" value="normal" checked="checked" id="tipo_marca_normal"/>
                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-5 d-flex align-items-center mb-5 me-3" for="tipo_marca_normal">
                                        <i class="ki-duotone ki-setting-2 fs-2x me-4"><span class="path1"></span><span class="path2"></span></i>
                                        <span class="d-block fw-semibold text-start">
                                            <span class="text-gray-900 fw-bold d-block fs-4">Marca Normal</span>
                                        </span>
                                    </label>
                                    <!--end::Option-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-sm-4">
                                    <!--begin::Option-->
                                    <input type="radio" class="btn-check" name="tipo_marca" value="he" id="tipo_marca_sobretiempo"/>
                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-5 d-flex align-items-center mb-5 me-3" for="tipo_marca_sobretiempo">
                                        <i class="ki-duotone ki-setting-2 fs-2x me-4"><span class="path1"></span><span class="path2"></span></i>
                                        <span class="d-block fw-semibold text-start">
                                            <span class="text-gray-900 fw-bold d-block fs-4">Horas Extras</span>
                                        </span>
                                    </label>
                                    <!--end::Option-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-sm-4">
                                    <!--begin::Option-->
                                    <input type="radio" class="btn-check" name="tipo_marca" value="he" id="tipo_marca_cambio"/>
                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-5 d-flex align-items-center mb-5 me-3" for="tipo_marca_cambio">
                                        <i class="ki-duotone ki-setting-2 fs-2x me-4"><span class="path1"></span><span class="path2"></span></i>
                                        <span class="d-block fw-semibold text-start">
                                            <span class="text-gray-900 fw-bold d-block fs-4">Cambio en Turno</span>
                                        </span>
                                    </label>
                                    <!--end::Option-->
                                </div>
                                <!--end::Col-->
                            </div>
                        </div>

                        <div class="row gy-5 align-items-center pt-5 gx-0">
                            <!--begin::Profile-->
                            <div class="col-sm-4">
                                <div class="d-flex justify-content-center align-items-center">
                                    <div class="text-center">
                                        <!--begin::Avatar-->
                                        <div class="symbol symbol-circle symbol-200px me-6 mx-auto">
                                            <img src="assets/media/avatars/blank.png" alt="image" id="imagen-colaborador"/>
                                        </div>
                                        <!--end::Avatar-->
                                    </div>
                                </div>
                            </div>
                            <!--end::Profile-->
                            <!--begin::Profile-->
                            <div class="col-sm-8">
                                <!--begin::Detalles de Marcación-->
                                <div class="d-flex flex-column gap-2">
                                    <!--begin::Form-->
                                    <form class="form" id="form_marcacion">
                                        <!--begin::Código-->
                                        <div class="input-group w-75 fv-row">
                                            <span class="input-group-text">Código </span>
                                            <input type="text" name="codigo-colaborador" class="form-control" placeholder="Ejemplo: 0104172"/>
                                            <button class="btn btn-primary" id="btn-buscar" type="submit">
                                                <span class="svg-icon">
                                                    <i class="ki-duotone ki-magnifier fs-3">
                                                        <span class="path1"></span>
                                                        <span class="path2"></span>
                                                    </i>
                                                </span>
                                                <!--end::Svg Icon-->
                                                <span class="ms-2">Buscar</span>
                                            </button>
                                        </div>
                                        <!--end::Código-->
                                    </form>
                                    <!--end::Form-->

                                    <!--begin::Nombre-->
                                    <div class="fs-2hx fw-bold my-5">
                                        <span id="lbl-nombre">---</span>
                                    </div>
                                    <!--end::Nombre-->
                                    
                                    <table id="kt_datatable_zero_configuration" class="table table-striped table-row-bordered gy-5 w-100">
                                        <tbody>
                                            <!--begin::Tipo de Marcación-->
                                            <tr>
                                                <td>                                                
                                                    <div class="d-flex align-items-center gap-2">
                                                        <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/kt-products/good/releases/2022-08-13-004438/core/html/src/media/icons/duotune/general/gen008.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="currentColor"/>
                                                                <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="currentColor"/>
                                                                <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="currentColor"/>
                                                                <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                        <a class="fs-4 fw-bold text-muted">TIPO DE MARCACIÓN: </a>
                                                    </div>
                                                    <!--end::Phone-->
                                                </td>
                                                <td>
                                                    <div class="fw-bold fs-2">
                                                        <span id="lbl-tipo">---</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end::Tipo de Marcación-->

                                            <!--begin::Hora de Marcación-->
                                            <tr>
                                                <td>
                                                    <!--begin::Phone-->
                                                    <div class="d-flex align-items-center gap-2">
                                                        <!--begin::Svg Icon | path: icons/duotune/electronics/elc003.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="currentColor"/>
                                                                <path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>                                            
                                                        <!--end::Svg Icon-->
                                                        <a class="fs-4 fw-bold text-muted">HORA DE MARCACIÓN: </a>
                                                    </div>
                                                    <!--end::Phone-->
                                                </td>
                                                <td>
                                                    <div class="fw-bold fs-3">
                                                        <span id="lbl-hora">---</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end::Hora de Marcación-->

                                            <!--begin::Nombre de Servicio-->
                                            <tr>
                                                <td>
                                                    <!--begin::Servicio-->
                                                    <div class="d-flex align-items-center gap-2">
                                                        <!--begin::Svg Icon | path: icons/duotune/electronics/elc003.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                        <a class="fs-4 fw-bold text-muted">NOMBRE DE SERVICIO:</a>
                                                    </div>
                                                    <!--end::Phone-->
                                                </td>
                                                <td>
                                                    <div class="fw-bold fs-3">
                                                        <span id="lbl-servicio">---</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end::Nombre de Servicio-->

                                            <!--begin::Observaciones-->
                                            <tr>
                                                <td>
                                                    <!--begin::Servicio-->
                                                    <div class="d-flex align-items-center gap-2">
                                                        <!--begin::Svg Icon | path: icons/duotune/electronics/elc003.svg-->
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"/>
                                                                <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"/>
                                                            </svg>
                                                        </span>
                                                        <!--end::Svg Icon-->
                                                        <a class="fs-4 fw-bold text-muted">OBSERVACIONES:</a>
                                                    </div>
                                                    <!--end::Phone-->
                                                </td>
                                                <td>
                                                    <div class="fw-bold fs-3">
                                                        <div id="lbl-observaciones">---</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end::Observaciones-->                                        
                                        </tbody>                                    
                                    </table>
                                </div>
                                <!--end::Detalles de Marcación-->
                            </div>
                            <!--end::Profile-->
                        </div>
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Contacts-->

            </div>
            <!--end::Content-->
        </div>
        <!--end::Contacts App- View Contact-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->