"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTCambios = function() {
    // Shared variables
    
    var validator;
    var table;
    var table1;
    var table2;
    var submitcambio;
    var formcambio;
    var cancelarcambio;
    var dt;
    var dt1;
    var dt2;
    var ft1;
    var ft2;

    // Private functions
    var initDatatable1 = function() {
        
        dt = $("#tb_cambios").DataTable({
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
                url: `${environment.apiSRD}/API/julia/turnos/gestion/cambios/listar-paginado`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.codigo = datos.codigo;
                    d.solicitante = datos.solicitante;
                    d.receptor = datos.receptor;
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
                { data: 0, name: 'NCATU_ID' },
                { data: 1, name: 'CCATU_CODIGO' },
                { data: 2, name: 'SOLICITANTE' },
                { data: 3, name: 'DCATU_FECHA_SOLICITANTE' },
                { data: 4, name: 'CTURN_ID_SOLICITANTE' },
                { data: 5, name: 'RANGO_SOL' },
                { data: 6, name: 'RECEPTOR' },
                { data: 7, name: 'DCATU_FECHA_RECEPTOR' },
                { data: 8, name: 'CTURN_ID_RECEPTOR' },
                { data: 9, name: 'RANGO_REC' },
                { data: 10, name: 'ESTADO' },
                { data: 11, name: 'FEC_MODIFICACION' },
                { data: 12, name: 'USR_MODIFICACION' },
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
                { targets: 11, visible: true,
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
                AbrirModalcambio(id, 'ver');
            });

            $('.edit-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalcambio(id, 'editar');
            });

            $('.delete-btn').on('click', function() {
                var id = $(this).data('id');
                Eliminarcambio(id);
            });
        });
    }

    // Handle de componentes
    var handleComponentes = function() {
        ft1 = $('[name="fechasol"]').flatpickr({
            altInput: true,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
            locale: "es"
        });
        
        ft2 = $('[name="fecharec"]').flatpickr({
            altInput: true,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
            locale: "es"
        });

        const optionFormat = (item) => {
            if (!item.id) {
                return item.text;
            }
        
            var span = document.createElement('span');
            var template = '';
        
            template += '<div class="d-flex align-items-center">';
            template += '<div class="d-flex flex-column">'
            template += '<span class="fs-4 fw-bold lh-1">' + item.text + '</span>';
            template += '<span class="text-muted fs-6">' + item.element.getAttribute('data-subtitulo') + '</span>';
            template += '</div>';
            template += '</div>';
        
            span.innerHTML = template;
        
            return $(span);
        }

        // Inicialización de Select2 de Turno
        $('[name="turnosol"]').select2({
            placeholder: "Seleccione una opción",
            minimumResultsForSearch: Infinity,
            templateSelection: optionFormat,
            templateResult: optionFormat
        });

        $('[name="turnorec"]').select2({
            placeholder: "Seleccione una opción",
            minimumResultsForSearch: Infinity,
            templateSelection: optionFormat,
            templateResult: optionFormat
        });
    }

    // Handle Buscar Solicitante
    var handleBuscarSolicitante = function() {
        
        var btnSolicitante = document.querySelector('#btn_solicitante');
        btnSolicitante.addEventListener('click', function() {
            msgLoad("Procesando...");
            var datos = new FormData();
            datos.append('colaborador', $('[name="solicitante"]').val());
            datos.append('fecha', $('[name="fechasol"]').val());
            datos.append('periodo', $('[name="periodosol"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/buscar-por-fecha`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    // Cargar los valores en el Select2 de name="turnorec"
                    var turnos = datos.data;
                    var options = '';
                    for (var i = 0; i < turnos.length; i++) {
                        options += `<option value="${turnos[i].Id}" data-subtitulo="${turnos[i].HoraEntrada} - ${turnos[i].HoraSalida}">${turnos[i].Id}</option>`;
                    }   
                    $('[name="turnosol"]').html(options).trigger('change');

                    msgSuccess("Se encontraron turnos para el solicitante");
                } else if (datos.estado == 0) {
                    msgErrorNormal("No se encontraron turnos para el solicitante");
                    // Limpiar el combo de turnos
                    $('[name="turnosol"]').empty().trigger('change');
                } else {
                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                }
            });
        });
    }

    // Handle Buscar Receptor
    var handleBuscarReceptor = function() {
        var btnReceptor = document.querySelector('#btn_receptor');
        btnReceptor.addEventListener('click', function() {
            msgLoad("Procesando...");
            var datos = new FormData();
            datos.append('colaborador', $('[name="receptor"]').val());
            datos.append('fecha', $('[name="fecharec"]').val());
            datos.append('periodo', $('[name="periodorec"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/buscar-por-fecha`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    // Cargar los valores en el Select2 de name="turnorec"
                    var turnos = datos.data;
                    var options = '';
                    for (var i = 0; i < turnos.length; i++) {
                        options += `<option value="${turnos[i].Id}" data-subtitulo="${turnos[i].HoraEntrada} - ${turnos[i].HoraSalida}">${turnos[i].Id}</option>`;
                    }   
                    $('[name="turnorec"]').html(options).trigger('change');
                    msgSuccess("Se encontraron turnos para el receptor");
                } else if (datos.estado == 0) {
                    msgErrorNormal("No se encontraron turnos para el receptor");
                    // Limpiar el combo de turnos
                    $('[name="turnorec"]').empty().trigger('change');
                } else {
                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                }
            });
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-cambio-table-filter="search"]');
        let previousValue = filterSearch.value;
    
        filterSearch.addEventListener('change', function(e) {
            const currentValue = e.target.value;
            if (currentValue !== previousValue) {
                dt.search(currentValue).draw();
                previousValue = currentValue; // Actualizar el valor anterior
            }
        });
    }

    var handleCerrarModalcambio = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_cambio').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            formcambio.reset();
            $('[name="fechasol"]').val(null).trigger('change');
            $('[name="fecharec"]').val(null).trigger('change');
            $('[name="periodosol"]').val(null).trigger('change');
            $('[name="periodorec"]').val(null).trigger('change');
            $('[name="turnosol"]').val(null).trigger('change');
            $('[name="turnorec"]').val(null).trigger('change');
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    var handleSubmitCambio = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formcambio,
            {
                fields: {
                    'solicitante': {
                        validators: {
                            notEmpty: {
                                message: 'El nombre del solicitante es requerido'
                            }
                        }
                    },
                    'fechasol': {
                        validators: {
                            notEmpty: {
                                message: 'La fecha del solicitante es requerida'
                            },
                            date: {
                                format: 'YYYY-MM-DD',
                                message: 'La fecha del solicitante no es válida'
                            }
                        }
                    },
                    'periodosol': {
                        validators: {
                            notEmpty: {
                                message: 'El periodo del solicitante es requerido'
                            }
                        }
                    },
                    'turnosol': {
                        validators: {
                            notEmpty: {
                                message: 'El turno del solicitante es requerido'
                            }
                        }
                    },
                    'receptor': {
                        validators: {
                            notEmpty: {
                                message: 'El nombre del receptor es requerido'
                            }
                        }
                    },
                    'fecharec': {
                        validators: {
                            notEmpty: {
                                message: 'La fecha del receptor es requerida'
                            },
                            date: {
                                format: 'YYYY-MM-DD',
                                message: 'La fecha del receptor no es válida'
                            }
                        }
                    },
                    'periodorec': {
                        validators: {
                            notEmpty: {
                                message: 'El periodo del receptor es requerido'
                            }
                        }
                    },
                    'turnorec': {
                        validators: {
                            notEmpty: {
                                message: 'El turno del receptor es requerido'
                            }
                        }
                    },
                    'estado': {
                        validators: {
                            notEmpty: {
                                message: 'El estado es requerido'
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
        submitcambio.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {

                        msgLoad("Procesando...");
                        submitcambio.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitcambio.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formcambio);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        
                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar cambio' ? 'agregar' : 'editar';
                        datos.append('modo', apimode);

                        msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                            fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/editar-datos`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                if (datos.estado == 1) {
                                    $('[name="cambio"]').val(null).trigger('change');
                                    $('[name="descripcion"]').val(null).trigger('change');
                                    document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                    document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                    validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                    $('#kt_modal_agregar_cambio').modal('hide');
                                    
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
                                submitcambio.setAttribute('data-kt-indicator', 'off');
                                submitcambio.disabled = false;  // Habilitar botón después de procesar
                            });
                        }, () => {
                            submitcambio.setAttribute('data-kt-indicator', 'off');
                            submitcambio.disabled = false;
                        });
                    }
                });
            }
        });
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_cambio_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");

            // Cerrar el modal
            $('#kt_cambio_filtro_modal').modal('hide');
        
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

    // Limpiar Filtro cambio
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_cambio_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_cambio');
            formFiltro.reset();
            $('[name="filtro-cambio"]').val(null).trigger('change');
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

    // Agregar cambio
    var handleAgregarcambio = function() {
        const agregarcambio = document.querySelector('[name="agregar-boton"]');
        agregarcambio.addEventListener('click', function() {
            AbrirModalcambio(null, 'agregar');
        });
    }

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-cambio');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formcambio);
            datos.append('codigo', $('[name="filtro-codigo"]').val());
            datos.append('solicitante', $('[name="filtro-solicitante"]').val());
            datos.append('receptor', $('[name="filtro-receptor"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            
            fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/listar`, {
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
                a.download = 'CE_Lista_Cambios_Turnos.csv'; // Nombre del archivo a descargar
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

    // Abrir modal de selección de solicitante
    var handleSeleccionarSolicitante = function() {
        // Seleccionar el botón con name="solicante"
        const buscarSolicitanteButton = document.querySelector('[name="solicitante"]');
        // Reset datatable
        buscarSolicitanteButton.addEventListener('click', function(e) {
            e.preventDefault();
            $('#kt_buscar_usuario').modal('show');

            dt1 = $("#tb_usuario").DataTable({
                destroy: true,
                autoWidth: false,
                searchDelay: 500,
                serverSide: true,
                scrollX: false,
                select: true,
                order: [
                    [1, 'asc']
                ],
                stateSave: false,
                ajax: {
                    type: "POST",
                    url: `${environment.apiSRD}/API/julia/usuarios/listar-paginado`,
                    data: function(d) {
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
                    { data: 0, name: 'NUSUA_ID' },
                    { data: 1, name: 'CUSUA_NOMBRES' }
                ],
                columnDefs: [
                    { targets: 0, visible: false },         // KEY
                    { targets: 1, visible: true },          // NOMBRE
                    { targets: 2, visible: true,            //Acciones
                        data: null,
                        orderable: false,
                        className: 'text-end',
                        render: function(data, type, row) {
                            return `
                            <button class="btn btn-light btn-active-light-primary btn-sm selection-btn2 hover-scale">
                                <span class="me-2 ">Seleccionar</span>
                                <i class="ki-duotone ki-double-right fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </button>
                        `;
                        },
                    },
                ],
            });
    
            table1 = dt1.$;
    
            // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
            dt1.on('draw', function() {
                KTMenu.createInstances();

                // Add event listeners for buttons
                $('.selection-btn2').on('click', function() {
                    msgLoad("Procesando...");
                    var data1 = dt1.row($(this).parents('tr')).data();
                    var datos1 = new FormData();
                    datos1.append('usuario', $("#session_usuario_id").val());
                    datos1.append('usuario_rol', $("#session_rol_id").val());
                    datos1.append('id', data1[0]);
                    
                    fetch(`${environment.apiSRD}/API/julia/usuarios/obtener-por-id`, {
                        method: 'POST',
                        body: datos1
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            var d = datos.data;
                            // Asignar el valor del usuario seleccionado al input solicitante o receptor según corresponda
                            $('[name="solicitante"]').val(d.nombres).trigger('change');
                            // Limpiar combo de turnos
                            $('[name="turnosol"]').empty().trigger('change');
                            msgAutoClose();
                            $('#kt_buscar_usuario').modal('hide');
                            // Limpiar el input de búsqueda
                            document.querySelector('[data-kt-usuario-table-filter="Buscar"]').value = '';  
                            
                        } else {
                            msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                        }
                    });
                });
            });

        });
    }

    // Abrir modal de selección de receptor
    var handleSeleccionarReceptor = function() {
        // Seleccionar el botón con name="solicante"
        const buscarRecptorButton = document.querySelector('[name="receptor"]');
        // Reset datatable
        buscarRecptorButton.addEventListener('click', function(e) {
            e.preventDefault();
            $('#kt_buscar_usuario').modal('show');

            dt2 = $("#tb_usuario").DataTable({
                destroy: true,
                autoWidth: false,
                searchDelay: 500,
                serverSide: true,
                scrollX: false,
                select: true,
                order: [
                    [1, 'asc']
                ],
                stateSave: false,
                ajax: {
                    type: "POST",
                    url: `${environment.apiSRD}/API/julia/usuarios/listar-paginado`,
                    data: function(d) {
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
                    { data: 0, name: 'NUSUA_ID' },
                    { data: 1, name: 'CUSUA_NOMBRES' }
                ],
                columnDefs: [
                    { targets: 0, visible: false },         // KEY
                    { targets: 1, visible: true },          // NOMBRE
                    { targets: 2, visible: true,            //Acciones
                        data: null,
                        orderable: false,
                        className: 'text-end',
                        render: function(data, type, row) {
                            return `
                            <button class="btn btn-light btn-active-light-primary btn-sm selection-btn hover-scale">
                                <span class="me-2 ">Seleccionar</span>
                                <i class="ki-duotone ki-double-right fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </button>
                        `;
                        },
                    },
                ],
            });
    
            table2 = dt2.$;
    
            // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
            dt2.on('draw', function() {
                KTMenu.createInstances();

                // Add event listeners for buttons
                $('.selection-btn').on('click', function() {
                    msgLoad("Procesando...");
                    var data2 = dt2.row($(this).parents('tr')).data();
                    var datos2 = new FormData();
                    datos2.append('usuario', $("#session_usuario_id").val());
                    datos2.append('usuario_rol', $("#session_rol_id").val());
                    datos2.append('id', data2[0]);

                    fetch(`${environment.apiSRD}/API/julia/usuarios/obtener-por-id`, {
                        method: 'POST',
                        body: datos2
                    }).then(Response => Response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            var d = datos.data;
                            // Asignar el valor del usuario seleccionado al input solicitante o receptor según corresponda
                            $('[name="receptor"]').val(d.nombres).trigger('change');
                            // Limpiar combo de turnos
                            $('[name="turnorec"]').empty().trigger('change');
                            msgAutoClose();
                            $('#kt_buscar_usuario').modal('hide');
                            // Limpiar el input de búsqueda
                            document.querySelector('[data-kt-usuario-table-filter="Buscar"]').value = '';  
                            
                        } else {
                            msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                        }
                    });
                });
            });

        });
    }

    // Botón actualizar DataTable de compañía
    var handleActualizarUsuario = function() {
        var botonactualizar = document.querySelector('#btn-actualizar-usuario');

        botonactualizar.addEventListener('click', function(e) {
            e.preventDefault();
            dt1.ajax.reload();
        });
    }

    // Public methods
    return {
        init: function() {
            formcambio = document.getElementById('form_modal_agregar_cambio');
            submitcambio = document.getElementById('kt_modal_agregar_cambio_submit');
            cancelarcambio = document.getElementById('kt_modal_agregar_cambio_cancel');

            initDatatable1();
            handleComponentes();
            handleSearchDatatable();
            handleSubmitCambio();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalcambio();
            handleAgregarcambio();
            handleExportar();
            handleBuscarSolicitante();
            handleBuscarReceptor();
            handleSeleccionarSolicitante();
            handleSeleccionarReceptor();
            handleActualizarUsuario();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCambios.init();
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
    datos['solicitante'] = $("[name='filtro-solicitante']").val();
    datos['receptor'] = $("[name='filtro-receptor']").val();
    datos['fechasol'] = $("[name='filtro-descripcion']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val(); 

    return datos;
}

function AbrirModalcambio(id, modo) {
    msgLoad("Procesando...");
    if (modo == 'editar' || modo == 'ver') {

        // Deshabilitar todos los campos del formulario
        if (modo == 'ver') {
            // Deshabilitar todos los campos del formulario
            $('#form_modal_agregar_cambio').find('input, select, textarea').prop('disabled', true);
            $('#btn_solicitante').prop('disabled', true);
            $('#btn_receptor').prop('disabled', true);
            $('#kt_modal_agregar_cambio_submit').hide();
        } else {
            $('#form_modal_agregar_cambio').find('input, select, textarea').prop('disabled', false);
            $('#btn_solicitante').prop('disabled', false);
            $('#btn_receptor').prop('disabled', false);
            $('#kt_modal_agregar_cambio_submit').show();
        }

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                $('[name="id"]').val(d.Id).trigger('change');
                $('[name="codigo"]').val(d.Codigo).trigger('change');
                $('[name="solicitante"]').val(d.Solicitante).trigger('change');
                $('[name="periodosol"]').val(d.PeriodoSolicitante).trigger('change');
                $('[name="periodorec"]').val(d.PeriodoReceptor).trigger('change');
                $('[name="turnosol"]').val(d.TurnoSolicitante).trigger('change');
                $('[name="rangosolini"]').val(d.RangoIniSol).trigger('change');
                $('[name="rangosolfin"]').val(d.RangoFinSol).trigger('change');
                $('[name="receptor"]').val(d.Receptor).trigger('change');
                $('[name="turnorec"]').val(d.TurnoReceptor).trigger('change');
                $('[name="rangorecini"]').val(d.RangoIniRec).trigger('change');
                $('[name="rangorecfin"]').val(d.RangoFinRec).trigger('change');
                var ft1 = $('[name="fechasol"]').flatpickr({
                    altInput: true,
                    altFormat: "d/m/Y",
                    dateFormat: "Y-m-d",
                    locale: "es"
                });
                ft1.setDate([d.FechaSolicitante]);
                var ft2 = $('[name="fecharec"]').flatpickr({
                    altInput: true,
                    altFormat: "d/m/Y",
                    dateFormat: "Y-m-d",
                    locale: "es"
                });
                ft2.setDate([d.FechaReceptor]);

                var datos = new FormData();
                datos.append('colaborador', d.Solicitante);
                datos.append('fecha', d.FechaSolicitante);
                datos.append('periodo', d.PeriodoSolicitante);
                datos.append('usuario', $("#session_usuario_id").val());
                datos.append('usuario_rol', $("#session_rol_id").val());
                fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/buscar-por-fecha`, {
                    method: 'POST',
                    body: datos
                }).then(Response => Response.json())
                .then(datos => {
                    if (datos.estado == 1) {
                        // Cargar los valores en el Select2 de name="turnorec"
                        var turnos = datos.data;
                        var options = '';
                        for (var i = 0; i < turnos.length; i++) {
                            options += `<option value="${turnos[i].Id}" data-subtitulo="${turnos[i].HoraEntrada} - ${turnos[i].HoraSalida}">${turnos[i].Id}</option>`;
                        }   
                        $('[name="turnosol"]').html(options).trigger('change');
                        $('[name="turnosol"]').val(d.TurnoSolicitante).trigger('change');
                    }
                });

                var datos = new FormData();
                datos.append('colaborador', d.Receptor);
                datos.append('fecha', d.FechaReceptor);
                datos.append('periodo', d.PeriodoReceptor);
                datos.append('usuario', $("#session_usuario_id").val());
                datos.append('usuario_rol', $("#session_rol_id").val());
                fetch(`${environment.apiSRD}/API/julia/turnos/gestion/cambios/buscar-por-fecha`, {
                    method: 'POST',
                    body: datos
                }).then(Response => Response.json())
                .then(datos => {
                    if (datos.estado == 1) {
                        // Cargar los valores en el Select2 de name="turnorec"
                        var turnos = datos.data;
                        var options = '';
                        for (var i = 0; i < turnos.length; i++) {
                            options += `<option value="${turnos[i].Id}" data-subtitulo="${turnos[i].HoraEntrada} - ${turnos[i].HoraSalida}">${turnos[i].Id}</option>`;
                        }   
                        $('[name="turnorec"]').html(options).trigger('change');
                        $('[name="turnorec"]').val(d.TurnoReceptor).trigger('change');
                    }
                });

                document.querySelector(`input[name="estado"][value="${d.Estado}"]`).checked = true;
                msgAutoClose();
                $('#kt_modal_agregar_cambio').modal('show');
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        document.getElementById('titulo_modal').innerText = 'Editar cambio';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';
        document.getElementById('titulo_modal').innerText = 'Agregar cambio';

        //Habilitar el campo de cambio
        $('#form_modal_agregar_cambio').find('input, select, textarea').prop('disabled', false);
        $('#kt_modal_agregar_cambio_submit').show();
        $('#btn_solicitante').prop('disabled', false);
        $('#btn_receptor').prop('disabled', false);
        $('[name="codigo"]').hide();
        msgAutoClose();

        $('#kt_modal_agregar_cambio').modal('show');
    }
};

window.AbrirModalcambio = AbrirModalcambio;

function Eliminarcambio(id) {

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    msgWarning("¿Está seguro que desea eliminar el periodo?", "Si, Eliminar", () => {
        msgLoad("Procesando...");
        fetch(`${environment.apiSRD}/API/julia/cambios/eliminar`, {
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
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });
    });

};

window.Eliminarcambio = Eliminarcambio;