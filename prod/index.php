<?php
    include 'admin/connection/bd_connection.php';
?>
<html lang="en" >
    <!--begin::Head-->
    <head><base href=""/>
        <title>SIRADE | Inicio</title>
        <meta charset="utf-8"/>
        <meta name="description" content=""/>
        <meta name="keywords" content="Asistencias, control, gestión, clínicas, médicos, enfermería, hospital, clínicas"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="" />
        <meta property="og:site_name" content="Hay un dron en mi sopa | Julia" />
        <link rel="canonical" href="https://hayundronenmisopa.com/julia"/>
        <link rel="shortcut icon" href="admin/assets/media/logos/favicon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="admin/assets/css/normalize.css">

        <link rel="stylesheet" href="admin/assets/css/animate.min.css">
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="admin/assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="admin/assets/css/owl.carousel.min.css">
        <link rel="stylesheet" href="admin/assets/css/owl.theme.default.min.css">
        <link rel="stylesheet" href="admin/assets/css/bd-wizard.css">

        <meta name="theme-color" content="#fafafa">
            <!--end::Global Stylesheets Bundle-->
    </head>
    <body>
        <div class="p-5 d-flex justify-content-center m-3">
            <a href="javascript:void(0);"><img class="img-fluid" src="admin/assets/media/logos/CRP_logo.svg" alt="logo"></a>
        </div>    

        <div class="d-flex flex-wrap justify-content-center mb-5">
            <div class="owl-carousel owl-theme">
                <?php
                    $sql = "SELECT 
                                CAPLI_MARCA, 
                                LOWER(CAPLI_NOMBRE_PAG) CAPLI_NOMBRE_PAG,
                                LOWER(CAPLI_DESCRIPCION) CAPLI_DESCRIPCION,
                                LOWER(CAPLI_IMAGEN) CAPLI_IMAGEN,
                                NAPLI_ORDEN
                                FROM SRD_APLICACIONES 
                                WHERE NAPLI_ESTADO = 1 AND NAUDI_EST_REG = 1 ORDER BY NAPLI_ORDEN;";
                    $result = $conn->query($sql);
                    
                    // output data of each row
                    while($row = $result->fetch_assoc()) { ?>
                        <div class="text-center font-weight-bold item">
                            <a href="admin/?app=<?php echo $row['CAPLI_NOMBRE_PAG'] ;?>">
                                <div class="gif p-5 mx-4 mt-4 mb-3">
                                    <div class="animate__animated animate__pulse animate__infinite animate__slow"><img
                                            class="img-fluid mx-auto d-block" src="admin/assets/media/logos/<?php echo $row['CAPLI_IMAGEN'] ; ?>"></div>
                                </div>
                            </a>
                            <div style="color:#00B2A9 !important"><?php echo $row['CAPLI_MARCA']; ?></div>
                        </div>
                    <?php } ?>
            </div>       
        </div>
    
        <!-- Add your site or application content here -->
        <script src="admin/assets/plugins/global/plugins.bundle.js"></script>
        <script src="admin/assets/plugins/global/owl.carousel.min.js"></script>
        <script>
            $('.owl-carousel').owlCarousel({
            center: true,
            nav:true,
            margin:30,
            stagePadding:30,
            loop:true,
            autoWidth:true,
            autoplay:true,
            autoplayTimeout:4000,
            items:3
        })
        </script>
    </body>
</html>

<?php 
    $conn->close();
?>