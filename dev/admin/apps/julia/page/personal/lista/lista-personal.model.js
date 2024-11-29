"use strict";

// Class definition
var KTPersonalList = function() {
    // Shared variables
    var table;
    var dt;
    var filterPayment;

    // Private functions
    var initDatatable = function() {
        dt = $("#tb_personal").DataTable({
            searchDelay: 500,
            processing: true,
            serverSide: true,
            order: [
                [3, 'asc']
            ],
            stateSave: false,
            select: {
                style: 'multi',
                selector: 'td:first-child input[type="checkbox"]',
                className: 'row-selected'
            },
            ajax: {
                type: "POST",
                url: "apps/julia/page/personal/lista/lista-personal.model.php",
                /*
                data: function(data){
                  // Modificar los parámetros server-side
                  console.log(data.order[0]['column']);
                  data.v_busq = data.search[value],
                  data.v_colo = data.search[value]
                  var datos = ObtenerDatos();
                  data.conformidad = datos['conf'],
                  data.responsable = datos['res'],
                  data.estado = datos['estado'],
                  data.fechain = datos['fechain']
                },                
                */
            },
            columnDefs: [
                { targets: 0, visible: true,          //ID
                    orderable: false,
                    render: function(data) {
                        return `
                          <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input class="form-check-input" type="checkbox" value="${data}" />
                          </div>`;
                    }
                },
                { targets: 1, visible: false },       //Código
                { targets: 2, visible: false },       //Nombres                                
                { targets: 3, visible: true,          //Nombres Colaborador
                  className: 'd-flex align-items-center',
                  render: function (data, type, row) {
                    var user_img = row[10];
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
                        <span>${row[1]} | ${row[4]}</span>
                      </div>
                      <!--end::User details-->                        
                    `
                  }
                },
                { targets: 4, visible: false },       //Desempeño
                { targets: 5, visible: false,         //Ocupación
                  orderable: true,
                  className: 'd-flex align-items-center',
                  render: function(data, type, row) {
                    return `
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a class="fs-7 text-gray-800 mb-1">${data}</a>
                        <span class="fs-8">${row[4]}</span>
                      </div>
                      <!--end::User details-->
                    `
                  }
                },
                { targets: 6, visible: false },       //Ocupación 2
                { targets: 7, visible: true,          //Nacionalidad                  
                  render: function (data, type, row) {                    
                    return `                        
                      <!--begin::Flag-->
                      <img src="assets/media/flags/${row[8]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />
                      <!--end::Flag-->
                      <a class="text-dark fw-bold text-hover-primary fs-6">${data}</a>                      
                    `
                  }
                },
                { targets: 8, visible: false },       //Imagen nacionalidad
                { targets: 9, visible: true },        //Correo
                { targets: 10, visible: false },      //Imagen Colaborador                
                { targets: 11, visible: true,         //Estado Colaborador
                  render: function (data, type, row) {
                    return `
                      <div class="badge badge-light-${row[12]} fw-bold">${data}</div>
                    `
                  }
                },
                { targets: 12, visible: false },      //Estado Clase
                { targets: -1, visible: true,         //Acciones
                    data: null,
                    orderable: false,
                    className: 'text-end',
                    render: function(data, type, row) {
                        return `
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">                                
                        <span class="svg-icon svg-icon-5 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                  <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="currentColor" fill-rule="nonzero" transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"></path>
                                </g>
                            </svg>
                        </span>
                      </a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="?app=julia&page=editar-personal&id=${row[0]}" class="menu-link px-3" data-kt-customer-table-filter="edit_row">
                            Editar
                          </a>
                        </div>
                        <!--end::Menu item-->

                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-customer-table-filter="delete_row">
                            Eliminar
                          </a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    `;
                    },
                },
            ],
            // Add data-filter attribute
            createdRow: function(row, data, dataIndex) {
                $(row).find('td:eq(4)').attr('data-filter', data.CreditCardType);
            }

        });

        table = dt.$;

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        dt.on('draw', function() {
            initToggleToolbar();
            toggleToolbars();
            handleDeleteRows();
            KTMenu.createInstances();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = function() {
        const filterSearch = document.querySelector('[data-kt-customer-table-filter="search"]');
        filterSearch.addEventListener('keyup', function(e) {
            dt.search(e.target.value).draw();
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

    // Delete customer
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = document.querySelectorAll('[data-kt-customer-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function(e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get customer name
                const customerName = parent.querySelectorAll('td')[1].innerText;
                const customerName2 = parent.querySelectorAll('td')[1];
                const customerName3 = customerName2.querySelectorAll('div')[2];
                const customerName4 = customerName3.children('span').text();
                console.log(customerName4);

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "¿Está seguro que desea eliminar el registro: " + customerName + "?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, eliminar",
                    cancelButtonText: "No, cancelar",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then(function(result) {
                    if (result.value) {
                        // Simulate delete request -- for demo purpose only
                        Swal.fire({
                            text: "Eliminando " + customerName,
                            icon: "info",
                            buttonsStyling: false,
                            showConfirmButton: false,
                            timer: 2000
                        }).then(function() {
                            Swal.fire({
                                text: "Se acaba de eliminar el registro: " + customerName + ".",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, entendido",
                                customClass: {
                                    confirmButton: "btn fw-bold btn-primary",
                                }
                            }).then(function() {
                                // delete row data from server and re-draw datatable
                                dt.draw();
                            });
                        });
                    }
                });
            })
        });
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

    // Init toggle toolbar
    var initToggleToolbar = function() {
        // Toggle selected action toolbar
        // Select all checkboxes
        const container = document.querySelector('#tb_personal');
        const checkboxes = container.querySelectorAll('[type="checkbox"]');

        // Select elements
        const deleteSelected = document.querySelector('[data-kt-customer-table-select="delete_selected"]');

        // Toggle delete selected toolbar
        checkboxes.forEach(c => {
            // Checkbox on click event
            c.addEventListener('click', function() {
                setTimeout(function() {
                    toggleToolbars();
                }, 50);
            });
        });

        // Deleted selected rows
        deleteSelected.addEventListener('click', function() {
            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "¿Está seguro que desea eliminar el personal?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                showLoaderOnConfirm: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "No, cancelar",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                },
            }).then(function(result) {
                if (result.value) {
                    // Simulate delete request -- for demo purpose only
                    Swal.fire({
                        text: "Eliminando personal seleccionado",
                        icon: "info",
                        buttonsStyling: false,
                        showConfirmButton: false,
                        timer: 2000
                    }).then(function() {
                        Swal.fire({
                            text: "El personal ha sido eliminado con éxito",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, entendido",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(function() {
                            // delete row data from server and re-draw datatable
                            dt.draw();
                        });

                        // Remove header checked box
                        const headerCheckbox = container.querySelectorAll('[type="checkbox"]')[0];
                        headerCheckbox.checked = false;
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Selected customers was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Toggle toolbars
    var toggleToolbars = function() {
        // Define variables
        const container = document.querySelector('#tb_personal');
        const toolbarBase = document.querySelector('[data-kt-customer-table-toolbar="base"]');
        const toolbarSelected = document.querySelector('[data-kt-customer-table-toolbar="selected"]');
        const selectedCount = document.querySelector('[data-kt-customer-table-select="selected_count"]');

        // Select refreshed checkbox DOM elements
        const allCheckboxes = container.querySelectorAll('tbody [type="checkbox"]');

        // Detect checkboxes state & count
        let checkedState = false;
        let count = 0;

        // Count checked boxes
        allCheckboxes.forEach(c => {
            if (c.checked) {
                checkedState = true;
                count++;
            }
        });

        // Toggle toolbars
        if (checkedState) {
            selectedCount.innerHTML = count;
            toolbarBase.classList.add('d-none');
            toolbarSelected.classList.remove('d-none');
        } else {
            toolbarBase.classList.remove('d-none');
            toolbarSelected.classList.add('d-none');
        }
    }

    // Public methods
    return {
        init: function() {
            initDatatable();
            handleSearchDatatable();
            initToggleToolbar();
            handleFilterDatatable();
            handleDeleteRows();
            handleResetForm();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTPersonalList.init();
});







/* 

"use strict";
/*
$(function () {
  var z = $(".select2");
  var e, s, a, t, r


  



  a = $("#tabla"),
  t = $(".select2"),
  r = "app-user-view-account.html"
  var f = document.getElementById("editUserForm")

  s = FormValidation.formValidation(f, {
    fields: {
      edithc: {
        validators: {
          notEmpty: { message: "Ingrese la historia clÃnica" },
          stringLength: {
            min: 7,
            max: 7,
            message:
              "La historia clÃnica debe tener 7 dÃgitos"
          },        
        },
      },
      editnomb: {
        validators: {
          notEmpty: { message: "Ingrese los nombres del paciente" },
          regexp: {
            regexp: "^(^\S|\S$)",
            message: 'The value is not a valid email address',
          },
        },
      },
      editapell: {
        validators: {
          notEmpty: { message: "Ingrese los apellidos del paciente" }
        },
      },
      editedad: {
        validators: {
          notEmpty: { message: "Ingrese la edad del paciente" }
        },
      },
      editfecinout: {
        validators: {
          notEmpty: { message: "Ingrese la fecha de ingreso y alta" }
        },
      },
      editservicio: {
        validators: {
           notEmpty: { message: "Seleccione un servicio" }
        },
      },
      edithab: {
        validators: {
          notEmpty: { message: "Ingrese la habitaciÃ³n" }      
        },
      },
      editcomp: {
        validators: {
          promise: {
            promise: function (input) {
              return new Promise(function (resolve, reject){
                if (document.getElementById("editseguro").checked == true && input.value == '') {
                  resolve({
                    valid: false,
                    message: "Debe seleccionar una compaÃ±ia de seguro"
                  });
                } else {
                  resolve({
                    valid: true
                  });
                }
              });
            }
          }
        }
      },
      editdx: {
        validators: {
          notEmpty: { message: "Ingrese el diagnÃ³stico mÃ©dico" }
        },
      },
      editestado: {
        validators: { notEmpty: { message: "Seleccione el estado de llamada" }
       },
      },
      editinoutllamada: {
        validators: { 
          notEmpty: { message: "Seleccione hora de inicio y fin de llamada" },
          stringLength: {
            min: 27,              
            message:
              "Debe seleccionar tambien una hora de fin"
          },
        },
      },
      editconformidad: {
        validators: {
          notEmpty: { message: "Seleccione la conformidad de atenciÃ³n" }
        },
      },
      editclasificacion: {
        validators: {
          notEmpty: { message: "Seleccione la clasificaciÃ³n" }
        },
      },
      editaccion: {
        validators: {
          notEmpty: { message: "Seleccione una accion" }
        },
      },
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        eleValidClass: "",            
      }),          
      autoFocus: new FormValidation.plugins.AutoFocus(),
      transformer: new FormValidation.plugins.Transformer({
        fullName: {
          notEmpty: function (field, element, validator) {
            // Get the field value
            const value = element.value;

            // Remove the spaces from beginning and ending
            return value.trim();
          },
        },
      }),
    },          
  });
  // Handle form submit
  document.querySelector('#guardar').addEventListener('click', function (e) {
    e.preventDefault();
    // Validate form
    s.validate().then(function (status) {
      if (status == 'Valid') {  
        let datos = new FormData(f);
        fetch('includes/modelo-aplicaciones.php',{
          method : 'POST',
          body : datos
        }).then(Response => Response.json())
        .then (datos => {
          if(datos.resultado == 'ok'){
            $('#editUser').modal('toggle');
            Swal.fire({
              text: "Se guardaron los cambios exitosamente",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, gracias",
              customClass: {
                confirmButton: "btn btn-primary"
              }
            }).then(function (result) {
              if (result.isConfirmed) {
                var table = $('#tabla').DataTable();
                $('#editUserForm').trigger("reset");
                table.ajax.reload();                  
              }                  
            });
          }
        })
      }
    });
  });
  
  
  z.length &&
  z.each(function () {
    var z = $(this);
    z.wrap('<div class="position-relative"></div>').select2({        
      dropdownParent: z.parent(),
    });
  });
  
  $('.select2').on("change.select2", function () {
    s.revalidateField(this.name);
  });
  
  flatpickr(f.querySelector('[name="editfecinout"]'), {
    mode: 'range',
    maxDate: 'today',
    enableTime: !1,
    dateFormat: "d/m/Y",
    onChange: function () {
      s.revalidateField("editfecinout");
      f.querySelector('[name="editfecinout"]').focus();
    },
  });
  flatpickr(f.querySelector('[name="editinoutllamada"]'), {
    mode: 'range',
    maxDate: 'today',
    enableTime: true,
    dateFormat: "d/m/Y G:i:S K",
    onChange: function () {
      s.revalidateField("editinoutllamada");
      f.querySelector('[name="editinoutllamada"]').focus();
    },
  });  
  
  
  CargarTabla(e, a, t, r, $('input[name="fechaini"]').val(), $('input[name="fechafin"]').val());
  var fp = flatpickr($('input[name="ingreso_alta"]'), {
    mode: 'range',
    maxDate: 'today',
    enableTime: !1,
    dateFormat: "d/m/Y",
    defaultDate: [$('input[name="fechaini"]').val(), $('input[name="fechafin"]').val()],
    onOpen: function (dateSelected, dateStr, dateObj) {
      var x = document.getElementById("spinnercarga");
      x.style.display = "";
    },
    onChange: function (dateSelected, dateStr, dateObj) {
      fp.set('minDate',dateObj.selectedDates[0])
      if (dateObj.selectedDates[0].fp_incr(62) < new Date().fp_incr(-62) ) {
        fp.set('maxDate',dateObj.selectedDates[0].fp_incr(62));
      }
    },
    onClose: function (dateSelected, dateStr, dateObj) {
      if ($('input[name="ingreso_alta"]').val()!='') {
        var fechaini = $('input[name="ingreso_alta"]').val().slice(0,10);
        var fechafin = $('input[name="ingreso_alta"]').val().slice(13,23);
        CargarTabla(e, a, t, r, fechaini, fechafin);
        var x = document.getElementById("spinnercarga");
        x.style.display = "none";
      }
    }
   
  });

  $('button[name="clear"]').on('click', function(){ 
    flatpickr($('input[name="ingreso_alta"]')).destroy();
    
    var fp = flatpickr($('input[name="ingreso_alta"]'), {
      mode: 'range',      
      maxDate: 'today',
      enableTime: !1,
      dateFormat: "d/m/Y", 
      defaultDate: [$('input[name="fechaini"]').val(), $('input[name="fechafin"]').val()],
      onOpen: function (dateSelected, dateStr, dateObj) {
        var x = document.getElementById("spinnercarga");
        x.style.display = "";
      },
      onChange: function (dateSelected, dateStr, dateObj) {
        fp.set('minDate',dateObj.selectedDates[0])
        if (dateObj.selectedDates[0].fp_incr(62) < new Date().fp_incr(-62) ) {
          fp.set('maxDate',dateObj.selectedDates[0].fp_incr(62))          
        }
      },
      onClose: function (dateSelected, dateStr, dateObj) {
        if ($('input[name="ingreso_alta"]').val()!='') {        
          var fechaini = $('input[name="ingreso_alta"]').val().slice(0,10);
          var fechafin = $('input[name="ingreso_alta"]').val().slice(13,23);
          CargarTabla(e, a, t, r, fechaini, fechafin);
        }
        var x = document.getElementById("spinnercarga");
        x.style.display = "none";
      }
    });
  })
  
})





//$('#ingreso_alta').on('change', function(){
//  if (this.value.length == 10) {
//    $(this).val($(this).val() + ' - ' + $(this).val());
//  }      
//})


function Indicadores(){
    let datos = new FormData();
    
    datos.append('cod', document.querySelector('[name="codusuario"]').value);
    datos.append('rol', document.querySelector('[name="rolusuario"]').value);
    datos.append('fechaini', document.querySelector('#fechain').value.slice(0,10));
    datos.append('fechafin', document.querySelector('#fechain').value.slice(13,23));
    datos.append('registro', 'indicadores');  
    fetch('includes/modelo-aplicaciones.php',{
      method : 'POST',
      body : datos
    }).then(Response => Response.json())
    .then (datos => {  
      document.querySelector('#lblllamadas').innerHTML = (datos.data[0].llamadas);
      document.querySelector('#lblcontestadas').innerHTML = (datos.data[0].contestadas);
      document.querySelector('#lblporccontestadas').innerHTML = "(" + (Number(datos.data[0].contestadas) / Number(datos.data[0].llamadas) * 100).toFixed(1) + "%)";
      document.querySelector('#lblconformes').innerHTML = (datos.data[0].conformes);
      document.querySelector('#lblporcconformes').innerHTML = "(" + (Number(datos.data[0].conformes) / Number(datos.data[0].contestadas) * 100).toFixed(1) + "%)";
      document.querySelector('#lblnoconformes').innerHTML = (datos.data[0].noconformes);
      document.querySelector('#lblporcnoconformes').innerHTML = "(" + (Number(datos.data[0].noconformes) / Number(datos.data[0].contestadas) * 100).toFixed(1) + "%)";
    })
  }
  
  function AbrirModalEditar(model) {
    $('input[name="editid"]').val(model[0]);
    $('input[name="edithc"]').val(model[1]);
    $('input[name="editnomb"]').val(model[2]);
    $('input[name="editapell"]').val(model[3]);
    $('input[name="editedad"]').val(model[4]);
    $('input[name="editfecinout"]').val(model[5] + ' - ' + model[6]);
    $('#editservicio').val(model[7]).trigger('change.select2');  
    $('input[name="edithab"]').val(model[8]);
    $('#editcomp').val(model[10]).trigger('change.select2');
    if ($('#editcomp').val()=='') {
      $('input[name="editseguro"]').prop("checked", false);
    } else {
      $('input[name="editseguro"]').prop("checked", true);
    }
    $('input[name="editdx"]').val(model[11]);
    $('#editestado').val(model[12]).trigger('change.select2');
    $('input[name="editinoutllamada"]').val(model[13] + ' - ' + model[14]);
    if (model[15]==null){
      $('#editconformidad').val(model[15]).trigger('change.select2');
    } else {
      $('#editconformidad').val(model[15].toUpperCase()).trigger('change.select2');
    }
    if (model[17]==null){
      $('#editaccion').val(model[17]).trigger('change.select2');
    } else {
      $('#editaccion').val(model[17].toUpperCase()).trigger('change.select2');
    }
    if (model[16]==null){
      $('#editclasificacion').val(model[16]).trigger('change.select2');
    } else {
      $('#editclasificacion').val(model[16].toUpperCase()).trigger('change.select2');
    }
    $('textarea[name="editobs"]').val(model[18]);
    $("#editUser").modal("show");
  }
  
  function AbrirModalVer(model) {
    $('#viewid').html(model[0]);
    $('#viewhc').html(model[1]);
    $('#viewnomb').html(model[20]);        // Nombres 
    $('#viewapell').html(model[21]);       // Apellidos
    $('#viewedad').html(model[4]);
    $('#viewfecinout').html(model[5] + ' - ' + model[6]);
    $('#viewservicio').html(model[7]);  
    $('#viewhab').html(model[8]);
    $('#viewcomp').html(model[10]);
    $('#viewseguro').html(model[9]);
    $('#viewdx').html(model[11]);
    $('#viewestado').html(model[12]);
    $('#viewinoutllamada').html(model[13] + ' - ' + model[14]);
    $('#viewconformidad').html(model[15]);
    $('#viewaccion').html(model[17]);
    $('#viewclasificacion').html(model[16]);
    $('#viewobs').html(model[18]);
    $("#viewUser").modal("show");
  }
  
  function EliminarRegistro(id){
    Swal.fire({
      text: "Â¿EstÃ¡ seguro que desea eliminar el registro?",
      icon: "warning",        
      confirmButtonText: "Si, eliminar",
      showCancelButton: true,
      customClass: {
          confirmButton: "btn btn-primary me-1",
          cancelButton: 'btn btn-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
        if (result.isConfirmed) {              
          var table = $('#tabla').DataTable();
          let datos = new FormData();
          datos.append('id', id);
          datos.append('registro', 'eliminarreg');
          fetch('includes/modelo-aplicaciones.php',{
            method : 'POST',
            body : datos
          }).then(Response => Response.json())
          .then (datos => {
            if(datos.resultado == 'ok'){            
              table.ajax.reload();
            }
          });
        }
    });
  }
  
  // Class definition
  var RegistroLlamada = function () {
    // Shared variables
    var table;
    var dt;
    var filterPayment;
    
    // Private functions
    var initDatatable = function () {
      var dt = $("#tabla").DataTable({
        searchDelay: 500,
        processing: true,
        serverSide: true,
        scrollX: true,
        order: [[1, 'asc']],
        stateSave: true,
        select: {
            style: 'multi',
            selector: 'td:first-child input[type="checkbox"]',
            className: 'row-selected'
        },
        ajax: {        
          type: "POST",
          data: function(d){
            var datos = ObtenerDatos();
            d.conformidad = datos['conf'],
            d.responsable = datos['res'],
            d.estado = datos['estado'],
            d.fechain = datos['fechain']
          },
          url: "includes/modelo-llamadas-tb.php"
        },
             
        columnDefs: [
          { targets: 0, visible: false },   //Llave
          { targets: 1, visible: false },   //Historia ClÃnica        
          { targets: 2, visible: true,      //Nombr
            orderable: true,
            render: function (data, type, row) {
                return `
                    <!--begin::User details-->
                    <div class="d-flex flex-column">
                      <a  class="text-body text-truncate"><span class="fw-semibold text-primary">${data}</span></a>                    
                      <span>${row[4]} aÃ±os</span>
                      </div>
                      <!--begin::User details-->`;
            }
          },
          { targets: 3, visible: false },   //Nombres
          { targets: 4, visible: false },   //Edad
          { targets: 5, visible: false },   //Fecha Ingreso
          { targets: 6, visible: false },   //Fecha Alta
          { targets: 7, visible: false },   //Servicio
          { targets: 8, visible: false },   //HabitaciÃ³n
          { targets: 9, visible: false },   //Seguro
          { targets: 10, visible: false },  //Nombre CompaÃ±ia
          { targets: 11, visible: false },  //DiagnÃ³stico
          { targets: 12, visible: true ,    //Estado
            render: function (data, type, row) {
              var clase = ((data == 'CONTESTADA') ? 'success' : ((data == 'NO CONTESTADA') ? 'danger' : ((data == 'SIN NÃšMERO') ? 'info' : 'warning')));
              return (
                '<span class="badge bg-label-' + clase + '">' +
                data +
                "</span>"
              );
            }
          },
          { targets: 13, visible: true },   //Hora Inicio
          { targets: 14, visible: false },  //Hora Fin
          { targets: 15, visible: true,     //Conformidad
            render: function (data, type, row) {            
              return (
                "<span class='text-truncate d-flex align-items-center' style='font-size: 0.8125em; font-weight: 500;'>" +
                {
                  'CONFORME':
                    '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i class="bx bx-happy bx-xs"></i></span>',
                  'NO CONFORME':
                    '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30 me-2"><i class="bx bx-sad bx-xs"></i></span>',
                  'NO EVALUABLE':
                    '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-meh bx-xs"></i></span>',
                  'NO OPINA':
                    '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i class="bx bx-meh-blank bx-xs"></i></span>',                
                }[data] +
                data +
                "</span>"
              );
            }
          },
          { targets: 16, visible: false },  //Clasificacion
          { targets: 17, visible: false },  //Accion
          { targets: 18, visible: false },  //Observaciones
          { targets: 19, visible: true },   //Responsables
          { targets: 20, visible: false },  //Nombres
          { targets: 21, visible: false },  //Apellidos
          {
            targets: -1,
            title: "Acciones",
            searchable: !1,
            orderable: !1,
            render: function (data, type, row) {
              var model = JSON.stringify(row);   
              return (
                '<div class="d-inline-block">' +
                  '<button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown">' +
                    '<i class="bx bx-dots-vertical-rounded"></i>' +
                  '</button>'+
                  '<div class="dropdown-menu dropdown-menu-end">'+
                    "<a href='javascript:AbrirModalVer(" + model + ");' class='dropdown-item'>Ver</a>"+
                    "<a href='javascript:AbrirModalEditar(" + model + ");' class='dropdown-item'>Editar</a>"+
                    '<div class="dropdown-divider"></div>'+
                    '<a href="javascript:EliminarRegistro(' + row[0] + ');" class="dropdown-item text-danger delete-record">Eliminar</a>'+
                  '</div>'+
                '</div>'+
              '</div>'
              );
            },
          },
        ],      
        dom: '<"row mx-2"<"col-md-2"<"me-3"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
          searchPlaceholder: "Buscar..",
          emptyTable: "No hay informaciÃ³n",
          info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
          infoFiltered: "(Filtrado de _MAX_ total entradas)",
          infoPostFix: "",
          thousands: ",",
          lengthMenu: "Mostrar _MENU_ Entradas",
          loadingRecords: "Cargando...",
          processing: "Procesando...",
          search: "Buscar:",
          zeroRecords: "Sin resultados encontrados",
          paginate: {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
          }
        },
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
                exportOptions: { columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
              },
              {
                extend: "csv",
                bom: "true",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                action: newexportaction,
                exportOptions: { columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
              },
              {
                extend: 'excel',
                text: '<i class="bx bx-file me-2" ></i>Excel',
                className: "dropdown-item",
                action: newexportaction,
                exportOptions: { columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
              },
              {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                action: newexportaction,
                exportOptions: { columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
              },
              {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copiar',
                className: "dropdown-item",
                action: newexportaction,
                exportOptions: { columns: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
              },
            ],
          },
          {          
            text: '<i class="bx bx-plus me-0 me-sm-2"></i><span class="d-none d-lg-inline-block">Agregar Llamada</span>',
            className: "add-new btn btn-primary",
            action: function ( e, dt, node, config ) {
              location.href = 'nueva-llamada';
            },
            attr: {
              "data-bs-toggle": "offcanvas",
              "data-bs-target": "#AgregarLlamada",
            },          
          },
        ],
      });
    }  
    
    // Public methods
    return {
    init: function () {
      var e = $(".select2");
      e.length &&
      e.each(function () {
        var e = $(this);
        e.wrap('<div class="position-relative"></div>').select2({
          placeholder: "Select value",
          dropdownParent: e.parent(),
        });
      });
      flatpickr(document.querySelector('#ingreso_alta'), {
        mode: 'range',
        maxDate: 'today',
        enableTime: !1,
        dateFormat: "d/m/Y",
        onChange: function () {
          s.revalidateField("ingreso_alta");
        },
      });
      
      //Indicadores()
      initDatatable();
      //handleSearchDatatable();
      //initToggleToolbar();
      //handleFilterDatatable();
      //handleDeleteRows();
      //handleResetForm();
    }
  }
  }();
  
  document.addEventListener("DOMContentLoaded", () => {
    RegistroLlamada.init();
  });
  
  $(document).on('change', '#conf', function() {  
    $('#tabla').DataTable().ajax.reload();
  });
  $(document).on('change', '#res', function() {  
    $('#tabla').DataTable().ajax.reload();
  });
  $(document).on('change', '#estado', function() {  
    $('#tabla').DataTable().ajax.reload();
  });
  $(document).on('change', '#fechain', function() {  
    $('#tabla').DataTable().ajax.reload();
  });
  
  function ObtenerDatos(){
    var datos = new Array();
    datos['conf'] = $('#conf').val();
    datos['res'] = $('#res').val();
    datos['estado'] = $('#estado').val();
    datos['fechain'] = $('#fechain').val();
    return datos;
  }
  
  $('#fechain').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY')).trigger('change');
  });
  
  $('#fechain').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('').trigger('change');
  });
  
  function newexportaction(e, dt, button, config) {
    console.log(e);
    console.log(dt);
    console.log(button);
    console.log(config);
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
  

*/