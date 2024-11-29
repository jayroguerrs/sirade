"use strict";

import { environment } from "../../../environment.js";

// Class definition
var KTInicio = function() {
    // Elements
    var inicioButton;
    
    var handleInicio = function(e) {
            
        // Handle form submit
        inicioButton.addEventListener('click', function(e) {
            // Prevent button default action
            e.preventDefault();
            
            // Agregar valores al formData
            fetch(`${environment.apiSRD}/API/auth/sign-out`, {
                    method: 'POST'
                }).then(Response => Response.json())
                .then(datos => {
                    // Para el caso del signin
                    if (datos.estado === 1) {
                        // Redirigir a la página de inicio
                        window.location.href = `${environment.apiSRD}`;
                    }
                });
                
        });
    }
    
    // Public functions
    return {
        // public functions
        init: function() {
            inicioButton = document.querySelector('#btn-inicio');
            handleInicio();
        }
    };
}();
// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTInicio.init();
});