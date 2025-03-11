"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTSupervisorList = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitSupervisor;
    var formServicio;
    var cancelarServicio;
    var dt1;

    // Private functions
    var initDatatable1 = function() {
        
        dt1 = $("#tb_supervisores").DataTable({
            autoWidth: false,
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            order: [
                [1, 'asc']
            ],
            select: {
              style: 'single',
              toggleable: false
            },
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/julia/supervisores/listar-paginado`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.servicio = datos.servicio;
                    d.supervisor = datos.supervisor;
                    d.periodo = datos.periodo;
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
                { data: 0, name: 'NSAPE_ID' },
                { data: 1, name: 'CUSUA_NOMBRES' },
                { data: 2, name: 'CAREA_DESCRIPCION' },
                { data: 3, name: 'CPERI_DESCRIPCION' },
                { data: 4, name: 'ESTADO' },
                { data: 5, name: 'FEC_MODIFICACION' },
                { data: 6, name: 'USR_MODIFICACION' },
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
                },                                          //Acciones
                { targets: 1, visible: false },             //Key
                { targets: 3, visible: true,
                    render: function (data, type, row) {
                        if (data == null) {
                            return `
                                <div class="badge badge-light-danger fw-bold">SIN SUPERVISOR ASIGNADO</div>
                            `
                        } else {
                            return data;
                        }
                    }     
                
                },                                          //Supervisor
                { targets: 5, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${data}</div>
                        `
                    },
                },                                          //Estado
            ]
        });

        dt1.on('draw.dt1', function () {
          dt1.row(':eq(0)').select();
        });

        table = dt1.$;
        
        dt1.on('draw', function() {
            KTMenu.createInstances();

            // Add event listeners for buttons
            $('.view-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalSupervisor(id, 'ver');
            });

            $('.edit-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalSupervisor(id, 'editar');
            });

            $('.delete-btn').on('click', function() {
                var id = $(this).data('id');
                EliminarSupervisor(id);
            });
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-supervisor-table-filter="search"]');
        let previousValue = filterSearch.value;
    
        filterSearch.addEventListener('change', function(e) {
            const currentValue = e.target.value;
            if (currentValue !== previousValue) {
                dt1.search(currentValue).draw();
                previousValue = currentValue; // Actualizar el valor anterior
            }
        });
    }

    var handleCerrarModalServicio = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_supervisor').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            $('[name="servicio"]').val(null).trigger('change');
            $('[name="supervisor"]').val(null).trigger('change');
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    const handleSubmitSupervisor = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formServicio,
            {
                fields: {
                    'supervisor': {
                        validators: {
                            notEmpty: {
                                message: 'El supervisor es requerido'
                            }
                        }
                    },
                    'servicio': {
                        validators: {
                            notEmpty: {
                                message: 'El servicio es requerido'
                            }
                        }
                    },
                    'periodo': {
                        validators: {
                            notEmpty: {
                                message: 'El periodo es requerido'
                            }
                        }
                    },
                    
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
        submitSupervisor.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        msgLoad("Procesando...");
                        submitSupervisor.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitSupervisor.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formServicio);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('servicio', $('[name="servicio"]').val());
                        datos.append('supervisor', $('[name="supervisor"]').val());
                        datos.append('periodo', $('[name="periodo"]').val());

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Supervisor' ? 'agregar' : 'editar';

                        // Preguntar si desea guardar los cambios
                        msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                            fetch(`${environment.apiSRD}/API/julia/supervisores/${apimode}-supervisor`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                if (datos.estado == 1) {
                                    $('[name="id"]').val(null).trigger('change');
                                    $('[name="servicio"]').val(null).trigger('change');
                                    $('[name="periodo"]').val(null).trigger('change');
                                    $('[name="supervisor"]').val(null).trigger('change');
                                    document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                    document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                    validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                    
                                    $('#kt_modal_agregar_supervisor').modal('hide');

                                    // Configurar el orden antes de la recarga
                                    dt1.order([6, 'desc']);

                                    // Usar una promesa para manejar la recarga
                                    new Promise((resolve) => {
                                        dt1.ajax.reload(() => {
                                            resolve(); // Resolver la promesa después de la recarga
                                        }, false);
                                    }).then(() => {
                                        // Mostrar mensajes de éxito según el modo
                                        if (apimode === 'agregar') {
                                            msgSuccess("Los cambios han sido guardados exitosamente");
                                        } else {
                                            msgSuccessMixin("Los cambios han sido guardados exitosamente", "");
                                        }
                                    });

                                } else {
                                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                                }
                            }).catch(error => {
                                msgError('Error al procesar los datos: ' + error);
                            }).finally(() => {
                                submitSupervisor.setAttribute('data-kt-indicator', 'off');
                                submitSupervisor.disabled = false;  // Habilitar botón después de procesar
                            });
                        }, () => {
                            submitSupervisor.setAttribute('data-kt-indicator', 'off');
                            submitSupervisor.disabled = false;
                        });
                    }
                });
            }
        });
    }
 
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_supervisor_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");

            // Cerrar el modal
            $('#kt_supervisor_filtro_modal').modal('hide');
        
             // Usar una promesa para manejar la recarga
            new Promise((resolve) => {
                dt1.ajax.reload(function() {
                    resolve(); // Resolver la promesa después de la recarga
                });
            }).then(() => {
                msgSuccessMixin("Los filtros se han aplicado exitosamente","");
            });
        });
    }

    // Limpiar Filtro Supervisor
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_supervisor_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_supervisor');
            formFiltro.reset();
            $('[name="filtro-servicio"]').val(null).trigger('change');
            $('[name="filtro-periodo"]').val(null).trigger('change');
            $('[name="filtro-supervisor"]').val(null).trigger('change');
            document.querySelector(`input[name="filtro-estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="filtro-estado"][value="0"]`).checked = false;
            
            // Usar una promesa para manejar la recarga
            new Promise((resolve) => {
                dt1.ajax.reload(function() {
                    resolve(); // Resolver la promesa después de la recarga
                });
            }).then(() => {
                msgSuccessMixin("Los filtros se han limpiado exitosamente","");
            });
        });
    }

    // Agregar Rubro
    var handleAgregarSupervisor = function() {
        const agregarSupervisor = document.querySelector('[name="agregar-boton"]');
        agregarSupervisor.addEventListener('click', function() {
            AbrirModalSupervisor(null, 'agregar');
        });
    }

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-supervisor');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formServicio);
            datos.append('servicio', $('[name="filtro-servicio"]').val());
            datos.append('supervisor', $('[name="filtro-supervisor"]').val());
            datos.append('periodo', $('[name="filtro-periodo"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            
            fetch(`${environment.apiSRD}/API/julia/supervisores/listar`, {
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
                a.download = 'CE_Lista_Supervisores.csv'; // Nombre del archivo a descargar
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
            formServicio = document.getElementById('form_modal_agregar_supervisor');
            submitSupervisor = document.getElementById('kt_modal_agregar_supervisor_submit');
            cancelarServicio = document.getElementById('kt_modal_agregar_supervisor_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitSupervisor();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalServicio();
            handleAgregarSupervisor();
            handleExportar();

        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSupervisorList.init();
});

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
    datos['servicio'] = $("[name='filtro-servicio']").val();
    datos['supervisor'] = $("[name='filtro-supervisor']").val();
    datos['periodo'] = $("[name='filtro-periodo']").val();
    datos['estado'] = estado;
    datos['usuario'] = $('#estado').val();
    datos['usuario_rol'] = $('#fechain').val();

    return datos;
}

function AbrirModalSupervisor(id, modo) {
    msgLoad("Procesando...");
    if (modo == 'editar' || modo == 'ver') {
        if (modo == 'ver') {
            // Deshabilitar todos los campos del formulario
            $('#form_modal_agregar_supervisor').find('input, select, textarea').prop('disabled', true);
            $("[name='supervisor']").prop('disabled', true);
            $("[name='periodo']").prop('disabled', true);
            $("[name='servicio']").prop('disabled', true);
            $('#kt_modal_agregar_supervisor_submit').hide();
        } else {
            $('#form_modal_supervisor').find('input, select, textarea').prop('disabled', false);
            $("[name='supervisor']").prop('disabled', false);
            $("[name='periodo']").prop('disabled', false);
            $("[name='servicio']").prop('disabled', false);
            $('#kt_modal_agregar_supervisor_submit').show();
        }

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/julia/supervisores/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                $('[name="id"]').val(d.id).trigger('change');
                $('[name="servicio"]').val(d.servicio).trigger('change');
                $('[name="periodo"]').val(d.periodo).trigger('change');
                $('[name="supervisor"]').val(d.supervisor).trigger('change');
                document.querySelector(`input[name="estado"][value="${d.estado}"]`).checked = true;
                msgAutoClose();
                $('#kt_modal_agregar_supervisor').modal('show');

            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        document.getElementById('titulo_modal').innerText = 'Editar Supervisor';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';
        document.getElementById('titulo_modal').innerText = 'Agregar Supervisor';

        //Habilitar el campo de servicio
        $('[name="servicio"]').prop('disabled', false);

        $('#kt_modal_agregar_supervisor_submit').show();
        msgAutoClose();
    
        $('#kt_modal_agregar_supervisor').modal('show');
    }
};

window.AbrirModalSupervisor = AbrirModalSupervisor;

function EliminarSupervisor(id) {    

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    msgWarning("¿Está seguro que desea eliminar el supervisor?", "Si, Eliminar", () => {
        msgLoad("Procesando...");
        fetch(`${environment.apiSRD}/API/julia/supervisores/eliminar`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var dt1 = $("#tb_supervisores").DataTable();
                
                // Usar una promesa para manejar la recarga
                new Promise((resolve) => {
                    dt1.ajax.reload(function() {
                        // Modificar los parámetros de ordenamiento
                        resolve(); // Resolver la promesa después de la recarga
                    });
                }).then(() => {
                    msgSuccessMixin("El supervisor ha sido eliminado exitosamente","");
                });
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });
    });

};

window.EliminarSupervisor = EliminarSupervisor;