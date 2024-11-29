"use strict";

import { environment } from "../../../../../../../environment.js";

// Class definition
var KTPersonalList = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitUsuario;
    var formUsuario;
    var cancelarUsuario;
    var dt1;

    // Private functions
    var initDatatable1 = function() {

        dt1 = $("#tb_usuarios").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            order: [
                [3, 'asc']
            ],
            select: {
              style: 'single',
              toggleable: false
            },
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/julia/usuarios/lista`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.ocupacion = datos.ocupacion;
                    d.desempenio = datos.desempenio;
                    d.nacionalidad = datos.nacionalidad;
                    d.estado = datos.estado;
                    d.usuario = $("#session_usuario_id").val();
                    d.usuario_rol = $("#session_rol_id").val();
                }
            },
            columns: [
                { data: null, name: 'acciones'},
                { data: 0, name: 'NUSUA_ID' },
                { data: 1, name: 'CUSUA_CODIGO' },
                { data: 2, name: 'CUSUA_DOCUMENTO' },
                { data: 3, name: 'CUSUA_NOMBRES' },
                { data: 4, name: 'COCUP_DESCRIPCION' },
                { data: 5, name: 'CNACI_DESCRIPCION' },
                { data: 6, name: 'CNACI_IMAGEN' },
                { data: 7, name: 'CUSUA_CORREO' },
                { data: 8, name: 'CUSUA_IMG' },
                { data: 9, name: 'CROLE_NOMBRE' },
                { data: 10, name: 'ESTADO' },
                { data: 11, name: 'FEC_MODIFICACION' },
                { data: 12, name: 'USR_MODIFICACION' },
            ],
            columnDefs: [
                {   targets: 0, 
                    visible: true,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                            <a href="javascript:AbrirModalUsuario('${(row[0])}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">
                                <i class="ki-duotone ki-notepad-edit text-info fs-2">
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
                {   targets: 1, visible: false },           //Key
                {   targets: 2, visible: false },           //Codigo
                {   targets: 3, visible: false},            //Documento
                {   targets: 4, visible: true,
                    className: 'd-flex align-items-center',
                    render: function (data, type, row) {
                        var user_img = row[8];
                        if (user_img != 'blank.png') {
                        // For Avatar image
                        var $output = '<div class=symbol-label><img src="assets/media/avatars/' + user_img + '" alt="Avatar" class="w-100"></div>';
                        } else {
                        // For Avatar badge
                        var stateNum = Math.floor(Math.random() * 6);
                        var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
                        var $state = states[stateNum],
                        
                        $initials = data.match(/\b\w/g) || [];
                        $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
                        $output = '<div class="symbol-label fs-3 bg-light-' + $state + ' text-' + $state + '">' + $initials + '</div>';
                        }
                        return `                        
                        <!--begin:: Avatar -->
                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <span class="text-gray-800 text-hover-primary mb-1" data-bs-toggle="tooltip">
                                ${$output}
                            </span>
                        </div>
                        <!--end::Avatar-->

                        <!--begin::User details-->
                        <div class="d-flex flex-column">
                            <span class="mb-1" data-bs-toggle="tooltip" title="Haga click aquí para cerrar su sesión">${data}</span>
                            <span>${row[7]}</span>
                        </div>
                        <!--end::User details-->                        
                        `
                    }
                },                                          //Nombres
                {   targets: 5, visible: true},             //Desempeño
                {   targets: 6, visible: true,
                    render: function (data, type, row) {                    
                        return `                        
                          <!--begin::Flag-->
                          <img src="assets/media/flags/${row[6]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />
                          <!--end::Flag-->
                          <span class="fs-7">${data}</span>                      
                        `
                      }
                },                                          //Nacionalidad
                {   targets: 7, visible: false},            //Imagen Nacionalidad
                {   targets: 8, visible: false},            //Correo
                {   targets: 9, visible: false},            //Imagen Usuario
                {   targets: 10, visible: false},            //Roles
                {   targets: 11, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                        `
                    },
                },                                          //Estado
                {   targets: 12, visible: true},            //Modificado por
                {   targets: 13, visible: true},            //Modificado
                {   targets: 14, visible: false,
                    title: 'Colaborador',
                    render: function (data, type, row) {
                        return row[3];
                    }
                },                                          //Modificado
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
                        filename: "Reporte de Usuarios",
                        exportOptions: { columns: [2, 3, 14, 5, 6, 8, 10, 11, 12, 13] },
                    },
                    {
                        extend: "csv",
                        bom: "true",
                        text: '<i class="bx bx-file me-2" ></i>Csv',
                        className: "dropdown-item",
                        action: newexportaction,
                        filename: "Reporte de Usuarios",
                        exportOptions: { columns: [2, 3, 14, 5, 6, 8, 10, 11, 12, 13] },
                    },
                    {
                        extend: 'excel',
                        text: '<i class="bx bx-file me-2" ></i>Excel',
                        className: "dropdown-item",
                        action: newexportaction,
                        filename: "Reporte de Usuarios",
                        exportOptions: { columns: [2, 3, 14, 5, 6, 8, 10, 11, 12, 13] },
                    },
                    {
                        extend: "pdf",
                        text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                        className: "dropdown-item",
                        action: newexportaction,
                        filename: "Reporte de Usuarios",
                        exportOptions: { columns: [2, 3, 14, 5, 6, 8, 10, 11, 12, 13] },
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
                        exportOptions: { columns: [2, 3, 14, 5, 6, 8, 10, 11, 12, 13] },
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
        const filterSearch1 = document.querySelector('[data-kt-usuario-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
    }

    var handleCerrarModalUsuario = function() {
        cancelarUsuario.addEventListener('click', function() {
            $('[name="usuario"]').val(null).trigger('change');
            $('[name="supervisor"]').val(null).trigger('change');
            $('#kt_modal_agregar_usuario').modal('hide');
        });
    }

    // Submit form handler
    var handleSubmitUsuario = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formUsuario,
            {
                fields: {
                    'codigo': {
                        validators: {
                            notEmpty: {
                                message: 'El código es requerido'
                            }
                        }
                    },
                    'documento': {
                        validators: {
                            notEmpty: {
                                message: 'El número de documento es requerido'
                            }
                        }
                    },
                    'nombres': {
                        validators: {
                            notEmpty: {
                                message: 'El nombre es requerido'
                            }
                        }
                    },
                    'desempenio': {
                        validators: {
                            notEmpty: {
                                message: 'El desempeño es requerido'
                            }
                        }
                    },
                    'ocupacion': {
                        validators: {
                            notEmpty: {
                                message: 'La ocupación es requerida'
                            }
                        }
                    },
                    'nacionalidad': {
                        validators: {
                            notEmpty: {
                                message: 'La nacionalidad es requerida'
                            }
                        }
                    },
                    'rol': {
                        validators: {
                            notEmpty: {
                                message: 'El rol es requerido'
                            }
                        }
                    },
                    'correo': {
                        validators: {
                            notEmpty: {
                                message: 'El correo es requerido'
                            },
                            emailAddress: {
                                message: 'El correo no es válido'
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
        submitUsuario.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        submitUsuario.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitUsuario.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formUsuario);
                        datos.append('key', $('[name="id"]').val());
                        datos.append('nombres', $('[name="nombres"]').val());
                        datos.append('codigo', $('[name="codigo"]').val());
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        datos.append('desempenio', $('[name="desempenio"]').val());
                        datos.append('ocupacion', $('[name="ocupacion"]').val());
                        datos.append('nacionalidad', $('[name="nacionalidad"]').val());
                        datos.append('rol', $('[name="rol"]').val());

                        fetch(`${environment.apiSRD}/API/julia/usuarios/editar-usuarios`, {
                            method: 'POST',
                            body: datos
                        }).then(Response => Response.json())
                        .then(datos => {
                            if (datos.estado == 1) {
                                Swal.fire({
                                    toast: true,
                                    position: "top-end",
                                    icon: "success",
                                    title: "Los cambios han sido guardados exitosamente",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true
                                });
                            
                                validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                dt1.ajax.reload();
                                $('#kt_modal_agregar_usuario').modal('hide');
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
                        submitUsuario.setAttribute('data-kt-indicator', 'off');
                        // Disable submit button whilst loading
                        submitUsuario.disabled = false;
                    }
                });
            }
        })
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_usuario_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Llamada a la función ajax.reload() en la instancia de DataTable
            dt1.ajax.reload();
            
            // Cerrar el modal
            $('#kt_usuario_filtro_modal').modal('hide');

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
        const limpiarButton = document.querySelector('#kt_modal_filtro_usuario_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_usuario');
            formFiltro.reset();
            $('[name="filtro-ocupacion"]').val(null).trigger('change');
            $('[name="filtro-desempenio"]').val(null).trigger('change');
            $('[name="filtro-nacionalidad"]').val(null).trigger('change');
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
            formUsuario = document.getElementById('form_modal_agregar_usuario');
            submitUsuario = document.getElementById('kt_modal_agregar_usuario_submit');
            cancelarUsuario = document.getElementById('kt_modal_agregar_usuario_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSubmitUsuario();
            handleSubmitFiltro();
            handleLimpiarFiltro();
            handleCerrarModalUsuario();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPersonalList.init();
});

function AbrirModalUsuario(id, modo) {

    if (modo == 'editar') {

        var datos = new FormData();
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('id', id);

        fetch(`${environment.apiSRD}/API/julia/usuarios/obtener-por-id`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                var d = datos.data;
                //Cargamos la imagen
                document.querySelector("#sh_img").style.backgroundImage = "url('" + "assets/media/avatars/" + d.img + "')";
                $('[name="id"]').val(d.idusuario).trigger('change');
                $('[name="codigo"]').val(d.codigo).trigger('change');
                $('[name="documento"]').val(d.documento).trigger('change');
                $('[name="nombres"]').val(d.nombres).trigger('change');
                $('[name="desempenio"]').val(d.desem).trigger('change');
                $('[name="ocupacion"]').val(d.ocup).trigger('change');
                $('[name="nacionalidad"]').val(d.naci).trigger('change');
                $('[name="rol"]').val(d.rol).trigger('change');
                $('[name="correo"]').val(d.correo).trigger('change');
                document.querySelector(`input[name="estado"][value="${d.estado}"]`).checked = true;
                $("[name='nombres']").prop('disabled', true);
                $("[name='codigo']").prop('disabled', true);

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

        document.getElementById('titulo_modal').innerText = 'Editar Usuario';
    } else {
        // Limpiar formulario
        $('[name="id"]').val(null).trigger('change');
        $('[name="codigo"]').val(null).trigger('change');
        $('[name="documento"]').val(null).trigger('change');
        $('[name="nombres"]').val(null).trigger('change');
        $('[name="desempenio"]').val(null).trigger('change');
        $('[name="ocupacion"]').val(null).trigger('change');
        $('[name="nacionalidad"]').val(null).trigger('change');
        $('[name="rol"]').val(null).trigger('change');
        $('[name="correo"]').val(null).trigger('change');
        document.querySelector(`input[name="estado"][value="1"]`).checked = false;
        document.querySelector(`input[name="estado"][value="0"]`).checked = false;
        document.querySelector("#sh_img").style.backgroundImage = "url('" + "assets/media/avatars/" + "blank.png" + "')";
        $("[name='nombres']").prop('disabled', false);
        $("[name='codigo']").prop('disabled', false);
        document.getElementById('titulo_modal').innerText = 'Agregar Usuario';
    }

    $('#kt_modal_agregar_usuario').modal('show');
};

window.AbrirModalUsuario = AbrirModalUsuario;

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
    datos['ocupacion'] = $("[name='filtro-ocupacion']").val();
    datos['desempenio'] = $("[name='filtro-desempenio']").val();
    datos['nacionalidad'] = $("[name='filtro-nacionalidad']").val();
    datos['estado'] = estado;
    datos['usuario'] = $('#estado').val();
    datos['usuario_rol'] = $('#fechain').val();

    return datos;
}