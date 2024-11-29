"use strict";

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
                                }
                            }
                        },
                        'password': {
                            validators: {
                                notEmpty: {
                                    message: 'La contraseña es obligatorio'
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
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');
                        // Disable button to avoid multiple click 
                        submitButton.disabled = true;
                        // Simulate ajax request
                        // Iniciar datos de FormData
                        let datos = new FormData(form);
                        // Agregar valores al formData
                        fetch('apps/jci/auth/sign-in/sign-in.model.php', {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                // Para el caso del signin                                
                                if (datos.resultado == 'signinok' || datos.resultado == 'signin1ok' || datos.resultado == 'signin2x') {
                                    // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                                    Swal.fire({
                                        text: "Bienvenido(a): " + datos.usuario,
                                        icon: "success",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, gracias",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then(function(result) {
                                        if (result.isConfirmed) {
                                            form.querySelector('[name="username"]').value = "";
                                            form.querySelector('[name="password"]').value = "";
                                            validator.resetForm();
                                        }
                                        location.reload();
                                    });
                                } else {
                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                                    Swal.fire({
                                        text: "Lo siento,usuario o contraseña inválido",
                                        icon: "error",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, gracias",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    });
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