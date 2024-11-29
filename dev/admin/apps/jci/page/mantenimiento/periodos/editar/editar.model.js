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
    var dt1;
    var ft;
    var ft1;

    // Private functions
    var initDatatable1 = function() {
        dt1 = $("#tb_periodos").DataTable({
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
                            <a href="javascript:AbrirModalPeriodo('${(row[0])}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">
                                <i class="ki-duotone ki-notepad-edit text-info fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </a>
                            <a href="javascript:EliminarPeriodo('${(row[0])}');" class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px">
                                <i class="ki-duotone ki-trash text-warning fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </a>
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
            ],
            buttons: [
                {
                  extend: "collection",
                  className: "btn btn-label-secondary dropdown-toggle mx-3",
                  text: '<i class="bx bx-upload me-2"></i>Exportar',
                  buttons: [
                    {
                      extend: "print",
                      text: '<i class="bx bx-printer me-2" ></i>Imprimir',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7] },
                    },
                    {
                      extend: "csv",
                      bom: "true",
                      text: '<i class="bx bx-file me-2" ></i>Csv',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7] },
                      filename: "Reporte de Periodo"
                    },
                    {
                      extend: 'excel',
                      text: '<i class="bx bx-file me-2" ></i>Excel',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7] },
                      filename: "Reporte de Periodo",
                    },
                    {
                      extend: "pdf",
                      text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7] },
                      filename: "Reporte de Periodo",
                      customize: function (doc) {
                        doc.content.unshift({
                            text: 'Reporte de Periodo', // Texto del encabezado
                            fontSize: 14, // Tamaño de fuente
                            alignment: 'center', // Alineación
                            margin: [0, 10], // Margen superior e inferior
                        });
                        doc.defaultStyle.fontSize = 9;
                        doc.styles.tableHeader.fontSize = 11;
                        doc.pageOrientation = 'landscape'; // Cambiar a orientación horizontal
                        doc.pageSize = 'A4'; // Cambiar el tamaño del papel (por ejemplo, A4)
                    },
                    },
                    {
                      extend: "copy",
                      text: '<i class="bx bx-copy me-2" ></i>Copiar',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6, 7] },
                    },
                  ],
                }
            ],
        });

        dt1.on('draw.dt', function () {
          dt1.row(':eq(0)').select();
        });

        table = dt1.$;
        
        dt1.on('draw', function() {
            KTMenu.createInstances();
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
                        datos.append('idapp', "ENF_003");
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
                                
                                fetch(`${environment.apiSRD}/API/periodos/${apimode}-periodo`, {
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
    KTPeriodo.init();
});

function AbrirModalPeriodo(id, modo) {

    if (modo == 'editar') {
        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        var datos = new FormData();
        datos.append('idapp', "ENF_003");
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
    datos.append('idapp', "ENF_003");
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
            fetch(`${environment.apiSRD}/API/periodos/eliminar-periodo`, {
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
    datos['idapp'] = "ENF_003";
    datos['periodo'] = $("[name='filtro-periodo']").val();
    datos['fecha'] = $("[name='filtro-fecha']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val();

    return datos;
}

