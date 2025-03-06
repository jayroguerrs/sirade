<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">


    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Main column-->
        <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <div class="d-flex flex-column gap-7 gap-lg-10">
                <!--begin::Pricing-->
                <div class="card card-flush py-4">
                    <!--begin::Card header-->
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Filtros Generales</h2>
                        </div>
                    </div>
                    <!--end::Card header-->
    
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        <form id="formAsignar">
                            <!--begin::Tax-->
                            <div class="row">
                                
                                <!--begin::Input group-->
                                <div class="col-md-12 mb-7 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Periodo</label>
                                    <!--end::Label-->
        
                                    <!--begin::Select2-->
                                    <select class="form-select form-select-solid" name="periodo" data-control="select2" data-kt-nueva-evaluacion="opciones" 
                                            data-placeholder="Seleccione un periodo" data-allow-clear="true">
                                        <option></option>
                                        <?php
                                            $sql = "SELECT  
                                                        A.NPERI_ID,
                                                        B.CPERI_DESCRIPCION
                                                    FROM SRD_JCI_ENCUESTAS A
                                                    INNER JOIN srd_periodo B ON A.NPERI_ID = B.NPERI_ID
                                                    INNER JOIN SRD_JCI_AREAS_SUPER C ON C.CAREA_ID = A.CAREA_ID 
                                                    WHERE C.NUSUA_ID = " . $_SESSION['id'] . " AND 
                                                        A.NJENC_ESTADO = 1 AND A.NAUDI_EST_REG = 1 
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
        
                            </div>
                            <!--end:Tax-->
                            <div class="d-flex justify-content-end">
                            
                            <!--begin::Button-->
                            <button type="button" id="btn_limpiar"
                                class="btn btn-light me-5">
                                Limpiar
                            </button>
                            <!--end::Button-->
        
                            <!--begin::Button-->
                            <button type="button" id="btn_continuar" class="btn btn-primary">
                                <span class="indicator-label">
                                    Continuar
                                </span>
                                <span class="indicator-progress">
                                    Por favor espere... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>
                            <!--end::Button-->
                        </form>
                    </div>
                        
                    </div>
                    <!--end::Card header-->
                </div>
                <!--end::Pricing-->
            </div>
            <!--begin::Row-->
            <div id="div-asignar" class="d-none row g-5 g-xl-10 mb-5 mb-xl-10">
                <!--begin::Col-->
                <div class="col-xl-5">
                    <!--begin::Chart Widget 35-->
                    <div class="card card-flush h-md-100">
                        <!--begin::Header-->
                        <div class="card-header pt-7">
                            <!--begin::Title-->
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bold text-gray-800">Colaboradores Disponibles</span>
                            </h3>
                        </div>
                        <!--end::Header-->
                        
                        <!--begin::Tax-->
                        <div class="row pt-4 px-7">
                            <!--begin::Input group-->
                            <div class="col-md-5 mb-6 fv-row d-flex align-items-center">
                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                <span class="svg-icon svg-icon-1 position-absolute ms-4"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                            transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <!--begin::Input-->
                                <input type="text" data-kt-colaborador-table-filter="search" class="form-control form-control-solid ps-14" placeholder="Buscar" />
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->
                            
                            <!--begin::Input group-->
                            <div class="col-md-5 mb-6 fv-row">
                                <!--begin::Input-->
                                <!--begin::Select2-->
                                <select class="form-select form-select-solid" name="filtro-desempenio-disp" data-control="select2" data-hide-search="true" data-placeholder="Desempeño" data-allow-clear="true">
                                    <option></option>
                                    <?php
                                        $sql = "SELECT 
                                                    A.NDESE_ID,
                                                    A.CDESE_DESCRIPCION
                                                FROM SRD_DESEMPENIO A
                                                WHERE A.NDESE_ESTADO = 1
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
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->
                            
                            <!--begin::Button group-->
                            <div class="col-md-2 mb-6 fv-row d-flex align-items-center">
                                <button name="act_disponibles" class="btn btn-light btn-active-light-primary btn-sm">
                                    <i class="ki-duotone ki-arrows-circle">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </button>
                            </div>
                            <!--end::Button group-->
                        </div>
                        <!--end:Tax-->
    
                        <!--begin::Table container-->
                        <div class="table-responsive px-7">
                            <!--begin::Table-->
                            <table id="colab_disponibles" class="table align-middle table-row-dashed fs-7 gy-3 gs-7 my-0">
                                <!--begin::Table head-->
                                <thead>
                                    <tr class="text-start text-gray-400 fw-bold fs-8 text-uppercase gs-0">
                                        <th>Key</th>
                                        <th>Código</th>
                                        <th>Colaborador</th>
                                        <th>Imagen</th>
                                        <th>Nacionalidad</th>
                                        <th>Imagen Nacionalidad</th>
                                        <th>Area</th>
                                        <th>Desempeño</th>
                                        <th class="text-end min-w-80px">Acciones</th>
                                    </tr>
                                </thead>
                                <!--end::Table head-->
    
                                <!--begin::Table body-->
                                <tbody class="text-gray-600 fw-semibold">
                                </tbody>
                                <!--end::Table body-->
                            </table>
                        </div>
                        <!--end::Table-->                    
                    </div>
                    <!--end::Chart Widget 35-->
                </div>
                <!--end::Col-->
    
                <!--begin::Col--> 
                <div class="col-xl-2 d-flex align-items-center justify-content-center">
                    <span class="symbol symbol-70px me-6">
                        <span class="symbol-label bg-light-primary">
                            <i class="ki-duotone ki-arrow-right-left fs-4x">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                        </span>
                    </span>
                </div>
                <!--end::Col-->
    
                <!--begin::Col-->
                <div class="col-xl-5">
                    <!--begin::Table widget 14-->
                    <div class="card card-flush h-md-100">
                        <!--begin::Header-->
                        <div class="card-header pt-7">
                            <!--begin::Title-->
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bold text-gray-800">Colaboradores Asignados</span>
                            </h3>
                        </div>
                        <!--end::Header-->
                        
                        <!--begin::Tax-->
                        <div class="row pt-4 px-7">
                            <!--begin::Input group-->
                            <div class="col-md-5 mb-6 fv-row d-flex align-items-center">
                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                <span class="svg-icon svg-icon-1 position-absolute ms-4"><svg width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                            transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <!--begin::Input-->
                                <input type="text" data-kt-asignado-table-filter="search" class="form-control form-control-solid ps-14" placeholder="Buscar" />
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->
                            
                            <!--begin::Input group-->
                            <div class="col-md-5 mb-6 fv-row">
                                <!--begin::Input-->
                                <!--begin::Select2-->
                                <select class="form-select form-select-solid" name="filtro-servicio-asig" data-control="select2" data-hide-search="false" data-placeholder="Servicio" data-allow-clear="true">
                                    <option></option>
                                    <?php
                                        $sql = "SELECT 
                                                    A.CAREA_ID,
                                                    B.CAREA_DESCRIPCION
                                                FROM SRD_JCI_AREAS_SUPER A
                                                INNER JOIN SRD_AREAS B ON A.CAREA_ID = B.CAREA_ID
                                                WHERE " . ($_SESSION['rol_id'] == 1 ? "" : "A.NUSUA_ID = " . $_SESSION['id'] . " AND ") . " A.NASUP_ESTADO = 1 AND B.NAREA_ESTADO = 1
                                                ORDER BY A.CAREA_ID ASC ;";
                                        $result = $conn->query($sql);
                                        if ($result->num_rows > 0) {
                                            // output data of each row
                                            while($row = $result->fetch_assoc()) { ?>
                                                <option value="<?php echo $row["CAREA_ID"]; ?>"><?php echo $row["CAREA_DESCRIPCION"]; ?></option> <?php
                                            }
                                        }
                                    ?>
                                </select>
                                <!--end::Select2-->
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Button group-->
                            <div class="col-md-2 mb-6 fv-row d-flex align-items-center">
                                <button name="act_asignados" class="btn btn-light btn-active-light-primary btn-sm">
                                    <i class="ki-duotone ki-arrows-circle">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                </button>
                            </div>
                            <!--end::Button group-->
                        </div>
                        <!--end:Tax-->
    
                        <!--begin::Table container-->
                        <div class="table-responsive px-7">
                            <!--begin::Table-->
                            <table id="colab_asignados" class="table align-middle table-row-dashed fs-7 gy-3 gs-7 my-0">
                                <!--begin::Table head-->
                                <thead>
                                    <tr class="text-gray-400 fw-bold fs-8 text-uppercase gs-0">
                                        <th class="text-start min-w-80px">Acciones</th>
                                        <th>Key Usuario</th>
                                        <th>Key Encuesta</th>
                                        <th>Código</th>
                                        <th class="text-end">Colaborador</th>
                                        <th>Imagen</th>
                                        <th>Nacionalidad</th>
                                        <th>Imagen Nacionalidad</th>
                                        <th>Area</th>
                                        <th>Supervisor</th>
                                        <th>Desempeño</th>
                                    </tr>
                                </thead>
                                <!--end::Table head-->
    
                                <!--begin::Table body-->
                                <tbody class="text-gray-600 fw-semibold">
                                </tbody>
                                <!--end::Table body-->
                            </table>
                        </div>
                        <!--end::Table-->                    
                    </div>
                    <!--end::Chart Widget 35-->
                    <!--end::Table widget 14-->
                </div>
                <!--end::Col-->
            </div>
            <!--end::Row-->
        </div>
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
<?php
    $conn->close();
?>