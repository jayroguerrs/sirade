<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Form-->
        <form id="personal_form" class="form d-flex flex-column flex-lg-row"
            data-kt-redirect="/good/apps/ecommerce/catalog/products.html">
            <!--begin::Aside column-->
            <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                <!--begin::Thumbnail settings-->
                <div class="card card-flush py-4">
                    <!--begin::Card header-->
                    <div class="card-header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <h2>Foto de Perfil</h2>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body text-center pt-0">
                        <!--begin::Image input-->

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
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Thumbnail settings-->
                <!--begin::Status-->
                <div class="card card-flush py-4">
                    <!--begin::Card header-->
                    <div class="card-header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <h2>Estado</h2>
                        </div>
                        <!--end::Card title-->

                        <!--begin::Card to  olbar-->
                        <div class="card-toolbar">
                            <div class="rounded-circle w-15px h-15px bg-secondary" id="color_estado"></div>
                        </div>
                        <!--begin::Card toolbar-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        <!--begin::Select2-->
                        <select name="sh_estado_col" id="sh_estado_col" class="form-select" data-control="select2" data-hide-search="true" data-placeholder="Seleccione una opción" data-allow-clear="true">
                            <option></option>                            
                            <?php
                                $sql = "SELECT
                                            NESCO_ID,
                                            CESCO_DESCRIPCION,
                                            CESCO_CLASE
                                        FROM SRD_ESTADO_COLABORADORES
                                        WHERE NESCO_ESTADO = 1
                                        ORDER BY CESCO_DESCRIPCION;";
                                $result = $conn->query($sql);
                                if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) { ?>
                                        <option value="<?php echo $row["NESCO_ID"]; ?>" data-kt-clase="<?php echo $row["CESCO_CLASE"]; ?>"><?php echo $row["CESCO_DESCRIPCION"]; ?></option> <?php
                                    }
                                }
                            ?>                         
                        </select>
                        <!--end::Select2-->

                        <!--begin::Description-->
                        <div class="text-muted fs-7">Establece el estado del usuario.</div>
                        <!--end::Description-->                        
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Status-->                          
            </div>
            <!--end::Aside column-->

            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <!--begin:::Tabs-->
                <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
                    <!--begin:::Tab item-->
                    <li class="nav-item">
                        <a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
                            href="#kt_ecommerce_add_product_general">General</a>
                    </li>
                    <!--end:::Tab item-->                    
                </ul>
                <!--end:::Tabs-->
                <!--begin::Tab content-->
                <div class="tab-content">
                    <!--begin::Tab pane-->
                    <div class="tab-pane fade show active" id="kt_ecommerce_add_product_general" role="tab-panel">
                        <div class="d-flex flex-column gap-7 gap-lg-10">

                            <!--begin::General options-->
                            <div class="card card-flush py-4">
                                <!--begin::Card header-->
                                <div class="card-header">
                                    <div class="card-title">
                                        <h2>General</h2>
                                    </div>
                                </div>
                                <!--end::Card header-->

                                <!--begin::Card body-->
                                <div class="card-body pt-0">
                                    <!--begin::Input group-->                                    
                                    <input name="hd_id" type="hidden" class="form-control" value="<?php echo isset($_GET['id']) ? $_GET['id']: ''; ?>"/>
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="row">                                        
                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Código CRP</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <input type="text" name="sh_cod" class="form-control mb-2"
                                            placeholder="Escriba el número de documento" value="" />
                                            <!--end::Input-->
                                        </div>

                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Número de Documento</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <input type="text" name="sh_doc" class="form-control mb-2"
                                            placeholder="Escriba el número de documento" value="" />
                                            <!--end::Input-->
                                        </div>
                                    </div>
                                    <!--end::Input group-->

                                    <!--begin::Input group-->
                                    <div class="row">                                        
                                        <div class="col-md-12 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Nombre del Colaborador</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <input type="text" name="sh_nombre" class="form-control mb-2"
                                            placeholder="Escriba el nombre del colaborador" value="" />
                                            <!--end::Input-->
                                        </div>
                                    </div>
                                    <!--end::Input group-->                                

                                    <!--begin::Input group-->
                                    <div class="row">
                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Ocupación</label>
                                            <!--end::Label-->

                                            <!--begin::Select-->
                                            <select name="sh_ocupacion" class="form-select" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="true">
                                                <option></option>
                                                <?php                                                    
                                                    $sql = "SELECT 
                                                                NOCUP_ID,
                                                                COCUP_DESCRIPCION
                                                            FROM SRD_OCUPACION
                                                            WHERE COCUP_ESTADO = 1
                                                            ORDER BY COCUP_DESCRIPCION;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NOCUP_ID"]; ?>"><?php echo $row["COCUP_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Desempeño</label>
                                            <!--end::Label-->

                                            <!--begin::Select-->
                                            <select name="sh_desempenio" class="form-select" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="true">
                                                <option></option>
                                                <?php
                                                    $sql = "SELECT 
                                                                NDESE_ID,
                                                                CDESE_DESCRIPCION
                                                            FROM SRD_DESEMPENIO
                                                            WHERE CDESE_ESTADO = 1
                                                            ORDER BY CDESE_DESCRIPCION;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>
                                                            <option value="<?php echo $row["NDESE_ID"]; ?>"><?php echo $row["CDESE_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }
                                                ?>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                    </div>
                                    <!--end::Input group-->
                                    
                                    <!--begin::Input group-->
                                    <div class="row">
                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Nacionalidad</label>
                                            <!--end::Label-->

                                            <!--begin::Select-->
                                            <select name="sh_nacionalidad" class="form-select select-iconos" data-control="select2" data-placeholder="Seleccione una opción" data-allow-clear="true">
                                                <option></option>
                                                <?php                                                    
                                                    $sql = "SELECT
                                                                NNACI_ID,
                                                                CNACI_DESCRIPCION,
                                                                CNACI_IMAGEN
                                                            FROM SRD_NACIONALIDAD
                                                            WHERE CNACI_ESTADO = 1
                                                            ORDER BY CNACI_DESCRIPCION;";
                                                    $result = $conn->query($sql);
                                                    if ($result->num_rows > 0) {
                                                        // output data of each row
                                                        while($row = $result->fetch_assoc()) { ?>                                                            
                                                            <option value="<?php echo $row["NNACI_ID"]; ?>" data-kt-select2-pais="assets/media/flags/<?php echo $row["CNACI_IMAGEN"]; ?>"><?php echo $row["CNACI_DESCRIPCION"]; ?></option> <?php
                                                        }
                                                    }                                                    
                                                ?>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                        <div class="col-md-6 mb-7">
                                            <!--begin::Label-->
                                            <label class="required form-label">Correo Electrónico</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <input type="text" name="sh_correo" class="form-control mb-2"
                                            placeholder="Escriba el correo del colaborador" value="" />
                                            <!--end::Input-->
                                        </div>
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::Card header-->
                            </div>
                            <!--end::General options-->                                               
                        </div>
                    </div>
                    <!--end::Tab pane-->                   
                </div>
                <!--end::Tab content-->

                <div class="d-flex justify-content-end">
                    <!--begin::Button-->
                    <a href="/good/apps/ecommerce/catalog/products.html" id="personal_cancel"
                        class="btn btn-light me-5">
                        Cancelar
                    </a>
                    <!--end::Button-->

                    <!--begin::Button-->
                    <button type="submit" id="personal_submit" class="btn btn-primary">
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
<?php
    $conn->close();
?>