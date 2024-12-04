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
            colWidths: [250, // Colaborador         [0]
                        120, // Area Periodo        [1]
                        100, // Desempeño           [2]
                        100, // Id Horario Turno    [3]
                        100, // Fecha               [4]
                        100, // Turno               [5]
                        100, // Area                [6]
                        140, // Horas Extra         [7]
                        160, // Entrada             [8]
                        160, // Salida              [9]
                        180, // Marca Entrada       [10]
                        180, // Marca Salida        [11]
                        250, // Obs Entrada         [12]
                        250  // Obs Salida          [13]
                    ],
            licenseKey: "non-commercial-and-evaluation"
        });

        const yellowRenderer = (instance, td, ...rest) => {
            Handsontable.renderers.TextRenderer(instance, td, ...rest);
            td.style.backgroundColor = 'yellow';
        };

        customStylesRenderer = (hotInstance, TD, ...rest) => {
            Handsontable.renderers.TextRenderer(hotInstance, TD, ...rest);
            //TD.style.fontWeight = 'bold';
            TD.style.color = 'white';
            TD.style.background = '#72abff';
        };

        Handsontable.renderers.registerRenderer(
            'customStylesRenderer',
            customStylesRenderer
        );
    }

    var initComponentes = () => {
        return new Promise((resolve, reject) => {
            msgLoad("Procesando...");
            var datos = new FormData();
            datos.append('usuario', $("#session_usuario_id").val());
            datos.append('usuario_rol', $("#session_rol_id").val());
            datos.append('idapp', 'ENF_002');
            datos.append('estado', 1); 
        
            const selectElement = $('[name="filtro-periodos"]');
        
            fetch(`${environment.apiSRD}/API/periodos/listar-cmb`, {
                method: 'POST',
                body: datos
            })
            .then(response => response.json())
            .then(data => {
                if (data.estado === 1) {
                    const selectData = data.data.map(periodo => ({
                        id: periodo.Id,
                        text: periodo.Periodo,
                        inicio: periodo.Inicio,
                        fin: periodo.Fin
                    }));
        
                    selectElement.empty();
                    selectElement.select2({
                        placeholder: "Seleccione un periodo",
                        allowClear: true,
                        data: selectData
                    });
        
                    selectElement.val(selectData[0].id).trigger('change');
                    msgAutoClose();
                    resolve(); // Resuelve la promesa cuando se completa la inicialización
                } else {
                    console.error('Error en la respuesta:', data.mensaje);
                    reject(data.mensaje); // Rechaza la promesa en caso de error
                }
            }).catch(error => {
                console.error('Error al obtener los periodos:', error);
                reject(error); // Rechaza la promesa en caso de error
            });
        
            let ft = $("[name=filtro-fecha]").flatpickr({
                altInput: true,
                altFormat: "d/m/Y",
                dateFormat: "Y-m-d",
                locale: "es"
            });
        
            selectElement.on('change', function() {
                const selectedOption = selectElement.select2('data')[0];
                if (selectedOption) {
                    const inicio = selectedOption.inicio;
                    const fin = selectedOption.fin;
                    ft.set('minDate', inicio);
                    ft.set('maxDate', fin);
                }
            });
        });
    };
    
    var initDatatable1 = () => {
        msgLoad("Procesando...");
        // Crear un nuevo objeto FormData
        var datos = new FormData(formPeriodo);
        datos.append('usuario', $("#session_usuario_id").val());
        datos.append('usuario_rol', $("#session_rol_id").val());
        // Colocar el primer valor del periodo por defecto

        // Append the selected value to the form data
        datos.append('periodo', $('[name="filtro-periodos"]').val());
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
                    cells: function(row, col) {
                        const cellProperties = {};
                        // Pintar de verde ("#00b2a9") toda la fila si es un turno de Hora Extra
                        if (this.instance.getDataAtCell(row, 7)) {
                            if (cellProperties.renderer) {
                            } else {
                                cellProperties.renderer = customStylesRenderer;
                            }
                        }
                        
                        if (col === 0 || col === 1 || col === 2 || col === 4 || col === 7 || col === 10 || col === 11 || col === 12 || col === 13 ) {
                            // Primero verificar si está ya se encuentra pintado de algún color
                            if (cellProperties.renderer) {
                            } else {
                                cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {
                                    Handsontable.renderers.TextRenderer.apply(this, arguments);
                                    if (row === 0) {
                                        td.style.backgroundColor = '#DDF8FC';
                                    } else {
                                        const previousCell = instance.getCell(row - 1, 0);
                                        if (previousCell) {
                                            const previousCellColor = window.getComputedStyle(previousCell).backgroundColor;
                                            if (instance.getDataAtCell(row, 0) == instance.getDataAtCell(row - 1, 0)) {
                                                td.style.backgroundColor = previousCellColor;
                                            } else {
                                                td.style.backgroundColor = previousCellColor === 'rgb(221, 248, 252)' ? 'rgb(255, 255, 255)' : 'rgb(221, 248, 252)';
                                            }
                                        } else {
                                            td.style.backgroundColor = 'rgb(255, 255, 255)';
                                        }
                                    }
                                    td.style.color = 'black';
                                };
                            }
                        }
                        // Pintar de amarillo las celdas que no se pueden modificar
                        if (col === 8 || col === 9) {
                            if (cellProperties.renderer) {
                            } else {
                                cellProperties.renderer = function(instance, td, row, col, prop, value, cellProperties) {
                                    Handsontable.renderers.TextRenderer.apply(this, arguments);
                                    td.style.backgroundColor = '#fbffb6';
                                    td.style.color = 'black';
                                };
                            }
                        }
                        // Hacer de solo lectura la celda de turno si es una Hora Extra
                        if (col === 5) {
                            if (this.instance.getDataAtCell(row, 7)) {
                                cellProperties.readOnly = true;
                            }
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
                        var columnName = hot.getColHeader(hot.propToCol(prop));
                        // Agregar el cambio al array
                        cambios.push({
                            colaborador: hot.getDataAtRow(row)[0],
                            id_horario_turno: hot.getDataAtRow(row)[3],
                            fecha: hot.getDataAtRow(row)[4],
                            hora_extra: hot.getDataAtRow(row)[7],
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
        })
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
        })
            .then(response => response.json())
            .then(data => data.data); // Ajusta según la estructura de tu respuesta
    }

    // Public methods
    return {
        init: function() {
            initComponentes().then(() => {
                initDatatable1();
                initTableSettings();
                updateTableHeight();
                modificarCelda();
                handleActualizar();
                handleExportar();
            }).catch(error => {
                console.error('Error durante la inicialización:', error);
            });
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

