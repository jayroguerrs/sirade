"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTTurnoList = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitturno;
    var formturno;
    var cancelarturno;
    var dt;

    // Private functions
    var initDatatable1 = function() {
        
        dt = $("#tb_turnos").DataTable({
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
                url: `${environment.apiSRD}/API/julia/turnos/listar-paginado`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.turno = datos.turno;
                    d.descripcion = datos.descripcion;
                    d.tipo = datos.tipo;
                    d.inicio = datos.inicio;
                    d.fin = datos.fin;
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
                { data: 0, name: 'CTURN_ID' },
                { data: 1, name: 'CTURN_DESCRIPCION' },
                { data: 2, name: 'CTURN_TIPO' },
                { data: 3, name: 'TTURN_HORA_INICIO' },
                { data: 4, name: 'TTURN_HORA_FIN' },
                { data: 5, name: 'ESTADO' },
                { data: 6, name: 'FEC_MODIFICACION' },
                { data: 7, name: 'USR_MODIFICACION' },
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
                { targets: 6, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${data}</div>
                        `
                    },
                },                                          //Estado
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
                AbrirModalTurno(id, 'ver');
            });

            $('.edit-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalTurno(id, 'editar');
            });

            $('.delete-btn').on('click', function() {
                var id = $(this).data('id');
                EliminarTurno(id);
            });
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-turno-table-filter="search"]');
        let previousValue = filterSearch.value;
    
        filterSearch.addEventListener('change', function(e) {
            const currentValue = e.target.value;
            if (currentValue !== previousValue) {
                dt.search(currentValue).draw();
                previousValue = currentValue; // Actualizar el valor anterior
            }
        });
    }

    var handleCerrarModalturno = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_turno').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            $('[name="turno"]').val(null).trigger('change');
            $('[name="descripcion"]').val(null).trigger('change');
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    var handleSubmitturno = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formturno,
            {
                fields: {
                    'turno': {
                        validators: {
                            notEmpty: {
                                message: 'El turno es requerido'
                            }
                        }
                    },
                    'descripcion': {
                        validators: {
                            notEmpty: {
                                message: 'La descripción es requerida'
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

        // Handle Enviar Modal turnos
        submitturno.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {

                        msgLoad("Procesando...");
                        submitturno.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitturno.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formturno);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        
                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar turno' ? 'agregar' : 'editar';
                        datos.append('modo', apimode);

                        msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                            fetch(`${environment.apiSRD}/API/julia/turnos/editar-datos`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                if (datos.estado == 1) {
                                    $('[name="turno"]').val(null).trigger('change');
                                    $('[name="descripcion"]').val(null).trigger('change');
                                    document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                    document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                    validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                    $('#kt_modal_agregar_turno').modal('hide');
                                    
                                    // Configurar el orden antes de la recarga
                                    dt.order([4, 'desc']);

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
                                submitturno.setAttribute('data-kt-indicator', 'off');
                                submitturno.disabled = false;  // Habilitar botón después de procesar
                            });
                        }, () => {
                            submitturno.setAttribute('data-kt-indicator', 'off');
                            submitturno.disabled = false;
                        });
                    }
                });
            }
        });
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_turno_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");

            // Cerrar el modal
            $('#kt_turno_filtro_modal').modal('hide');
        
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

    // Limpiar Filtro turno
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_turno_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_turno');
            formFiltro.reset();
            $('[name="filtro-turno"]').val(null).trigger('change');
            $('[name="filtro-descripcion"]').val(null).trigger('change');
            document.querySelector(`input[name="filtro-estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="filtro-estado"][value="0"]`).checked = false;
            // Llamada a la función ajax.reload() en la instancia de DataTable
           
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

    // Agregar turno
    var handleAgregarturno = function() {
        const agregarturno = document.querySelector('[name="agregar-boton"]');
        agregarturno.addEventListener('click', function() {
            AbrirModalTurno(null, 'agregar');
        });
    }

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-turno');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formturno);
            datos.append('turno', $('[name="filtro-turno"]').val());
            datos.append('descripcion', $('[name="filtro-descripcion"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            
            fetch(`${environment.apiSRD}/API/julia/turnos/listar`, {
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
                a.download = 'CE_Lista_turnos.csv'; // Nombre del archivo a descargar
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
            formturno = document.getElementById('form_modal_agregar_turno');
            submitturno = document.getElementById('kt_modal_agregar_turno_submit');
            cancelarturno = document.getElementById('kt_modal_agregar_turno_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitturno();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalturno();
            handleAgregarturno();
            handleExportar();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTurnoList.init();
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
    datos['turno'] = $("[name='filtro-turno']").val();
    datos['descripcion'] = $("[name='filtro-descripcion']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val(); 

    return datos;
}

function AbrirModalTurno(id, modo) {
    msgLoad("Procesando...");
    if (modo == 'editar' || modo == 'ver') {

        // Deshabilitar todos los campos del formulario
        if (modo == 'ver') {
            // Deshabilitar todos los campos del formulario
            $('#form_modal_agregar_turno').find('input, select, textarea').prop('disabled', true);
            $('#kt_modal_agregar_turno_submit').hide();
        } else {
            $('#form_modal_agregar_turno').find('input, select, textarea').prop('disabled', false);
            $('#kt_modal_agregar_turno_submit').show();
        }

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/julia/turnos/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                $('[name="id"]').val(d.id).trigger('change');
                $('[name="turno"]').val(d.id).trigger('change');
                $('[name="descripcion"]').val(d.descripcion).trigger('change');
                
                document.querySelector(`input[name="estado"][value="${d.estado}"]`).checked = true;
                msgAutoClose();
                $('#kt_modal_agregar_turno').modal('show');
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        document.getElementById('titulo_modal').innerText = 'Editar turno';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';
        document.getElementById('titulo_modal').innerText = 'Agregar turno';

        //Habilitar el campo de turno
        $('[name="turno"]').prop('disabled', false);
        $('#kt_modal_agregar_turno_submit').show();
        msgAutoClose();

        $('#kt_modal_agregar_turno').modal('show');
    }
    
};

window.AbrirModalTurno = AbrirModalTurno;

function EliminarTurno(id) {    

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    msgWarning("¿Está seguro que desea eliminar el turno?", "Si, Eliminar", () => {
        msgLoad("Procesando...");
        fetch(`${environment.apiSRD}/API/julia/turnos/eliminar-turnos`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                
                var dt = $("#tb_turnos").DataTable();

                // Usar una promesa para manejar la recarga
                new Promise((resolve) => {
                    dt.ajax.reload(function() {
                        resolve(); // Resolver la promesa después de la recarga
                    });
                }).then(() => {
                    msgSuccessMixin("El turno ha sido eliminado exitosamente","");
                });
    
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });
    });

};

window.EliminarTurno = EliminarTurno;