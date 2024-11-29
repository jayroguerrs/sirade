"use strict";

import { environment } from "../../../environment.js";

// Class definition
var KTResetPass = function() {
    // Elements
    var form;
    var submitButton;
    var validator;
    // Handle form
    var handleForm = function(e) {
            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
            validator = FormValidation.formValidation(
                form, {
                    fields: {
                        'email': {
                            validators: {
                                regexp: {
                                    regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'No es un correo válido',
                                },
                                notEmpty: {
                                    message: 'El correo es necesario'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: '.fv-row'
                        })
                    }
                }
            );
            // Handle form submit
            submitButton.addEventListener('click', function(e) {
                // Prevent button default action
                e.preventDefault();
                // Validate form
                validator.validate().then(function(status) {
                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');
                        // Disable button to avoid multiple click 
                        submitButton.disabled = true;
                        // Simulate ajax request
                        // Iniciar datos de FormData
                        let datos = new FormData(form);
                        // Agregar valores al formData
                        fetch(`${environment.apiSRD}/API/auth/reset-pass`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                // Para el caso del signin
                                if (datos.estado === 1) {
                                    // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/                            
                                    Swal.fire({
                                        text: "El correo se envió exitosamente",
                                        icon: "success",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, gracias",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then(function(result) {
                                        if (result.isConfirmed) {
                                            form.querySelector('[name="email"]').value = "";
                                            //form.submit(); // submit form
                                            var redirectUrl = form.getAttribute('data-kt-redirect-url');
                                            validator.resetForm();
                                            location.href = redirectUrl;
                                        }
                                    });
                                } else {
                                    Swal.fire({
                                        text: "Lo siento, no se ha podido enviar el correo",
                                        icon: "error",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, gracias",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    });
                                }
                                form.reset();
                                // Hide loading indication
                                submitButton.removeAttribute('data-kt-indicator');
                                // Enable button
                                submitButton.disabled = false;
                            });
                    };
                });
            });
        }
        // Public functions
    return {
        // public functions
        init: function() {
            form = document.querySelector('#kt_password_reset_form');
            submitButton = document.querySelector('#kt_password_reset_submit');
            handleForm();
        }
    };
}();
// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTResetPass.init();
});