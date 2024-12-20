<!--begin::Search-->
<div
    id="kt_header_search"
    class="header-search d-flex align-items-center w-lg-250px"
    data-kt-search-keypress="true"
    data-kt-search-min-length="2"
    data-kt-search-enter="enter"
    data-kt-search-layout="menu"
    data-kt-search-responsive="lg"
    data-kt-menu-trigger="auto"
    data-kt-menu-permanent="true"
    data-kt-menu-placement="bottom-end"
            data-kt-menu-attach="parent"
        >
            <!--begin::Tablet and mobile search toggle-->
        <div data-kt-search-element="toggle" class="d-flex d-lg-none align-items-center">
            <div class="btn btn-custom btn-outline btn-icon btn-icon-gray-700 btn-active-icon-primary">
                                    <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
<span class="svg-icon svg-icon-1 "><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"/>
<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"/>
</svg>
</span>
<!--end::Svg Icon-->                            </div>
        </div>
        <!--end::Tablet and mobile search toggle-->
<?php include 'partials/search/partials/_form-inline.php' ?>
    <!--begin::Menu-->
    <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden">
        <!--begin::Wrapper-->
        <div data-kt-search-element="wrapper">
<?php include 'partials/search/partials/_results.php' ?>
<?php include 'partials/search/partials/_main.php' ?>
<?php include 'partials/search/partials/_empty.php' ?>
        </div>
        <!--end::Wrapper-->
<?php include 'partials/search/partials/_advanced-options.php' ?>
<?php include 'partials/search/partials/_preferences.php' ?>
    </div>
    <!--end::Menu-->
</div>
<!--end::Search-->