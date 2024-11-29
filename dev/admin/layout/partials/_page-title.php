<!--begin::Page title-->
<div  data-kt-swapper="true" data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}"  class="page-title d-flex flex-column justify-content-center flex-wrap me-3 mb-5 mb-lg-0">
    <!--begin::Title-->
    <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
        <?php echo $titulo; ?>
        
        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <!--begin::Item-->
            <li class="breadcrumb-item text-muted">
                <a href="?page=index" class="breadcrumb-link text-muted text-hover-primary">
                    <?php echo $subtitulo[0]; ?>
                </a>
            </li>
            <!--end::Item-->
            <?php
                for($x = 1; $x < count($subtitulo); $x++) {                    
                    echo '
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-300 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->                        
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">'.
                        $subtitulo[$x] .
                    '</li>
                    <!--end::Item-->';
                }
            ?>
        </ul>
        <!--end::Breadcrumb-->        
    </h1>
    <!--end::Title-->
</div>
<!--end::Page title-->