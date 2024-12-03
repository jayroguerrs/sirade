"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTDiaria = function() {
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
                columns: [3],
            },
            multiColumnSorting: true,
            filters: true,
            rowHeaders: true,
            manualColumnResize : true,
            autoWrapRow: true,
            autoWrapCol: true,
            colWidths: [250, // Colaborador
                        120, // Area Periodo
                        100, // Desempeño
                        100, // Id Horario Turno
                        100, // Fecha
                        100, // Turno
                        100, // Area
                        140, // Horas Extra
                        160, // Entrada
                        160, // Salida
                        180, // Marca Entrada
                        180, // Marca Salida
                        250, // Obs Entrada
                        250  // Obs Salida
                    ],
            licenseKey: "non-commercial-and-evaluation"
        });

        const yellowRenderer = (instance, td, ...rest) => {
            Handsontable.renderers.TextRenderer(instance, td, ...rest);
            td.style.backgroundColor = 'yellow';
        };

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
        //datos.append('periodo', firstOptionValue);
        datos.append('fecha', '2024-05-01');

        // Fetch data from the API
        fetch(`${environment.apiSRD}/API/julia/asistencia/diaria/listar-paginado`, {
            method: 'POST',
            body: datos
        })
        .then(response => response.json())
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
                    width: '100%',
                    // Configuración de la función cells para aplicar estilos a la primera columna
                    cells: function(row, col) {
                        const cellProperties = {};
                        if (col === 0 || col === 1 || col === 2 || col === 4 || col === 7 || col === 8) {  // Comprobar si es la primera columna
                            cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {

                                Handsontable.renderers.TextRenderer.apply(this, arguments); // Renderiza el texto de manera predeterminada

                                if (row === 0) {
                                    td.style.backgroundColor = '#DDF8FC';
                                } else {
                                    const previousCell = instance.getCell(row - 1, 0);
                                    if (previousCell) { // Verificar que la celda existe
                                        const previousCellColor = window.getComputedStyle(previousCell).backgroundColor;
                                        if (instance.getDataAtCell(row, 0) == instance.getDataAtCell(row - 1, 0)) {
                                            td.style.backgroundColor = previousCellColor;
                                        } else {
                                            td.style.backgroundColor = previousCellColor === 'rgb(221, 248, 252)' ? 'rgb(255, 255, 255)' : 'rgb(221, 248, 252)';
                                        }
                                    } else {
                                        // Si la celda anterior no existe, establecer un color por defecto
                                        td.style.backgroundColor = 'rgb(255, 255, 255)';
                                    }
                                }

                                // Asegurarse de que el color del texto es negro
                                td.style.color = 'black';

                            };
                        };
                        
                        if (col === 8 || col === 9) {  // Comprobar si es la primera columna
                            cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {
                                Handsontable.renderers.TextRenderer.apply(this, arguments); // Renderiza el texto de manera predeterminada
                                td.style.backgroundColor = '#fbffb6';  // Aplica el color de fondo amarillo
                            };
                        }

                        // Verificar si el turno es "M1" y hacer la celda de solo lectura
                        if (col === 5) {
                            cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {
                                Handsontable.renderers.TextRenderer.apply(this, arguments);
                                if (value === 'M1') {
                                    cellProperties.readOnly = true;
                                }
                            };
                        }
                        
                        return cellProperties;

                    },

                });

                // Obtener los datos de turnos antes de inicializar Handsontable
                Promise.all([cmbTurnos(), cmbAreas()]).then(([turnos, areas]) => {
                    // Update Handsontable with the specific column settings
                    hot.updateSettings({
                        columns: [
                            { type: 'text', readOnly: true },       // Colaborador
                            { type: 'text', readOnly: true },       // Area Periodo
                            { type: 'text', readOnly: true },       // Desempeño
                            { type: 'text', readOnly: true },       // Id Horario Turno
                            { type: 'text', readOnly: true },       // Fecha
                            { 
                                type: 'dropdown',
                                source: turnos
                            },                                      // Turno
                            { 
                                type: 'dropdown',
                                source: areas
                            },                                      // Área
                            { type: 'text', readOnly: true },       // Horas Extra
                            { type: 'text', readOnly: true },       // Hora de Entrada
                            { type: 'text', readOnly: true },       // Hora de Salida
                            { type: 'text', readOnly: false },      // Hora de Entrada
                            { type: 'text', readOnly: false },      // Hora de Salida
                            { 
                                type: 'text', 
                                readOnly: false,
                            },                                      // Obs1
                            {
                                type: 'text', 
                                readOnly: false,
                            },                                      // Obs2
                        ]
                    });
                });

                msgAutoClose();
            } else {
                msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
            }
        });
    };

    // Cagar Tabla
    var cargarTabla = () => {
        //msgLoad("Procesando...");
        return new Promise((resolve, reject) => {
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
            datos.append('fecha', '2024-05-01');
            
            
            fetch(`${environment.apiSRD}/API/julia/asistencia/diaria/listar-paginado`, {
                method: 'POST',
                body: datos
            })
            .then(response => response.json())
                .then(datos => {
                    if (datos.estado == 1) {
                        const apiData = datos.data;
                        const colHeaders = Object.keys(apiData[0]);
                        const tableData = apiData.map(item => Object.values(item));
                        
                        hot.updateSettings({
                            data: tableData,
                            colHeaders: colHeaders,
                            columns: colHeaders.map(() => ({ type: 'text' })),
                            width: '100%'
                        });

                        // Si es necesario actualizar las columnas con dropdowns
                        Promise.all([cmbTurnos(), cmbAreas()]).then(([turnos, areas]) => {
                            hot.updateSettings({
                                columns: [
                                    { type: 'text', readOnly: true },   // Colaborador
                                    { type: 'text', readOnly: true },   // Area Periodo
                                    { type: 'text', readOnly: true },   // Desempeño
                                    { type: 'text', readOnly: true },   // Id Horario Turno
                                    { type: 'text', readOnly: true },   // Fecha
                                    { 
                                        type: 'dropdown',
                                        source: turnos
                                    },                                  // Turno
                                    { 
                                        type: 'dropdown',
                                        source: areas
                                    },                                  // Área
                                    { type: 'text', readOnly: true },   // Horas Extra
                                    { type: 'text', readOnly: true },   // Hora de Entrada
                                    { type: 'text', readOnly: true },   // Hora de Salida
                                    { type: 'text', readOnly: false },   // Hora de Entrada
                                    { type: 'text', readOnly: false },   // Hora de Salida
                                    { 
                                        type: 'text', 
                                        readOnly: false,
                                    },                                      // Obs1
                                    {
                                        type: 'text', 
                                        readOnly: false,
                                    },                                      // Obs2
                                ]
                            });
                            resolve(); // Resuelve la promesa si la tabla se cargó correctamente
                        });
                    } else {
                        msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
                    }
                })
                .catch(error => {
                    reject(error); // Rechaza la promesa si hay un error en el fetch
                });
        });
    }

    // Modificar Celda
    var modificarCelda = () => {
        hot.addHook('afterChange', (changes, source) => {
            if (source !== 'loadData' && changes) { // This condition prevents the hook from firing when the data is loaded or changes is null or undefined
                // Limpiar el array de cambios
                cambios = [];
                let modificados = 0;
                changes.forEach(([row, prop, oldValue, newValue]) => {
                    if (oldValue !== newValue) { // This condition prevents the hook from firing when the value hasn't changed
                        // Obtener el nombre de la columna
                        debugger;
                        var columnName = hot.getColHeader(hot.propToCol(prop));
                        var turno = hot.getDataAtRow(row)[5]; // Asumiendo que el turno está en la columna 3
                        // Agregar el cambio al array
                        if (turno === "M1") {
                            // Hacer la celda de solo lectura
                            hot.setCellMeta(row, hot.propToCol(prop), 'readOnly', true);
                            hot.render(); // Renderizar la tabla para aplicar los cambios
                        };
                        cambios.push({
                            colaborador: hot.getDataAtRow(row)[0],
                            id_horario_turno: hot.getDataAtRow(row)[3],
                            fecha: hot.getDataAtRow(row)[4],
                            valor_nuevo: newValue,
                            columna: columnName
                        });
                        modificados += 1;
                    }
                });
                
                if (modificados > 0) {
                    let formData = new FormData();
                    formData.append('cambios', JSON.stringify(cambios));
                    formData.append('usuario', $("#session_usuario_id").val());
                    formData.append('usuario_rol', $("#session_rol_id").val());
                    fetch(`${environment.apiSRD}/API/julia/asistencia/diaria/modificar-horario`, {
                        method: 'POST',
                        body: formData
                    }).then(response => response.json())
                        .then(datos => {
                            if (datos.estado == 1) {
                                // Actualizar la tabla
                                if (datos.data.cambios > 0) {
                                    cargarTabla().then(() => {
                                        msgSuccessMixin("Los cambios se han aplicado exitosamente","");
                                    });
                                } else {
                                    cargarTabla().then(() => {
                                        msgWarningMixin("No se han realizado los cambios, verifique e intente de nuevo","");
                                    });
                                }
                            } else {
                                msgError(ErrorMensaje(datos), ()=>{}, ()=>{});
                            }
                    })
                }
            }
        });
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
            
            fetch(`${environment.apiSRD}/API/julia/horario/listar`, {
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

    function cmbTurnos() {
        let formData = new FormData();
        formData.append('estado', 1);
        formData.append('usuario', $("#session_usuario_id").val());
        formData.append('usuario_rol', $("#session_rol_id").val());
        return fetch(`${environment.apiSRD}/API/julia/turnos/listar-cmb-tabla`, {
            method: 'POST',
            body: formData
        }) // Reemplaza con la URL de tu API
            .then(response => response.json())
            .then(data => data.data); // Ajusta según la estructura de tu respuesta
    }

    function cmbAreas() {
        let formData = new FormData();
        formData.append('estado', 1);
        formData.append('usuario', $("#session_usuario_id").val());
        formData.append('usuario_rol', $("#session_rol_id").val());
        return fetch(`${environment.apiSRD}/API/julia/servicios/listar-cmb-tabla`, {
            method: 'POST',
            body: formData
        }) // Reemplaza con la URL de tu API
            .then(response => response.json())
            .then(data => data.data); // Ajusta según la estructura de tu respuesta
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
            modificarCelda();
            handleActualizar();
            handleExportar();
        },
        updateTableHeight: updateTableHeight 
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDiaria.init();
});

// Update the height of the table when the window is resized
window.addEventListener('resize', KTDiaria.updateTableHeight);

