"use strict";

// Class definition
var KTEditarPersonal = function() {

    // Private functions

    // Submit form handler
    const handleSubmit = () => {
        // Define variables
        let validator;

        // Get elements
        const form = document.getElementById('personal_form');
        const submitButton = document.getElementById('personal_submit');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form, {
                fields: {
                    'product_name': {
                        validators: {
                            notEmpty: {
                                message: 'Product name is required'
                            }
                        }
                    },
                    'sku': {
                        validators: {
                            notEmpty: {
                                message: 'SKU is required'
                            }
                        }
                    },
                    'sku': {
                        validators: {
                            notEmpty: {
                                message: 'Product barcode is required'
                            }
                        }
                    },
                    'shelf': {
                        validators: {
                            notEmpty: {
                                message: 'Shelf quantity is required'
                            }
                        }
                    },
                    'price': {
                        validators: {
                            notEmpty: {
                                message: 'Product base price is required'
                            }
                        }
                    },
                    'tax': {
                        validators: {
                            notEmpty: {
                                message: 'Product tax class is required'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        // Handle submit button
        submitButton.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function(status) {
                    if (status == 'Valid') {
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        setTimeout(function() {
                            submitButton.removeAttribute('data-kt-indicator');

                            Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function(result) {
                                if (result.isConfirmed) {
                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Redirect to customers list page
                                    window.location = form.getAttribute("data-kt-redirect");
                                }
                            });
                        }, 2000);
                    } else {
                        Swal.fire({
                            html: "Sorry, looks like there are some errors detected, please try again. <br/><br/>Please note that there may be errors in the <strong>General</strong> or <strong>Advanced</strong> tabs",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        })
    }

    // Public methods
    return {
        init: function() {
            $("[name='fechanac']").flatpickr({
                dateFormat: "d/m/Y",
            });
            $(".select-iconos").select2({
                templateSelection: optionFormat,
                templateResult: optionFormat
            });
            // Handle forms
            //handleStatus();
            //handleConditions();
            //handleDiscount();
            //handleShipping();
            handleSubmit();
            CargarDatos();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTEditarPersonal.init();
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

//document.querySelector("input[name='cod']").addEventListener("keyup", CargarDatos);

$("[name='sh_estado_col").on('select2:select', function (e) {
    var clase = e.params.data.element.getAttribute('data-kt-clase');
    var colorestado = document.querySelector("#color_estado");
    colorestado.classList.remove(colorestado.classList[3]);
    colorestado.classList.add(clase);
});

function CargarDatos() {
    var id = document.querySelector("input[name='hd_id']").value;    
    var datos = new FormData();
    datos.append("id", id);
    datos.append("registro", "editar-personal");
    fetch('apps/julia/page/personal/editar/editar-personal.model.php', {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.resultado == 'editar-ok') {
                document.querySelector("input[name='hd_id']").value = datos.NCOLA_ID;
                document.querySelector("input[name='sh_cod']").value = datos.CCOLA_CODIGO;
                document.querySelector("input[name='sh_doc']").value = datos.CCOLA_DOCUMENTO;
                document.querySelector("input[name='sh_nombre']").value = datos.CCOLA_NOMBRES;
                $("[name='sh_ocupacion']").val(datos.NCOLA_OCUPACION).trigger('change.select2');
                $("[name='sh_desempenio']").val(datos.NCOLA_DESEMPENIO).trigger('change.select2');                
                document.querySelector("#sh_img").style.backgroundImage = "url('" + "assets/media/avatars/" + datos.CCOLA_IMG + "')";
                $("[name='sh_estado_col']").val(datos.NCOLA_ESTADO_COL).trigger('select2:select');
                $("[name='sh_nacionalidad']").val(datos.NCOLA_NACIONALIDAD).trigger('change.select2');                
                document.querySelector("input[name='sh_correo']").value = datos.CCOLA_CORREO;
                var colorestado = document.querySelector("#color_estado");
                console.log(colorestado);
                colorestado.classList.remove(colorestado.classList[3]);
                colorestado.classList.add(datos.eclase);
            } else {
                LimpiarForm();
                //document.getElementById('kt_ecommerce_add_product_form').reset();
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
            //form.reset();
            // Hide loading indication
            submitButton.removeAttribute('data-kt-indicator');
            // Enable button
            submitButton.disabled = false;
        });
}

function LimpiarForm() {
    var form = document.getElementById('personal_form');
    //Restablecer Selects
    var select2s = form.querySelectorAll('.form-select');
    for (var i = 0; i < select2s.length; i++) {
        var select2 = select2s[i];
        $(select2).val(null).trigger('change');
    }

    //Restablecer formulario
    form.reset();
}