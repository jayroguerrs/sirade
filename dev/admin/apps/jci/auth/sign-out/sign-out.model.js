"use strict";

// Class definition
function CerrarSesion() {
    Swal.fire({
        text: "¿Está seguro(a) que desea cerrar su sesión?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Si, cerrar",
        cancelButtonText: "No, cancelar",
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-active-light-primary"
        }
    }).then(function (result) {
        if (result.value) {
            fetch('apps/jci/auth/sign-out/sign-out.model.php', {
                method: 'POST'
            }).then(Response => Response.json())
            .then(datos => {
                // Para el caso del signin
                if (datos.resultado == 'signout') {
                    // Redirigir al sigin
                    location.href = "./";                    
                }
            });    
        }
    });
    
}