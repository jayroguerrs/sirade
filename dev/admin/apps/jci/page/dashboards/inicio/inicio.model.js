"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTEvaluaciones = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitPeriodo;
    var formPeriodo;
    var cancelarPeriodo;
    var dt1;
    var ft;
    var ft1;

    // Private functions
    var initDatatable1 = function() {
        
        fetch(`${environment.apiSRD}/API/jci/dashboard/resumen-evaluaciones`, {
            method: 'POST',
            body: function (d) {
                var datos = ObtenerDatos();
                d.periodo = datos.periodo;
                d.fecha = datos.fecha;
                d.estado = datos.estado;
                d.usuario = $("#session_usuario_id").val();
                d.usuario_rol = $("#session_rol_id").val();
            }
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
            }
        });

    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch1 = document.querySelector('[data-kt-periodos-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
    }

    var handleCerrarModalPeriodo = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_periodos').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            $('[name="id"]').val(null).trigger('change');
            $('[name="periodo"]').val(null).trigger('change');
            var ft = $("form#form_modal_agregar_periodos [name=fecha]").flatpickr({
                altInput: true,
                altFormat: "d/m/Y",
                dateFormat: "Y-m-d",
                mode: "range",
                locale: "es"
            });
            ft.setDate([null, null]);
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    var handleSubmitPeriodo = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formPeriodo,
            {
                fields: {
                    'periodo': {
                        validators: {
                            notEmpty: {
                                message: 'El periodo es requerido'
                            }
                        }
                    },
                    'fecha': {
                        validators: {
                            notEmpty: {
                                message: 'La fecha es requerida'
                            }
                        }
                    },
                    'estado': {
                        validators: {
                            integer: {
                                message: 'El estado debe ser un valor válido'
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

        // Handle Enviar Modal Periodos
        submitPeriodo.addEventListener('click', e => {
            e.preventDefault();
            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        submitPeriodo.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitPeriodo.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formPeriodo);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('periodo', $('[name="periodo"]').val());

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Periodo' ? 'agregar' : 'editar';

                        // Preguntar si desea guardar los cambios
                        Swal.fire({
                            text: "¿Está seguro que desea guardar los cambios registrados?",
                            icon: "warning",
                            showCancelButton: true,
                            buttonsStyling: false,
                            confirmButtonText: "Si, guardar",
                            cancelButtonText: "No, cancelar",
                            customClass: {
                                confirmButton: "btn fw-bold btn-danger",
                                cancelButton: "btn fw-bold btn-active-light-primary"
                            }
                        }).then(function(result) {
                            if (result.value) {
                                
                                fetch(`${environment.apiSRD}/API/jci/periodos/${apimode}-periodo`, {
                                    method: 'POST',
                                    body: datos
                                }).then(Response => Response.json())
                                .then(datos => {
                                    if (datos.estado == 1) {
                                        if (apimode == 'agregar') {
                                            swal.fire({
                                                text: "Se ha agregado el periodo correctamente",
                                                icon: "success",
                                                buttonsStyling: false,
                                                confirmButtonText: "Entendido",
                                                customClass: {
                                                    confirmButton: "btn font-weight-bold btn-light-primary"
                                                }
                                            })
                                        } else {
                                            Swal.fire({
                                                toast: true,
                                                position: "top-end",
                                                icon: "success",
                                                title: "Los cambios han sido guardados exitosamente",
                                                showConfirmButton: false,
                                                timer: 3000,
                                                timerProgressBar: true
                                            });
                                        }
                                        $('[name="id"]').val(null).trigger('change');
                                        $('[name="periodo"]').val(null).trigger('change');
                                        $('[name="fecha"]').val(null).trigger('change');
                                        document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                        document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                        validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                        dt1.ajax.reload();
                                        $('#kt_modal_agregar_periodos').modal('hide');
                                    } else {
                                        Swal.fire({
                                            html: ErrorMensaje(datos),
                                            icon: "error",
                                            buttonsStyling: false,
                                            confirmButtonText: "Entendido",                                        
                                            customClass: {
                                                confirmButton: "btn btn-primary"
                                            }
                                        });
                                    }
                                });
                                
                            }
                        });

                        submitPeriodo.setAttribute('data-kt-indicator', 'off');
                        // Disable submit button whilst loading
                        submitPeriodo.disabled = false;
                    }
                });
            }
        })
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_periodos_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Cerrar el modal
            $('#kt_modal_filtro_periodos').modal('hide');

            // Llamada a la función ajax.reload() en la instancia de DataTable
            dt1.ajax.reload();

            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: "Los filtros se han aplicado exitosamente",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        });
    }

    // Limpiar Filtro de Pregunta
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_periodos_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_periodos');
            formFiltro.reset();
            $('[name="filtro-periodos"]').val(null).trigger('change');
            $('[name="filtro-fecha"]').val(null).trigger('change');
            var ft = $("form#form_modal_filtro_periodos [name=filtro-fecha]").flatpickr({
                altInput: true,
                altFormat: "d/m/Y",
                dateFormat: "Y-m-d",
                mode: "range",
                locale: "es"
            });
            ft.setDate([null, null]);
            document.querySelector(`input[name="filtro-estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="filtro-estado"][value="0"]`).checked = false;
            // Llamada a la función ajax.reload() en la instancia de DataTable
            dt1.ajax.reload();
            
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: "Los filtros se han limpiado exitosamente",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        });
    }

    // Agregar eventos de clic a tus botones personalizados
    $('#custom-pdf').on('click', function (e) {
        e.preventDefault();
        dt1.button('.buttons-pdf').trigger();
    });

    $('#custom-excel').on('click', function (e) {
        e.preventDefault();
        dt1.button('.buttons-excel').trigger();
    });

    $('#custom-csv').on('click', function (e) {
        e.preventDefault();
        dt1.button('.buttons-csv').trigger();
    });

    $('#custom-copy').on('click', function (e) {
        e.preventDefault();
        dt1.button('.buttons-copy').trigger();
    });

    // Public methods
    return {
        init: function() {
            formPeriodo = document.getElementById('form_modal_agregar_periodos');
            submitPeriodo = document.getElementById('kt_modal_agregar_periodos_submit');
            cancelarPeriodo = document.getElementById('kt_modal_agregar_periodos_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitPeriodo();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalPeriodo();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTEvaluaciones.init();
});

function AbrirModalPeriodo(id, modo) {

    if (modo == 'editar') {
        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/jci/periodos/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                var ft = $("form#form_modal_agregar_periodos [name=fecha]").flatpickr({
                    altInput: true,
                    altFormat: "d/m/Y",
                    dateFormat: "Y-m-d",
                    mode: "range",
                    locale: "es"
                });

                $('[name="id"]').val(d.id).trigger('change');
                $('[name="periodo"]').val(d.periodo).trigger('change');
                ft.setDate([d.fecha_inicio, d.fecha_fin]);
                document.querySelector(`input[name="estado"][value="${d.estado}"]`).checked = true;

            } else {
                Swal.fire({
                    html: ErrorMensaje(datos),
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Entendido",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                });
            }
        });

        document.getElementById('titulo_modal').innerText = 'Editar Periodo';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';

        document.getElementById('titulo_modal').innerText = 'Agregar Periodo';
    }

    $('#kt_modal_agregar_periodos').modal('show');
};

