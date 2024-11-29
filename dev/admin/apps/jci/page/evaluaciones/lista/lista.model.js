"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTEvaluacion = function() {
    // Shared variables
    
    var validator;
    var table;
    var submitPeriodo;
    var formPeriodo;
    var cancelarPeriodo;
    var dt1;
    var dt2;
    var dt3;
    var ft;

    // Private functions
    var initDatatable1 = function() {
        
        dt1 = $("#tb_periodos").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            select: {
              style: 'single',
              toggleable: false
            },
            order: [
                [1, 'desc']
            ],
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/jci/encuestas/lista-periodo`,
                data: function(d){
                    var datos = ObtenerDatosPeriodo();
                    d.periodo = datos.periodo;
                    d.fecha = datos.fecha;
                    d.estado = datos.estado;
                    d.usuario = $("#session_usuario_id").val();
                    d.usuario_rol = $("#session_rol_id").val();
                },
            },
            columns: [
              { data: 0, name: 'NJPER_ID' },
              { data: 1, name: 'CJPER_DESCRIPCION' },
              { data: 2, name: 'DJPER_INICIO' },
              { data: 3, name: 'DJPER_FIN' },
              { data: 4, name: 'ESTADO' },
              { data: 5, name: 'FEC_MODIFICACION' },
              { data: 6, name: 'USR_MODIFICACION' }
            ],
            columnDefs: [
                { targets: 0, visible: false },             //ID Periodo
                { targets: 4, visible: true,                //Estado
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                    `
                  },
                }
            ],
        });
        
        table = dt1.$;

        dt1.on('draw.dt', function () {
          dt1.row(':eq(0)').select();
        });

        $('#tb_periodos').on('dblclick', 'tr', function (e, dtx, type, indexes) {
          var rowData = $('#tb_periodos').DataTable().row(this).data();
          var divA = document.getElementById("div-periodos");
          var divB = document.getElementById("div-servicios");
          if (divA.classList.contains("d-none")) {
              divA.classList.remove("d-none");
              divB.classList.add("d-none");
          } else {
              divA.classList.add("d-none");
              divB.classList.remove("d-none");
          }

          dt2 = $("#tb_servicios").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            select: {
              style: 'single',
              toggleable: false
            },
            order: [
                [1, 'asc']
            ],
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/jci/encuestas/lista-servicio`,
                data: function(d){
                  var datos2 = ObtenerDatosServicio();
                  d.periodo = datos2.periodo;
                  d.servicio = datos2.servicio;
                  d.estado = datos2.estado;
                  d.usuario = $("#session_usuario_id").val();
                  d.usuario_rol = $("#session_rol_id").val();
                },
            },
            columns: [
              { data: 0, name: 'CAREA_ID' },
              { data: 1, name: 'CAREA_DESCRIPCION' },
              { data: 2, name: 'ESTADO' },
              { data: 3, name: 'FEC_MODIFICACION' },
              { data: 4, name: 'USR_MODIFICACION' }
            ],
            columnDefs: [
              { targets: 0, visible: false },             //ID Servicio
              { targets: 2, visible: true,                //Estado
                render: function (data, type, row) {
                  return `
                    <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                  `
                },
              },
            ],
          });

          dt2.on('draw', function() {
              $('[data-bs-toggle="tooltip"]').tooltip();
              KTMenu.createInstances();
              handleSearchDatatable2();
          });

          dt2.on('draw.dt', function () {
            dt2.row(':eq(0)').select();
          });
        
        })

        $('#tb_servicios').on('dblclick', 'tr', function (e, dtx, type, indexes) {
          var rowData = $('#tb_servicios').DataTable().row(this).data();
          var divA = document.getElementById("div-servicios");
          var divB = document.getElementById("div-personal");
          if (divA.classList.contains("d-none")) {
              divA.classList.remove("d-none");
              divB.classList.add("d-none");
          } else {
              divA.classList.add("d-none");
              divB.classList.remove("d-none");
          }

          dt3 = $("#tb_personal").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            order: [
                [2, 'asc']
            ],
            stateSave: false,
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/jci/encuestas/lista`,
                data: function(d){
                  var datos3 = ObtenerDatosEncuesta();
                  d.periodo = datos3.periodo;
                  d.servicio = datos3.servicio;
                  d.nacionalidad = datos3.nacionalidad;
                  d.personal = datos3.personal;
                  d.estado = datos3.estado;
                  d.usuario = $("#session_usuario_id").val();
                  d.usuario_rol = $("#session_rol_id").val();
                },
            },
            columns: [
              { data: null, name: 'acciones'},
              { data: 0, name: 'NJENC_ID' },
              { data: 1, name: 'NUSUA_ID' },
              { data: 2, name: 'CUSUA_IMG' },
              { data: 3, name: 'CUSUA_NOMBRES' },
              { data: 4, name: 'CUSUA_CORREO' },
              { data: 5, name: 'CAREA_ID' },
              { data: 6, name: 'CNACI_DESCRIPCION' },
              { data: 7, name: 'CNACI_IMAGEN' },
              { data: 8, name: 'NJPER_ID' },
              { data: 9, name: 'AVANCE' },
              { data: 10, name: 'PUNTAJE' },
              { data: 11, name: 'PUNTAJE_MAX' },
              { data: 12, name: 'NOTA_PORC' },
              { data: 13, name: 'PREG_CONTESTADAS' },
              { data: 14, name: 'TOTAL_PREGUNTAS' },
              { data: 15, name: 'ESTADO' },
              { data: 16, name: 'FEC_MODIFICACION' },
              { data: 17, name: 'USR_MODIFICACION' }
            ],
            columnDefs: [
                  { targets: 0, visible: true,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                            <a href="?app=jci&page=evaluaciones/nuevo&periodo=${row[8]}&servicio=${row[5]}&colaborador=${row[1]}"" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">
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
                },                                    //Acciones
                { targets: 1, visible: false },       //Id Encuesta
                { targets: 2, visible: false },       //Código Trabajador
                { targets: 3, visible: false },       //Imagen Trabajador
                { targets: 4, visible: true,          //Nombres Colaborador
                  className: 'd-flex align-items-center',
                  render: function (data, type, row) {
                    var user_img = row[2];
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
                        <a href="/good/apps/user-management/users/view.html">
                            ${$output}
                        </a>
                      </div>
                      <!--end::Avatar-->

                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="#!" class="text-gray-800 text-hover-primary mb-1" data-bs-toggle="tooltip" title="Haga click aquí para cerrar su sesión">${data}</a>
                        <span>${row[4]}</span>
                      </div>
                      <!--end::User details-->                        
                    `
                  }
                },
                { targets: 5, visible: false },       //Correo
                { targets: 6, visible: false },       //ID Area
                { targets: 7, visible: true,          //Nacionalidad                  
                  render: function (data, type, row) {                    
                    return `                        
                      <!--begin::Flag-->
                      <img src="assets/media/flags/${row[7]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />
                      <!--end::Flag-->
                      <span class="text-dark fw-bold fs-7">${data}</span>                      
                    `
                  }
                },
                { targets: 8, visible: false },         //Imagen nacionalidad
                { targets: 9, visible: false },         //Periodo
                { targets: 10, visible: true,           //Avance
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${(data == '100.0' ? 'success' : 'danger')} fw-bold">${(data)}%</div>
                    `
                  }
                },
                { targets: 11, visible: false },        //Puntaje
                { targets: 12, visible: false },        //Máximo
                { targets: 13, visible: true,           //Nota 
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-primary fw-bold" ${(row[9] != '100.0' ? 'data-bs-toggle="tooltip" data-bs-placement="top" title="Debe terminar la evaluación para ver la nota"' : '')}>${(row[9] != '100.0' ? '--' : data)} / 100</div>
                    `
                  }
                },
                { targets: 14, visible: false },        //Preguntas Contestadas
                { targets: 15, visible: false },        //Total Preguntas
                { targets: 16, visible: false,          //Estado
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data == 1 ? 'ACTIVO' : 'INACTIVO')}</div>
                    `
                  }
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
                    exportOptions: { columns: [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
                  },
                  {
                    extend: "csv",
                    bom: "true",
                    text: '<i class="bx bx-file me-2" ></i>Csv',
                    className: "dropdown-item",
                    action: newexportaction,
                    exportOptions: { columns: [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
                    filename: "Reporte de Encuestas",
                  },
                  {
                    extend: 'excel',
                    text: '<i class="bx bx-file me-2" ></i>Excel',
                    className: "dropdown-item",
                    action: newexportaction,
                    exportOptions: { columns: [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
                    filename: "Reporte de Encuestas",
                  },
                  {
                    extend: "pdf",
                    text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                    className: "dropdown-item",
                    action: newexportaction,
                    exportOptions: { columns: [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
                    customize: function (doc) {
                      doc.content.unshift({
                          text: 'Reporte de Encuestas', // Texto del encabezado
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
                    exportOptions: { columns: [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
                  },
                ],
              }
          ],

          });

          dt3.on('draw', function() {
              $('[data-bs-toggle="tooltip"]').tooltip();
              KTMenu.createInstances();
              handleSearchDatatable2();
          });
        
        })

        dt1.on('draw', function() {
            KTMenu.createInstances();
        });

        ft = $("form#form_modal_filtro_periodos [name=filtro-fecha]").flatpickr({
          altInput: true,
          altFormat: "d/m/Y",
          dateFormat: "Y-m-d",
          mode: "range",
          locale: "es"
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch1 = document.querySelector('[data-kt-periodo-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
    }

    var handleSearchDatatable2 = function() {
        const filterSearch2 = document.querySelector('[data-kt-servicio-table-filter="search"]');
        filterSearch2.addEventListener('keyup', function(e) {
            dt2.search(e.target.value).draw();
        });
    }

    var handleSearchDatatable3 = function() {
        const filterSearch2 = document.querySelector('[data-kt-colaborador-table-filter="search"]');
        filterSearch2.addEventListener('keyup', function(e) {
            dt3.search(e.target.value).draw();
        });
    }

    // Filtro de Perioso
    var handleSubmitFiltroPeriodo = () => {
      // Select filtrar button
      const filtrarButton = document.querySelector('#kt_modal_filtro_periodos_submit');
  
      // Reset datatable
      filtrarButton.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Los filtros se han aplicado exitosamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
          });

          // Cerrar el modal
          $('#kt_modal_filtro_periodos').modal('hide');

          // Llamada a la función ajax.reload() en la instancia de DataTable
          dt1.ajax.reload();

      });
    }
    
    // Filtro de Servicio
    var handleSubmitFiltroServicio = () => {
      // Select filtrar button
      const filtrarButton = document.querySelector('#kt_modal_filtro_servicio_submit');
  
      // Reset datatable
      filtrarButton.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Los filtros se han aplicado exitosamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
          });

          // Cerrar el modal
          $('#kt_servicio_filtro_modal').modal('hide');

          // Llamada a la función ajax.reload() en la instancia de DataTable
          dt2.ajax.reload();

      });
    }

    // Filtro de Encuesta
    var handleSubmitFiltroEncuesta = () => {
      // Select filtrar button
      const filtrarButton = document.querySelector('#kt_modal_filtro_encuesta_submit');
  
      // Reset datatable
      filtrarButton.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Los filtros se han aplicado exitosamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
          });

          // Cerrar el modal
          $('#kt_encuesta_filtro_modal').modal('hide');

          // Llamada a la función ajax.reload() en la instancia de DataTable
          dt3.ajax.reload();

      });
    }

    // Limpiar Filtro de Periodo
    var handleLimpiarFiltroPeriodo = () => {
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
        });
    }

    // Limpiar Filtro de Servicio
    var handleLimpiarFiltroServicio = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_servicio_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_servicio');
            formFiltro.reset();
            $('[name="filtro-servicio"]').val(null).trigger('change');
            document.querySelector(`input[name="filtro2-estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="filtro2-estado"][value="0"]`).checked = false;
            // Llamada a la función ajax.reload() en la instancia de DataTable
            dt2.ajax.reload();
        });
    }

    // Limpiar Filtro de Encuesta
    var handleLimpiarFiltroEncuesta = () => {
        // Select filtrar button
        const limpiarButton = document.querySelector('#kt_modal_filtro_encuesta_limpiar');
    
        // Reset datatable
        limpiarButton.addEventListener('click', function(e) {
            e.preventDefault();
            var formFiltro = document.getElementById('form_modal_filtro_encuesta');
            formFiltro.reset();
            $('[name="filtro3-personal"]').val(null).trigger('change');
            $('[name="filtro3-nacionalidad"]').val(null).trigger('change');
            document.querySelector(`input[name="filtro3-estado"][value="1"]`).checked = false;
            document.querySelector(`input[name="filtro3-estado"][value="0"]`).checked = false;
            // Llamada a la función ajax.reload() en la instancia de DataTable
            dt3.ajax.reload();
        });
    }

    // Agregar eventos de clic a tus botones personalizados
    $('#custom-pdf').on('click', function (e) {
        e.preventDefault();
        dt3.button('.buttons-pdf').trigger();
    });

    $('#custom-excel').on('click', function (e) {
        e.preventDefault();
        dt3.button('.buttons-excel').trigger();
    });

    $('#custom-csv').on('click', function (e) {
        e.preventDefault();
        dt3.button('.buttons-csv').trigger();
    });

    $('#custom-copy').on('click', function (e) {
        e.preventDefault();
        dt3.button('.buttons-copy').trigger();
    });

    // Public methods
    return {
        init: function() {
            formPeriodo = document.getElementById('form_modal_filtro_periodos');
            //cancelarPeriodo = document.getElementById('kt_periodos_filtro_cancel');

            initDatatable1();
            handleSearchDatatable();
            handleSearchDatatable2();
            handleSearchDatatable3();
            handleSubmitFiltroPeriodo();
            handleSubmitFiltroServicio();
            handleSubmitFiltroEncuesta();
            handleLimpiarFiltroPeriodo();
            handleLimpiarFiltroServicio();
            handleLimpiarFiltroEncuesta();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTEvaluacion.init();
});

