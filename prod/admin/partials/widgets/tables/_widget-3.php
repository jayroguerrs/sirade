<!--begin::Table Widget 3-->
<div class="card card-flush h-xl-100">
    <!--begin::Card header-->
    <div class="card-header py-7">
        <!--begin::Tabs-->
        <div class="card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0" data-kt-table-widget-3="tabs_nav">
            <!--begin::Tab item-->
            <div class="fs-4 fw-bold pb-3 border-bottom border-3 border-primary cursor-pointer" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Show All">
                All Campaigns (47)
            </div>
            <!--end::Tab item-->
            <!--begin::Tab item-->
            <div class="fs-4 fw-bold text-muted pb-3 cursor-pointer" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Pending">
                Pending (8)
            </div>
            <!--end::Tab item-->
            <!--begin::Tab item-->
            <div class="fs-4 fw-bold text-muted pb-3 cursor-pointer" data-kt-table-widget-3="tab" data-kt-table-widget-3-value="Completed">
                Completed (39)
            </div>
            <!--end::Tab item-->
        </div>
        <!--end::Tabs-->
        <!--begin::Create campaign button-->
        <div class="card-toolbar">
            <a href="#"  type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign" >Create Campaign</a>
        </div>
        <!--end::Create campaign button-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-1">
        <!--begin::Sort & Filter-->
        <div class="d-flex flex-stack flex-wrap gap-4">
            <!--begin::Sort-->
            <div class="d-flex align-items-center flex-wrap gap-3 gap-xl-9">
                <!--begin::Type-->
                <div class="d-flex align-items-center fw-bold">
                    <!--begin::Label-->
                    <div class="text-muted fs-7">Type</div>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <select class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-class="w-150px" data-placeholder="Select an option">
                        <option></option>
                        <option value="Show All" selected>Show All</option>
                        <option value="Newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                    <!--end::Select-->
                </div>
                <!--end::Type-->
                <!--begin::Status-->
                <div class="d-flex align-items-center fw-bold">
                    <!--begin::Label-->
                    <div class="text-muted fs-7 me-2">Status</div>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <select class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-control="select2" data-dropdown-css-class="w-150px" data-placeholder="Select an option" data-kt-table-widget-3="filter_status">
                        <option></option>
                        <option value="Show All" selected>Show All</option>
                        <option value="Live Now">Live Now</option>
                        <option value="Reviewing">Reviewing</option>
                        <option value="Paused">Paused</option>
                    </select>
                    <!--end::Select-->
                </div>
                <!--begin::Status-->
                <!--begin::Budget-->
                <div class="d-flex align-items-center fw-bold">
                    <!--begin::Label-->
                    <div class="text-muted me-2">Budget</div>
                    <!--end::Label-->
                    <!--begin::Select-->
                    <select class="form-select form-select-transparent text-dark fs-7 lh-1 fw-bold py-0 ps-3 w-auto" data-hide-search="true" data-dropdown-css-class="w-150px" data-control="select2" data-placeholder="Select an option" data-kt-table-widget-3="filter_status">
                        <option></option>
                        <option value="Show All" selected>Show All</option>
                        <option value="<5000">Less than $5,000</option>
                        <option value="5000-10000">$5,001 - $10,000</option>
                        <option value=">10000">More than $10,001</option>
                    </select>
                    <!--end::Select-->
                </div>
                <!--begin::Budget-->
            </div>
            <!--end::Sort-->
            <!--begin::Filter-->
            <div class="d-flex align-items-center gap-4">
                <!--begin::Filter button-->
                <a href="#" class="text-hover-primary ps-4" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
