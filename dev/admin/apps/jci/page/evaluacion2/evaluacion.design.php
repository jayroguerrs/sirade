<?php
include 'connection/bd_connection.php';
?>

<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Contacts App- Add New Contact-->
        <div class="row g-7">
            <!--begin::Content-->
            <div class="col-m-12">
                <!--begin::Contacts-->
                <div class="card card-flush h-lg-100" id="kt_contacts_main" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 60%) !important;">
                    <div class="card-header pt-7" id="kt_chat_contacts_header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-1 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                                    <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                                </svg>
                            </span>
                            <h2>Datos</h2>
                        </div>
                    </div>
                    <form id="kt_ecommerce_settings_general_form" class="form" action="#">
                        <!-- ACA COMIENZA LOS CUADRITOS DE SELECT-->
                        <div class="card-body pt-5">
                            <!--begin::Form-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semibold form-label mt-3">
                                    <span class="required">Trabajador</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Selecciones un personal a evaluar"></i>
                                </label>

                                <div class="w-100">
                                    <div class="form-floating border rounded">
                                        <select id="kt_ecomerce_select2_country" class="form-select form-select-solid lh-1 py-3" name="country" data-kt-ecommerce-settings-type="select2-flags" data-placeholder="SELECT" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;">
                                            <option></option>
                                            <?php
                                            try {
                                                $sql = "SELECT `cod`, `name` , 'performance' FROM `employees` ORDER BY `name`";
                                                $res_trabajadores = $conn->query($sql);
                                                while ($trabajadores = $res_trabajadores->fetch_assoc()) { ?>
                                                    <option value="<?php echo $trabajadores['cod']; ?>">
                                                        <?php echo $trabajadores['name']; ?>
                                                    </option>
                                            <?php }
                                            } catch (Exception $e) {
                                                echo "Error:" . $e->getMessage();
                                            }
                                            ?>
                                        </select>
                                    </div>
                                </div>
                                <!--end::Label-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semibold form-label mt-3">
                                    <span>Jefe</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter the contact's company name (optional)."></i>
                                </label>
                                <!--end::Label-->
                                <div class="w-100">
                                    <div class="form-floating border rounded">
                                        <select id="kt_ecomerce_select2_Jefe" class="form-select form-select-solid lh-1 py-3" name="jefes" data-kt-ecomerce-setting-type="select2-flags" data-placeholder="SELECT 2" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;">
                                            <option></option>
                                            <?php
                                            try {
                                                $sql = "SELECT distinct 'supervisor',`name` FROM `employees`  
                                                        INNER JOIN `areas` ON `cod`= `supervisor`;";
                                                $res_trabajadores = $conn->query($sql);
                                                while ($trabajadores = $res_trabajadores->fetch_assoc()) { ?>
                                                    <option value="<?php echo $trabajadores['name'] ?>">
                                                        <?php echo $trabajadores['name']; ?>
                                                    </option>
                                            <?php }
                                            } catch (Exception $e) {
                                                echo "Error:" . $e->getMessage();
                                            }
                                            ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!--end::Input group-->

                            <!--begin::Row-->
                            <div class="row row-cols-1 row-cols-sm-2 rol-cols-md-1 row-cols-lg-2">
                                <!--begin::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span class="required">Desempeño</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter the contact's email."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="email" class="form-control form-control-solid" name="email" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->

                                </div>
                                <!--end::Col-->

                                <!--begin::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span>Area</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter the contact's phone number (optional)."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" class="form-control form-control-solid" name="phone" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span>Bimestre</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter the contact's city of residence (optional)."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" class="form-control form-control-solid" name="city" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row g-7">
                            <div class="col-m-12">
                                <div class="card-header pt-7" id="kt-chat_contacts_header">
                                    <div class="card-title">
                                        <span class="svg-icon svg-icon-1 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                                                <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <h2>Cuestionario</h2>
                                    </div>
                                </div>

                                <!--begin::Accordion-->
                                <div class="accordion" id="kt_accordion_1">
                                    <div class="accordion-item ps-5">
                                        <h2 class="accordion-header" id="kt_accordion_1_header_1">
                                            <button class="accordion-button fs-4 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kt_accordion_1_body_1" aria-expanded="true" aria-controls="kt_accordion_1_body_1">
                                                SEGURIDAD DEL PACIENTE
                                            </button>
                                        </h2>
                                        <div id="kt_accordion_1_body_1" class="accordion-collapse collapse" aria-labelledby="kt_accordion_1_header_1" data-bs-parent="#kt_accordion_1">
                                            <div class="accordion-body">
                                                <!-- ROW DE PREGUNTA 1 -2   -->
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <!--Pregunta 1 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 1</h5>
                                                                <h6 class="card-subtitle">Verifica que el/la paciente cuente con el brazalete y los identificadores correctos.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg1" value="Cat1-0" id="Res1_Preg1" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg1">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->

                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg1" value="Cat1-5" id="Res2_Preg1" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg1">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--Pregunta 2 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 2</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de la administración de medicamentos.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg2" value="Cat1-0" id="Res1_Preg2" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg2">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg2" value="Cat1-5" id="Res2_Preg2" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg2">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg2" value="Cat1-N/A" id="Res3_Preg2" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg2">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- ROW DE PREGUNTA 3 -4   -->
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <!--Pregunta 3 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 3</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de la administración de sangre y derivados.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg3" value="Cat1-0" id="Res1_Preg3" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg3">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->

                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg3" value="Cat1-5" id="Res2_Preg3" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg3">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg4" value="Cat1-N/A" id="Res3_Preg3" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg3">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--Pregunta 4 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 4</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de la extracción de sangre y/u otras muestras o análisis de laboratorio.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg4" value="Cat1-0" id="Res1_Preg4" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg4" value="Cat1-5" id="Res2_Preg4" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg4" value="Cat1-N/A" id="Res3_Preg4" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- ROW DE PREGUNTA 5 - 6 -->
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <!--Pregunta 5 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 5</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de realizar procedimientos invasivos.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg5" value="Cat1-0" id="Res1_Preg5" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg5">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->

                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg5" value="Cat1-5" id="Res2_Preg5" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg5">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg5" value="Cat1-N/A" id="Res3_Preg5" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg5">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--Pregunta 6 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 6</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de entregar la dieta.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg6" value="Cat1-0" id="Res1_Preg6" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg6" value="Cat1-5" id="Res2_Preg6" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg6" value="Cat1-N/A" id="Res3_Preg6" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg4">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- ROW DE PREGUNTA 7 - 8 -->
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <!--Pregunta 7 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 7</h5>
                                                                <h6 class="card-subtitle">Verifica brazalete amarillo en pacientes alergicos.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-0" id="Res1_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->

                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-5" id="Res2_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-N/A" id="Res3_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--Pregunta 6 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 8</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de la extracción de sangre y/u otras muestras o análisis de laboratorio.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-0" id="Res1_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-5" id="Res2_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-N/A" id="Res3_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- ROW DE PREGUNTA 9 - 10 -->
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <!--Pregunta 9 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 9</h5>
                                                                <h6 class="card-subtitle">Verifica brazalete amarillo en pacientes alergicos.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-0" id="Res1_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->

                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-5" id="Res2_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg7" value="Cat1-N/A" id="Res3_Preg7" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg7">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <!--Pregunta 10 -->
                                                        <div class="card" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 34%) !important;">
                                                            <div class="card-body">
                                                                <h5 class="card-title" for="area">Pregunta 10</h5>
                                                                <h6 class="card-subtitle">Realiza la identificación del paciente antes de la extracción de sangre y/u otras muestras o análisis de laboratorio.</h6>
                                                                <div class="row">
                                                                    <!--begin::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-0" id="Res1_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res1_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/angry-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-5" id="Res2_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res2_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/happy-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">Si Cumple</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <input type="radio" class="btn-check" name="preg8" value="Cat1-N/A" id="Res3_Preg8" />
                                                                    <label class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex flex-nowrap align-items-center mb-5" for="Res3_Preg8">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <img class="form-check-content h-40px w-40px" src="assets/media/logos/meh-regular.png" />
                                                                        <!--end::Svg Icon-->
                                                                        <span class="d-block fw-semibold text-start">
                                                                            <span class="text-dark fw-bold d-block fs-3 ps-5">No Aplica</span>
                                                                        </span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item ps-5">
                                        <h2 class="accordion-header" id="kt_accordion_1_header_2">
                                            <button class="accordion-button fs-4 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kt_accordion_1_body_2" aria-expanded="false" aria-controls="kt_accordion_1_body_2">
                                                CONDUCTUAL
                                            </button>
                                        </h2>
                                        <div id="kt_accordion_1_body_2" class="accordion-collapse collapse" aria-labelledby="kt_accordion_1_header_2" data-bs-parent="#kt_accordion_1">
                                            <div class="accordion-body">
                                                ...
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item ps-5">
                                        <h2 class="accordion-header" id="kt_accordion_1_header_3">
                                            <button class="accordion-button fs-4 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kt_accordion_1_body_3" aria-expanded="false" aria-controls="kt_accordion_1_body_3">
                                                CONTINUIDAD DE LA ATENCION
                                            </button>
                                        </h2>
                                        <div id="kt_accordion_1_body_3" class="accordion-collapse collapse" aria-labelledby="kt_accordion_1_header_3" data-bs-parent="#kt_accordion_1">
                                            <div class="accordion-body">
                                                ...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--end::Accordion-->

                            </div>
                        </div>
                        <!--ACA ACABA CON EL INPUT DE BIMESTRE-->
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>