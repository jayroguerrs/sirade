<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">

        <!--begin::Form-->
        <form class="form d-flex flex-column flex-lg-row" id="formEvaluacion">
            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                
                <div class="d-flex flex-column gap-7 gap-lg-10">
                    <!--begin::Pricing-->
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Datos Generales</h2>
                            </div>
                        </div>
                        <!--end::Card header-->

                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            
                            <!--begin::Tax-->
                            <div class="row">
                                
                                <!--begin::Input group-->
                                <div class="col-md-3 mb-7">
                                    <!--begin::Label-->
                                    <label class="form-label">Código</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input type="text" name="codigo" class="form-control mb-2" value="<?php echo $_SESSION['codigo'] ;?>" disabled/>
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="col-md-9 mb-7">
                                    <!--begin::Label-->
                                    <label class="form-label">Nombre Supervisor</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input type="text" name="supervisor" class="form-control mb-2" value="<?php echo $_SESSION['nombres'] ;?>" disabled />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->

                            </div>
                            <!--end:Tax-->

                            <!--begin::Tax-->
                            <div class="row">
                                
                                <!--begin::Input group-->
                                <div class="col-md-3 mb-7">
                                    <!--begin::Label-->
                                    <label class="form-label">Periodo</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-control mb-2" name="periodo" data-control="select2" data-kt-nueva-evaluacion="opciones" 
                                            data-placeholder="Seleccione un periodo" data-allow-clear="true">
                                        <option></option>
                                        <?php
                                            $sql = "SELECT DISTINCT 
                                                        A.CJPER_ID
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN SRD_JCI_PERIODO B ON A.CJPER_ID = B.CJPER_ID
                                                    INNER JOIN SRD_JCI_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                                    WHERE C.NUSUA_ID = 1 AND 
                                                        B.NJPER_ESTADO = 1 AND B.NAUDI_EST_REG = 1 AND 
                                                        A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND 
                                                        C.NASUP_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                                                    GROUP BY B.DJPER_FIN DESC;";
                                            $result = $conn->query($sql);
                                            if ($result->num_rows > 0) {
                                                // output data of each row
                                                while($row = $result->fetch_assoc()) { ?>
                                                    <option value="<?php echo $row["CJPER_ID"]; ?>"><?php echo $row["CJPER_ID"]; ?></option> <?php
                                                }
                                            }
                                        ?>
                                    </select>
                                    <!--end::Select2-->
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="col-md-3 mb-7">
                                    <!--begin::Label-->
                                    <label class="form-label">Servicio</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select mb-2" id="servicio" name="servicio" data-control="select2" data-kt-nueva-evaluacion="opciones"
                                         data-placeholder="Seleccione un servicio" data-allow-clear="true" disabled >
                                        <option></option>
                                    </select>
                                    <!--end::Select2-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="col-md-6 mb-7">
                                    <!--begin::Label-->
                                    <label class="required form-label">Colaborador</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select mb-2" name="colaborador" data-control="select2" data-kt-nueva-evaluacion="opciones"
                                         data-placeholder="Seleccione un colaborador" disabled>
                                        <option data-encuesta=""></option>
                                    </select>
                                    <!--end::Select2-->

                                </div>
                                <!--end::Input group-->

                            </div>
                            <!--end:Tax-->

                            <!--begin::Input group-->
                            <div class="row mb-5">
                                <!--begin::Col-->
                                <div class="col-md-6 fv-row">
                                    <!--begin::Label-->
                                    <label class="fs-5 fw-semibold mb-2">Name</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input type="text" class="form-control form-control-solid" placeholder=""
                                        name="name" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Col-->

                                <!--begin::Col-->
                                <div class="col-md-6 fv-row">
                                    <!--end::Label-->
                                    <label class="fs-5 fw-semibold mb-2">Email</label>
                                    <!--end::Label-->

                                    <!--end::Input-->
                                    <input type="text" class="form-control form-control-solid" placeholder=""
                                        name="email" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="d-flex flex-column mb-5 fv-row">
                                <!--begin::Label-->
                                <label class="form-label">Subject</label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <select class="form-control" name="subject2" data-control="select2" data-kt-nueva-evaluacion="opciones" 
                                            data-placeholder="Seleccione un periodo" data-allow-clear="true">
                                    <option></option>
                                    <?php
                                            $sql = "SELECT DISTINCT 
                                                        A.CJPER_ID
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN SRD_JCI_PERIODO B ON A.CJPER_ID = B.CJPER_ID
                                                    INNER JOIN SRD_JCI_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                                    WHERE C.NUSUA_ID = 1 AND 
                                                        B.NJPER_ESTADO = 1 AND B.NAUDI_EST_REG = 1 AND 
                                                        A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND 
                                                        C.NASUP_ESTADO = 1 AND C.NAUDI_EST_REG = 1
                                                    GROUP BY B.DJPER_FIN DESC;";
                                            $result = $conn->query($sql);
                                            if ($result->num_rows > 0) {
                                                // output data of each row
                                                while($row = $result->fetch_assoc()) { ?>
                                                    <option value="<?php echo $row["CJPER_ID"]; ?>"><?php echo $row["CJPER_ID"]; ?></option> <?php
                                                }
                                            }
                                        ?>
                                </select>
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="d-flex flex-column mb-10 fv-row">
                                <label class="fs-6 fw-semibold mb-2">Message</label>

                                <textarea class="form-control form-control-solid" rows="6" name="message"
                                    placeholder="">
                                </textarea>
                            </div>
                            <!--end::Input group-->

                            
                        </div>
                        <!--end::Card body-->

                    </div>
                    <!--end::Pricing-->

                    <div class="d-flex justify-content-end">
                        <!--begin::Button-->
                        <a href="/good/apps/ecommerce/catalog/products.html" id="kt_ecommerce_add_product_cancel"
                            class="btn btn-light me-5">
                            Cancelar
                        </a>
                        <!--end::Button-->
                        
                        <!--begin::Submit-->
                        <button type="submit" class="btn btn-primary" id="kt_contact_submit_button">

                            <!--begin::Indicator label-->
                            <span class="indicator-label">
                                Guardar Cambios
                            </span>
                            <!--end::Indicator label-->

                            <!--begin::Indicator progress-->
                            <span class="indicator-progress">
                                Por favor espere... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                            <!--end::Indicator progress-->
                        </button>
                        <!--end::Submit-->
                    </div>
                </div>
            </div>
            <!--end::Main column-->

        </form>
        <!--end::Form-->

    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->