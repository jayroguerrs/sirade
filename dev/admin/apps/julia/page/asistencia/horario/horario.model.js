"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTPeriodo = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitPeriodo;
    var formPeriodo;
    var cancelarPeriodo;
    var firstOptionValue;
    var dt1;
    var ft;
    var ft1;
    var hot;
    var customStylesRenderer;
    var cambios = [];

    // Submit form handler
    var initTableSettings = () => {
        hot = new Handsontable(document.querySelector('#HSTable'), {
            width: '100%',
            height: "auto",
            dropdownMenu: true,
            fixedColumnsStart: 1,
            hiddenColumns: {
                columns: [5],
            },
            multiColumnSorting: true,
            filters: true,
            rowHeaders: true,
            manualColumnResize : true,
            autoWrapRow: true,
            autoWrapCol: true,
            licenseKey: "non-commercial-and-evaluation"
        });

        customStylesRenderer = (hotInstance, TD, ...rest) => {
            Handsontable.renderers.TextRenderer(hotInstance, TD, ...rest);
            TD.style.fontWeight = 'bold';
            TD.style.color = 'green';
            TD.style.background = '#d7f1e1';
        };

        Handsontable.renderers.registerRenderer(
            'customStylesRenderer',
            customStylesRenderer
        );
    }
    

    var initDatatable1 = () => {
        msgLoad("Procesando...");
        // Crear un nuevo objeto FormData
        var datos = new FormData(formPeriodo);
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        // Colocar el primer valor del periodo por defecto
        //datos.append('periodo', $('[name="filtro-periodos"]').val());
        // Get all options from the select2
        var options = $('[name="filtro-periodos"]').find('option');

        // Get the first option value
        firstOptionValue = options.eq(1).val();

        // Set the first option value as the selected value
        $('[name="filtro-periodos"]').val(firstOptionValue).trigger('change');

        // Append the selected value to the form data
        datos.append('periodo', firstOptionValue);

        // Fetch data from the API
        fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar-paginado`, {
            method: 'POST',
            body: datos
        }).then(response => response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    // Prepare the data
                    const apiData = datos.data;
                    const colHeaders = Object.keys(apiData[0]);
                    const tableData = apiData.map(item => Object.values(item));
                    // Initialize Handsontable with dynamic headers and data
                    hot.updateSettings({ 
                        data: tableData, 
                        colHeaders: colHeaders, 
                        columns: colHeaders.map(() => ({ type: 'text' })),
                        with: '100%'
                    });
                    hot.updateSettings({
                        hiddenColumns: {
                            columns: [4]
                        },
                    });
                    msgAutoClose();
                } else {
                    msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
                }
            })
    }

    // Cagar Tabla
    var cargarTabla = () => {
        //msgLoad("Procesando...");
        // Crear un nuevo objeto FormData
        var datos = new FormData(formPeriodo);
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        datos.append('periodo', $('[name="filtro-periodos"]').val());
        datos.append('colaborador', $('[name="filtro-colaborador"]').val());
        datos.append('ocupacion', $('[name="filtro-ocupacion"]').val());
        datos.append('desempenio', $('[name="filtro-desempenio"]').val());
        datos.append('areaperiodo', $('[name="filtro-areaperiodo"]').val());
        datos.append('estado', $('[name="filtro-estado"]').val());
        
        // Fetch data from the API
        return fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar-paginado`, {
            method: 'POST',
            body: datos
        }).then(response => response.json())
            .then(datos => {
                if (datos.estado == 1) {
                    const apiData = datos.data;
                    if (apiData.length > 0) {
                        // Prepare the data
                        const colHeaders = Object.keys(apiData[0]);
                        const tableData = apiData.map(item => Object.values(item));
                        // Initialize Handsontable with dynamic headers and data
                        hot.updateSettings({ 
                            data: tableData, 
                            colHeaders: colHeaders, 
                            columns: colHeaders.map(() => ({ type: 'text' })),
                        });
                        hot.updateSettings({
                            hiddenColumns: {
                                columns: [4]
                            },
                        });
                    } else {
                        hot.updateSettings({ data: []});
                        msgWarning("No se encontraron registros para mostrar");
                    }
                } else {
                    //msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
                }
            })
    }

    // Modificar Celda
    var modificarCelda = () => {
        hot.addHook('afterChange', (changes, source) => {
            if (source !== 'loadData' && changes) { // This condition prevents the hook from firing when the data is loaded or changes is null or undefined
                // Limpiar el array de cambios
                cambios = [];
                changes.forEach(([row, prop, oldValue, newValue]) => {
                    if (oldValue !== newValue) { // This condition prevents the hook from firing when the value hasn't changed
                        var cell = hot.getCell(row, hot.propToCol(prop));
                        if (cell) { // This condition prevents errors when cell is null or undefined
                            cell.style.fontWeight = 'bold';
                            cell.style.color = 'green';
                            cell.style.background = '#d7f1e1';
                        }
                        // Obtener el nombre de la columna
                        var columnName = hot.getColHeader(hot.propToCol(prop));
                        // Entregar credenciales

                        // Agregar el cambio al array
                        cambios.push({
                            colaborador: hot.getDataAtRow(row)[0],
                            id_horario: hot.getDataAtRow(row)[4],
                            area: hot.getDataAtRow(row)[1],
                            area_dia: null,
                            nombre_columna: columnName, 
                            id_periodo: firstOptionValue,                 // Usar el nombre de la columna obtenido
                            valor_nuevo: newValue,
                            valor_anterior: oldValue
                        });
                    }
                });
                
                let formData = new FormData();
                formData.append('cambios', JSON.stringify(cambios));
                formData.append('usuario', $("#session_usuario_id").val());
                formData.append('usuario_rol', $("#session_rol_id").val());
                fetch(`${environment.apiSRD}/API/julia/asistencia/horario/modificar-horario`, {
                    method: 'POST',
                    body: formData
                }).then(response => response.json())
                    .then(datos => {
                        if (datos.estado == 1) {
                            // Actualizar la tabla
                            cargarTabla().then(() => {
                                msgSuccessMixin("Los cambios se han aplicado exitosamente","");
                            });
                        } else {
                            msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
                        }
                })
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
            cargarTabla().then(() => {
                msgSuccessMixin("Los filtros se han aplicado exitosamente","");
            });
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
                        datos.append('idapp', 'ENF_002');
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

    var updateTableHeight = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        hot.updateSettings({ height: windowHeight-300 });
    }

    // Exportar en CSV
    var handleExportar = function() {
        const exportarButton = document.querySelector('#boton-exportar-horario');
        
        exportarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");
            
            // Crear un nuevo objeto FormData
            var datos = new FormData(formPeriodo);
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            datos.append('periodo', $('[name="filtro-periodos"]').val());
            datos.append('colaborador', $('[name="filtro-colaborador"]').val());
            datos.append('ocupacion', $('[name="filtro-ocupacion"]').val());
            datos.append('desempenio', $('[name="filtro-desempenio"]').val());
            datos.append('areaperiodo', $('[name="filtro-areaperiodo"]').val());
            datos.append('estado', $('[name="filtro-estado"]').val());
            
            fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar`, {
                method: 'POST',
                body: datos
            })
            .then(response => response.text())
            .then(text => {
                console.log(text);
                // Crear un Blob en UTF-8 (el contenido ya debe incluir BOM desde el servidor)
                const blob = new Blob([text], { type: 'text/csv;charset=utf-8;' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'CE_Lista_horario.csv';
                document.body.appendChild(a);
                a.click();
                a.remove();
            }).catch(error => {
                msgError('Error al procesar los datos: ' + error, () => { }, () => { });
            }).finally(() => {
                msgSuccessMixin("Se ha descargado el documento exitosamente","");
            });
        
        });
    }

    // Exportar en CSV
    var handleActualizar = function() {
        const actualizarButton = document.querySelector('#boton-actualizar-horario');
        
        actualizarButton.addEventListener('click', function(e) {
            e.preventDefault();
            msgLoad("Procesando...");

            cargarTabla().then(() => {
                msgSuccessMixin("Se han actualizado la tabla exitosamente","");
            });
        });
    }

    // Public methods
    return {
        init: function() {
            //formPeriodo = document.getElementById('form_modal_agregar_periodos');
            //submitPeriodo = document.getElementById('kt_modal_agregar_periodos_submit');
            //cancelarPeriodo = document.getElementById('kt_modal_agregar_periodos_cancel');
            initTableSettings();
            initDatatable1();
            updateTableHeight();
            handleSubmitFiltro();
            modificarCelda();
            handleActualizar();
            handleExportar();
        },
        updateTableHeight: updateTableHeight 
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPeriodo.init();
});

// Update the height of the table when the window is resized
window.addEventListener('resize', KTPeriodo.updateTableHeight);

