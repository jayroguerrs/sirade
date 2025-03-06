<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Form-->
        <form id="formEvaluacion" class="form d-flex flex-column flex-lg-row"
            data-kt-redirect="/good/apps/ecommerce/catalog/products.html">
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
                                <div class="col-md-3 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Código</label>
                                    <!--end::Label-->

                                    <!--begin::Input-->
                                    <input type="text" name="codigo" class="form-control mb-2" value="<?php echo $_SESSION['codigo'] ;?>" disabled/>
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                
                                <!--begin::Input group-->
                                <div class="col-md-9 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Nombre Supervisor</label>
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
                                <div class="col-md-3 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Periodo</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select mb-2" name="periodo" data-control="select2" data-kt-nueva-evaluacion="opciones" 
                                            data-placeholder="Seleccione un periodo" data-allow-clear="true">
                                        <option></option>
                                        <?php
                                            $sql = "SELECT 
                                                        A.NPERI_ID,
                                                        B.CPERI_DESCRIPCION
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN SRD_PERIODO B ON A.NPERI_ID = B.NPERI_ID
                                                    INNER JOIN SRD_JCI_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                                    WHERE C.NUSUA_ID = " . $_SESSION['id'] . " AND 
                                                        A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND B.CAPLI_ID = 'ENF_003'
                                                    GROUP BY A.NPERI_ID ORDER BY B.DPERI_FIN DESC;";
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
                                <div class="col-md-3 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Servicio</label>
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
                                <div class="col-md-6 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Colaborador</label>
                                    <!--end::Label-->

                                    <!--begin::Select2-->
                                    <select class="form-select mb-2" name="colaborador" data-control="select2" data-kt-nueva-evaluacion="opciones"
                                         data-placeholder="Seleccione un colaborador" data-allow-clear="true" disabled>
                                        <option data-encuesta=""></option>
                                    </select>
                                    <!--end::Select2-->

                                </div>
                                <!--end::Input group-->

                            </div>
                            <!--end:Tax-->
                            <div class="d-flex justify-content-end">
                            
                            <!--begin::Button-->
                            <button type="button" id="btn_limpiar_evaluacion"
                                class="btn btn-light me-5">
                                Limpiar
                            </button>
                            <!--end::Button-->

                            <!--begin::Button-->
                            <button type="button" id="btn_continuar_evaluacion" class="btn btn-primary">
                                <span class="indicator-label">
                                    Verificar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </div>
                            
                        </div>
                        <!--end::Card header-->
                    </div>
                    <!--end::Pricing-->
                </div>

                <div id="div-cuestionario" class="d-none d-flex flex-column gap-7 gap-lg-10">
                    <!--begin::Pricing-->
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Cuestionario</h2>
                            </div>
                        </div>
                        <!--end::Card header-->

                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            
                            <!--begin::Accordion-->
                            <div class="accordion accordion-icon-collapse" id="kt_accordion_3">
                                
                                <?php
                                    $sql = "SELECT
                                                NJCAP_ID,
                                                LOWER(CJCAP_NOMBRE) CJCAP_NOMBRE
                                            FROM SRD_JCI_CATEGORIA_PREG A
                                            WHERE A.NJCAP_ESTADO = 1 AND A.NAUDI_EST_REG = 1
                                            ORDER BY A.NJCAP_ORDEN ASC;";
                                            
                                    $result = $conn->query($sql);
                                    if ($result->num_rows > 0) {
                                        // output data of each row
                                        while($row = $result->fetch_assoc()) { ?>
                                <!--begin::Item-->
                                <div class="mb-5">
                                    <!--begin::Header-->
                                    <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_categoria_<?php echo $row["NJCAP_ID"]; ?>">
                                        <span class="accordion-icon">
                                            <i class="ki-duotone ki-plus-square fs-3 accordion-icon-off"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>                            <i class="ki-duotone ki-minus-square fs-3 accordion-icon-on"><span class="path1"></span><span class="path2"></span></i>                        </span>
                                        <h3 class="fs-4 fw-semibold mb-0 ms-4"><?php echo ucwords($row["CJCAP_NOMBRE"]); ?></h3>
                                    </div>
                                    <!--end::Header-->

                                    <!--begin::Body-->
                                    <div id="kt_categoria_<?php echo $row["NJCAP_ID"]; ?>" class="fs-6 collapse ps-10" data-bs-parent="#kt_accordion_3">
                                        
                                        <?php
                                            $sql = "SELECT
                                                        A.NJPRE_ID,
                                                        A.NJPRE_ORDEN,
                                                        A.CJPRE_DESCRIPCION 
                                                    FROM SRD_JCI_PREGUNTAS A
                                                    WHERE A.NJPRE_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND A.NJCAP_ID = " . $row["NJCAP_ID"] . "
                                                    ORDER BY A.NJPRE_ORDEN ASC;";
                                                    
                                            $result2 = $conn->query($sql);
                                            if ($result2->num_rows > 0) {
                                                // output data of each row
                                                while($row2 = $result2->fetch_assoc()) { ?>

                                        <!--begin::Input group-->
                                        <div class="fv-row my-5">
                                            <!--begin::Label-->
                                            <label class="fs-6 fw-semibold mb-6">
                                                <?php echo $row2["NJPRE_ORDEN"] . ". " . $row2["CJPRE_DESCRIPCION"]; ?>
                                            </label>
                                            <!--End::Label-->

                                            <!--begin::Row-->
                                            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                
                                                <?php
                                                    $sql = "SELECT
                                                                A.NJPRE_ID,
                                                                A.NJRESP_ID,
                                                                LOWER(B.CJRESP_DESCRIPCION) CJRESP_DESCRIPCION,
                                                                B.NJRESP_VALOR,
                                                                B.CJRESP_ICONO,
                                                                B.CJRESP_CLASE
                                                            FROM SRD_JCI_PREGUNTAS_RPTAS A
                                                            INNER JOIN SRD_JCI_RESPUESTAS B ON A.NJRESP_ID = B.NJRESP_ID
                                                            WHERE A.NJPRE_ID = " . $row2["NJPRE_ID"] . " AND 
                                                                A.NJRPT_ESTADO = 1 AND A.NAUDI_EST_REG = 1 AND
                                                                B.NJRESP_ESTADO = 1 AND B.NAUDI_EST_REG = 1
                                                            ORDER BY B.NJRESP_ORDEN ASC;";
                                                            
                                                    $result3 = $conn->query($sql);
                                                    if ($result3->num_rows > 0) {
                                                        // output data of each row
                                                        while($row3 = $result3->fetch_assoc()) { ?>
                                                        
                                                <!--begin::Col-->
                                                <div class="col">
                                                    <!--begin::Option-->
                                                    <label class="custom-label btn btn-outline btn-outline-dashed btn-active-light-primary align-items-center d-flex text-start p-6" data-kt-button="true">
                                                        <!--begin::Radio-->
                                                        <span class="form-check form-check-custom form-check-solid form-check-sm align-items-start me-4">
                                                            <input class="form-check-input" type="radio" name="radio_preg_<?php echo $row3["NJPRE_ID"]; ?>" value="<?php echo $row3["NJRESP_ID"]; ?>" />
                                                        </span>
                                                        <!--end::Radio-->
                                                        <span class="symbol symbol-50px me-6">
                                                            <span class="symbol-label bg-light-<?php echo $row3["CJRESP_CLASE"]; ?>">
                                                                <i class="ki-duotone <?php echo $row3["CJRESP_ICONO"]; ?> fs-3x text-<?php echo $row3["CJRESP_CLASE"]; ?>">
                                                                    <span class="path1"></span>
                                                                    <span class="path2"></span>
                                                                    <span class="path3"></span>
                                                                </i>
                                                            </span>
                                                        </span>

                                                        <!--begin::Info-->
                                                        <span class="me-4">
                                                            <span class="fs-4 fw-bold text-<?php echo $row3["CJRESP_CLASE"]; ?> d-block"><?php echo ucwords($row3["CJRESP_DESCRIPCION"]); ?></span>
                                                        </span>
                                                        <!--end::Info-->
                                                    </label>
                                                    <!--end::Option-->
                                                </div>
                                                <!--end::Col-->

                                                        <?php 
                                                        }
                                                    } ?>
                                            </div>
                                            <!--end::Row-->
                                        </div>
                                        <!--end::Input group-->

                                                <?php 
                                                } 
                                            } ?>
                                    </div>
                                    <!--end::Body-->
                                </div>
                                <!--end::Item-->
                                        <?php 
                                        } 
                                    }
                                ?>

                            </div>
                            <!--end::Accordion-->

                        </div>
                        <!--end::Card header-->
                    </div>
                    <!--end::Pricing-->
                </div>

                <div id="div-guardar" class="d-flex justify-content-end d-none">
                    <!--begin::Button-->
                    <a type="button" id="kt_cancelar_encuesta"
                        class="btn btn-light me-5">
                        Cancelar
                    </a>
                    <!--end::Button-->

                    <!--begin::Button-->
                    <button type="submit" id="btn_guardar_evaluacion" class="btn btn-primary">
                        <span class="indicator-label">
                            Guardar Cambios
                        </span>
                        <span class="indicator-progress">
                            Por favor espere... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
                    <!--end::Button-->
                </div>
            </div>
            <!--end::Main column-->
        </form>
        <!--end::Form-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->