window.AbrirModalPeriodo = AbrirModalPeriodo;

function EliminarPeriodo(id) {    

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    Swal.fire({
        title: "¿Está seguro que desea eliminar el periodo?",
        text: "Este proceso no podrá ser revertido",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        confirmButtonColor: "#f06445",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${environment.apiSRD}/API/jci/periodos/eliminar-periodo`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: "El periodo ha sido eliminado exitosamente",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                    });
                       
                    var dt1 = $("#tb_periodos").DataTable();
                    dt1.ajax.reload();
        
                } else {
                    Swal.fire({
                        html: ErrorMensaje(datos),
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Entendido",                                        
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    });
                }
            });
        }
    })

};

window.EliminarPeriodo = EliminarPeriodo;

function ObtenerDatos(){
    var estado;
    var chkActivo = Boolean(document.querySelector(`input[name="filtro-estado"][value="1"]`).checked);
    var chkInactivo = Boolean(document.querySelector(`input[name="filtro-estado"][value="0"]`).checked);

    if (chkActivo == false && chkInactivo == false) {
        estado = '';
    } else if (chkActivo == true && chkInactivo == false) {
        estado = '1';
    } else if (chkActivo == false && chkInactivo == true) {
        estado = '0';
    }
    
    var datos = new Array();
    datos['periodo'] = $("[name='filtro-periodo']").val();
    datos['fecha'] = $("[name='filtro-fecha']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val();

    return datos;
}

