"use strict";

import { environment } from "../../../environment.js";

// Class definition
var KTSignoutGeneral = function() {
    // Elements
    var cerrarSesionButton;
    // Handle Button
    var handleButton = function(e) {
        cerrarSesionButton.addEventListener('click', function(e) {
            // Prevent button default action
            e.preventDefault();

            msgWarning("¿Está seguro(a) que desea cerrar su sesión?", "Si, Cerrar", () => {
                msgLoad("Procesando...");
                fetch(`${environment.apiSRD}/API/auth/sign-out`, {
                    method: 'POST'
                }).then(Response => Response.json())
                .then(datos => {
                    // Para el caso del signin
                    if (datos.estado == 1) {
                        //msgAutoClose();
                        // Redirigir al sigin
                        location.href = environment.apiSRD;                    
                    }
                }, () => {
                    //msgAutoClose();
                });
            });

              
        });
    }

    // Actualizar la página cada vez que se cambia de selección el select2 de id "select-rol"
    var handleSelect2 = function() {
        // Detectar el cambio y actualizar la página
        $('#select-rol').on('change', function() {
            msgLoad("Procesando...");
            // Obtener el valor seleccionado
            var valorSeleccionado = $(this).val();
            var aplicacion_nombre =  $("#app_nombre").val();
            
            if (valorSeleccionado) {
                // Redirigir a otra página con el valor seleccionado como parámetro
                var datos = new FormData();
                datos.append('rol', valorSeleccionado);
                datos.append('usuario', $("#session_usuario_id").val());
                datos.append('usuario_rol', $("#session_rol_id").val());
                fetch(`${environment.apiSRD}/API/auth/actualizar-rol`, {
                    method: 'POST',
                    body: datos
                }).then(Response => Response.json())
                .then(datos => {
                    if (datos.estado == 1) {
                        window.location.href = environment.apiSRD + `/admin/?app=${aplicacion_nombre}`;
                    } else {
                        msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                    }
                })
            } 
        });
    }
    // Public functions
    return {
        // Initialization
        init: function() {
            cerrarSesionButton = document.querySelector('#kt_sign_out_button');
            handleButton();
            handleSelect2();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSignoutGeneral.init();
});