"use strict";

// Class definition
function Ingresar() {
    
    fetch('apps/jci/auth/verify-usr/verify-usr.model.php', {
        method: 'POST'
    }).then(Response => Response.json())
    .then(datos => {
        // Para el caso del signin
        if (datos.resultado == 'verifyok') {
            // Ingresar
            location.reload();
        } else {
            // Redirigir al sigin
            location.href = "./?app=jci";
        }
    });
}