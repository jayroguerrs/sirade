"use strict";

// Iniciar con Carga de la URL
var cargarURL = function() {
    fetch('../config.json').then(response => response.json()).then(config => {
      window.host = config.URL;
      KTNuevaEvaluacion.init();
    }).catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
}

// Class definition
var KTNuevaEvaluacion = function () {
	var submitButton;
	var validator;
	var form;

    // Cargar servicios al seleccionar un periodo
    $("[name='periodo']").on('select2:select', function(e) {
        
        const parametros = {
            id_usuario: document.querySelector('#session_usuario_id').value,
            id_periodo: $("[name='periodo']").val(),
        };
        
        // Convierte el objeto de parámetros en una cadena de consulta
        const queryString = new URLSearchParams(parametros).toString();
        
        // Concatena la cadena de consulta a la URL de la solicitud
        const url = `${window.host}/API/jci/servicios/combo-servicios?${queryString}`;

        fetch(url, {
            method: 'GET',
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                $('#servicio').empty();
                // Supongamos que "data.valores" contiene un array de opciones
                const opciones = datos.data;

                // Llena el select2 con las opciones
                opciones.forEach(opcion => {
                    $("[name='servicio']").append(new Option(opcion.nom_area, opcion.id_area));
                });

                // Inicializa el select2 después de agregar las opciones
                $("[name='servicio']").prop('disabled', false);
                $("[name='servicio']").val('');             
                $("[name='servicio']").trigger('change');
            } else {
                $("[name='servicio']").prop('disabled', true);
            }
        });
    })

    // Cargar colaborador al seleccionar un servicio
    $("[name='servicio']").on('select2:select', function(e) {
        
        const parametros2 = {
            id_usuario: document.querySelector('#session_usuario_id').value,
            id_periodo: $("[name='periodo']").val(),
            id_servicio: $("[name='servicio']").val(),
        };
        
        // Convierte el objeto de parámetros en una cadena de consulta
        const queryString2 = new URLSearchParams(parametros2).toString();
        
        // Concatena la cadena de consulta a la URL de la solicitud
        const url2 = `${window.host}/API/jci/personal/combo-colaborador?${queryString2}`;

        fetch(url2, {
            method: 'GET',
        }).then(Response => Response.json())
        .then(datos => {
            if (datos.estado == 1) {
                $('#colaborador').empty();
                // Supongamos que "data.valores" contiene un array de opciones
                const opciones = datos.data;

                // Llena el select2 con las opciones
                opciones.forEach(opcion => {
                    const option = new Option(opcion.nom_colaborador, opcion.id_colaborador);
                    option.setAttribute('data-encuesta', opcion.id_encuesta); // Agrega el atributo "data-encuesta"
                    $("[name='colaborador']").append(option);
                });


                // Inicializa el select2 después de agregar las opciones
                $("[name='colaborador']").prop('disabled', false);
                $("[name='colaborador']").val('');             // Select the option with a value of '1'
                $("[name='colaborador']").trigger('change');   // Notify any JS components that the value changed

            } else {
                $("[name='colaborador']").prop('disabled', true);
            }
        });
    })

	// Handle form validation and submittion
	var handleForm = function() {
		// Stepper custom navigation

		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		validator = FormValidation.formValidation(
			form,
			{
				fields: {
					'name': {
						validators: {
							notEmpty: {
								message: 'Name is required'
							}
						}
					},
					'subject2': {
						validators: {
							notEmpty: {
								message: 'Name is required'
							}
						}
					},
					'email': {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
					'message': {
                        validators: {
							notEmpty: {
								message: 'Message is required'
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

		// Action buttons
		submitButton.addEventListener('click', function (e) {
			e.preventDefault();

			// Validate form before submit
			if (validator) {
				validator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						submitButton.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						submitButton.disabled = true;

						setTimeout(function() {
							submitButton.removeAttribute('data-kt-indicator');

							// Enable button
							submitButton.disabled = false;
							
							Swal.fire({
								text: "Form has been successfully submitted!",
								icon: "success",
								buttonsStyling: false,
								confirmButtonText: "Ok, got it!",
								customClass: {
									confirmButton: "btn btn-primary"
								}
							}).then(function (result) {
								if (result.isConfirmed) {
									//form.submit();
								}
							});

							//form.submit(); // Submit form
						}, 2000);   						
					} else {
						// Scroll top

						// Show error popuo. For more info check the plugin's official documentation: https://sweetalert2.github.io/
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok, got it!",
							customClass: {
								confirmButton: "btn btn-primary"
							}
						}).then(function (result) {
							KTUtil.scrollTop();
						});
					}
				});
			}
		});
	}

	return {
		// Public functions
		init: function () {
			// Elements
			form = document.querySelector('#formEvaluacion');
			submitButton = document.getElementById('kt_contact_submit_button');

			handleForm();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    cargarURL();
});