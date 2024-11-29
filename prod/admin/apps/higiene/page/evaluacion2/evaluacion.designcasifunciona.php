<?php
include_once '../includes/bd_conexion.php';
?>
<!--end::Content wrapper-->
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Contacts App- Add New Contact-->
        <div class="row g-7">
            <!--begin::Content-->
            <div class="col-m-12">
                <!--begin::Contacts-->
                <div class="card card-flush h-lg-100" id="kt_contacts_main" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 60%) !important;">
                    <!--begin::Card header-->
                    <div class="card-header pt-7" id="kt_chat_contacts_header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-1 me-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                                    <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            <h2>Datos</h2>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-5">
                        <!--begin::Form-->
                        <form id="kt_ecommerce_settings_general_form" class="form" action="#">
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
                                    <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Card body-->
                </div>

                <!--begin::Separator-->
                <div class="separator my-7">
                </div>
                <!--begin::Separator--
                <!--end::Contacts-->
                <!--ACA ACABA DE VERDAD LA TARJETA DE DATOS -->
                <div class="row g-7">
                    <div class="col-m-12">
                        <div class="card card-flush h-lg-100" id="kt_contacts_main2" style="box-shadow: 0 2px 6px 0 rgb(67 89 113/ 60%) !important; ">
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
                            <div class="accordion accordion-icon-toggle" id="kt_accordion_2">
                                <!--begin::Item-->
                                <div class="mb-5">
                                    <!--begin::Header-->
                                    <div class="accordion-header py-3 d-flex" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                                        <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
                                        <h3 class="fs-4 fw-semibold mb-0 ms-4">The best way to quick start business</h3>
                                    </div>
                                    <!--end::Header-->

                                    <!--begin::Body-->
                                    <div id="kt_accordion_2_item_1" class="fs-6 collapse show ps-10" data-bs-parent="#kt_accordion_2">
                                        ...
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Item-->

                                <!--begin::Item-->
                                <div class="mb-5">
                                    <!--begin::Header-->
                                    <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_2">
                                        <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
                                        <h3 class="fs-4 fw-semibold mb-0 ms-4">How To Create Channel ?</h3>
                                    </div>
                                    <!--end::Header-->

                                    <!--begin::Body-->
                                    <div id="kt_accordion_2_item_2" class="collapse fs-6 ps-10" data-bs-parent="#kt_accordion_2">
                                        ...
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Item-->

                                <!--begin::Item-->
                                <div class="mb-5">
                                    <!--begin::Header-->
                                    <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_3">
                                        <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
                                        <h3 class="fs-4 fw-semibold mb-0 ms-4">What are the support terms & conditions ?</h3>
                                    </div>
                                    <!--end::Header-->

                                    <!--begin::Body-->
                                    <div id="kt_accordion_2_item_3" class="collapse fs-6 ps-10" data-bs-parent="#kt_accordion_2">
                                        ...
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Item-->
                            </div>
                            <!--end::Accordion-->
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Content-->
        </div>
        <!--end::Contacts App- Add New Contact-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
</div>
<!--end::Content wrapper-->