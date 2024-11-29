"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTPeriodo = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitPeriodo;
    var formPeriodo;
    var cancelarPeriodo;
    var dt;
    var ft;
    var ft1;

    // Private functions
    var initDatatable1 = function() {
        dt = $("#tb_periodos").DataTable({
            autoWidth: false,
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            order: [
                [3, 'desc']
            ],
            select: {
              style: 'single',
              toggleable: false
            },
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/periodos/lista-paginado`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.idapp = datos.idapp;
                    d.periodo = datos.periodo;
                    d.fecha = datos.fecha;
                    d.estado = datos.estado;
                    d.usuario = $("#session_usuario_id").val();
                    d.usuario_rol = $("#session_rol_id").val();
                },
                beforeSend: function() {
                    msgLoad("Procesando...");
                },
                complete: function() {
                    msgAutoClose();
                },
                dataFilter: function(data){
                    var json = jQuery.parseJSON(data);
                    if(json.estado == 2){
                        location.reload();
                    }
                    return data;
                }
            },
            columns: [
                { data: null, name: 'acciones'},
                { data: 0, name: 'NPERI_ID' },
                { data: 1, name: 'CPERI_DESCRIPCION' },
                { data: 2, name: 'DPERI_INICIO' },
                { data: 3, name: 'DPERI_FIN' },
                { data: 4, name: 'ESTADO' },
                { data: 5, name: 'FEC_MODIFICACION' },
                { data: 6, name: 'USR_MODIFICACION' }
            ],
            columnDefs: [
                { targets: 0, visible: true,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                            <button class="btn btn-sm btn-icon btn bg-light-primary btn-active-color-primary w-30px h-30px view-btn hover-scale" data-id="${row[0]}">
                                <i class="ki-duotone ki-eye text-primary fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </button>
                            <button class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px edit-btn hover-scale" data-id="${row[0]}">
                                <i class="ki-duotone ki-notepad-edit text-warning fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </button>
                            <button class="btn btn-sm btn-icon btn bg-light-danger btn-active-color-primary w-30px h-30px delete-btn hover-scale" data-id="${row[0]}">
                                <i class="ki-duotone ki-trash text-danger fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </button>
                        `
                    }
                },                                              //Acciones
                { targets: 1, visible: false },                 //ID 
                { targets: 5, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${data}</div>
                        `
                    },
                }
            ]
        });

        dt.on('draw.dt', function () {
          dt.row(':eq(0)').select();
        });

        table = dt.$;
        
        dt.on('draw', function() {
            KTMenu.createInstances();

            // Add event listeners for buttons
            $('.view-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalPeriodo(id, 'ver');
            });

            $('.edit-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalPeriodo(id, 'editar');
            });

            $('.delete-btn').on('click', function() {
                var id = $(this).data('id');
                EliminarPeriodo(id);
            });
        });

        ft = $("form#form_modal_agregar_periodos [name=fecha]").flatpickr({
            altInput: true,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
            mode: "range",
            locale: "es"
        });

        ft1 = $("form#form_modal_filtro_periodos [name=filtro-fecha]").flatpickr({
            altInput: true,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
            mode: "range",
            locale: "es"
        });

    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-periodos-table-filter="search"]');
        let previousValue = filterSearch.value;
    
        filterSearch.addEventListener('change', function(e) {
            const currentValue = e.target.value;
            if (currentValue !== previousValue) {
                dt.search(currentValue).draw();
                previousValue = currentValue; // Actualizar el valor anterior
            }
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
                        msgLoad("Procesando...");
                        submitPeriodo.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitPeriodo.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formPeriodo);
                        datos.append('idapp', 'ENF_002');
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('periodo', $('[name="periodo"]').val());

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Periodo' ? 'agregar' : 'editar';

                        msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                            fetch(`${environment.apiSRD}/API/periodos/${apimode}-periodo`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                if (datos.estado == 1) {
                                    
                                    $('[name="id"]').val(null).trigger('change');
                                    $('[name="periodo"]').val(null).trigger('change');
                                    $('[name="fecha"]').val(null).trigger('change');
                                    document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                    document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                    validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                    $('#kt_modal_agregar_periodos').modal('hide');

                                    // Configurar el orden antes de la recarga
                                    dt.order([5, 'desc']).page('first').draw(false);

                                    // Usar una promesa para manejar la recarga
                                    new Promise((resolve) => {
                                        dt.ajax.reload(() => {
                                            resolve(); // Resolver la promesa después de la recarga
                                        }, false);
                                    }).then(() => {
                                        if (apimode == 'agregar') {
                                            msgSuccess("Los cambios han sido guardados exitosamente");
                                        } else {
                                            msgSuccessMixin("Los cambios han sido guardados exitosamente","");
                                        }
                                    });
                                    
                                } else {
                                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                                }
                            }).catch(error => {
                                msgError('Error al procesar los datos: ' + error);
                            }).finally(() => {
                                submitPeriodo.setAttribute('data-kt-indicator', 'off');
                                submitPeriodo.disabled = false;  // Habilitar botón después de procesar
                            });
                        }, () => {
                            submitPeriodo.setAttribute('data-kt-indicator', 'off');
                            submitPeriodo.disabled = false;
                        });
                    }
                });
            }
        });
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_periodos_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");

            // Cerrar el modal
            $('#kt_modal_filtro_periodos').modal('hide');

            // Usar una promesa para manejar la recarga
            new Promise((resolve) => {
                dt.ajax.reload(function() {
                    resolve(); // Resolver la promesa después de la recarga
                });
            }).then(() => {
                msgSuccessMixin("Los filtros se han aplicado exitosamente","");
            });
        });
    }

    // Limpiar Filtro de Periodo
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
            
            // Usar una promesa para manejar la recarga
            new Promise((resolve) => {
                dt.ajax.reload(function() {
                    resolve(); // Resolver la promesa después de la recarga
                });
            }).then(() => {
                msgSuccessMixin("Los filtros se han limpiado exitosamente","");
            });
        });
    }

    // Agregar Periodo
    var handleAgregarPeriodo = function() {
        const agregarPeriodo = document.querySelector('[name="agregar-boton"]');
        agregarPeriodo.addEventListener('click', function() {
            AbrirModalPeriodo(null, 'agregar');
        });
    }

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-periodo');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formPeriodo);
            datos.append('idapp', 'ENF_002');
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            datos.append('periodo', $("[name='filtro-categoria']").val());
            datos.append('fecha', $("[name='filtro-fecha']").val());
            datos.append('estado', $("[name='filtro-estado']").val());
            
            fetch(`${environment.apiSRD}/API/periodos/listar`, {
                method: 'POST',
                body: datos
            }).then(response => {
                if (response.ok) {
                    return response.blob(); // Obtener la respuesta como un archivo Blob (CSV)
                }
                throw new Error('Error al generar el CSV');
            })
            .then(blob => {
                // Crear un enlace de descarga
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'CE_Lista_Periodos.csv'; // Nombre del archivo a descargar
                document.body.appendChild(a);
                a.click(); // Simular clic para descargar
                a.remove(); // Eliminar el enlace después de descargar
            }).catch(error => {
                msgError('Error al procesar los datos: ' + error, () => { }, () => { });
            }).finally(() => {
                msgSuccessMixin("Se ha descargado el documento exitosamente","");
            });
        
        });
    }

    // Public methods
    return {
        init: function() {
            formPeriodo = document.getElementById('form_modal_agregar_periodos');
            submitPeriodo = document.getElementById('kt_modal_agregar_periodos_submit');
            cancelarPeriodo = document.getElementById('kt_modal_agregar_periodos_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitPeriodo();
            handleAgregarPeriodo();
            handleExportar();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalPeriodo();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPeriodo.init();
});

function AbrirModalPeriodo(id, modo) {
    msgLoad("Procesando...");
    
    if (modo == 'editar' || modo == 'ver') {
        
        if (modo == 'ver') {
            // Deshabilitar todos los campos del formulario
            $('#form_modal_agregar_periodos').find('input, select, textarea').prop('disabled', true);
            $('#kt_modal_agregar_periodos_submit').hide();
        } else {
            // Habilitar todos los campos del formulario
            $('#form_modal_agregar_periodos').find('input, select, textarea').prop('disabled', false);
            $('#kt_modal_agregar_periodos_submit').show();
        }

        var datos = new FormData();
        datos.append('idapp', 'ENF_002');
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/periodos/obtener-por-id`, {
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
                msgAutoClose();
                $('#kt_modal_agregar_periodos').modal('show');
            } else {
                msgError(ErrorMensaje(datos), ()=>{location.reload()}, ()=>{location.reload()});
            }
        });

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        document.getElementById('titulo_modal').innerText = 'Editar Periodo';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';

        document.getElementById('titulo_modal').innerText = 'Agregar Periodo';
        $('#form_modal_agregar_periodos').find('input, select, textarea').prop('disabled', false);
        $('#kt_modal_agregar_compania_submit').show();
        msgAutoClose();

        $('#kt_modal_agregar_periodos').modal('show');
    }

};

window.AbrirModalPeriodo = AbrirModalPeriodo;

function EliminarPeriodo(id) {    

    var datos = new FormData();
    datos.append('idapp', 'ENF_002');
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    msgWarning("¿Está seguro que desea eliminar el periodo?", "Si, Eliminar", () => {
        msgLoad("Procesando...");
        fetch(`${environment.apiSRD}/API/periodos/eliminar-periodo`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var dt = $("#tb_periodos").DataTable();

                // Usar una promesa para manejar la recarga
                new Promise((resolve) => {
                    dt.ajax.reload(function() {
                        resolve(); // Resolver la promesa después de la recarga
                    });
                }).then(() => {
                    msgSuccessMixin("El periodo ha sido eliminado exitosamente","");
                });
    
            } else {
                msgError(ErrorMensaje(datos), ()=>{location.reload()}, ()=>{location.reload()});
            }
        });
    });

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
    datos['idapp'] = "ENF_002";
    datos['periodo'] = $("[name='filtro-periodo']").val();
    datos['fecha'] = $("[name='filtro-fecha']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val();

    return datos;
}

