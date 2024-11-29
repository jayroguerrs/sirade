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
    var dt;
    const dropzone = document.querySelector('#kt_modal_filtro_usuario_limpiar');
    var nNuevo = false;
    var arrImages = [];

    // Private functions
    var initDatatable1 = function() {

        dt = $("#tb_usuarios").DataTable({
            autoWidth: false,
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
                url: `${environment.apiSRD}/API/julia/usuarios/listar-paginado`,
                data: function (d) {
                    var datos = ObtenerDatos();
                    d.codigo = datos.codigo;
                    d.nombres = datos.nombres;
                    d.documento = datos.documento;
                    d.ocupacion = datos.ocupacion;
                    d.desempenio = datos.desempenio;
                    d.nacionalidad = datos.nacionalidad;
                    d.rol = datos.rol;
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
                        //location.reload();
                    }
                    return data;
                }
            },
            columns: [
                { data: null, name: 'acciones'},
                { data: 0, name: 'NUSUA_ID' },
                { data: 1, name: 'CUSUA_NOMBRES' },
                { data: 2, name: 'COCUP_DESCRIPCION' },
                { data: 3, name: 'CNACI_DESCRIPCION' },
                { data: 4, name: 'CNACI_IMAGEN' },
                { data: 5, name: 'CUSUA_CORREO' },
                { data: 6, name: 'CUSUA_IMG' },
                { data: 7, name: 'CROLE_NOMBRE' },
                { data: 8, name: 'ESTADO' },
                { data: 9, name: 'FEC_MODIFICACION' },
                { data: 10, name: 'USR_MODIFICACION' },
            ],
            columnDefs: [
                {   targets: 0, 
                    visible: true,
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
                {   targets: 1, visible: false },           //Key
                {   targets: 2, visible: true,
                    className: 'd-flex align-items-center',
                    render: function (data, type, row) {
                        var user_img = row[6];
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
                            <span>${row[5]}</span>
                        </div>
                        <!--end::User details-->                        
                        `
                    }
                },                                          //Nombres
                {   targets: 3, visible: true},             //Desempeño
                {   targets: 4, visible: true,
                    render: function (data, type, row) {                    
                        return `                        
                          <!--begin::Flag-->
                          <img src="assets/media/flags/${row[4]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />
                          <!--end::Flag-->
                          <span class="fs-7">${data}</span>                      
                        `
                      }
                },                                          //Nacionalidad
                {   targets: 5, visible: false},            //Imagen Nacionalidad
                {   targets: 6, visible: false},            //Correo
                {   targets: 7, visible: false},            //Imagen Usuario
                {   targets: 8, visible: true },            //Roles
                {   targets: 9, visible: true,
                    render: function (data, type, row) {
                        return `
                            <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                        `
                    },
                },                                          //Estado
                {   targets: 10, visible: true},            //Modificado por
                {   targets: 11, visible: true},            //Modificado
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
                AbrirModalUsuario(id, 'ver');
            });

            $('.edit-btn').on('click', function() {
                var id = $(this).data('id');
                AbrirModalUsuario(id, 'editar');
            });

            $('.delete-btn').on('click', function() {
                var id = $(this).data('id');
                EliminarUsuario(id);
            });
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-usuario-table-filter="search"]');
        let previousValue = filterSearch.value;
    
        filterSearch.addEventListener('change', function(e) {
            const currentValue = e.target.value;
            if (currentValue !== previousValue) {
                dt.search(currentValue).draw();
                previousValue = currentValue; // Actualizar el valor anterior
            }
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
        submitUsuario.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {

                        msgLoad("Procesando...");
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

                        var apimode = document.getElementById('titulo_modal').innerText == 'Agregar Usuario' ? 'agregar' : 'editar';

                        msgConfirm("¿Está seguro que desea guardar los datos?", () => {
                            fetch(`${environment.apiSRD}/API/julia/usuarios/editar-datos`, {
                                method: 'POST',
                                body: datos
                            }).then(Response => Response.json())
                            .then(datos => {
                                if (datos.estado == 1) {
                                    $('[name="usuario"]').val(null).trigger('change');
                                    $('[name="supervisor"]').val(null).trigger('change');
                                    document.querySelector(`input[name="estado"][value="1"]`).checked = false;
                                    document.querySelector(`input[name="estado"][value="0"]`).checked = false;
                                    validator.resetForm(); // Reset formvalidation --- more info: https://formvalidation.io/guide/api/reset-form/
                                    $('#kt_modal_agregar_usuario').modal('hide');
                                    
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
                                submitUsuario.setAttribute('data-kt-indicator', 'off');
                                submitUsuario.disabled = false;  // Habilitar botón después de procesar
                            });
                        }, () => {
                            submitUsuario.setAttribute('data-kt-indicator', 'off');
                            submitUsuario.disabled = false;
                        });
                    }
                });
            }
        })
    }

    var handleCerrarModalUsuario = function() {
        cancelarUsuario.addEventListener('click', function() {
            $('[name="usuario"]').val(null).trigger('change');
            $('[name="supervisor"]').val(null).trigger('change');
            $('#kt_modal_agregar_usuario').modal('hide');
        });
    }
    
    // Reset Filter
    var handleSubmitFiltro = () => {
        // Select filtrar button
        const filtrarButton = document.querySelector('#kt_modal_filtro_usuario_submit');
    
        // Reset datatable
        filtrarButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            msgLoad("Procesando...");

            // Cerrar el modal
            $('#kt_usuario_filtro_modal').modal('hide');
        
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

    // Limpiar Filtro Usuario
    var handleLimpiarFiltro = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_usuario_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_usuario');
            formFiltro.reset();
            $('[name="filtro-usuario"]').val(null).trigger('change');
            $('[name="filtro-supervisor"]').val(null).trigger('change');
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

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-usuario');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formUsuario);
            datos.append('servicio', $('[name="filtro-servicio"]').val());
            datos.append('supervisor', $('[name="filtro-supervisor"]').val());
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            
            fetch(`${environment.apiSRD}/API/julia/usuarios/listar`, {
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
                a.download = 'CE_Lista_Usuarios.csv'; // Nombre del archivo a descargar
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

    // Descargar plantilla
    var handleDescargarPlantilla = () => {
        const plantillaButton = document.querySelector('#btn-plantilla');

        plantillaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            fetch(`${environment.apiSRD}/API/usuarios/plantilla`, {
                method: 'POST',
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
                a.download = 'JULIA_Plantilla.csv'; // Nombre del archivo a descargar
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

    // Abrir modal carga masiva
    var handleModalMasiva = () => {
        // Select filtrar button
        const abrirMasivoButton = document.querySelector('#carga-masiva');
    
        // Reset datatable
        abrirMasivoButton.addEventListener('click', function(e) {
            e.preventDefault();
            $('#kt_usuario_masiva_modal').modal('show');
        });
    }

    // Submit modal carga masiva
    var handleSubmitMasiva = () => {
        // Select filtrar button
        const enviarMasivoButton = document.querySelector('#kt_modal_masiva_usuario_submit');
        
        // Reset datatable
        enviarMasivoButton.addEventListener('click', function(e) {
            
            e.preventDefault();
            msgLoad("Procesando...");
            enviarMasivoButton.setAttribute('data-kt-indicator', 'on');

            //Procesar Dropzone si es que hay archivos
            if (myDropzone.files.length > 0) {
                // Disable submit button whilst loading
                enviarMasivoButton.disabled = true;
                myDropzone.processQueue();
                //msgAutoClose();

            } else {
                
                msgError('No se ha seleccionado ningún archivo', () => { }, () => { });
                enviarMasivoButton.setAttribute('data-kt-indicator', 'off');
                // Disable submit button whilst loading
                enviarMasivoButton.disabled = false;
            }
        });
    }

    var myDropzone = new Dropzone("#kt_modal_masiva_usuario_files_upload", {
        url: `${environment.apiSRD}`, // Set the url for your upload script location
        paramName: "file", // The name that will be used to transfer the file
        maxFiles: 1,
        acceptedFiles: ".csv",
        
        maxFilesize: 10, // MB
        addRemoveLinks: true,
        autoProcessQueue: false,
        success: function(file, response) {
            
            // Aquí puedes usar fetch para enviar el archivo a otro endpoint
            var formData = new FormData();
            formData.append('file', file);
            formData.append('usuario', $("#session_usuario_id").val());
            formData.append('usuario_rol', $("#session_rol_id").val());

            fetch(`${environment.apiSRD}/API/julia/usuarios/carga-masiva`, {
                method: 'POST',
                body: formData
            }).then(Response => Response.json())
            .then(datos => {
                if (datos.estado == 1) {

                    new Promise((resolve) => {
                        dt.ajax.reload(function() {
                            resolve(); // Resolver la promesa después de la recarga
                        }, false);
                    }).then(() => {
                        swal.fire({
                            html: SuccessMensaje(datos),
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Entendido",
                            customClass: {
                                confirmButton: "btn font-weight-bold btn-light-primary"
                            }
                        })
                    });
                    
                } else {
                    msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                }
            });

            const enviarMasivoButton = document.querySelector('#kt_modal_masiva_usuario_submit');
            enviarMasivoButton.setAttribute('data-kt-indicator', 'off');
            // Disable submit button whilst loading
            enviarMasivoButton.disabled = false;

            //Resetear Dropzone
            myDropzone.removeAllFiles();

        }
    });

    myDropzone.on("addedfile", function (file) {
        // Hookup the start button
        const dropzoneItems = dropzone.querySelectorAll('.dropzone-item');
        dropzoneItems.forEach(dropzoneItem => {
            dropzoneItem.style.display = '';
        });
    });
    
    // Update the total progress bar
    myDropzone.on("totaluploadprogress", function (progress) {
        const progressBars = dropzone.querySelectorAll('.progress-bar');
        progressBars.forEach(progressBar => {
            progressBar.style.width = progress + "%";
        });
    });
    
    myDropzone.on("sending", function (file) {
        // Show the total progress bar when upload starts
        const progressBars = dropzone.querySelectorAll('.progress-bar');
        progressBars.forEach(progressBar => {
            progressBar.style.opacity = "1";
        });
    });
    
    // Hide the total progress bar when nothing"s uploading anymore
    myDropzone.on("complete", function (progress) {
        const progressBars = dropzone.querySelectorAll('.dz-complete');
    
        setTimeout(function () {
            progressBars.forEach(progressBar => {
                progressBar.querySelector('.progress-bar').style.opacity = "0";
                progressBar.querySelector('.progress').style.opacity = "0";
            });
        }, 300);
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
            handleSubmitMasiva();
            handleLimpiarFiltro();
            handleCerrarModalUsuario();
            handleModalMasiva();
            handleExportar();
            handleDescargarPlantilla();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPersonalList.init();
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
    datos['codigo'] = $("[name='filtro-codigo']").val();
    datos['nombres'] = $("[name='filtro-nombres']").val();
    datos['documento'] = $("[name='filtro-documento']").val();
    datos['ocupacion'] = $("[name='filtro-ocupacion']").val();
    datos['desempenio'] = $("[name='filtro-desempenio']").val();
    datos['nacionalidad'] = $("[name='filtro-nacionalidad']").val();
    datos['rol'] = $("[name='filtro-rol']").val();
    datos['estado'] = estado;
    datos['usuario'] = $("#session_usuario_id").val();
    datos['usuario_rol'] = $("#session_rol_id").val(); 

    return datos;
}

function AbrirModalUsuario(id, modo) {
    msgLoad("Procesando...");
    if (modo == 'editar' || modo == 'ver') {

        // Deshabilitar todos los campos del formulario
        if (modo == 'ver') {
            // Deshabilitar todos los campos del formulario
            $('#form_modal_agregar_usuario').find('input, select, textarea').prop('disabled', true);
            $('#kt_modal_agregar_usuario_submit').hide();
        } else {
            $('#form_modal_agregar_usuario').find('input, select, textarea').prop('disabled', false);
            $('#kt_modal_agregar_usuario_submit').show();
        }

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
                $('[name="correo"]').val(d.correo).trigger('change');
                document.querySelector(`input[name="estado"][value="${d.estado}"]`).checked = true;
                
                // Cargar roles en el select2
                var roles = d.rol;
                var selectRol = $('[name="rol"]');
                // Desmarcar todas las opciones
                selectRol.val(null).trigger('change');
                
                roles.forEach(function(role) {
                    var option = selectRol.find('option[value="' + role.id + '"]');
                    if (option.length) {
                        option.prop('selected', true);
                    }
                });
                // Actualizar el select2 para reflejar los cambios
                selectRol.trigger('change');
                
                msgAutoClose();
                $('#kt_modal_agregar_usuario').modal('show');
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });

        //Mostrar el campo de estado
        document.getElementById('div-estado').style.display = 'block';

        document.getElementById('titulo_modal').innerText = 'Editar Usuario';
    } else {
        //Ocultar el campo de estado
        document.getElementById('div-estado').style.display = 'none';
        document.getElementById('titulo_modal').innerText = 'Agregar Usuario';

        //Habilitar el campo de usuario
        $('[name="usuario"]').prop('disabled', false);
        $('#kt_modal_agregar_usuario_submit').show();
        msgAutoClose();

        $('#kt_modal_agregar_usuario').modal('show');
    }
};

window.AbrirModalUsuario = AbrirModalUsuario;

function EliminarUsuario(id) {    

    var datos = new FormData();
    datos.append('usuario', $("#session_usuario_id").val());
    datos.append('usuario_rol', $("#session_rol_id").val());
    datos.append('id', id);

    msgWarning("¿Está seguro que desea eliminar el usuario?", "Si, Eliminar", () => {
        msgLoad("Procesando...");
        fetch(`${environment.apiSRD}/API/julia/servicios/eliminar-servicios`, {
            method: 'POST',
            body: datos
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                
                var dt = $("#tb_usuarios").DataTable();

                // Usar una promesa para manejar la recarga
                new Promise((resolve) => {
                    dt.ajax.reload(function() {
                        resolve(); // Resolver la promesa después de la recarga
                    });
                }).then(() => {
                    msgSuccessMixin("El usuario ha sido eliminado exitosamente","");
                });
    
            } else {
                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
            }
        });
    });

};

window.EliminarUsuario = EliminarUsuario;