<span class="svg-icon svg-icon-2 svg-icon-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                </a>
<?php include 'partials/menus/_menu-1.php' ?>
                <!--end::Filter button-->
            </div>
            <!--end::Filter-->
        </div>
        <!--end::Sort & Filter-->
        <!--begin::Seprator-->
        <div class="separator separator-dashed my-5"></div>
        <!--end::Seprator-->
        <!--begin::Table-->
        <table id="kt_widget_table_3" class="table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3" data-kt-table-widget-3="all">
            <thead class="d-none">
                <tr>
                    <th>Campaign</th>
                    <th>Platforms</th>
                    <th>Status</th>
                    <th>Team</th>
                    <th>Date</th>
                    <th>Progress</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                                    <tr>
                        <td class="min-w-175px">
                            <div class="position-relative ps-6 pe-3 py-2">
                                <div class="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info"></div>
                                <a href="#" class="mb-1 text-dark text-hover-primary fw-bold">Happy Christmas</a>
                                <div class="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
                            </div>
                        </td>
                        <td>
                            <!--begin::Icons-->
                            <div class="d-flex gap-2 mb-2">
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/facebook-4.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/twitter-2.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/linkedin-2.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/youtube-3.svg" class="w-20px" alt="" />
                                    </a>
                                                            </div>
                            <!--end::Icons-->
                            <div class="fs-7 text-muted fw-bold">Labor 24 - 35 years</div>
                        </td>
                        <td>
                            <span class="badge badge-light-success">Live Now</span>
                        </td>
                        <td class="min-w-125px">
                                                        <!--begin::Team members-->
                            <div class="symbol-group symbol-hover mb-1">
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-5.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-25.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-9.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <div class="symbol-label bg-danger">
                                                <span class="fs-7 text-inverse-danger">E</span>
                                            </div>
                                        </div>
                                                                        <!--end::Member-->
                                                                    <!--begin::More members-->
                                    <div class="symbol symbol-circle symbol-25px">
                                        <div class="symbol-label bg-dark">
                                            <span class="fs-8 text-inverse-dark">+0</span>
                                        </div>
                                    </div>
                                    <!--end::More members-->
                                                            </div>
                            <!--end::Team members-->
                            <div class="fs-7 fw-bold text-muted">Team Members</div>
                        </td>
                        <td class="min-w-150px">
                            <div class="mb-2 fw-bold">24 Dec 21 - 06 Jan 22</div>
                            <div class="fs-7 fw-bold text-muted">Date range</div>
                        </td>
                        <td class="d-none">Pending</td>
                        <td class="text-end">
                            <button type="button" class="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg-->
<span class="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"/>
<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                            </button>
                        </td>
                    </tr>
                                    <tr>
                        <td class="min-w-175px">
                            <div class="position-relative ps-6 pe-3 py-2">
                                <div class="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning"></div>
                                <a href="#" class="mb-1 text-dark text-hover-primary fw-bold">Halloween</a>
                                <div class="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
                            </div>
                        </td>
                        <td>
                            <!--begin::Icons-->
                            <div class="d-flex gap-2 mb-2">
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/twitter-2.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/instagram-2-1.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/youtube-3.svg" class="w-20px" alt="" />
                                    </a>
                                                            </div>
                            <!--end::Icons-->
                            <div class="fs-7 text-muted fw-bold">Labor 37 - 52 years</div>
                        </td>
                        <td>
                            <span class="badge badge-light-primary">Reviewing</span>
                        </td>
                        <td class="min-w-125px">
                                                        <!--begin::Team members-->
                            <div class="symbol-group symbol-hover mb-1">
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-1.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-25.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                            </div>
                            <!--end::Team members-->
                            <div class="fs-7 fw-bold text-muted">Team Members</div>
                        </td>
                        <td class="min-w-150px">
                            <div class="mb-2 fw-bold">03 Feb 22 - 14 Feb 22</div>
                            <div class="fs-7 fw-bold text-muted">Date range</div>
                        </td>
                        <td class="d-none">Completed</td>
                        <td class="text-end">
                            <button type="button" class="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg-->
