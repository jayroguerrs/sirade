"use strict";

import { environment } from "../../../environment.js";

// Class definition
var KTSigninGeneral = function() {
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
                        'username': {
                            validators: {
                                notEmpty: {
                                    message: 'El usuario es obligatorio'
                                },
                                stringLength: {
                                    min: 8,
                                    max: 20,
                                    message: 'El usuario debe tener entre 8 y 20 caracteres'
                                }
                            },
                        },
                        'password': {
                            validators: {
                                notEmpty: {
                                    message: 'La contraseña es obligatorio'
                                },
                                stringLength: {
                                    min: 8,
                                    max: 20,
                                    message: 'La contraseña debe tener entre 8 y 20 caracteres'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: '.fv-row',
                            //eleInvalidClass: '',  // comment to enable invalid state icons
                            //eleValidClass: '' // comment to enable valid state icons
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
                        msgLoad("Procesando...");
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');
                        // Disable button to avoid multiple click 
                        submitButton.disabled = true;
                        // Simulate ajax request
                        // Iniciar datos de FormData
                        let datos = new FormData(form);
                        // Agregar valores al formData
                        fetch(`${environment.apiSRD}/API/auth/sign-in`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                // Para el caso del signin
                                if (datos.estado === 1 || datos.estado === 2) {
                                    // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                                    msgSuccess("","Bienvenido(a): " + datos.data.nombres, () => {
                                        form.querySelector('[name="username"]').value = "";
                                        form.querySelector('[name="password"]').value = "";
                                        validator.resetForm();
                                        location.reload();
                                    });
                                } else {
                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                                    msgError('Usuario o contraseña incorrectos', () => {}, () => {});
                                    validator.resetForm();
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
        // Initialization
        init: function() {
            form = document.querySelector('#kt_sign_in_form');
            submitButton = document.querySelector('#kt_sign_in_submit');
            handleForm();
        }
    };
}();
// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSigninGeneral.init();
});