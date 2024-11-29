"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTPersonalList = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitServicio;
    var formServicio;
    var cancelarServicio;
    var dt1;

    // Private functions
    var initDatatable1 = function() {
        
        dt1 = $("#tb_periodos").DataTable({
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
                url: `${environment.apiSRD}/API/jci/servicios/lista`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.servicio = datos.servicio;
                    d.supervisor = datos.supervisor;
                    d.estado = datos.estado;
                    d.usuario = $("#session_usuario_id").val();
                    d.usuario_rol = $("#session_rol_id").val();
                }
            },
            columns: [
                { data: null, name: 'acciones'},
                { data: 0, name: 'NASUP_ID' },
                { data: 1, name: 'CAREA_DESCRIPCION' },
                { data: 5, name: 'SUPERVISOR' },
                { data: 2, name: 'ESTADO' },
                { data: 3, name: 'FEC_MODIFICACION' },
                { data: 4, name: 'USR_MODIFICACION' },
            ],
            columnDefs: [
                { targets: 0, visible: true,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                            <a href="javascript:AbrirModalServicio('${(row[0])}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">
                                <i class="ki-duotone ki-notepad-edit text-info fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </a>
                            <a href="javascript:EliminarServicio('${(row[0])}');" class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px">
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
                { targets: 4, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${data}</div>
                        `
                    },
                },                                          //Estado
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
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                    },
                    {
                      extend: "csv",
                      bom: "true",
                      text: '<i class="bx bx-file me-2" ></i>Csv',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      filename: "Reporte de Servicios",
                    },
                    {
                      extend: 'excel',
                      text: '<i class="bx bx-file me-2" ></i>Excel',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      filename: "Reporte de Servicios",
                    },
                    {
                      extend: "pdf",
                      text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      customize: function (doc) {
                        doc.content.unshift({
                            text: 'Reporte de Usuarios', // Texto del encabezado
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
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
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
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch1 = document.querySelector('[data-kt-servicio-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
    }

    var handleCerrarModalServicio = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_servicio').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            $('[name="servicio"]').val(null).trigger('change');
            $('[name="supervisor"]').val(null).trigger('change');
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    const handleSubmitServicio = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formServicio,
            {
                fields: {
                    'servicio': {
                        validators: {
                            notEmpty: {
                                message: 'El servicio es requerido'
                            }
                        }
                    },
                    'supervisor': {
                        validators: {
                            notEmpty: {
                                message: 'El supervisor es requerido'
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
        submitServicio.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        submitServicio.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitServicio.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formServicio);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('servicio', $('[name="servicio"]').val());

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Servicio' ? 'agregar' : 'editar';

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

                                fetch(`${environment.apiSRD}/API/jci/servicios/${apimode}-servicios`, {
                                    method: 'POST',
                                    body: datos
                                }).then(Response => Response.json())
                                .then(datos => {
                                    if (datos.estado == 1) {
                                        if (apimode == 'agregar') {
                                            swal.fire({
                                                text: "Se ha agregado el servicio correctamente",
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
                                        $('[name="servicio"]').val(null).trigger('change');
                                        $('[name="supervisor"]').val(null).trigger('change');
                                        document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                        document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                        validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                        dt1.ajax.reload();
                                        $('#kt_modal_agregar_servicio').modal('hide');
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

                        submitServicio.setAttribute('data-kt-indicator', 'off');
                        // Disable submit button whilst loading
                        submitServicio.disabled = false;
                    }
                });
            }
        })
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_servicio_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Cerrar el modal
            $('#kt_servicio_filtro_modal').modal('hide');
        
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

    // Limpiar Filtro Servicio
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_servicio_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_servicio');
            formFiltro.reset();
            $('[name="filtro-servicio"]').val(null).trigger('change');
            $('[name="filtro-supervisor"]').val(null).trigger('change');
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
            formServicio = document.getElementById('form_modal_agregar_servicio');
            submitServicio = document.getElementById('kt_modal_agregar_servicio_submit');
            cancelarServicio = document.getElementById('kt_modal_agregar_servicio_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitServicio();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalServicio();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPersonalList.init();
});

function AbrirModalServicio(id, modo) {

    if (modo == 'editar') {
        // Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/jci/servicios/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                $('[name="id"]').val(d.id).trigger('change');
                $('[name="servicio"]').val(d.servicio).trigger('change');
                //Inhabilitar el campo de servicio
                $('[name="servicio"]').prop('disabled', true);
                $('[name="supervisor"]').val(d.usuario).trigger('change');
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

        document.getElementById('titulo_modal').innerText = 'Editar Servicio';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';
        document.getElementById('titulo_modal').innerText = 'Agregar Servicio';

        //Habilitar el campo de servicio
        $('[name="servicio"]').prop('disabled', false);
    }

    $('#kt_modal_agregar_servicio').modal('show');
};

window.AbrirModalServicio = AbrirModalServicio;

function EliminarServicio(id) {    

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    Swal.fire({
        title: "¿Está seguro que desea eliminar el servicio?",
        text: "Este proceso no podrá ser revertido",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        confirmButtonColor: "#f06445",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${environment.apiSRD}/API/jci/servicios/eliminar-servicios`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: "El servicio ha sido eliminado exitosamente",
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

window.EliminarServicio = EliminarServicio;

function newexportaction(e, dt, button, config) {
    var self = this;
    var oldStart = dt.settings()[0]._iDisplayStart;
    dt.one('preXhr', function (e, s, data) {
      // Just this once, load all data from the server...
      data.start = 0;
      data.length = -1;
      dt.one('preDraw', function (e, settings) {
        // Call the original action function
        if (button[0].className.indexOf('buttons-copy') >= 0) {
          $.fn.dataTable.ext.buttons.copyHtml5.action.call(self, e, dt, button, config);
        } else if (button[0].className.indexOf('buttons-excel') >= 0) {
          $.fn.dataTable.ext.buttons.excelHtml5.available(dt, config) ?
          $.fn.dataTable.ext.buttons.excelHtml5.action.call(self, e, dt, button, config) :
          $.fn.dataTable.ext.buttons.excelFlash.action.call(self, e, dt, button, config);
        } else if (button[0].className.indexOf('buttons-csv') >= 0) {
          $.fn.dataTable.ext.buttons.csvHtml5.available(dt, config) ?
          $.fn.dataTable.ext.buttons.csvHtml5.action.call(self, e, dt, button, config) :
          $.fn.dataTable.ext.buttons.csvFlash.action.call(self, e, dt, button, config);
        } else if (button[0].className.indexOf('buttons-pdf') >= 0) {
          $.fn.dataTable.ext.buttons.pdfHtml5.available(dt, config) ?
          $.fn.dataTable.ext.buttons.pdfHtml5.action.call(self, e, dt, button, config) :
          $.fn.dataTable.ext.buttons.pdfFlash.action.call(self, e, dt, button, config);
        } else if (button[0].className.indexOf('buttons-print') >= 0) {
          $.fn.dataTable.ext.buttons.print.action(e, dt, button, config);
        }
        dt.one('preXhr', function (e, s, data) {
            // DataTables thinks the first item displayed is index 0, but we're not drawing that.
            // Set the property to what it was before exporting.
            settings._iDisplayStart = oldStart;
            data.start = oldStart;
        });
        // Reload the grid with the original page. Otherwise, API functions like table.cell(this) don't work properly.
        setTimeout(dt.ajax.reload, 0);
        // Prevent rendering of the full data to the DOM
        return false;
      });
    });
    // Requery the server with the new one-time export settings
    dt.ajax.reload();
}

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
    datos['estado'] = estado;
    datos['usuario'] = $('#estado').val();
    datos['usuario_rol'] = $('#fechain').val();

    return datos;
}