<span class="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"/>
<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                            </button>
                        </td>
                    </tr>
                                    <tr>
                        <td class="min-w-175px">
                            <div class="position-relative ps-6 pe-3 py-2">
                                <div class="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success"></div>
                                <a href="#" class="mb-1 text-dark text-hover-primary fw-bold">Cyber Monday</a>
                                <div class="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
                            </div>
                        </td>
                        <td>
                            <!--begin::Icons-->
                            <div class="d-flex gap-2 mb-2">
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/facebook-4.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/instagram-2-1.svg" class="w-20px" alt="" />
                                    </a>
                                                            </div>
                            <!--end::Icons-->
                            <div class="fs-7 text-muted fw-bold">Labor 24 - 38 years</div>
                        </td>
                        <td>
                            <span class="badge badge-light-success">Live Now</span>
                        </td>
                        <td class="min-w-125px">
                                                        <!--begin::Team members-->
                            <div class="symbol-group symbol-hover mb-1">
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <div class="symbol-label bg-danger">
                                                <span class="fs-7 text-inverse-danger">M</span>
                                            </div>
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <div class="symbol-label bg-primary">
                                                <span class="fs-7 text-inverse-primary">N</span>
                                            </div>
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-13.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                            </div>
                            <!--end::Team members-->
                            <div class="fs-7 fw-bold text-muted">Team Members</div>
                        </td>
                        <td class="min-w-150px">
                            <div class="mb-2 fw-bold">19 Mar 22 - 04 Apr 22</div>
                            <div class="fs-7 fw-bold text-muted">Date range</div>
                        </td>
                        <td class="d-none">Pending</td>
                        <td class="text-end">
                            <button type="button" class="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg-->
<span class="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"/>
<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                            </button>
                        </td>
                    </tr>
                                    <tr>
                        <td class="min-w-175px">
                            <div class="position-relative ps-6 pe-3 py-2">
                                <div class="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger"></div>
                                <a href="#" class="mb-1 text-dark text-hover-primary fw-bold">Thanksgiving</a>
                                <div class="fs-7 text-muted fw-bold">Created on 24 Dec 21</div>
                            </div>
                        </td>
                        <td>
                            <!--begin::Icons-->
                            <div class="d-flex gap-2 mb-2">
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/twitter-2.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/instagram-2-1.svg" class="w-20px" alt="" />
                                    </a>
                                                                    <a href="#">
                                        <img src="assets/media/svg/brand-logos/linkedin-2.svg" class="w-20px" alt="" />
                                    </a>
                                                            </div>
                            <!--end::Icons-->
                            <div class="fs-7 text-muted fw-bold">Labor 24 - 38 years</div>
                        </td>
                        <td>
                            <span class="badge badge-light-warning">Paused</span>
                        </td>
                        <td class="min-w-125px">
                                                        <!--begin::Team members-->
                            <div class="symbol-group symbol-hover mb-1">
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-25.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-1.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <div class="symbol-label bg-primary">
                                                <span class="fs-7 text-inverse-primary">N</span>
                                            </div>
                                        </div>
                                                                        <!--end::Member-->
                                                                                                                                            <!--begin::Member-->
                                                                            <div class="symbol symbol-circle symbol-25px">
                                            <img src="assets/media/avatars/300-5.jpg" alt="" />
                                        </div>
                                                                        <!--end::Member-->
                                                                    <!--begin::More members-->
                                    <div class="symbol symbol-circle symbol-25px">
                                        <div class="symbol-label bg-dark">
                                            <span class="fs-8 text-inverse-dark">+0</span>
                                        </div>
                                    </div>
                                    <!--end::More members-->
                                                            </div>
                            <!--end::Team members-->
                            <div class="fs-7 fw-bold text-muted">Team Members</div>
                        </td>
                        <td class="min-w-150px">
                            <div class="mb-2 fw-bold">20 Jun 22 - 30 Jun 22</div>
                            <div class="fs-7 fw-bold text-muted">Date range</div>
                        </td>
                        <td class="d-none">Pending</td>
                        <td class="text-end">
                            <button type="button" class="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg-->
<span class="svg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor"/>
<path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                            </button>
                        </td>
                    </tr>
                            </tbody>
            <!--end::Table-->
        </table>
        <!--end::Table-->
    </div>
    <!--end::Card body-->
</div>
<!--end::Table Widget 3-->