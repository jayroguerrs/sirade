"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTNuevaEvaluacion = function () {
    var submitButton;
    var continuarButton;
    var limpiarButton;
	var validator;
	var form;
	var urlParams;
    
    urlParams = new URLSearchParams(window.location.search);
    const getperiodo = urlParams.get('periodo');
    const getservicio = urlParams.get('servicio');
    const getcolaborador = urlParams.get('colaborador');

    // Cargar servicios al seleccionar un periodo
    $("[name='periodo']").on('change.select2', function() {
        listarServicios();
    })

    $("[name='periodo']").on('change', function() {
        listarServicios();
    })

    // Cargar colaborador al seleccionar un servicio
    $("[name='servicio']").on('change.select2', function() {
        listarColaboradores();
    })

    // Cargar colaborador al seleccionar un servicio
    $("[name='servicio']").on('change', function() {
        listarColaboradores();
    })

    // Cargar colaborador al seleccionar un servicio
    $("[name='colaborador']").on('change.select2', function() {
        validarContinuar();
    })

    // Cargar colaborador al seleccionar un servicio
    $("[name='colaborador']").on('change', function() {
        validarContinuar();
    })

    // Init condition select2
    const initConditionsSelect2 = () => {
        // Tnit new repeating condition types
        const allConditionTypes = document.querySelectorAll('[data-kt-nueva-evaluacion="opciones"]');
        allConditionTypes.forEach(type => {
            if ($(type).hasClass("select2-hidden-accessible")) {
                return;
            } else {
                $(type).select2({
                    minimumResultsForSearch: -1
                });
            }
        });
    }

    const handleLimpiar = () => {
        // Botón para continuar
        limpiarButton.addEventListener('click', function (e) {
            
            $("[name='periodo']").trigger('select2:clear');
            $("[name='periodo']").trigger('change.select2');
            document.getElementById('div-cuestionario').classList.add('d-none');
        })
    }

    const handleContinuar = () => {
        // Botón para continuar
        continuarButton.addEventListener('click', e => {
            e.preventDefault();
            // Validate form before submit
            if (validarContinuar()) {

                continuarButton.setAttribute('data-kt-indicator', 'on');
                
                // Crear un nuevo objeto FormData
                const formData = new FormData();
                formData.append('id_supervisor', document.querySelector('#session_usuario_id').value);
                formData.append('id_encuesta',  $("[name='colaborador'] option:selected").data('encuesta'));
                formData.append('periodo',  $("[name='periodo']").val());
                formData.append('servicio',  $("[name='servicio']").val());
                
                setTimeout(function () {
                    fetch(`${environment.apiSRD}/API/jci/encuestas/cargar-respuestas`, {
                        method: 'POST',
                        body: formData,
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            continuarButton.setAttribute('data-kt-indicator', 'off');
                            // Disable submit button whilst loading
                            continuarButton.disabled = true;
                            limpiarButton.disabled = true;
                            // Marcar los radio buttons con los valores devueltos por la API
                            for (const preguntaId in datos.data) {
                                const respuesta = datos.data[preguntaId];
                                const preguntaRadio = document.querySelector(`input[name="radio_preg_${preguntaId}"][value="${respuesta}"]`);
                                if (preguntaRadio) {
                                    preguntaRadio.checked = true;
                                    // Agregar la clase "activate" al label asociado
                                    const preguntaLabel = preguntaRadio.closest('.custom-label');
                                    if (preguntaLabel) {
                                        preguntaLabel.classList.add('active');
                                    }
                                }
                            }
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "success",
                                title: "Verificación exitosa, puede continuar",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                        } else if (datos.estado == 2) {
                            continuarButton.setAttribute('data-kt-indicator', 'off');
                            // Disable submit button whilst loading
                            continuarButton.disabled = true;
                            limpiarButton.disabled = true;
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "success",
                                title: "Verificación exitosa, puede iniciar",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                        } else {
                            Swal.fire({
                                toast: true,
                                position: "top-end",
                                icon: "error",
                                title: "Ha sucedido un error, vuelva a intentarlo",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                        }
                        document.getElementById('div-cuestionario').classList.remove('d-none');
                        document.getElementById('div-guardar').classList.remove('d-none');
                        $("[name='periodo']").prop('disabled', true);
                        $("[name='servicio']").prop('disabled', true);
                        $("[name='colaborador']").prop('disabled', true);
                    });
                }, 500);
            } else {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "warning",
                    title: "Hay campos obligatorios pendientes de completar",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        })
    }

    function validarContinuar() {
        var vali = ($("[name='servicio']").val() != null) && ($("[name='colaborador']").val() != null) && ($("[name='periodo']").val() != null);    
        if (vali) {
            continuarButton.disabled = false;
        } else {
            continuarButton.disabled = true;
        }
        return vali;
    }

    // Submit form handler
    const handleCancelarEncuesta = () => {

        var cancelarButton = document.getElementById('kt_cancelar_encuesta');
        // Handle submit button
        cancelarButton.addEventListener('click', e => {
            
            e.preventDefault();

            Swal.fire({
                icon: "warning",
                title: "¿Está seguro(a) que desea salir?",
                text: "Este proceso no podrá ser revertido",
                showCancelButton: true,
                confirmButtonText: "Si, salir",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#f06445",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    window.location.href = '?app=jci&page=evaluaciones/lista';
                }
            });
        })
    }

    // Submit form handler
    const handleSubmit = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'periodo': {
                        validators: {
                            notEmpty: {
                                message: 'Seleccione un periodo'
                            }
                        }
                    },
                    'servicio': {
                        validators: {
                            notEmpty: {
                                message: 'Seleccione un servicio'
                            }
                        }
                    },
                    'colaborador': {
                        validators: {
                            notEmpty: {
                                message: 'Seleccione un colaborador'
                            }
                        }
                    },
                    'codigo': {
                        validators: {
                            notEmpty: {
                                message: 'El código de colaborador es obligatorio'
                            }
                        }
                    },
                    'supervisor': {
                        validators: {
                            notEmpty: {
                                message: 'El nombre del supervisor es obligatorio'
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
            var selectedOption = $("[name='colaborador'] option:selected");
            var encuestaValue = $("[name='colaborador'] option:selected").data('encuesta');

            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;
                        
                        Swal.fire({
                            icon: "question",
                            title: "¿Está seguro(a) que desea guardar los cambios?",
                            showCancelButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            confirmButtonColor: "#00b2a9",
                        }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {

                                // Crear un nuevo objeto FormData
                                const formData = new FormData(document.getElementById('formEvaluacion'));
                                formData.append('id_supervisor', document.querySelector('#session_usuario_id').value);
                                formData.append('id_encuesta',  $("[name='colaborador'] option:selected").data('encuesta'));
                                formData.append('periodo',  $("[name='periodo']").val());
                                formData.append('servicio',  $("[name='servicio']").val());

                                fetch(`${environment.apiSRD}/API/jci/encuestas/agregar-respuesta`, {
                                    method: 'POST',
                                    body: formData,
                                }).then(Response => Response.json())
                                .then(datos => {
                                    if (datos.estado == 1) {
                                        
                                        Swal.fire({
                                            toast: true,
                                            position: "top-end",
                                            icon: "success",
                                            title: "Los cambios han sido guardados exitosamente",
                                            showConfirmButton: false,
                                            timer: 3000
                                        });
                                    } else {
                                        Swal.fire({
                                            toast: true,
                                            position: "top-end",
                                            icon: "warning",
                                            title: "Debe marcar por lo menos una opción",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                            
                                    submitButton.setAttribute('data-kt-indicator', 'off');
                                    submitButton.disabled = false;
                                });
                            } 
                        });
                  
                    } else {
                        Swal.fire({
                            html: "Lo siento, se han detectado campos <strong>obligatorios</strong> pendientes de llenado",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, entendido",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        })
    }

    // Cargar servicios al seleccionar un periodo
    $("[name='periodo']").on('select2:clear', function() {
        debugger;
        $("[name='servicio']").empty();
        (getperiodo == null)  ? $("[name='periodo']").val('') : $("[name='periodo']").val(getperiodo);
        $("[name='servicio']").trigger('change.select2');
        $("[name='servicio']").trigger('select2:clear');
    });

    // Cargar servicios al seleccionar un periodo
    $("[name='servicio']").on('select2:clear', function() {
        $("[name='colaborador']").empty();
        (getservicio == null)  ? $("[name='servicio']").val('') : $("[name='servicio']").val(getservicio);
        $("[name='colaborador']").trigger('select2:clear');
    });
    
    // Cargar datos, si lo hubiera, al seleccionar un colaborador
    $("[name='colaborador']").on('select2:clear', function() {
        if (getcolaborador == null)  {
            $("[name='colaborador']").val('');
            //$("[name='colaborador']").prop('disabled', true);
        } else {
            $("[name='colaborador']").val(getcolaborador)
            $("[name='colaborador']").prop('disabled', false);
        }        
    });

    // Revalidar el Select2 cuando se cambia el valor
    $("[data-control='select2']").on('change', function () {
        var fieldName = $(this).attr('name');
        // Revalidate the field when an option is chosen
        validator.revalidateField(fieldName);
    });

    //Cargar Combo de Servicios
    function listarServicios () {
        debugger;
        const parametros = {
            usuario: document.querySelector('#session_usuario_id').value,
            id_periodo: (getperiodo == null) ? $("[name='periodo']").val() : getperiodo,
            usuario_rol: document.querySelector('#session_rol_id').value
        };
        
        // Convierte el objeto de parámetros en una cadena de consulta
        const queryString = new URLSearchParams(parametros).toString();

        $("[name='servicio']").empty();

        fetch(`${environment.apiSRD}/API/jci/encuestas/combo-servicios?${queryString}`, {
            method: 'GET',
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                // Supongamos que "data.valores" contiene un array de opciones
                const opciones = datos.data;

                // Llena el select2 con las opciones
                opciones.forEach(opcion => {
                    $("[name='servicio']").append(new Option(opcion.nom_area, opcion.id_area));
                });

                // Inicializa el select2 después de agregar las opciones
                $("[name='servicio']").prop('disabled', false);
                $("[name='servicio']").val('');
                
                (getperiodo == null) ? $("[name='servicio']").val('') : $("[name='servicio']").val(getservicio);
                listarColaboradores();
            } else {
                $("[name='servicio']").prop('disabled', true);
            }
            validarContinuar();
        });
    }

    //Cargar Combo de Servicios
    function listarColaboradores () {
        
        const parametros = {
            usuario: document.querySelector('#session_usuario_id').value,
            usuario_rol: document.querySelector('#session_rol_id').value,
            id_periodo: (getperiodo == null) ? $("[name='periodo']").val() : getperiodo,
            id_servicio: (getservicio == null) ? $("[name='servicio']").val() : getservicio,
        };
        
        // Convierte el objeto de parámetros en una cadena de consulta
        const queryString = new URLSearchParams(parametros).toString();
        
        $("[name='colaborador']").empty();

        fetch(`${environment.apiSRD}/API/jci/encuestas/combo-colaborador?${queryString}`, {
            method: 'GET',
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                // Supongamos que "data.valores" contiene un array de opciones
                const opciones = datos.data;

                // Llena el select2 con las opciones
                opciones.forEach(opcion => {
                    const option = new Option(opcion.nom_colaborador, opcion.id_colaborador);
                    option.setAttribute('data-encuesta', opcion.id_encuesta); // Agrega el atributo "data-encuesta"
                    $("[name='colaborador']").append(option);
                });

                // Inicializa el select2 después de agregar las opciones
                $("[name='colaborador']").prop('disabled', false);
                $("[name='colaborador']").val('');
                (getservicio == null) ? $("[name='colaborador']").val('') : $("[name='colaborador']").val(getcolaborador);

            } else {
                $("[name='colaborador']").prop('disabled', true);
            }
            validarContinuar();
        });
    }
    
    // Public methods
    return {
        init: function () {

            form = document.getElementById('formEvaluacion');
            submitButton = document.getElementById('btn_guardar_evaluacion');
            continuarButton = document.getElementById('btn_continuar_evaluacion');
            limpiarButton = document.getElementById('btn_limpiar_evaluacion');

            //submitButton.disabled = true;
            continuarButton.disabled = true;

            // Init forms
            initConditionsSelect2();

            // Handle forms
            handleSubmit();
            handleLimpiar();
            handleContinuar();
            handleCancelarEncuesta();
        }   
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTNuevaEvaluacion.init();
    cargarValoresDesdeURL();
});

function cargarValoresDesdeURL() {
    KTNuevaEvaluacion
    const urlParams = new URLSearchParams(window.location.search);
    const periodo = urlParams.get('periodo');

    if (periodo) {
        $("[name='periodo']").val(periodo).trigger('change');
        $("[name='periodo']").trigger('change.select2');
    }
}