function ObtenerDatosPeriodo(){
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
  datos['periodo'] = $("[name='filtro-periodo']").val();
  datos['fecha'] = $("[name='filtro-fecha']").val();
  datos['estado'] = estado;
  datos['usuario'] = $("#session_usuario_id").val();
  datos['usuario_rol'] = $("#session_rol_id").val();

  return datos;
}

function ObtenerDatosServicio(){
  var estado;
  var chkActivo = Boolean(document.querySelector(`input[name="filtro2-estado"][value="1"]`).checked);
  var chkInactivo = Boolean(document.querySelector(`input[name="filtro2-estado"][value="0"]`).checked);

  if (chkActivo == false && chkInactivo == false) {
      estado = '';
  } else if (chkActivo == true && chkInactivo == false) {
      estado = '1';
  } else if (chkActivo == false && chkInactivo == true) {
      estado = '0';
  }
  
  var datos = new Array();
  datos['periodo'] = $("#tb_periodos").DataTable().row('.selected').data()[0];
  datos['servicio'] = $("[name='filtro2-servicio']").val();
  datos['estado'] = estado;
  datos['usuario'] = $("#session_usuario_id").val();
  datos['usuario_rol'] = $("#session_rol_id").val();

  return datos;
}

function ObtenerDatosEncuesta(){
  var estado;
  var chkActivo = Boolean(document.querySelector(`input[name="filtro3-estado"][value="1"]`).checked);
  var chkInactivo = Boolean(document.querySelector(`input[name="filtro3-estado"][value="0"]`).checked);

  if (chkActivo == false && chkInactivo == false) {
      estado = '';
  } else if (chkActivo == true && chkInactivo == false) {
      estado = '1';
  } else if (chkActivo == false && chkInactivo == true) {
      estado = '0';
  }
  
  var datos = new Array();
  datos['servicio'] = $("#tb_servicios").DataTable().row('.selected').data()[0];
  datos['periodo'] = $("#tb_periodos").DataTable().row('.selected').data()[0];
  datos['nacionalidad'] = $("[name='filtro3-nacionalidad']").val();
  datos['personal'] = $("[name='filtro3-personal']").val();
  datos['estado'] = estado;
  datos['usuario'] = $("#session_usuario_id").val();
  datos['usuario_rol'] = $("#session_rol_id").val();

  return datos;
}