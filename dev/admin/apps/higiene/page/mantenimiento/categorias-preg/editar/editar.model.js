"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTCategoriaPregList = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitPregunta;
    var formPregunta;
    var cancelarPregunta;
    var dt1;
    var nNuevo = false;

    // Private functions
    var initDatatable1 = function() {
        dt1 = $("#tb_categorias").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            order: [
                [2, 'asc']
            ],
            select: {
              style: 'single',
              toggleable: false
            },
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/higiene/preguntas-cat/lista`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.categoria = datos.categoria;
                    d.estado = datos.estado;
                    d.usuario = $("#session_usuario_id").val();
                    d.usuario_rol = $("#session_rol_id").val();
                }
            },
            columns: [
                { data: null, name: 'acciones'},
                { data: 0, name: 'NHCAP_ID' },
                { data: 1, name: 'NHCAP_ORDEN' },
                { data: 2, name: 'CHCAP_NOMBRE' },
                { data: 3, name: 'ESTADO' },
                { data: 4, name: 'FEC_MODIFICACION' },
                { data: 5, name: 'USR_MODIFICACION' }
            ],
            columnDefs: [
                { targets: 0, visible: true,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                            <a href="javascript:AbrirModalCategoria('${(row[0])}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">
                                <i class="ki-duotone ki-notepad-edit text-info fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                </i>
                            </a>
                            <a href="javascript:EliminarCategoria('${(row[0])}');" class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px">
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
                { targets: 1, visible: false },
                { targets: 4, visible: true,
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
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                    },
                    {
                      extend: "csv",
                      bom: "true",
                      text: '<i class="bx bx-file me-2" ></i>Csv',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      filename: "Reporte de Preguntas"
                    },
                    {
                      extend: 'excel',
                      text: '<i class="bx bx-file me-2" ></i>Excel',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      filename: "Reporte de Preguntas",
                    },
                    {
                      extend: "pdf",
                      text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                      className: "dropdown-item",
                      action: newexportaction,
                      exportOptions: { columns: [1, 2, 3, 4, 5, 6] },
                      filename: "Reporte de Preguntas",
                      customize: function (doc) {
                        doc.content.unshift({
                            text: 'Reporte de Preguntas', // Texto del encabezado
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
        const filterSearch1 = document.querySelector('[data-kt-categorias-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
    }

    var handleCerrarModalPregunta = function() {
        // Evento que se ejecuta al cerrar el modal
        $('#kt_modal_agregar_categorias').on('hidden.bs.modal', function () {
            // Limpiar el formulario
            $('[name="id"]').val(null).trigger('change');
            $('[name="categoria"]').val(null).trigger('change');
            $('[name="orden"]').val(null).trigger('change');
            document.querySelector(`input[name="estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="estado"][value="0"]`).checked = false;
            validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
        });
    }

    // Submit form handler
    const handleSubmitPregunta = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formPregunta,
            {
                fields: {
                    'categoria': {
                        validators: {
                            notEmpty: {
                                message: 'La categoría es requerida'
                            }
                        }
                    },
                    'orden': {
                        validators: {
                            notEmpty: {
                                message: 'El orden es requerido'
                            },
                            integer: {
                                message: 'El valor debe ser numérico'
                            }
                        }
                    },
                    'estado': {
                        validators: {
                            notEmpty: {
                                message: 'El estado es requerido'
                            },
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
        submitPregunta.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        submitPregunta.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitPregunta.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formPregunta);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('orden', $('[name="orden"]').val());
                        datos.append('categoria', $('[name="categoria"]').val());

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Pregunta' ? 'agregar' : 'editar';

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
                                
                                fetch(`${environment.apiSRD}/API/jci/preguntas-cat/${apimode}-categoria`, {
                                    method: 'POST',
                                    body: datos
                                }).then(Response => Response.json())
                                .then(datos => {
                                    if (datos.estado == 1) {
                                        if (apimode == 'agregar') {
                                            swal.fire({
                                                text: "Se ha agregado la categoria correctamente",
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
                                        $('[name="categoria"]').val(null).trigger('change');
                                        $('[name="orden"]').val(null).trigger('change');
                                        document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                        document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                        validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                        dt1.ajax.reload();
                                        $('#kt_modal_agregar_categorias').modal('hide');
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

                        submitPregunta.setAttribute('data-kt-indicator', 'off');
                        // Disable submit button whilst loading
                        submitPregunta.disabled = false;
                    }
                });
            }
        })
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_categorias_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Cerrar el modal
            $('#kt_categorias_filtro_modal').modal('hide');
            
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
        const limpiarButton = document.querySelector('#kt_modal_filtro_categorias_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_categorias');
            formFiltro.reset();
            $('[name="filtro-categorias"]').val(null).trigger('change');
            $('[name="filtro-categoria"]').val(null).trigger('change');
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
            formPregunta = document.getElementById('form_modal_agregar_categorias');
            submitPregunta = document.getElementById('kt_modal_agregar_categorias_submit');
            cancelarPregunta = document.getElementById('kt_modal_agregar_categorias_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitPregunta();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalPregunta();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCategoriaPregList.init();
});

function AbrirModalCategoria(id, modo) {

    if (modo == 'editar') {

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/jci/preguntas-cat/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                $('[name="id"]').val(d.idcap).trigger('change');
                $('[name="categoria"]').val(d.categoria).trigger('change');
                $('[name="orden"]').val(d.orden).trigger('change');
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

        document.getElementById('titulo_modal').innerText = 'Editar Pregunta';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';

        document.getElementById('titulo_modal').innerText = 'Agregar Pregunta';
    }

    $('#kt_modal_agregar_categorias').modal('show');
};

window.AbrirModalCategoria = AbrirModalCategoria;

function EliminarCategoria(id) {

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    Swal.fire({
        title: "¿Está seguro que desea eliminar la categoria?",
        text: "Este proceso no podrá ser revertido",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        confirmButtonColor: "#f06445",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${environment.apiSRD}/API/jci/preguntas-cat/eliminar-categoria`, {
                method: 'POST',
                body: datos
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: "La categoria ha sido eliminada exitosamente",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                    });
                       
                    var dt1 = $("#tb_categorias").DataTable();
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

window.EliminarCategoria = EliminarCategoria;

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
    datos['categoria'] = $("[name='filtro-categoria']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val();

    return datos;
}