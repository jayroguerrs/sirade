"use strict";

import { environment } from "../../../../../environment.js";

// Class definition
var KTAMarcacion = function() {
    // Shared variables

    var validator;
    var submitMarcacion;
    var formMarcacion;

    // Submit form handler
    var handleSubmitMarcacion = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            formMarcacion,
            {
                fields: {
                    'codigo-colaborador': {
                        validators: {
                            notEmpty: {
                                message: 'El código del colaborador es requerido'
                            },
                            regexp: {
                                regexp: /^[0-9]{7}$/,
                                message: 'El código debe ser de 7 dígitos'
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
        submitMarcacion.addEventListener('click', e => {
            
            e.preventDefault();
            
            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    
                    if (status == 'Valid') {
                        msgLoad("Procesando...");

                        // Disable submit button whilst loading
                        submitMarcacion.disabled = true;
                        
                        // Crear un nuevo objeto FormData
                        var datos = new FormData(formMarcacion);
                        datos.append('usuario', $("#session_usuario_id").val());
                        datos.append('usuario_rol', $("#session_rol_id").val());
                        //datos.append('fecha_hora', moment().format('YYYY-MM-DD HH:mm:ss'));
                        datos.append('fecha_hora', '2024-05-01 19:31:00');
                        
                        fetch(`${environment.apiSRD}/API/julia/asistencia/marcacion`, {
                            method: 'POST',
                            body: datos
                        }).then(Response => Response.json())
                        .then(datos => {
                            if (datos.estado == 1) {
                                // Mostrar valores de la búsqueda
                                document.getElementById('lbl-nombre').innerText = datos.data.nombre == undefined ? '---' : datos.data.nombre;
                                document.getElementById('lbl-tipo').innerText = datos.data.tipo == undefined ? '---' : datos.data.tipo;
                                // Dar formato a la fecha "DD/MM/YYYY HH:mm:ss a.m./p.m." 
                                if (datos.data.hora == undefined || datos.data.hora == null || datos.data.hora == '') {
                                    document.getElementById('lbl-hora').innerText = '---';
                                } else {
                                    document.getElementById('lbl-hora').innerText = moment(datos.data.hora).format('DD/MM/YYYY HH:mm:ss a');
                                }
                                document.getElementById('lbl-servicio').innerText = datos.data.area == undefined ? '---' : datos.data.area;
                                document.getElementById('lbl-observaciones').innerText = datos.data.obs == undefined ? '---' : datos.data.obs;
                                document.getElementById('imagen-colaborador').src = datos.data.imagen == undefined ? `assets/media/avatars/blank.png`: `assets/media/avatars/${datos.data.imagen}`;
                                msgSuccessMixin("Los cambios han sido guardados exitosamente", "");
                                // Seleccionar todo el contenido del input de código de name="codigo-colaborador"
                                var input = document.querySelector('input[name="codigo-colaborador"]');
                                input.focus();
                                input.select();
                                
                            } else {
                                msgError(ErrorMensaje(datos), () => { datos.estado == 2 ? location.reload() : ''; }, () => {datos.estado == 2 ? location.reload() : ''; });
                            }
                        }).catch(error => {
                            msgError('Error al procesar los datos: ' + error);
                        }).finally(() => {
                            submitMarcacion.disabled = false;  // Habilitar botón después de procesar
                        });
                       
                    }
                });
            }
        });
    }

    // Public methods
    return {
        init: function() {
            formMarcacion = document.getElementById('form_marcacion');
            submitMarcacion = document.getElementById('btn-buscar');

            handleSubmitMarcacion();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAMarcacion.init();
});