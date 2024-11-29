<?php
    include 'connection/bd_connection.php';
?>
<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">
        <!--begin::Navbar-->
        <div class="card mb-6">
            <div class="card-body pt-9 pb-0">
                <!--begin::Details-->
                <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                    <!--begin: Pic-->
                    <div class="me-7 mb-4">
                        <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img src="assets/media/avatars/<?php echo $_SESSION['imagen']; ?>" alt="image" />
                            <div
                                class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle h-15px w-15px">
                            </div>
                        </div>
                    </div>
                    <!--end::Pic-->

                    <!--begin::Info-->
                    <div class="flex-grow-1">
                        <!--begin::Title-->
                        <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <!--begin::User-->
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-1"><?php echo $_SESSION['nombres']; ?></a>
                                    <a href="#"><i class="ki-duotone ki-verify fs-1 text-primary"><span
                                                class="path1"></span><span class="path2"></span></i></a>
                                </div>

                                <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                    <a href="#"
                                        class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                        <i class="ki-duotone ki-geolocation fs-4 me-1"><span
                                                class="path1"></span><span class="path2"></span></i> 4TO SUR
                                    </a>
                                    <a href="#"
                                        class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                        <i class="ki-duotone ki-sms fs-4 me-1"><span class="path1"></span><span
                                                class="path2"></span></i> <?php echo $_SESSION['correo']; ?>
                                    </a>
                                </div>
                            </div>
                            <!--end::User-->

                            <!--begin::Actions-->
                            <div class="d-flex my-4">
                                <a href="#" class="btn btn-light btn-active-text-dark me-3"
                                    id="kt_user_follow_button">
                                    <i class="ki-duotone ki-check fs-2 d-none"></i>
                                    <!--begin::Indicator label-->
                                    <span class="indicator-label">
                                        Follow</span>
                                    <!--end::Indicator label-->

                                    <!--begin::Indicator progress-->
                                    <span class="indicator-progress">
                                        Please wait... <span
                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                    <!--end::Indicator progress-->
                                </a>

                                <a href="#" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_offer_a_deal">Offer a Deal</a>
                            </div>
                            <!--end::Actions-->
                        </div>
                        <!--end::Title-->

                        <!--begin::Stats-->
                        <div class="d-flex flex-wrap justify-content-between">
                            <!--begin::Info-->
                            <div class="d-flex flex-column flex-grow-1 pe-8">
                                <div class="d-flex flex-wrap">

                                    <div class="border border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div class="fs-1 fw-bold" data-kt-countup="true"
                                            data-kt-countup-value="3">0</div>
                                        <div class="fw-semibold fs-6 text-gray-400">Evaluaciones</div>
                                    </div>

                                    <div class="border border-dashed rounded min-w-125px py-2 px-4 me-6 mb-3">
                                        <div class="fs-1 fw-bold" data-kt-countup="true"
                                            data-kt-countup-value="89">0</div>
                                        <div class="fw-semibold fs-6 text-gray-400">Nota Max.</div>
                                    </div>

                                    <div class="border border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div class="fs-1 fw-bold" data-kt-countup="true" data-kt-countup-value="39">
                                            0</div>
                                        <div class="fw-semibold fs-6 text-gray-400">Nota Min.</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->

                            <!--begin::Progress-->
                            <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                                    <span class="fw-semibold fs-6 text-gray-400">Nota promedia</span>
                                    <span class="fw-bold fs-6">78%</span>
                                </div>

                                <div class="h-5px mx-3 w-100 bg-light   rounded mb-3">
                                    <div class="bg-primary rounded h-5px" role="progressbar" style="width: 78%;"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <!--end::Progress-->
                        </div>
                        <!--end::Stats-->
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Details-->

                <div class="separator"></div>

                <!--begin::Navs-->
                <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 "
                            href="/good/pages/user-profile/overview.html">
                            Overview </a>
                    </li>
                    <!--end::Nav item-->
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 active"
                            href="/good/pages/user-profile/projects.html">
                            Projects </a>
                    </li>
                    <!--end::Nav item-->
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 "
                            href="/good/pages/user-profile/campaigns.html">
                            Campaigns </a>
                    </li>
                    <!--end::Nav item-->
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 "
                            href="/good/pages/user-profile/documents.html">
                            Documents </a>
                    </li>
                    <!--end::Nav item-->
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 "
                            href="/good/pages/user-profile/followers.html">
                            Followers </a>
                    </li>
                    <!--end::Nav item-->
                    <!--begin::Nav item-->
                    <li class="nav-item mt-2">
                        <a class="nav-link text-active-primary ms-0 me-10 py-5 "
                            href="/good/pages/user-profile/activity.html">
                            Activity </a>
                    </li>
                    <!--end::Nav item-->
                </ul>
                <!--begin::Navs-->
            </div>
        </div>
        <!--end::Navbar-->
        <!--begin::Toolbar-->
        <div class="d-flex flex-wrap flex-stack mb-6">
            <!--begin::Heading-->
            <h3 class="fw-bold my-2">
                Mis Evaluaciones
                <span class="fs-6 text-gray-400 fw-semibold ms-1">Activos</span>
            </h3>
            <!--end::Heading-->

            <!--begin::Actions-->
            <div class="d-flex flex-wrap my-2">
                <div class="me-4">
                    <!--begin::Select-->
                    <select name="status" data-control="select2" data-hide-search="true"
                        class="form-select form-select-sm form-select-solid w-125px">
                        <option value="Active" selected>Active</option>
                        <option value="Approved">In Progress</option>
                        <option value="Declined">To Do</option>
                        <option value="In Progress">Completed</option>
                    </select>
                    <!--end::Select-->
                </div>

                <a href="#" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_project">New Project</a>
            </div>
            <!--end::Actions-->
        </div>
        <!--end::Toolbar-->

        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
            <!--begin::Col-->
            <div class="col-md-6 col-xl-4">

                <!--begin::Card-->
                <a href="/good/apps/projects/project.html" class="card border-hover-primary ">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-9">
                        <!--begin::Card Title-->
                        <div class="card-title m-0">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-50px w-50px h-50px bg-primary d-flex align-items-center justify-content-center">
                                <span class="fs-2 bold-text text-white">89</span>
                            </div>
                            <span class="fs-2 px-2 bold-text">/ 100</span>
                            <!--end::Avatar-->
                        </div>
                        <!--end::Car Title-->

                        <!--begin::Card toolbar-->
                        <div class="card-toolbar">
                            <span class="badge badge-light-primary fw-bold me-auto px-4 py-3">En Progreso</span>
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end:: Card header-->

                    <!--begin:: Card body-->
                    <div class="card-body p-9">
                        <!--begin::Name-->
                        <div class="fs-3 fw-bold text-dark">
                            JCI-BIMESTRE5-2023
                        </div>
                        <!--end::Name-->

                        <!--begin::Description-->
                        <p class="text-gray-400 fw-semibold fs-6 mt-1 mb-7">
                            Modificado: 25/07/2021 04:23:00 pm
                        </p>
                        <!--end::Description-->

                        <!--begin::Info-->
                        <div class="d-flex flex-wrap mb-5">
                            <!--begin::Due-->
                            <div
                                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">4TO SUR</div>
                                <div class="fw-semibold text-gray-400">Servicio</div>
                            </div>
                            <!--end::Due-->

                            <!--begin::Budget-->
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">31/11/2023</div>
                                <div class="fw-semibold text-gray-400">Fecha Fin</div>
                            </div>
                            <!--end::Budget-->
                        </div>
                        <!--end::Info-->

                        <!--begin::Progress-->
                        <div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip"
                            title="Este proyecto está 50% completado">
                            <div class="bg-primary rounded h-4px" role="progressbar" style="width: 50%"
                                aria-valuenow=" 50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <!--end::Progress-->

                        <!--begin::Users-->
                        <div class="symbol-group symbol-hover">
                            <!--begin::User-->
                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                title="Supervisor: Guerreros Echia, Jayro">
                                <img alt="Pic" src="assets/media/avatars/1.jpg" />
                            </div>
                            <!--begin::User-->
                        </div>
                        <!--end::Users-->
                    </div>
                    <!--end:: Card body-->
                </a>
                <!--end::Card-->
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-md-6 col-xl-4">
                <!--begin::Card-->
                <a href="/good/apps/projects/project.html" class="card border-hover-primary ">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-9">
                        <!--begin::Card Title-->
                        <div class="card-title m-0">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-50px w-50px h-50px bg-danger d-flex align-items-center justify-content-center">
                                <span class="fs-2 bold-text text-white">0</span>
                            </div>
                            <span class="fs-2 px-2 bold-text">/ 100</span>
                            <!--end::Avatar-->
                        </div>
                        <!--end::Car Title-->

                        <!--begin::Card toolbar-->
                        <div class="card-toolbar">
                            <span class="badge badge-light-danger fw-bold me-auto px-4 py-3">Pendiente</span>
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end:: Card header-->

                    <!--begin:: Card body-->
                    <div class="card-body p-9">
                        <!--begin::Name-->
                        <div class="fs-3 fw-bold text-dark">
                            JCI-BIMESTRE4-2023
                        </div>
                        <!--end::Name-->

                        <!--begin::Description-->
                        <p class="text-gray-400 fw-semibold fs-6 mt-1 mb-7">
                            Modificado: 25/07/2021 04:23:00 pm
                        </p>
                        <!--end::Description-->

                        <!--begin::Info-->
                        <div class="d-flex flex-wrap mb-5">
                            <!--begin::Due-->
                            <div
                                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">4TO SUR</div>
                                <div class="fw-semibold text-gray-400">Servicio</div>
                            </div>
                            <!--end::Due-->

                            <!--begin::Budget-->
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">31/11/2023</div>
                                <div class="fw-semibold text-gray-400">Fecha Fin</div>
                            </div>
                            <!--end::Budget-->
                        </div>
                        <!--end::Info-->

                        <!--begin::Progress-->
                        <div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip"
                            title="This project 30% completed">
                            <div class="bg-danger rounded h-4px" role="progressbar" style="width: 30%"
                                aria-valuenow=" 30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <!--end::Progress-->

                        <!--begin::Users-->
                        <div class="symbol-group symbol-hover">
                            <!--begin::User-->
                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                title="Brian Cox">
                                <img alt="Pic" src="assets/media/avatars/1.jpg" />
                            </div>
                            <!--begin::User-->
                        </div>
                        <!--end::Users-->
                    </div>
                    <!--end:: Card body-->
                </a>
                <!--end::Card-->
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-md-6 col-xl-4">
                <!--begin::Card-->
                <a href="/good/apps/projects/project.html" class="card border-hover-primary ">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-9">
                        <!--begin::Card Title-->
                        <div class="card-title m-0">
                            <!--begin::Avatar-->
                            <div class="symbol symbol-50px w-50px h-50px bg-success d-flex align-items-center justify-content-center">
                                <span class="fs-2 bold-text text-white">90</span>
                            </div>
                            <span class="fs-2 px-2 bold-text">/ 100</span>
                            <!--end::Avatar-->
                        </div>
                        <!--end::Car Title-->

                        <!--begin::Card toolbar-->
                        <div class="card-toolbar">
                            <span class="badge badge-light-success fw-bold me-auto px-4 py-3">Completado</span>
                        </div>
                        <!--end::Card toolbar-->
                    </div>
                    <!--end:: Card header-->

                    <!--begin:: Card body-->
                    <div class="card-body p-9">
                        <!--begin::Name-->
                        <div class="fs-3 fw-bold text-dark">
                            JCI-BIMESTRE3-2023
                        </div>
                        <!--end::Name-->

                        <!--begin::Description-->
                        <p class="text-gray-400 fw-semibold fs-6 mt-1 mb-7">
                            Modificado: 25/07/2021 04:23:00 pm
                        </p>
                        <!--end::Description-->

                        <!--begin::Info-->
                        <div class="d-flex flex-wrap mb-5">
                            <!--begin::Due-->
                            <div
                                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">4TO SUR</div>
                                <div class="fw-semibold text-gray-400">Servicio</div>
                            </div>
                            <!--end::Due-->

                            <!--begin::Budget-->
                            <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                <div class="fs-6 text-gray-800 fw-bold">31/11/2023</div>
                                <div class="fw-semibold text-gray-400">Fecha Fin</div>
                            </div>
                            <!--end::Budget-->
                        </div>
                        <!--end::Info-->

                        <!--begin::Progress-->
                        <div class="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip"
                            title="This project 30% completed">
                            <div class="bg-success rounded h-4px" role="progressbar" style="width: 30%"
                                aria-valuenow=" 30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <!--end::Progress-->

                        <!--begin::Users-->
                        <div class="symbol-group symbol-hover">
                            <!--begin::User-->
                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                title="Brian Cox">
                                <img alt="Pic" src="assets/media/avatars/1.jpg" />
                            </div>
                            <!--begin::User-->
                        </div>
                        <!--end::Users-->
                    </div>
                    <!--end:: Card body-->
                </a>
                <!--end::Card-->
            </div>
            <!--end::Col-->
        </div>
        <!--end::Row-->

        <!--begin::Pagination-->
        <div class="d-flex flex-stack flex-wrap pt-10">
            <div class="fs-6 fw-semibold text-gray-700">
                Showing 1 to 10 of 50 entries
            </div>

            <!--begin::Pages-->
            <ul class="pagination">
                <li class="page-item previous">
                    <a href="#" class="page-link"><i class="previous"></i></a>
                </li>

                <li class="page-item active">
                    <a href="#" class="page-link">1</a>
                </li>

                <li class="page-item">
                    <a href="#" class="page-link">2</a>
                </li>

                <li class="page-item">
                    <a href="#" class="page-link">3</a>
                </li>

                <li class="page-item">
                    <a href="#" class="page-link">4</a>
                </li>

                <li class="page-item">
                    <a href="#" class="page-link">5</a>
                </li>

                <li class="page-item">
                    <a href="#" class="page-link">6</a>
                </li>

                <li class="page-item next">
                    <a href="#" class="page-link"><i class="next"></i></a>
                </li>
            </ul>
            <!--end::Pages-->
        </div>
        <!--end::Pagination-->
        <!--begin::Modals-->
        <!--begin::Modal - Create Project-->
        <div class="modal fade" id="kt_modal_create_project" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-fullscreen p-9">
                <!--begin::Modal content-->
                <div class="modal-content modal-rounded">
                    <!--begin::Modal header-->
                    <div class="modal-header">
                        <!--begin::Modal title-->
                        <h2>Create Project</h2>
                        <!--end::Modal title-->

                        <!--begin::Close-->
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <!--end::Modal header-->

                    <!--begin::Modal body-->
                    <div class="modal-body scroll-y m-5">
                        <!--begin::Stepper-->
                        <div class="stepper stepper-links d-flex flex-column" id="kt_modal_create_project_stepper">
                            <!--begin::Container-->
                            <div class="container">
                                <!--begin::Nav-->
                                <div class="stepper-nav justify-content-center py-2">
                                    <!--begin::Step 1-->
                                    <div class="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Project Type
                                        </h3>
                                    </div>
                                    <!--end::Step 1-->

                                    <!--begin::Step 2-->
                                    <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Project Settings
                                        </h3>
                                    </div>
                                    <!--end::Step 2-->

                                    <!--begin::Step 3-->
                                    <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Budget
                                        </h3>
                                    </div>
                                    <!--end::Step 3-->

                                    <!--begin::Step 4-->
                                    <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Build A Team
                                        </h3>
                                    </div>
                                    <!--end::Step 4-->

                                    <!--begin::Step 5-->
                                    <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Set First Target
                                        </h3>
                                    </div>
                                    <!--end::Step 5-->

                                    <!--begin::Step 6-->
                                    <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Upload Files
                                        </h3>
                                    </div>
                                    <!--end::Step 6-->

                                    <!--begin::Step 7-->
                                    <div class="stepper-item" data-kt-stepper-element="nav">
                                        <h3 class="stepper-title">
                                            Completed
                                        </h3>
                                    </div>
                                    <!--end::Step 7-->
                                </div>
                                <!--end::Nav-->

                                <!--begin::Form-->
                                <form class="mx-auto w-100 mw-600px pt-15 pb-10" novalidate="novalidate"
                                    id="kt_modal_create_project_form" method="post">
                                    <!--begin::Type-->
                                    <div class="current" data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-7 pb-lg-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Project Type</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check out
                                                    <a href="#" class="link-primary fw-bold">FAQ Page</a>
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-15" data-kt-buttons="true">
                                                <!--begin::Option-->
                                                <label
                                                    class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                                    <!--begin::Input-->
                                                    <input class="btn-check" type="radio" checked="checked"
                                                        name="project_type" value="1" />
                                                    <!--end::Input-->

                                                    <!--begin::Label-->
                                                    <span class="d-flex">
                                                        <!--begin::Icon-->
                                                        <i class="ki-duotone ki-profile-circle fs-3hx"><span
                                                                class="path1"></span><span
                                                                class="path2"></span><span class="path3"></span></i>
                                                        <!--end::Icon-->

                                                        <!--begin::Info-->
                                                        <span class="ms-4">
                                                            <span
                                                                class="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal
                                                                Project</span>

                                                            <span class="fw-semibold fs-4 text-muted">
                                                                If you need more info, please check it out
                                                            </span>
                                                        </span>
                                                        <!--end::Info-->
                                                    </span>
                                                    <!--end::Label-->
                                                </label>
                                                <!--end::Option-->

                                                <!--begin::Option-->
                                                <label
                                                    class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                                    <!--begin::Input-->
                                                    <input class="btn-check" type="radio" name="project_type"
                                                        value="2" />
                                                    <!--end::Input-->

                                                    <!--begin::Label-->
                                                    <span class="d-flex">
                                                        <!--begin::Icon-->
                                                        <i class="ki-duotone ki-rocket fs-3hx"><span
                                                                class="path1"></span><span class="path2"></span></i>
                                                        <!--end::Icon-->

                                                        <!--begin::Info-->
                                                        <span class="ms-4">
                                                            <span
                                                                class="fs-3 fw-bold text-gray-900 mb-2 d-block">Team
                                                                Project</span>

                                                            <span class="fw-semibold fs-4 text-muted">
                                                                Create corporate account to manage users
                                                            </span>
                                                        </span>
                                                        <!--end::Info-->
                                                    </span>
                                                    <!--end::Label-->
                                                </label>
                                                <!--end::Option-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Actions-->
                                            <div class="d-flex justify-content-end">
                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="type-next">
                                                    <span class="indicator-label">
                                                        Project Settings
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Type-->
                                    <!--begin::Settings-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Project Settings</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check
                                                    <a href="#" class="link-primary">Project Guidelines</a>
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Dropzone-->
                                                <div class="dropzone" id="kt_modal_create_project_settings_logo">
                                                    <!--begin::Message-->
                                                    <div class="dz-message needsclick">
                                                        <!--begin::Icon-->
                                                        <i class="ki-duotone ki-file-up fs-3hx text-primary"><span
                                                                class="path1"></span><span class="path2"></span></i>
                                                        <!--end::Icon-->

                                                        <!--begin::Info-->
                                                        <div class="ms-4">
                                                            <h3 class="dfs-3 fw-bold text-gray-900 mb-1">Drop files
                                                                here or click to upload.</h3>
                                                            <span class="fw-semibold fs-4 text-muted">Upload up to
                                                                10 files</span>
                                                        </div>
                                                        <!--end::Info-->
                                                    </div>
                                                </div>
                                                <!--end::Dropzone-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Customer</label>
                                                <!--end::Label-->

                                                <!--begin::Input-->
                                                <select class="form-select form-select-solid" data-control="select2"
                                                    data-hide-search="true" data-placeholder="Select..."
                                                    name="settings_customer">
                                                    <option></option>
                                                    <option value="1">Keenthemes</option>
                                                    <option value="2">CRM App</option>
                                                </select>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label
                                                    class="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                    <span class="required">Project Name</span>


                                                    <span class="ms-1" data-bs-toggle="tooltip"
                                                        title="Specify project name">
                                                        <i class="ki-duotone ki-information-5 text-gray-500 fs-6"><span
                                                                class="path1"></span><span
                                                                class="path2"></span><span
                                                                class="path3"></span></i></span> </label>
                                                <!--end::Label-->

                                                <!--begin::Input-->
                                                <input type="text" class="form-control form-control-solid"
                                                    placeholder="Enter Project Name" value="StockPro Mobile App"
                                                    name="settings_name" />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Project
                                                    Description</label>
                                                <!--end::Label-->

                                                <!--begin::Input-->
                                                <textarea class="form-control form-control-solid" rows="3"
                                                    placeholder="Enter Project Description"
                                                    name="settings_description">
            Experience share market at your fingertips with TICK PRO stock investment mobile trading app
            </textarea>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label class="required fs-6 fw-semibold mb-2">Release Date</label>
                                                <!--end::Label-->

                                                <!--begin::Wrapper-->
                                                <div class="position-relative d-flex align-items-center">
                                                    <!--begin::Icon-->
                                                    <i class="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span><span
                                                            class="path5"></span><span class="path6"></span></i>
                                                    <!--end::Icon-->

                                                    <!--begin::Input-->
                                                    <input class="form-control form-control-solid ps-12"
                                                        placeholder="Pick date range"
                                                        name="settings_release_date" />
                                                    <!--end::Input-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-15">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack">
                                                    <!--begin::Label-->
                                                    <div class="me-5">
                                                        <label
                                                            class="required fs-6 fw-semibold">Notifications</label>
                                                        <div class="fs-7 fw-semibold text-muted">Allow Notifications
                                                            by Phone or Email</div>
                                                    </div>
                                                    <!--end::Label-->

                                                    <!--begin::Checkboxes-->
                                                    <div class="d-flex">
                                                        <!--begin::Checkbox-->
                                                        <label
                                                            class="form-check form-check-custom form-check-solid me-10">
                                                            <!--begin::Input-->
                                                            <input class="form-check-input h-20px w-20px"
                                                                type="checkbox" value="email"
                                                                name="settings_notifications[]" />
                                                            <!--end::Input-->

                                                            <!--begin::Label-->
                                                            <span class="form-check-label fw-semibold">
                                                                Email
                                                            </span>
                                                            <!--end::Label-->
                                                        </label>
                                                        <!--end::Checkbox-->

                                                        <!--begin::Checkbox-->
                                                        <label
                                                            class="form-check form-check-custom form-check-solid">
                                                            <!--begin::Input-->
                                                            <input class="form-check-input h-20px w-20px"
                                                                type="checkbox" value="phone" checked
                                                                name="settings_notifications[]" />
                                                            <!--end::Input-->

                                                            <!--begin::Label-->
                                                            <span class="form-check-label fw-semibold">
                                                                Phone
                                                            </span>
                                                            <!--end::Label-->
                                                        </label>
                                                        <!--end::Checkbox-->
                                                    </div>
                                                    <!--end::Checkboxes-->
                                                </div>
                                                <!--begin::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-stack">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="settings-previous">
                                                    Project Type
                                                </button>

                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="settings-next">
                                                    <span class="indicator-label">
                                                        Budget
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Settings-->
                                    <!--begin::Budget-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-10 pb-lg-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Budget</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check
                                                    <a href="#" class="link-primary">Project Guidelines</a>
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                    <span class="required">Setup Budget</span>

                                                    <span class="lh-1 ms-1" data-bs-toggle="popover"
                                                        data-bs-trigger="hover" data-bs-html="true" data-bs-content="
        &lt;div class=&#039;p-4 rounded bg-light&#039;&gt;
            &lt;div class=&#039;d-flex flex-stack text-muted mb-4&#039;&gt;
                &lt;i class=&quot;ki-duotone ki-bank fs-3 me-3&quot;&gt;&lt;span class=&quot;path1&quot;&gt;&lt;/span&gt;&lt;span class=&quot;path2&quot;&gt;&lt;/span&gt;&lt;/i&gt;
                &lt;div class=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt;
                &lt;div&gt;Amount&lt;/div&gt;
                &lt;div&gt;Transaction&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt;
                &lt;div&gt;USD345.00&lt;/div&gt;
                &lt;div&gt;KEENTHEMES*&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-muted mb-2&#039;&gt;
                &lt;div&gt;USD75.00&lt;/div&gt;
                &lt;div&gt;Hosting fee&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-muted&#039;&gt;
                &lt;div&gt;USD3,950.00&lt;/div&gt;
                &lt;div&gt;Payrol&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    ">
                                                        <i class="ki-duotone ki-information-5 text-gray-500 fs-6"><span
                                                                class="path1"></span><span
                                                                class="path2"></span><span
                                                                class="path3"></span></i></span> </label>
                                                <!--end::Label-->

                                                <!--begin::Dialer-->
                                                <div class="position-relative w-lg-250px"
                                                    id="kt_modal_create_project_budget_setup" data-kt-dialer="true"
                                                    data-kt-dialer-min="50" data-kt-dialer-max="50000"
                                                    data-kt-dialer-step="100" data-kt-dialer-prefix="$"
                                                    data-kt-dialer-decimals="2">

                                                    <!--begin::Decrease control-->
                                                    <button type="button"
                                                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                        data-kt-dialer-control="decrease">
                                                        <i class="ki-duotone ki-minus-circle fs-1"><span
                                                                class="path1"></span><span class="path2"></span></i>
                                                    </button>
                                                    <!--end::Decrease control-->

                                                    <!--begin::Input control-->
                                                    <input type="text"
                                                        class="form-control form-control-solid border-0 ps-12"
                                                        data-kt-dialer-control="input" placeholder="Amount"
                                                        name="budget_setup" readonly value="$50" />
                                                    <!--end::Input control-->

                                                    <!--begin::Increase control-->
                                                    <button type="button"
                                                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                        data-kt-dialer-control="increase">
                                                        <i class="ki-duotone ki-plus-circle fs-1"><span
                                                                class="path1"></span><span class="path2"></span></i>
                                                    </button>
                                                    <!--end::Increase control-->
                                                </div>
                                                <!--end::Dialer-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Label-->
                                                <label class="fs-6 fw-semibold mb-2">Budget Usage</label>
                                                <!--end::Label-->

                                                <!--begin::Row-->
                                                <div class="row g-9" data-kt-buttons="true"
                                                    data-kt-buttons-target="[data-kt-button='true']">
                                                    <!--begin::Col-->
                                                    <div class="col-md-6 col-lg-12 col-xxl-6">
                                                        <!--begin::Option-->
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                                            data-kt-button="true">
                                                            <!--begin::Radio-->
                                                            <span
                                                                class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                <input class="form-check-input" type="radio"
                                                                    name="budget_usage" value="1"
                                                                    checked="checked" />
                                                            </span>
                                                            <!--end::Radio-->

                                                            <!--begin::Info-->
                                                            <span class="ms-5">
                                                                <span
                                                                    class="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise
                                                                    Usage</span>

                                                                <span class="fw-semibold fs-7 text-gray-600">
                                                                    Withdraw money to your bank account per
                                                                    transaction under $50,000 budget
                                                                </span>
                                                            </span>
                                                            <!--end::Info-->
                                                        </label>
                                                        <!--end::Option-->
                                                    </div>
                                                    <!--end::Col-->

                                                    <!--begin::Col-->
                                                    <div class="col-md-6 col-lg-12 col-xxl-6">
                                                        <!--begin::Option-->
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                                            data-kt-button="true">
                                                            <!--begin::Radio-->
                                                            <span
                                                                class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                <input class="form-check-input" type="radio"
                                                                    name="budget_usage" value="2" />
                                                            </span>
                                                            <!--end::Radio-->

                                                            <!--begin::Info-->
                                                            <span class="ms-5">
                                                                <span
                                                                    class="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme
                                                                    Usage</span>
                                                                <span class="fw-semibold fs-7 text-gray-600">
                                                                    Withdraw money to your bank account per
                                                                    transaction under $50,000 budget
                                                                </span>
                                                            </span>
                                                            <!--end::Info-->
                                                        </label>
                                                        <!--end::Option-->
                                                    </div>
                                                    <!--end::Col-->
                                                </div>
                                                <!--end::Row-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-15">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack">
                                                    <!--begin::Label-->
                                                    <div class="me-5">
                                                        <label class="fs-6 fw-semibold">Allow Changes in
                                                            Budget</label>
                                                        <div class="fs-7 fw-semibold text-muted">If you need more
                                                            info, please check budget planning</div>
                                                    </div>
                                                    <!--end::Label-->

                                                    <!--begin::Switch-->
                                                    <label
                                                        class="form-check form-switch form-check-custom form-check-solid">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="budget_allow" checked="checked" />
                                                        <span class="form-check-label fw-semibold text-muted">
                                                            Allowed
                                                        </span>
                                                    </label>
                                                    <!--end::Switch-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-stack">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="budget-previous">
                                                    Project Settings
                                                </button>

                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="budget-next">
                                                    <span class="indicator-label">
                                                        Build Team
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Budget-->

                                    <!--begin::Team-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Build a Team</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check
                                                    <a href="#" class="link-primary">Project Guidelines</a>
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="mb-8">
                                                <!--begin::Label-->
                                                <label class="fs-6 fw-semibold mb-2">Invite Teammates</label>
                                                <!--end::Label-->

                                                <!--begin::Input-->
                                                <input type="text" class="form-control form-control-solid"
                                                    placeholder="Add project memnbers by name or email.."
                                                    name="invite_teammates" />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="mb-8">
                                                <!--begin::Label-->
                                                <div class="fs-6 fw-semibold mb-2">Team Members</div>
                                                <!--end::Label-->

                                                <!--begin::Users-->
                                                <div class="mh-300px scroll-y me-n7 pe-7">
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-6.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma
                                                                    Smith</a>

                                                                <div class="fw-semibold text-muted">smith@kpmg.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-danger text-danger fw-semibold">
                                                                    M </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody
                                                                    Macy</a>

                                                                <div class="fw-semibold text-muted">
                                                                    melody@altbox.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1" selected>Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-1.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max
                                                                    Smith</a>

                                                                <div class="fw-semibold text-muted">max@kt.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-5.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean
                                                                    Bean</a>

                                                                <div class="fw-semibold text-muted">sean@dellito.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-25.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian
                                                                    Cox</a>

                                                                <div class="fw-semibold text-muted">
                                                                    brian@exchange.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-warning text-warning fw-semibold">
                                                                    C </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela
                                                                    Collins</a>

                                                                <div class="fw-semibold text-muted">mik@pex.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-9.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis
                                                                    Mitcham</a>

                                                                <div class="fw-semibold text-muted">f.mit@kpmg.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-danger text-danger fw-semibold">
                                                                    O </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia
                                                                    Wild</a>

                                                                <div class="fw-semibold text-muted">
                                                                    olivia@corpmail.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-primary text-primary fw-semibold">
                                                                    N </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil
                                                                    Owen</a>

                                                                <div class="fw-semibold text-muted">
                                                                    owen.neil@gmail.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1" selected>Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-23.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan
                                                                    Wilson</a>

                                                                <div class="fw-semibold text-muted">
                                                                    dam@consilting.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-danger text-danger fw-semibold">
                                                                    E </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma
                                                                    Bold</a>

                                                                <div class="fw-semibold text-muted">emma@intenso.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-12.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana
                                                                    Crown</a>

                                                                <div class="fw-semibold text-muted">
                                                                    ana.cf@limtel.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1" selected>Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-info text-info fw-semibold">
                                                                    A </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert
                                                                    Doe</a>

                                                                <div class="fw-semibold text-muted">robert@benko.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-13.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John
                                                                    Miller</a>

                                                                <div class="fw-semibold text-muted">
                                                                    miller@mapple.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <span
                                                                    class="symbol-label bg-light-success text-success fw-semibold">
                                                                    L </span>
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy
                                                                    Kunic</a>

                                                                <div class="fw-semibold text-muted">
                                                                    lucy.m@fentech.com</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2" selected>Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-21.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan
                                                                    Wilder</a>

                                                                <div class="fw-semibold text-muted">
                                                                    ethan@loop.com.au</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1" selected>Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3">Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                    <!--begin::User-->
                                                    <div class="d-flex flex-stack py-4 ">
                                                        <!--begin::Details-->
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px symbol-circle">
                                                                <img alt="Pic"
                                                                    src="/good/assets/media/avatars/300-5.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-5">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean
                                                                    Bean</a>

                                                                <div class="fw-semibold text-muted">sean@dellito.com
                                                                </div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>
                                                        <!--end::Details-->

                                                        <!--begin::Access menu-->
                                                        <div class="ms-2 w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true">
                                                                <option value="1">Guest</option>
                                                                <option value="2">Owner</option>
                                                                <option value="3" selected>Can Edit</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Access menu-->
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Users-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Notice-->
                                            <div class="d-flex flex-stack mb-15">
                                                <!--begin::Label-->
                                                <div class="me-5 fw-semibold">
                                                    <label class="fs-6">Adding Users by Team Members</label>
                                                    <div class="fs-7 text-muted">If you need more info, please check
                                                        budget planning</div>
                                                </div>
                                                <!--end::Label-->

                                                <!--begin::Switch-->
                                                <label
                                                    class="form-check form-switch form-check-custom form-check-solid">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        checked="checked" />
                                                </label>
                                                <!--end::Switch-->
                                            </div>
                                            <!--end::Notice-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-stack">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="team-previous">
                                                    Budget
                                                </button>

                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="team-next">
                                                    <span class="indicator-label">
                                                        Set Target
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Team-->

                                    <!--begin::Targets-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Set First Target</h1>
                                                <!--end::Title-->

                                                <!--begin::Title-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check
                                                    <a href="#" class="link-primary">Project Guidelines</a>
                                                </div>
                                                <!--end::Title-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <label class="fs-6 fw-semibold mb-2">Target Title</label>
                                                <input type="text" class="form-control form-control-solid"
                                                    placeholder="Enter Target Title" name="target_title"
                                                    name="Project Launch" />
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="row g-9 mb-8">
                                                <!--begin::Col-->
                                                <div class="col-md-6 fv-row">
                                                    <label class="required fs-6 fw-semibold mb-2">Assign</label>
                                                    <select class="form-select form-select-solid"
                                                        data-control="select2" data-hide-search="true"
                                                        data-placeholder="Select a Team Member"
                                                        name="target_assign">
                                                        <option></option>
                                                        <option value="1">Karina Clark</option>
                                                        <option value="2" selected>Robert Doe</option>
                                                        <option value="3">Niel Owen</option>
                                                        <option value="4">Olivia Wild</option>
                                                        <option value="5">Sean Bean</option>
                                                    </select>
                                                </div>
                                                <!--end::Col-->

                                                <!--begin::Col-->
                                                <div class="col-md-6 fv-row">
                                                    <label class="required fs-6 fw-semibold mb-2">Due Date</label>
                                                    <div class="position-relative d-flex align-items-center">
                                                        <!--begin::Icon-->
                                                        <i
                                                            class="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4"><span
                                                                class="path1"></span><span
                                                                class="path2"></span><span
                                                                class="path3"></span><span
                                                                class="path4"></span><span
                                                                class="path5"></span><span class="path6"></span></i>
                                                        <!--end::Icon-->

                                                        <!--begin::Datepicker-->
                                                        <input class="form-control form-control-solid ps-12"
                                                            placeholder="Pick date range" name="target_due_date" />
                                                        <!--end::Datepicker-->
                                                    </div>
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <label class="fs-6 fw-semibold mb-2">Target Details</label>
                                                <textarea class="form-control form-control-solid" rows="2"
                                                    name="target_details" placeholder="Type Target Details">
            Experience share market at your fingertips with TICK PRO stock investment mobile trading app
            </textarea>
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <label class="required fs-6 fw-semibold mb-2">Tags</label>
                                                <input class="form-control form-control-solid"
                                                    value="Important, Urgent" name="target_tags" />
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack">
                                                    <!--begin::Label-->
                                                    <div class="me-5">
                                                        <label class="fs-6 fw-semibold">Allow Changes in
                                                            Budget</label>
                                                        <div class="fs-7 fw-semibold text-muted">If you need more
                                                            info, please check budget planning</div>
                                                    </div>
                                                    <!--end::Label-->

                                                    <!--begin::Switch-->
                                                    <label
                                                        class="form-check form-switch form-check-custom form-check-solid">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="target_allow" checked="checked" />
                                                        <span class="form-check-label fw-semibold text-muted">
                                                            Allowed
                                                        </span>
                                                    </label>
                                                    <!--end::Switch-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-15">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack">
                                                    <!--begin::Label-->
                                                    <div class="me-5">
                                                        <label class="fs-6 fw-semibold">Notifications</label>
                                                        <div class="fs-7 fw-semibold text-muted">Allow Notifications
                                                            by Phone or Email</div>
                                                    </div>
                                                    <!--end::Label-->

                                                    <!--begin::Checkboxes-->
                                                    <div class="d-flex">
                                                        <!--begin::Checkbox-->
                                                        <label
                                                            class="form-check form-check-custom form-check-solid me-10">
                                                            <!--begin::Input-->
                                                            <input class="form-check-input h-20px w-20px"
                                                                type="checkbox" value="email"
                                                                name="target_notifications[]" />
                                                            <!--end::Input-->

                                                            <!--begin::Label-->
                                                            <span class="form-check-label fw-semibold">
                                                                Email
                                                            </span>
                                                            <!--end::Label-->
                                                        </label>
                                                        <!--end::Checkbox-->

                                                        <!--begin::Checkbox-->
                                                        <label
                                                            class="form-check form-check-custom form-check-solid">
                                                            <!--begin::Input-->
                                                            <input class="form-check-input h-20px w-20px"
                                                                type="checkbox" value="phone" checked
                                                                name="target_notifications[]" />
                                                            <!--end::Input-->

                                                            <!--begin::Label-->
                                                            <span class="form-check-label fw-semibold">
                                                                Phone
                                                            </span>
                                                            <!--end::Label-->
                                                        </label>
                                                        <!--end::Checkbox-->
                                                    </div>
                                                    <!--end::Checkboxes-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-stack">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="targets-previous">
                                                    Build a Team
                                                </button>

                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="targets-next">
                                                    <span class="indicator-label">
                                                        Upload Files
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Targets-->

                                    <!--begin::Files-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-10 pb-lg-12">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Upload Files</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check
                                                    <a href="#" class="link-primary">Project Guidelines</a>
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Dropzone-->
                                                <div class="dropzone" id="kt_modal_create_project_files_upload">
                                                    <!--begin::Message-->
                                                    <div class="dz-message needsclick">
                                                        <!--begin::Icon-->
                                                        <i class="ki-duotone ki-file-up fs-3hx text-primary"><span
                                                                class="path1"></span><span class="path2"></span></i>
                                                        <!--end::Icon-->

                                                        <!--begin::Info-->
                                                        <div class="ms-4">
                                                            <h3 class="dfs-3 fw-bold text-gray-900 mb-1">Drop files
                                                                here or click to upload.</h3>
                                                            <span class="fw-semibold fs-4 text-muted">Upload up to
                                                                10 files</span>
                                                        </div>
                                                        <!--end::Info-->
                                                    </div>
                                                </div>
                                                <!--end::Dropzone-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="mb-8">
                                                <!--begin::Label-->
                                                <label class="fs-6 fw-semibold mb-2">Uploaded File</label>
                                                <!--End::Label-->

                                                <!--begin::Files-->
                                                <div class="mh-300px scroll-y me-n7 pe-7">
                                                    <!--begin::File-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px">
                                                                <img src="/good/assets/media/svg/files/pdf.svg"
                                                                    alt="icon" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-6">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Avionica
                                                                    Technical Requirements</a>
                                                                <div class="fw-semibold text-muted">230kb</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>

                                                        <!--begin::Menu-->
                                                        <div class="min-w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true"
                                                                data-placeholder="Edit">
                                                                <option></option>
                                                                <option value="1">Remove</option>
                                                                <option value="2">Modify</option>
                                                                <option value="3">Select</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Menu-->
                                                    </div>
                                                    <!--end::File-->
                                                    <!--begin::File-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px">
                                                                <img src="/good/assets/media/svg/files/doc.svg"
                                                                    alt="icon" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-6">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">9
                                                                    Degree CURD draftplan</a>
                                                                <div class="fw-semibold text-muted">3.6mb</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>

                                                        <!--begin::Menu-->
                                                        <div class="min-w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true"
                                                                data-placeholder="Edit">
                                                                <option></option>
                                                                <option value="1">Remove</option>
                                                                <option value="2">Modify</option>
                                                                <option value="3">Select</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Menu-->
                                                    </div>
                                                    <!--end::File-->
                                                    <!--begin::File-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px">
                                                                <img src="/good/assets/media/svg/files/css.svg"
                                                                    alt="icon" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-6">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">User
                                                                    CRUD Styles</a>
                                                                <div class="fw-semibold text-muted">85kb</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>

                                                        <!--begin::Menu-->
                                                        <div class="min-w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true"
                                                                data-placeholder="Edit">
                                                                <option></option>
                                                                <option value="1">Remove</option>
                                                                <option value="2">Modify</option>
                                                                <option value="3">Select</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Menu-->
                                                    </div>
                                                    <!--end::File-->
                                                    <!--begin::File-->
                                                    <div
                                                        class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px">
                                                                <img src="/good/assets/media/svg/files/ai.svg"
                                                                    alt="icon" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-6">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design
                                                                    Initial Logo</a>
                                                                <div class="fw-semibold text-muted">40kb</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>

                                                        <!--begin::Menu-->
                                                        <div class="min-w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true"
                                                                data-placeholder="Edit">
                                                                <option></option>
                                                                <option value="1">Remove</option>
                                                                <option value="2">Modify</option>
                                                                <option value="3">Select</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Menu-->
                                                    </div>
                                                    <!--end::File-->
                                                    <!--begin::File-->
                                                    <div class="d-flex flex-stack py-4 ">
                                                        <div class="d-flex align-items-center">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-35px">
                                                                <img src="/good/assets/media/svg/files/tif.svg"
                                                                    alt="icon" />
                                                            </div>
                                                            <!--end::Avatar-->

                                                            <!--begin::Details-->
                                                            <div class="ms-6">
                                                                <a href="#"
                                                                    class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Tower
                                                                    Hill Bilboard</a>
                                                                <div class="fw-semibold text-muted">27mb</div>
                                                            </div>
                                                            <!--end::Details-->
                                                        </div>

                                                        <!--begin::Menu-->
                                                        <div class="min-w-100px">
                                                            <select
                                                                class="form-select form-select-solid form-select-sm"
                                                                data-control="select2" data-hide-search="true"
                                                                data-placeholder="Edit">
                                                                <option></option>
                                                                <option value="1">Remove</option>
                                                                <option value="2">Modify</option>
                                                                <option value="3">Select</option>
                                                            </select>
                                                        </div>
                                                        <!--end::Menu-->
                                                    </div>
                                                    <!--end::File-->
                                                </div>
                                                <!--end::Files-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-8">
                                                <!--begin::Wrapper-->
                                                <div class="d-flex flex-stack">
                                                    <!--begin::Label-->
                                                    <div class="me-5">
                                                        <label class="fs-6 fw-semibold">Allow Changes in
                                                            Budget</label>
                                                        <div class="fs-7 fw-semibold text-muted">If you need more
                                                            info, please check budget planning</div>
                                                    </div>
                                                    <!--end::Label-->

                                                    <!--begin::Switch-->
                                                    <label
                                                        class="form-check form-switch form-check-custom form-check-solid">
                                                        <input class="form-check-input" type="checkbox" value="1"
                                                            name="target_allow" checked="checked" />
                                                        <span class="form-check-label fw-semibold text-muted">
                                                            Allowed
                                                        </span>
                                                    </label>
                                                    <!--end::Switch-->
                                                </div>
                                                <!--end::Wrapper-->
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-stack">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="files-previous">
                                                    Set First Target
                                                </button>

                                                <button type="button" class="btn btn-lg btn-primary"
                                                    data-kt-element="files-next">
                                                    <span class="indicator-label">
                                                        Complete
                                                    </span>
                                                    <span class="indicator-progress">
                                                        Please wait... <span
                                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                    </span>
                                                </button>
                                            </div>
                                            <!--end::Actions-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Files-->
                                    <!--begin::Complete-->
                                    <div data-kt-stepper-element="content">
                                        <!--begin::Wrapper-->
                                        <div class="w-100">
                                            <!--begin::Heading-->
                                            <div class="pb-12 text-center">
                                                <!--begin::Title-->
                                                <h1 class="fw-bold text-dark">Project Created!</h1>
                                                <!--end::Title-->

                                                <!--begin::Description-->
                                                <div class="text-muted fw-semibold fs-4">
                                                    If you need more info, please check how to create project
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Heading-->

                                            <!--begin::Actions-->
                                            <div class="d-flex flex-center pb-20">
                                                <button type="button" class="btn btn-lg btn-light me-3"
                                                    data-kt-element="complete-start">
                                                    Create New Project
                                                </button>

                                                <a href="" class="btn btn-lg btn-primary" data-bs-toggle="tooltip"
                                                    title="Coming Soon">
                                                    View Project
                                                </a>
                                            </div>
                                            <!--end::Actions-->

                                            <!--begin::Illustration-->
                                            <div class="text-center px-4">
                                                <img src="/good/assets/media/illustrations/sketchy-1/9.png" alt=""
                                                    class="mww-100 mh-350px" />
                                            </div>
                                            <!--end::Illustration-->
                                        </div>
                                    </div>
                                    <!--end::Complete-->
                                </form>
                                <!--end::Form-->
                            </div>
                            <!--begin::Container-->
                        </div>
                        <!--end::Stepper-->
                    </div>
                    <!--end::Modal body-->
                </div>
                <!--end::Modal content-->
            </div>
            <!--end::Modal dialog-->
        </div>
        <!--end::Modal - Create Project-->
        <!--begin::Modal - Offer A Deal-->
        <div class="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
            <!--begin::Modal dialog-->
            <div class="modal-dialog modal-dialog-centered mw-1000px">
                <!--begin::Modal content-->
                <div class="modal-content">
                    <!--begin::Modal header-->
                    <div class="modal-header py-7 d-flex justify-content-between">
                        <!--begin::Modal title-->
                        <h2>Offer a Deal</h2>
                        <!--end::Modal title-->

                        <!--begin::Close-->
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <!--begin::Modal header-->

                    <!--begin::Modal body-->
                    <div class="modal-body scroll-y m-5">
                        <!--begin::Stepper-->
                        <div class="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                            <!--begin::Nav-->
                            <div class="stepper-nav justify-content-center py-2">
                                <!--begin::Step 1-->
                                <div class="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                    <h3 class="stepper-title">
                                        Deal Type
                                    </h3>
                                </div>
                                <!--end::Step 1-->

                                <!--begin::Step 2-->
                                <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                    <h3 class="stepper-title">
                                        Deal Details
                                    </h3>
                                </div>
                                <!--end::Step 2-->

                                <!--begin::Step 3-->
                                <div class="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                    <h3 class="stepper-title">
                                        Finance Settings
                                    </h3>
                                </div>
                                <!--end::Step 3-->

                                <!--begin::Step 4-->
                                <div class="stepper-item" data-kt-stepper-element="nav">
                                    <h3 class="stepper-title">
                                        Completed
                                    </h3>
                                </div>
                                <!--end::Step 4-->
                            </div>
                            <!--end::Nav-->

                            <!--begin::Form-->
                            <form class="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate"
                                id="kt_modal_offer_a_deal_form">
                                <!--begin::Type-->
                                <div class="current" data-kt-stepper-element="content">
                                    <!--begin::Wrapper-->
                                    <div class="w-100">
                                        <!--begin::Heading-->
                                        <div class="mb-13">
                                            <!--begin::Title-->
                                            <h2 class="mb-3">Deal Type</h2>
                                            <!--end::Title-->

                                            <!--begin::Description-->
                                            <div class="text-muted fw-semibold fs-5">
                                                If you need more info, please check out
                                                <a href="#" class="link-primary fw-bold">FAQ Page</a>.
                                            </div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Heading-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-15" data-kt-buttons="true">
                                            <!--begin::Option-->
                                            <label
                                                class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                                <!--begin::Input-->
                                                <input class="btn-check" type="radio" checked="checked"
                                                    name="offer_type" value="1" />
                                                <!--end::Input-->

                                                <!--begin::Label-->
                                                <span class="d-flex">
                                                    <!--begin::Icon-->
                                                    <i class="ki-duotone ki-profile-circle fs-3hx"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span></i>
                                                    <!--end::Icon-->

                                                    <!--begin::Info-->
                                                    <span class="ms-4">
                                                        <span
                                                            class="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal
                                                            Deal</span>

                                                        <span class="fw-semibold fs-4 text-muted">
                                                            If you need more info, please check it out
                                                        </span>
                                                    </span>
                                                    <!--end::Info-->
                                                </span>
                                                <!--end::Label-->
                                            </label>
                                            <!--end::Option-->

                                            <!--begin::Option-->
                                            <label
                                                class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                                <!--begin::Input-->
                                                <input class="btn-check" type="radio" name="offer_type" value="2" />
                                                <!--end::Input-->

                                                <!--begin::Label-->
                                                <span class="d-flex">
                                                    <!--begin::Icon-->
                                                    <i class="ki-duotone ki-element-11 fs-3hx"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span><span class="path4"></span></i>
                                                    <!--end::Icon-->

                                                    <!--begin::Info-->
                                                    <span class="ms-4">
                                                        <span
                                                            class="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate
                                                            Deal</span>

                                                        <span class="fw-semibold fs-4 text-muted">
                                                            Create corporate account to manage users
                                                        </span>
                                                    </span>
                                                    <!--end::Info-->
                                                </span>
                                                <!--end::Label-->
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Actions-->
                                        <div class="d-flex justify-content-end">
                                            <button type="button" class="btn btn-lg btn-primary"
                                                data-kt-element="type-next">
                                                <span class="indicator-label">
                                                    Offer Details
                                                </span>
                                                <span class="indicator-progress">
                                                    Please wait... <span
                                                        class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                            </button>
                                        </div>
                                        <!--end::Actions-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Type-->
                                <!--begin::Details-->
                                <div data-kt-stepper-element="content">
                                    <!--begin::Wrapper-->
                                    <div class="w-100">
                                        <!--begin::Heading-->
                                        <div class="mb-13">
                                            <!--begin::Title-->
                                            <h2 class="mb-3">Deal Details</h2>
                                            <!--end::Title-->

                                            <!--begin::Description-->
                                            <div class="text-muted fw-semibold fs-5">
                                                If you need more info, please check out
                                                <a href="#" class="link-primary fw-bold">FAQ Page</a>.
                                            </div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Heading-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Customer</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <select class="form-select form-select-solid" data-control="select2"
                                                data-placeholder="Select an option" name="details_customer">
                                                <option></option>
                                                <option value="1" selected>Keenthemes</option>
                                                <option value="2">CRM App</option>
                                            </select>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <!--begin::Label-->
                                            <label class="required fs-6 fw-semibold mb-2">Deal Title</label>
                                            <!--end::Label-->

                                            <!--begin::Input-->
                                            <input type="text" class="form-control form-control-solid"
                                                placeholder="Enter Deal Title" name="details_title"
                                                value="Marketing Campaign" />
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <!--begin::Label-->
                                            <label class="fs-6 fw-semibold mb-2">Deal Description</label>
                                            <!--end::Label-->

                                            <!--begin::Label-->
                                            <textarea class="form-control form-control-solid" rows="3"
                                                placeholder="Enter Deal Description" name="details_description">
                Experience share market at your fingertips with TICK PRO stock investment mobile trading app
            </textarea>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <label class="required fs-6 fw-semibold mb-2">Activation Date</label>
                                            <div class="position-relative d-flex align-items-center">
                                                <!--begin::Icon-->
                                                <i class="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4"><span
                                                        class="path1"></span><span class="path2"></span><span
                                                        class="path3"></span><span class="path4"></span><span
                                                        class="path5"></span><span class="path6"></span></i>
                                                <!--end::Icon-->

                                                <!--begin::Datepicker-->
                                                <input class="form-control form-control-solid ps-12"
                                                    placeholder="Pick date range" name="details_activation_date" />
                                                <!--end::Datepicker-->
                                            </div>
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-15">
                                            <!--begin::Wrapper-->
                                            <div class="d-flex flex-stack">
                                                <!--begin::Label-->
                                                <div class="me-5">
                                                    <label class="required fs-6 fw-semibold">Notifications</label>
                                                    <div class="fs-7 fw-semibold text-muted">Allow Notifications by
                                                        Phone or Email</div>
                                                </div>
                                                <!--end::Label-->

                                                <!--begin::Checkboxes-->
                                                <div class="d-flex">
                                                    <!--begin::Checkbox-->
                                                    <label
                                                        class="form-check form-check-custom form-check-solid me-10">
                                                        <!--begin::Input-->
                                                        <input class="form-check-input h-20px w-20px"
                                                            type="checkbox" value="email"
                                                            name="details_notifications[]" />
                                                        <!--end::Input-->

                                                        <!--begin::Label-->
                                                        <span class="form-check-label fw-semibold">
                                                            Email
                                                        </span>
                                                        <!--end::Label-->
                                                    </label>
                                                    <!--end::Checkbox-->

                                                    <!--begin::Checkbox-->
                                                    <label class="form-check form-check-custom form-check-solid">
                                                        <!--begin::Input-->
                                                        <input class="form-check-input h-20px w-20px"
                                                            type="checkbox" value="phone" checked
                                                            name="details_notifications[]" />
                                                        <!--end::Input-->

                                                        <!--begin::Label-->
                                                        <span class="form-check-label fw-semibold">
                                                            Phone
                                                        </span>
                                                        <!--end::Label-->
                                                    </label>
                                                    <!--end::Checkbox-->
                                                </div>
                                                <!--end::Checkboxes-->
                                            </div>
                                            <!--begin::Wrapper-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Actions-->
                                        <div class="d-flex flex-stack">
                                            <button type="button" class="btn btn-lg btn-light me-3"
                                                data-kt-element="details-previous">
                                                Deal Type
                                            </button>

                                            <button type="button" class="btn btn-lg btn-primary"
                                                data-kt-element="details-next">
                                                <span class="indicator-label">
                                                    Financing
                                                </span>
                                                <span class="indicator-progress">
                                                    Please wait... <span
                                                        class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                            </button>
                                        </div>
                                        <!--end::Actions-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Details-->
                                <!--begin::Budget-->
                                <div data-kt-stepper-element="content">
                                    <!--begin::Wrapper-->
                                    <div class="w-100">
                                        <!--begin::Heading-->
                                        <div class="mb-13">
                                            <!--begin::Title-->
                                            <h2 class="mb-3">Finance</h2>
                                            <!--end::Title-->

                                            <!--begin::Description-->
                                            <div class="text-muted fw-semibold fs-5">
                                                If you need more info, please check out
                                                <a href="#" class="link-primary fw-bold">FAQ Page</a>.
                                            </div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Heading-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <!--begin::Label-->
                                            <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span class="required">Setup Budget</span>

                                                <span class="lh-1 ms-1" data-bs-toggle="popover"
                                                    data-bs-trigger="hover" data-bs-html="true" data-bs-content="
        &lt;div class=&#039;p-4 rounded bg-light&#039;&gt;
            &lt;div class=&#039;d-flex flex-stack text-muted mb-4&#039;&gt;
                &lt;i class=&quot;ki-duotone ki-bank fs-3 me-3&quot;&gt;&lt;span class=&quot;path1&quot;&gt;&lt;/span&gt;&lt;span class=&quot;path2&quot;&gt;&lt;/span&gt;&lt;/i&gt;
                &lt;div class=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt;
                &lt;div&gt;Amount&lt;/div&gt;
                &lt;div&gt;Transaction&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt;
                &lt;div&gt;USD345.00&lt;/div&gt;
                &lt;div&gt;KEENTHEMES*&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-muted mb-2&#039;&gt;
                &lt;div&gt;USD75.00&lt;/div&gt;
                &lt;div&gt;Hosting fee&lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&#039;d-flex flex-stack text-muted&#039;&gt;
                &lt;div&gt;USD3,950.00&lt;/div&gt;
                &lt;div&gt;Payrol&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    ">
                                                    <i class="ki-duotone ki-information-5 text-gray-500 fs-6"><span
                                                            class="path1"></span><span class="path2"></span><span
                                                            class="path3"></span></i></span> </label>
                                            <!--end::Label-->

                                            <!--begin::Dialer-->
                                            <div class="position-relative w-lg-250px" id="kt_modal_finance_setup"
                                                data-kt-dialer="true" data-kt-dialer-min="50"
                                                data-kt-dialer-max="50000" data-kt-dialer-step="100"
                                                data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">

                                                <!--begin::Decrease control-->
                                                <button type="button"
                                                    class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                                    data-kt-dialer-control="decrease">
                                                    <i class="ki-duotone ki-minus-circle fs-1"><span
                                                            class="path1"></span><span class="path2"></span></i>
                                                </button>
                                                <!--end::Decrease control-->

                                                <!--begin::Input control-->
                                                <input type="text"
                                                    class="form-control form-control-solid border-0 ps-12"
                                                    data-kt-dialer-control="input" placeholder="Amount"
                                                    name="finance_setup" readonly value="$50" />
                                                <!--end::Input control-->

                                                <!--begin::Increase control-->
                                                <button type="button"
                                                    class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                                    data-kt-dialer-control="increase">
                                                    <i class="ki-duotone ki-plus-circle fs-1"><span
                                                            class="path1"></span><span class="path2"></span></i>
                                                </button>
                                                <!--end::Increase control-->
                                            </div>
                                            <!--end::Dialer-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-8">
                                            <!--begin::Label-->
                                            <label class="fs-6 fw-semibold mb-2">Budget Usage</label>
                                            <!--end::Label-->

                                            <!--begin::Row-->
                                            <div class="row g-9" data-kt-buttons="true"
                                                data-kt-buttons-target="[data-kt-button='true']">
                                                <!--begin::Col-->
                                                <div class="col-md-6 col-lg-12 col-xxl-6">
                                                    <!--begin::Option-->
                                                    <label
                                                        class="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                                        data-kt-button="true">
                                                        <!--begin::Radio-->
                                                        <span
                                                            class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                            <input class="form-check-input" type="radio"
                                                                name="finance_usage" value="1" checked="checked" />
                                                        </span>
                                                        <!--end::Radio-->

                                                        <!--begin::Info-->
                                                        <span class="ms-5">
                                                            <span
                                                                class="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise
                                                                Usage</span>

                                                            <span class="fw-semibold fs-7 text-gray-600">
                                                                Withdraw money to your bank account per transaction
                                                                under $50,000 budget
                                                            </span>
                                                        </span>
                                                        <!--end::Info-->
                                                    </label>
                                                    <!--end::Option-->
                                                </div>
                                                <!--end::Col-->

                                                <!--begin::Col-->
                                                <div class="col-md-6 col-lg-12 col-xxl-6">
                                                    <!--begin::Option-->
                                                    <label
                                                        class="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                                        data-kt-button="true">
                                                        <!--begin::Radio-->
                                                        <span
                                                            class="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                            <input class="form-check-input" type="radio"
                                                                name="finance_usage" value="2" />
                                                        </span>
                                                        <!--end::Radio-->

                                                        <!--begin::Info-->
                                                        <span class="ms-5">
                                                            <span
                                                                class="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme
                                                                Usage</span>
                                                            <span class="fw-semibold fs-7 text-gray-600">
                                                                Withdraw money to your bank account per transaction
                                                                under $50,000 budget
                                                            </span>
                                                        </span>
                                                        <!--end::Info-->
                                                    </label>
                                                    <!--end::Option-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <!--end::Row-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Input group-->
                                        <div class="fv-row mb-15">
                                            <!--begin::Wrapper-->
                                            <div class="d-flex flex-stack">
                                                <!--begin::Label-->
                                                <div class="me-5">
                                                    <label class="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                    <div class="fs-7 fw-semibold text-muted">If you need more info,
                                                        please check budget planning</div>
                                                </div>
                                                <!--end::Label-->

                                                <!--begin::Switch-->
                                                <label
                                                    class="form-check form-switch form-check-custom form-check-solid">
                                                    <input class="form-check-input" type="checkbox" value="1"
                                                        name="finance_allow" checked="checked" />
                                                    <span class="form-check-label fw-semibold text-muted">
                                                        Allowed
                                                    </span>
                                                </label>
                                                <!--end::Switch-->
                                            </div>
                                            <!--end::Wrapper-->
                                        </div>
                                        <!--end::Input group-->

                                        <!--begin::Actions-->
                                        <div class="d-flex flex-stack">
                                            <button type="button" class="btn btn-lg btn-light me-3"
                                                data-kt-element="finance-previous">
                                                Project Settings
                                            </button>

                                            <button type="button" class="btn btn-lg btn-primary"
                                                data-kt-element="finance-next">
                                                <span class="indicator-label">
                                                    Build Team
                                                </span>
                                                <span class="indicator-progress">
                                                    Please wait... <span
                                                        class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                            </button>
                                        </div>
                                        <!--end::Actions-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Budget-->
                                <!--begin::Complete-->
                                <div data-kt-stepper-element="content">
                                    <!--begin::Wrapper-->
                                    <div class="w-100">
                                        <!--begin::Heading-->
                                        <div class="mb-13">
                                            <!--begin::Title-->
                                            <h2 class="mb-3">Deal Created!</h2>
                                            <!--end::Title-->

                                            <!--begin::Description-->
                                            <div class="text-muted fw-semibold fs-5">
                                                If you need more info, please check out
                                                <a href="#" class="link-primary fw-bold">FAQ Page</a>.
                                            </div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Heading-->

                                        <!--begin::Actions-->
                                        <div class="d-flex flex-center pb-20">
                                            <button type="button" class="btn btn-lg btn-light me-3"
                                                data-kt-element="complete-start">
                                                Create New Deal
                                            </button>

                                            <a href="#" class="btn btn-lg btn-primary" data-bs-toggle="tooltip"
                                                title="Coming Soon">
                                                View Deal
                                            </a>
                                        </div>
                                        <!--end::Actions-->

                                        <!--begin::Illustration-->
                                        <div class="text-center px-4">
                                            <img src="/good/assets/media/illustrations/sketchy-1/20.png" alt=""
                                                class="mw-100 mh-300px" />
                                        </div>
                                        <!--end::Illustration-->
                                    </div>
                                </div>
                                <!--end::Complete-->
                            </form>
                            <!--end::Form-->
                        </div>
                        <!--end::Stepper-->
                    </div>
                    <!--begin::Modal body-->
                </div>
            </div>
        </div>
        <!--end::Modal - Offer A Deal-->
        <!--end::Modals-->
    </div>
    <!--end::Content container-->
</div>
<!--begin::Content-->