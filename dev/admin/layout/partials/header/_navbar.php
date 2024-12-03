<!--begin::Navbar-->
<div class="app-navbar align-items-center flex-shrink-0">
    
    <!--begin::Notifications-->
    <div class="app-navbar-item w-250px ms-2 ms-lg-4">
        <!--begin::Menu- wrapper-->
        <select id="select-rol" class="form-select form-select-solid fw-bold" data-control="select2"
            data-placeholder="Seleccione un rol" data-hide-search="true">
            <?php                                            
                $sql = "SELECT
                            sru.NROLE_ID,
                            sr.CROLE_NOMBRE  
                        FROM srd_roles_usuario sru
                        INNER JOIN srd_roles sr ON sru.NROLE_ID = sr.NROLE_ID AND sr.NROLE_ESTADO = 1 AND sr.NAUDI_EST_REG = 1
                        WHERE sru.NUSUA_ID = " . $_SESSION['id'] . " AND sru.NROSU_ESTADO = 1 AND sru.NAUDI_EST_REG = 1
                        ORDER BY sr.NROLE_ORDENAMIENTO ASC; ";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) { ?>
                        <option value="<?php echo $row["NROLE_ID"];?>"  <?php echo ($_SESSION['rol_id'] == $row["NROLE_ID"]) ? 'selected': '' ; ?>><?php echo ucwords($row["CROLE_NOMBRE"]); ?></option> <?php 
                    }
                }
            ?>
        </select>
        <!--end::Menu wrapper-->
    </div>
    <!--end::Notifications-->

    <!--begin::Theme mode-->
    <div class="app-navbar-item ms-2 ms-lg-4">
        <?php include 'partials/theme-mode/_main.php' ?>
    </div>
    <!--end::Theme mode-->
</div>
<!--end::Navbar-->