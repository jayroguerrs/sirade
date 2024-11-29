"use strict";

import { environment } from "../../../../../../environment.js";

// Class definition
var KTPersonalList = function() {
    // Shared variables
    var continuarButton;
    var limpiarButton;
    var form;
    var validator;
    var table;
    var submitPeriodo;
    var formPeriodo;
    var cancelarPeriodo;
    var dt1;
    var dt2;
    
    // Cargar servicios al seleccionar un periodo
    $("[name='desempenio']").on('change.select2', function() {
        // Vuelve a cargar los datos del DataTable
        dt1.ajax.reload();
    });

    // Cargar servicios al seleccionar un periodo
    $("[name='act_disponibles']").on('click', function() {
        // Vuelve a cargar los datos del DataTable
        dt1.ajax.reload();
    });

    // Cargar servicios al seleccionar un periodo
    $("[name='act_asignados']").on('click', function() {
        // Vuelve a cargar los datos del DataTable
        dt2.ajax.reload();
    });

    $("[name='servicio']").on('change.select2', function() {
        // Vuelve a cargar los datos del DataTable
        dt2.ajax.reload();
    });

    $("[name='periodo']").on('change.select2', function() {
        // Vuelve a cargar los datos del DataTable
        var vali = ($("[name='periodo']").val() != null);    
        if (vali) {
            continuarButton.disabled = false;
        } else {
            continuarButton.disabled = true;
        }
    });

    var formDataDisponibles = function() {
        return {
            periodo: $("[name='periodo']").val(),
            estado: 1,
            desempenio: $("[name='desempenio']").val(),
            usuario: $("#session_usuario_id").val(),
            usuario_rol: $("#session_rol_id").val(),
        };
    };

    var formDataAsignados = function() {
        return {
            periodo: $("[name='periodo']").val(),
            estado: 1,
            servicio: $("[name='servicio']").val(),
            usuario: $("#session_usuario_id").val(),
            usuario_rol: $("#session_rol_id").val(),
        };
    };
  

    // Private functions
    var initDatatable1 = function() {
        
        dt1 = $("#colab_disponibles").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            select: {
              style: 'single',
              toggleable: false
            },
            order: [
                [2, 'asc']
            ],
            stateSave: false,
            lengthMenu: [10], // Establece el número predeterminado de filas por página
            dom: 'rt<"bottom"ip><"clear">',
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/jci/personal/lista-disponible`,
                data: function(data){
                    $.extend(data, formDataDisponibles());
                },
            },
            columnDefs: [
                { targets: 0, visible: false,                //ID Usuario
                  render: function (data, type, row) {                    
                    return `                        
                      <span class="fw-bold fs-6">${data}</span>                      
                    `
                  }
                },
                { targets: 1, visible: false },                 //Codigo Usuario
                { targets: 2, visible: true,                    //Nombres Colaborador
                  className: 'd-flex align-items-center',
                  render: function (data, type, row) {
                    var user_img = row[3];
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
                        <span">${$output}</span>
                      </div>
                      <!--end::Avatar-->

                      <!--begin::User details-->
                      <div class="d-flex flex-column" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
                        <span class="fw-bold fs-7">${data}</span>
                      </div>
                      <!--end::User details-->
                      <!--begin::Menu 3-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-auto py-3" data-kt-menu="true">
                            <!--begin::Title-->
                            <div class="menu-item px-3">
                                <div class="menu-content d-flex align-items-center px-3">
                                    <!--begin::Username-->
                                    <div class="d-flex flex-column">
                                        <div class="fw-bold d-flex align-items-center fs-5">
                                            Detalles Adicionales
                                        </div>
                                    </div>
                                    <!--end::Username-->
                                </div>
                            </div>
                            <!--end::Title-->

                            <!--begin::Menu separator-->
                            <div class="separator my-2"></div>
                            <!--end::Menu separator-->

                            <div class="d-flex flex-wrap p-5">    
                                <!--begin::Row-->
                                <div class="flex-equal me-5">
                                    <!--begin::Details-->
                                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500 min-w-175px w-175px">Código:</td>
                                            <td class="text-gray-800 min-w-175px">
                                                <span>${row[1]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500">Nacionalidad:</td>
                                            <td class="text-gray-800">
                                                <img src="assets/media/flags/${row[5]}" class="me-3" style="width: 20px;border-radius: 4px" alt=""/>
                                                <span>${row[4]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500">Desempeño:</td>
                                            <td class="text-gray-800">
                                                <span>${row[7]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                    </table>
                                    <!--end::Details-->
                                </div>
                                <!--end::Row-->
                            </div>
                        </div>
                        <!--end::Menu 3-->
                    `
                  }
                },
                { targets: 3, visible: false,                   // Imagen
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                    `
                  },
                },
                { targets: 4, visible: false },                 // Nacionalidad
                { targets: 5, visible: false },                 // Imagen Nacionalidad
                { targets: 6, visible: false },                 // Servicio
                { targets: 7, visible: false },                 // Desempeño
                { targets: -1, visible: true,                   //Acciones
                    data: null,
                    orderable: false,
                    className: 'text-end',
                    render: function(data, type, row) {
                        return `
                        <a onclick="asignar('${(row[0])}', '${($("[name='periodo']").val())}');" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">                                
                            <i class="ki-duotone ki-double-right">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                        </a>
                    `;
                    },
                },
            ],
        });

        dt1.on('draw.dt', function () {
          dt1.row(':eq(0)').select();
        });

        table = dt1.$;

        dt1.on('draw', function() {
            $('[data-bs-toggle="tooltip"]').tooltip();
            KTMenu.createInstances();
        });
    }

    var initDatatable2 = function() {
        
        dt2 = $("#colab_asignados").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            scrollX: true,
            select: {
              style: 'single',
              toggleable: false
            },
            order: [
                [2, 'asc']
            ],
            stateSave: false,
            lengthMenu: [10], // Establece el número predeterminado de filas por página
            dom: 'rt<"bottom"ip><"clear">',
            ajax: {
                type: "POST",
                url: `${environment.apiSRD}/API/jci/personal/lista-asignado`,
                data: function(data){
                    $.extend(data, formDataAsignados());
                },
            },
            columnDefs: [
                { targets: 0, visible: true,                   // Key
                    data: null,
                    orderable: false,
                    className: 'text-start',
                    render: function(data, type, row) {
                        return `
                      <a href="javascript:quitar('${(row[1])}');" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">                                
                        <i class="ki-duotone ki-double-left">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                      </a>
                    `;
                    },
                },
                { targets: 1, visible: false },                 // ID Encuesta
                { targets: 2, visible: false },                 // Codigo Usuario
                { targets: 3, visible: true,                    // Nombres Colaborador
                  className: 'd-flex align-items-center',
                  render: function (data, type, row) {
                    var user_img = row[4];
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
                        <span">${$output}</span>
                      </div>
                      <!--end::Avatar-->

                      <!--begin::User details-->
                      <div class="d-flex flex-column" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" data-kt-menu-overflow="true">
                        <span class="fw-bold fs-7">${data}</span>
                      </div>
                      <!--end::User details-->
                      <!--begin::Menu 3-->
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-auto py-3" data-kt-menu="true">
                            <!--begin::Title-->
                            <div class="menu-item px-3">
                                <div class="menu-content d-flex align-items-center px-3">
                                    <!--begin::Username-->
                                    <div class="d-flex flex-column">
                                        <div class="fw-bold d-flex align-items-center fs-5">
                                            Detalles Adicionales
                                        </div>
                                    </div>
                                    <!--end::Username-->
                                </div>
                            </div>
                            <!--end::Title-->

                            <!--begin::Menu separator-->
                            <div class="separator my-2"></div>
                            <!--end::Menu separator-->

                            <div class="d-flex flex-wrap p-5">    
                                <!--begin::Row-->
                                <div class="flex-equal me-5">
                                    <!--begin::Details-->
                                    <table class="table fs-6 fw-semibold gs-0 gy-2 gx-2 m-0">
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500 min-w-175px w-175px">Código:</td>
                                            <td class="text-gray-800 min-w-175px">
                                                <span>${row[2]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500">Nacionalidad:</td>
                                            <td class="text-gray-800">
                                                <img src="assets/media/flags/${row[6]}" class="me-3" style="width: 20px;border-radius: 4px" alt=""/>
                                                <span>${row[5]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500">Desempeño:</td>
                                            <td class="text-gray-800">
                                                <span>${row[9]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                        <!--begin::Row-->
                                        <tr>
                                            <td class="text-gray-500">Servicio:</td>
                                            <td class="text-gray-800">
                                                <span>${row[7]}</span>
                                            </td>
                                        </tr>
                                        <!--end::Row-->
                                    </table>
                                    <!--end::Details-->
                                </div>
                                <!--end::Row-->
                            </div>
                        </div>
                        <!--end::Menu 3-->
                    `
                  }
                },
                { targets: 4, visible: false,                   // Imagen
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${(data == 'ACTIVO' ? 'success' : 'danger')} fw-bold">${(data)}</div>
                    `
                  },
                },
                { targets: 5, visible: false },                 // Nacionalidad
                { targets: 6, visible: false },                 // Imagen Nacionalidad
                { targets: 7, visible: false },                 // Servicio
                { targets: 8, visible: false },                 // Supervisor
                { targets: 9, visible: false },                 // Desempeño
                { targets: -1, visible: true,                   //Acciones
                    data: null,
                    orderable: false,
                    className: 'text-end',
                    render: function(data, type, row) {
                        return `
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">                                
                        <i class="ki-duotone ki-double-left">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                      </a>
                    `;
                    },
                },
            ],
        });

        dt2.on('draw.dt', function () {
          dt2.row(':eq(0)').select();
        });

        table = dt1.$;

        dt2.on('draw', function() {
            $('[data-bs-toggle="tooltip"]').tooltip();
            KTMenu.createInstances();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch1 = document.querySelector('[data-kt-colaborador-table-filter="search"]');
        const filterSearch2 = document.querySelector('[data-kt-asignado-table-filter="search"]');
        filterSearch1.addEventListener('keyup', function(e) {
            dt1.search(e.target.value).draw();
        });
        filterSearch2.addEventListener('keyup', function(e) {
            dt2.search(e.target.value).draw();
        });
    }

    // Filter Datatable
    var handleFilterDatatable = () => {
        // Select filter options
        filterPayment = document.querySelectorAll('[data-kt-customer-table-filter="payment_type"] [name="payment_type"]');
        const filterButton = document.querySelector('[data-kt-customer-table-filter="filter"]');

        // Filter datatable on submit
        filterButton.addEventListener('click', function() {
          // Select filter options
          const filtroForm = document.querySelector('#kt_personal_filtro_form');
          const filtroButton = filtroForm.querySelector('[data-kt-user-table-filter="filter"]');
          const selectOptions = filtroForm.querySelectorAll('select');

          // Filter datatable on submit
          filterButton.addEventListener('click', function () {
              var filterString = '';

              // Get filter values
              selectOptions.forEach((item, index) => {
                  if (item.value && item.value !== '') {
                      if (index !== 0) {
                          filterString += ' ';
                      }

                      // Build filter value options
                      filterString += item.value;
                  }
              });

              // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()
              datatable.search(filterString).draw();
          });
        });
    }

    // Submit form handler
    const handleSubmitPeriodo = () => {

      // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
      validator = FormValidation.formValidation(
          formPeriodo,
          {
              fields: {
                  'estado': {
                    validators: {
                        callback: {
                            message: 'Debe seleccionar un estado válido',
                            callback: function(input) {
                                // Obtener el valor del campo 'estado'
                                var selectedEstado = input.value;
    
                                // Validar que sea 1, 0 o esté vacío
                                return selectedEstado === '1' || selectedEstado === '0' || selectedEstado === '';
                            }
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
                      formDataPeriodo.fecinicio = $("form#kt_periodo_filtro_form [name='fecha']").val();
                      formDataPeriodo.estado = $("form#kt_periodo_filtro_form [name='estado']").val();

                      setTimeout(function () {
                          //$('#tb_periodos').DataTable().clear().destroy();
                          //initDatatable1(formDataPeriodo);
                          formDataPeriodo.estado = 'x';
                          dt1.ajax.params({
                            fecinicio: '',
                            estado: '0',
                            usuario: 2,
                          });
                          dt1.ajax.reload(null, false);

                      }, 500);

                  } else {
                      Swal.fire({
                          html: "Lo siento, se han detectado campos <strong>obligatorios</strong> pendientes de llenado",
                          icon: "error",
                          buttonsStyling: false,
                          confirmButtonText: "Ok, entendido",
                          customClass: {
                              confirmButton: "btn btn-primary"
                          }
                      });
                  }
              });
          }
      })
    }

    const handleContinuar = () => {
        
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'periodo': {
                        validators: {
                            notEmpty: {
                                message: 'Seleccione un periodo'
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

        // Botón para continuar
        continuarButton.addEventListener('click', e => {
            e.preventDefault();
            // Validate form before submit
            if (validator) {
                continuarButton.setAttribute('data-kt-indicator', 'on');
                continuarButton.disabled = true;
                limpiarButton.disabled = true;
                setTimeout(function () {
                    initDatatable1();
                    initDatatable2();
                    continuarButton.setAttribute('data-kt-indicator', 'off');
                    // Disable submit button whilst loading
                    // Marcar los radio buttons con los valores devueltos por la API
                    Swal.fire({
                        toast: true,
                        position: "top-end",
                        icon: "success",
                        title: "Verificación exitosa, puede continuar",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                    });
                    document.getElementById('div-asignar').classList.remove('d-none');
                    $("[name='periodo']").prop('disabled', true);
                }, 500);
            } else {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "warning",
                    title: "Hay campos obligatorios pendientes de completar",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        })
    }

    // Reset Filter
    var handleResetForm = () => {
        // Select reset button
        const resetButton = document.querySelector('[data-kt-customer-table-filter="reset"]');

        // Reset datatable
        resetButton.addEventListener('click', function() {           
            // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()
            dt.search('').draw();
        });
    }
    // Public methods
    return {
        init: function() {
            form = document.getElementById('formAsignar');
            continuarButton = document.getElementById('btn_continuar');
            limpiarButton = document.getElementById('btn_limpiar');
            continuarButton.disabled = true;

            handleContinuar();
            handleSearchDatatable();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPersonalList.init();
});

function asignar(colaborador, periodo) {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    formData.append('usuario', $("#session_usuario_id").val());
    formData.append('usuario_rol', $("#session_rol_id").val());
    formData.append('colaborador', colaborador);
    formData.append('periodo', periodo);
    formData.append('servicio', $("[name='servicio']").val());

    fetch(`${environment.apiSRD}/API/jci/personal/agregar-asignacion`, {
        method: 'POST',
        body: formData,
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
                
        } else {
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "warning",
                title: datos.data['1'],
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }
        $("#colab_disponibles").DataTable().ajax.reload();
        $("#colab_asignados").DataTable().ajax.reload();
    });
};

window.asignar = asignar;

function quitar(encuesta) {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    formData.append('usuario', $("#session_usuario_id").val());
    formData.append('usuario_rol', $("#session_rol_id").val());
    formData.append('encuesta', encuesta);

    fetch(`${environment.apiSRD}/API/jci/personal/quitar-asignacion`, {
        method: 'POST',
        body: formData,
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
                
        } else {
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "warning",
                title: datos.data['1'],
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }
        $("#colab_disponibles").DataTable().ajax.reload();
        $("#colab_asignados").DataTable().ajax.reload();
    });
};

window.quitar = quitar;