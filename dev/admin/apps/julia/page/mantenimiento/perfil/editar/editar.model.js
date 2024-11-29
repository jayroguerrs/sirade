"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTPerfil = function () {
    var imagenForm;
    var signInForm;
    var passwordForm;
    var generalForm;
    var formDeactivate;
    var signInMainEl;
    var signInEditEl;
    var passwordMainEl;
    var passwordEditEl;
    var signInChangeEmail;
    var signInCancelEmail;
    var passwordChange;
    var passwordCancel;
    var submitButton;

    var toggleChangeUsuario = function () {
        signInMainEl.classList.toggle('d-none');
        signInChangeEmail.classList.toggle('d-none');
        signInEditEl.classList.toggle('d-none');
    }

    var toggleChangePassword = function () {
        passwordMainEl.classList.toggle('d-none');
        passwordChange.classList.toggle('d-none');
        passwordEditEl.classList.toggle('d-none');
    }

    // Private functions
    var initSettings = function () {  
        if (!signInMainEl) {
            return;
        }        

        // toggle UI
        signInChangeEmail.querySelector('button').addEventListener('click', function () {
            toggleChangeUsuario();
        });

        signInCancelEmail.addEventListener('click', function () {
            toggleChangeUsuario();
        });

        passwordChange.querySelector('button').addEventListener('click', function () {
            toggleChangePassword();
        });

        passwordCancel.addEventListener('click', function () {
            toggleChangePassword();
        });
    }

    var handleChangeImagen = function (e) {
        imagenForm.querySelector('#btn_img_guardar').addEventListener('click', function (e) {
            e.preventDefault();
            msgLoad("Procesando...");
            let datos = new FormData(imagenForm);
            datos.append('estado', 1);
            datos.append('usuario', document.querySelector("#session_usuario_id").value);
            datos.append('usuario_rol', document.querySelector("#session_rol_id ").value);
            datos.append('id', document.querySelector("input[name='hd_id']").value);

            fetch(`${environment.apiSRD}/API/admin/actualizar-datos`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    imagenForm.reset();
                    cargarDatos();
                    msgSuccess("Los cambios han sido guardados exitosamente");
                } else {
                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                }
            });

        });
    }

    var handleChangeGeneral = function (e) {
        var validation;        

        if (!generalForm) {
            return;
        }

        validation = FormValidation.formValidation(
            generalForm,
            {
                fields: {
                    sh_cod: {
                        validators: {
                            notEmpty: {
                                message: 'Código es obligatorio'
                            }
                        },
                        stringLength: {
                            min: 8,
                            max: 8,
                            message: 'El código debe tener 8 caracteres'
                        }
                    },

                    documento: {
                        validators: {
                            notEmpty: {
                                message: 'Contraseña es obligatoria'
                            },
                            stringLength: {
                                min: 8,
                                max: 20,
                                message: 'La contraseña debe tener entre 8 y 20 caracteres'
                            }
                        }
                    },
                    nombres: {
                        validators: {
                            notEmpty: {
                                message: 'El nombre es obligatorio'
                            },
                            stringLength: {
                                max: 50,
                                message: 'El nombre debe tener máximo 300 caracteres'
                            }
                        }
                    },
                    ocupacion: {
                        validators: {
                            notEmpty: {
                                message: 'La ocupación es obligatoria'
                            }
                        }
                    },
                    correo: {
                        validators: {
                            notEmpty: {
                                message: 'El correo es obligatorio'
                            },
                            emailAddress: {
                                message: 'El correo no es válido'
                            }
                        }
                    },
                    nacionalidad: {
                        validators: {
                            notEmpty: {
                                message: 'La nacionalidad es obligatoria'
                            }
                        }
                    }
                },

                plugins: { //Learn more: https://formvalidation.io/guide/plugins
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        generalForm.querySelector('#kt_account_profile_details_submit').addEventListener('click', function (e) {
            e.preventDefault();
            msgLoad("Procesando...");
            let datos = new FormData(generalForm);
            datos.append('usuario', document.querySelector("#session_usuario_id").value);
            datos.append('usuario_rol', document.querySelector("#session_rol_id ").value);
            datos.append('id', document.querySelector("input[name='hd_id']").value);

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                        fetch(`${environment.apiSRD}/API/admin/actualizar-datos`, {
                            method: 'POST',
                            body: datos
                        }).then(Response => Response.json())
                        .then(datos => {
                            if (datos.estado == 1) {
                                generalForm.reset();
                                validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                cargarDatos();
                                msgSuccessMixin("Los cambios han sido guardados exitosamente", "");
                            } else {
                                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                            }
                        });
                    });
                } else {
                    msgError("Hay campos pendientes de validación, por favor revise el formulario.", () => {}, () => {});
                }
            });
        });
    }

    var handleChangeUsuario = function (e) {
        var validation;        

        if (!signInForm) {
            return;
        }

        validation = FormValidation.formValidation(
            signInForm,
            {
                fields: {
                    usuariocolab: {
                        validators: {
                            notEmpty: {
                                message: 'Usuario es obligatorio'
                            },
                            stringLength: {
                                min: 8,
                                max: 20,
                                message: 'El usuario debe tener entre 8 y 20 caracteres'
                            }
                        },
                    },

                    password1: {
                        validators: {
                            notEmpty: {
                                message: 'Contraseña es obligatoria'
                            },
                            stringLength: {
                                min: 8,
                                max: 20,
                                message: 'La contraseña debe tener entre 8 y 20 caracteres'
                            }
                        }
                    }
                },

                plugins: { //Learn more: https://formvalidation.io/guide/plugins
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        signInForm.querySelector('#kt_signin_submit').addEventListener('click', function (e) {
            e.preventDefault();
            msgLoad("Procesando...");
            let datos = new FormData(signInForm);
            datos.append('usuario', document.querySelector("#session_usuario_id").value);
            datos.append('usuario_rol', document.querySelector("#session_rol_id ").value);
            datos.append('id', document.querySelector("input[name='hd_id']").value);

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    fetch(`${environment.apiSRD}/API/admin/actualizar-datos`, {
                        method: 'POST',
                        body: datos
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            signInForm.reset();
                            validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                            toggleChangeUsuario();
                            cargarDatos();
                            msgSuccessMixin("Los cambios han sido guardados exitosamente", "");
                        } else {
                            msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                        }
                    });
                } else {
                    msgError("Hay campos pendientes de validación, por favor revise el formulario.", () => {}, () => {});
                }
            });
        });
    }

    var handleChangePassword = function (e) {
        var validation;

        if (!passwordForm) {
            return;
        }

        validation = FormValidation.formValidation(
            passwordForm,
            {
                fields: {
                    password1: {
                        validators: {
                            notEmpty: {
                                message: 'La contraseña actual es obligatoria'
                            }
                        }
                    },

                    password2: {
                        validators: {
                            notEmpty: {
                                message: 'La nueva contraseña es obligatoria'
                            }
                        }
                    },

                    confirmpassword: {
                        validators: {
                            notEmpty: {
                                message: 'La confirmación de la contraseña es obligatoria'
                            },
                            identical: {
                                compare: function() {
                                    return passwordForm.querySelector('[name="password2"]').value;
                                },
                                message: 'La contraseña y su confirmación no son iguales'
                            }
                        }
                    },
                },

                plugins: { //Learn more: https://formvalidation.io/guide/plugins
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        );

        passwordForm.querySelector('#kt_password_submit').addEventListener('click', function (e) {
            e.preventDefault();

            let datos = new FormData(passwordForm);
            datos.append('usuario', document.querySelector("#session_usuario_id").value);
            datos.append('usuario_rol', document.querySelector("#session_rol_id ").value);
            datos.append('id', document.querySelector("input[name='hd_id']").value);

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    fetch(`${environment.apiSRD}/API/admin/actualizar-datos`, {
                        method: 'POST',
                        body: datos
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            swal.fire({
                                text: "Se ha actualizado el usuario correctamente",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Entendido",
                                customClass: {
                                    confirmButton: "btn font-weight-bold btn-light-primary"
                                }
                            }).then(function(){
                                passwordForm.reset();
                                validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                toggleChangePassword();
                                cargarDatos();
                            });
                        } else {
                            msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                        }
                    });
                } else {
                    msgError("Hay campos pendientes de validación, por favor revise el formulario.", () => {}, () => {});
                }
            });
        });
    }

    var handleDeactivateAccount = function (e) {
        var validation;
        
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
            formDeactivate,
            {
                fields: {
                    deactivate: {
                        validators: {
                            notEmpty: {
                                message: 'Tiene que aceptar para continuar'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            let datos = new FormData();
            datos.append('estado', document.querySelector("input[name='estado']").value == 1 ? 0 : 1);
            datos.append('usuario', document.querySelector("#session_usuario_id").value);
            datos.append('usuario_rol', document.querySelector("#session_rol_id ").value);
            datos.append('id', document.querySelector("input[name='hd_id']").value);

            validation.validate().then(function (status) {
                if (status == 'Valid') {
                    fetch(`${environment.apiSRD}/API/admin/actualizar-datos`, {
                        method: 'POST',
                        body: datos
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            swal.fire({
                                text: "Se ha actualizado el usuario correctamente",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Entendido",
                                customClass: {
                                    confirmButton: "btn font-weight-bold btn-light-primary"
                                }
                            }).then(function(){
                                passwordForm.reset();
                                validation.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                cargarDatos();
                            });
                        } else {
                            msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                        }
                    });
                } else {
                    msgError("Hay campos pendientes de validación, por favor revise el formulario.", () => {}, () => {});
                }
            });
        });
        
    }
    
    var cargarDatos = function (e) {
        
        const parametros = {
            id: document.querySelector("input[name='hd_id']").value,
            usuario: document.querySelector("#session_usuario_id").value,
            usuario_rol: document.querySelector("#session_rol_id").value
        };

        // Convierte el objeto de parámetros en una cadena de consulta
        const queryString = new URLSearchParams(parametros).toString();

        fetch(`${environment.apiSRD}/API/admin/obtener-por-id?${queryString}`, {
                method: 'GET'
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    datos = datos.data;
                    //document.querySelector("input[name='hd_id']").value = datos.id;
                    document.querySelector("input[name='sh_cod']").value = datos.codigo;
                    document.querySelector("#lbl_usuario").textContent = datos.usuario;
                    document.querySelector("input[name='documento']").value = datos.documento;
                    document.querySelector("input[name='nombres']").value = datos.nombres;
                    document.querySelector("input[name='correo']").value = datos.correo;
                    if (datos.estado == 0) {
                        document.getElementById('titulo').textContent = 'Activar cuenta';
                        document.getElementById('kt_account_deactivate_account_submit').textContent = 'Activar cuenta';
                        document.getElementById('titulo-aviso').textContent = 'Estas activando esta cuenta';
                        document.getElementById('notice-div').classList.remove('bg-light-warning');
                        document.getElementById('notice-div').classList.remove('border-warning');
                        document.getElementById('notice-div').classList.add('bg-light-primary');
                        document.getElementById('notice-div').classList.add('border-primary');
                        document.getElementById('notice-icono').classList.remove('text-warning');
                        document.getElementById('notice-icono').classList.add('text-primary');
                        document.getElementById('kt_account_deactivate_account_submit').classList.remove('btn-danger');
                        document.getElementById('kt_account_deactivate_account_submit').classList.add('btn-primary');
                    } else {
                        document.getElementById('titulo').textContent = 'Desactivar cuenta';
                        document.getElementById('kt_account_deactivate_account_submit').textContent = 'Desactivar cuenta';
                        document.getElementById('titulo-aviso').textContent = 'Estas desactivando esta cuenta';
                        document.getElementById('notice-div').classList.remove('bg-light-primary');
                        document.getElementById('notice-div').classList.remove('border-primary');
                        document.getElementById('notice-div').classList.add('bg-light-warning');
                        document.getElementById('notice-div').classList.add('border-warning');
                        document.getElementById('notice-icono').classList.remove('text-primary');
                        document.getElementById('notice-icono').classList.add('text-warning');
                        document.getElementById('kt_account_deactivate_account_submit').classList.remove('btn-primary');
                        document.getElementById('kt_account_deactivate_account_submit').classList.add('btn-danger');
                    }
                    $("[name='desempenio']").val(datos.desempenio).trigger('change');
                    $("[name='ocupacion']").val(datos.ocupacion).trigger('change');
                    $("[name='nacionalidad']").val(datos.nacionalidad).trigger('change');
                    document.querySelector("#sh_img").style.backgroundImage = "url('" + "assets/media/avatars/" + datos.imagen + "')";
                    $("[name='rol']").val(datos.rol).trigger('change');
                    $("[name='estado']").val(datos.estado).trigger('change');
                } else {
                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                }
            });
    }

    // Public methods
    return {
        init: function () {
            imagenForm = document.getElementById('image_form');
            signInForm = document.getElementById('kt_usuario_cambio');
            passwordForm = document.getElementById('kt_signin_change_password');
            generalForm = document.getElementById('kt_account_profile_details_form');
            formDeactivate = document.querySelector('#kt_account_deactivate_form');
            signInMainEl = document.getElementById('kt_usuario');
            signInEditEl = document.getElementById('kt_usuario_edit');
            passwordMainEl = document.getElementById('kt_signin_password');
            passwordEditEl = document.getElementById('kt_signin_password_edit');
            signInChangeEmail = document.getElementById('kt_usuario_button');
            signInCancelEmail = document.getElementById('kt_signin_cancel');
            passwordChange = document.getElementById('kt_signin_password_button');
            passwordCancel = document.getElementById('kt_password_cancel');
            submitButton = document.querySelector('#kt_account_deactivate_account_submit');

            if (!formDeactivate) {
                return;
            }
            $(".select-iconos").select2({
                templateSelection: optionFormat,
                templateResult: optionFormat
            });
            
            cargarDatos();
            initSettings();
            handleChangeGeneral();
            handleChangeUsuario();
            handleChangePassword();
            handleDeactivateAccount();
            handleChangeImagen();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPerfil.init();
});

// Format options
var optionFormat = function(item) {
    if (!item.id) {
        return item.text;
    }

    var span = document.createElement('span');
    var imgUrl = item.element.getAttribute('data-kt-select2-pais');
    var template = '';

    template += '<img src="' + imgUrl + '" class="rounded-circle h-20px me-2" alt="image"/>';
    template += item.text;

    span.innerHTML = template;

    return $(span);
}