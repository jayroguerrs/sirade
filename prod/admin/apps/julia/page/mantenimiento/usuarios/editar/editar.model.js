"use strict";import{environment}from"../../../../../../../environment.js";var KTPersonalList=function(){var e,a,o,n,t;const r=document.querySelector("#kt_modal_filtro_usuario_limpiar");var s=new Dropzone("#kt_modal_masiva_usuario_files_upload",{url:`${environment.apiSRD}`,paramName:"file",maxFiles:1,acceptedFiles:".csv",maxFilesize:10,addRemoveLinks:!0,autoProcessQueue:!1,success:function(e,a){var o=new FormData;o.append("file",e),o.append("usuario",$("#session_usuario_id").val()),o.append("usuario_rol",$("#session_rol_id").val()),fetch(`${environment.apiSRD}/API/julia/usuarios/carga-masiva`,{method:"POST",body:o}).then((e=>e.json())).then((e=>{1==e.estado?new Promise((e=>{t.ajax.reload((function(){e()}),!1)})).then((()=>{swal.fire({html:SuccessMensaje(e),icon:"success",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}})})):msgError(ErrorMensaje(e),(()=>{2==e.estado&&location.reload()}),(()=>{2==e.estado&&location.reload()}))}));const n=document.querySelector("#kt_modal_masiva_usuario_submit");n.setAttribute("data-kt-indicator","off"),n.disabled=!1,s.removeAllFiles()}});return s.on("addedfile",(function(e){r.querySelectorAll(".dropzone-item").forEach((e=>{e.style.display=""}))})),s.on("totaluploadprogress",(function(e){r.querySelectorAll(".progress-bar").forEach((a=>{a.style.width=e+"%"}))})),s.on("sending",(function(e){r.querySelectorAll(".progress-bar").forEach((e=>{e.style.opacity="1"}))})),s.on("complete",(function(e){const a=r.querySelectorAll(".dz-complete");setTimeout((function(){a.forEach((e=>{e.querySelector(".progress-bar").style.opacity="0",e.querySelector(".progress").style.opacity="0"}))}),300)})),{init:function(){o=document.getElementById("form_modal_agregar_usuario"),a=document.getElementById("kt_modal_agregar_usuario_submit"),n=document.getElementById("kt_modal_agregar_usuario_cancel"),(t=$("#tb_usuarios").DataTable({autoWidth:!1,searchDelay:500,processing:!0,serverSide:!0,scrollX:!0,order:[[2,"asc"]],select:{style:"single",toggleable:!1},stateSave:!1,ajax:{type:"POST",url:`${environment.apiSRD}/API/julia/usuarios/listar-paginado`,data:function(e){var a=ObtenerDatos();e.codigo=a.codigo,e.nombres=a.nombres,e.documento=a.documento,e.ocupacion=a.ocupacion,e.desempenio=a.desempenio,e.nacionalidad=a.nacionalidad,e.rol=a.rol,e.estado=a.estado,e.usuario=$("#session_usuario_id").val(),e.usuario_rol=$("#session_rol_id").val()},beforeSend:function(){msgLoad("Procesando...")},complete:function(){msgAutoClose()},dataFilter:function(e){return jQuery.parseJSON(e).estado,e}},columns:[{data:null,name:"acciones"},{data:0,name:"NUSUA_ID"},{data:1,name:"CUSUA_NOMBRES"},{data:2,name:"COCUP_DESCRIPCION"},{data:3,name:"CNACI_DESCRIPCION"},{data:4,name:"CNACI_IMAGEN"},{data:5,name:"CUSUA_CORREO"},{data:6,name:"CUSUA_IMG"},{data:7,name:"CROLE_NOMBRE"},{data:8,name:"ESTADO"},{data:9,name:"FEC_MODIFICACION"},{data:10,name:"USR_MODIFICACION"}],columnDefs:[{targets:0,visible:!0,orderable:!1,className:"text-start",render:function(e,a,o){return`\n                            <button class="btn btn-sm btn-icon btn bg-light-primary btn-active-color-primary w-30px h-30px view-btn hover-scale" data-id="${o[0]}">\n                                <i class="ki-duotone ki-eye text-primary fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </button>\n                            <button class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px edit-btn hover-scale" data-id="${o[0]}">\n                                <i class="ki-duotone ki-notepad-edit text-warning fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </button>\n                            <button class="btn btn-sm btn-icon btn bg-light-danger btn-active-color-primary w-30px h-30px delete-btn hover-scale" data-id="${o[0]}">\n                                <i class="ki-duotone ki-trash text-danger fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </button>\n                        `}},{targets:1,visible:!1},{targets:2,visible:!0,className:"d-flex align-items-center",render:function(e,a,o){var n=o[6];if("blank.png"!=n)var t='<div class=symbol-label><img src="assets/media/avatars/'+n+'" alt="Avatar" class="w-100"></div>';else{var r=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],s=e.match(/\b\w/g)||[];t='<div class="symbol-label fs-3 bg-light-'+r+" text-"+r+'">'+(s=((s.shift()||"")+(s.pop()||"")).toUpperCase())+"</div>"}return`                        \n                        \x3c!--begin:: Avatar --\x3e\n                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">\n                            <span class="text-gray-800 text-hover-primary mb-1" data-bs-toggle="tooltip">\n                                ${t}\n                            </span>\n                        </div>\n                        \x3c!--end::Avatar--\x3e\n\n                        \x3c!--begin::User details--\x3e\n                        <div class="d-flex flex-column">\n                            <span class="mb-1" data-bs-toggle="tooltip" title="Haga click aquí para cerrar su sesión">${e}</span>\n                            <span>${o[5]}</span>\n                        </div>\n                        \x3c!--end::User details--\x3e                        \n                        `}},{targets:3,visible:!0},{targets:4,visible:!0,render:function(e,a,o){return`                        \n                          \x3c!--begin::Flag--\x3e\n                          <img src="assets/media/flags/${o[4]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />\n                          \x3c!--end::Flag--\x3e\n                          <span class="fs-7">${e}</span>                      \n                        `}},{targets:5,visible:!1},{targets:6,visible:!1},{targets:7,visible:!1},{targets:8,visible:!0},{targets:9,visible:!0,render:function(e,a,o){return`\n                            <div class="badge badge-light-${"ACTIVO"==e?"success":"danger"} fw-bold">${e}</div>\n                        `}},{targets:10,visible:!0},{targets:11,visible:!0}]})).on("draw.dt",(function(){t.row(":eq(0)").select()})),t.$,t.on("draw",(function(){KTMenu.createInstances(),$(".view-btn").on("click",(function(){AbrirModalUsuario($(this).data("id"),"ver")})),$(".edit-btn").on("click",(function(){AbrirModalUsuario($(this).data("id"),"editar")})),$(".delete-btn").on("click",(function(){EliminarUsuario($(this).data("id"))}))})),function(){const e=document.querySelector('[data-kt-usuario-table-filter="search"]');let a=e.value;e.addEventListener("change",(function(e){const o=e.target.value;o!==a&&(t.search(o).draw(),a=o)}))}(),e=FormValidation.formValidation(o,{fields:{codigo:{validators:{notEmpty:{message:"El código es requerido"}}},documento:{validators:{notEmpty:{message:"El número de documento es requerido"}}},nombres:{validators:{notEmpty:{message:"El nombre es requerido"}}},desempenio:{validators:{notEmpty:{message:"El desempeño es requerido"}}},ocupacion:{validators:{notEmpty:{message:"La ocupación es requerida"}}},nacionalidad:{validators:{notEmpty:{message:"La nacionalidad es requerida"}}},rol:{validators:{notEmpty:{message:"El rol es requerido"}}},correo:{validators:{notEmpty:{message:"El correo es requerido"},emailAddress:{message:"El correo no es válido"}}},estado:{validators:{notEmpty:{message:"El estado es requerido"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),a.addEventListener("click",(n=>{n.preventDefault(),e&&e.validate().then((function(n){if("Valid"==n){msgLoad("Procesando..."),a.setAttribute("data-kt-indicator","on"),a.disabled=!0;var r=new FormData(o);r.append("key",$('[name="id"]').val()),r.append("nombres",$('[name="nombres"]').val()),r.append("codigo",$('[name="codigo"]').val()),r.append("usuario",$("#session_usuario_id").val()),r.append("usuario_rol",$("#session_rol_id").val()),r.append("desempenio",$('[name="desempenio"]').val()),r.append("ocupacion",$('[name="ocupacion"]').val()),r.append("nacionalidad",$('[name="nacionalidad"]').val()),r.append("rol",$('[name="rol"]').val());var s="Agregar Usuario"==document.getElementById("titulo_modal").innerText?"agregar":"editar";msgConfirm("¿Está seguro que desea guardar los datos?",(()=>{fetch(`${environment.apiSRD}/API/julia/usuarios/editar-datos`,{method:"POST",body:r}).then((e=>e.json())).then((a=>{1==a.estado?($('[name="usuario"]').val(null).trigger("change"),$('[name="supervisor"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,e.resetForm(),$("#kt_modal_agregar_usuario").modal("hide"),t.order([4,"desc"]),new Promise((e=>{t.ajax.reload((()=>{e()}),!1)})).then((()=>{"agregar"==s?msgSuccess("Los cambios han sido guardados exitosamente"):msgSuccessMixin("Los cambios han sido guardados exitosamente","")}))):msgError(ErrorMensaje(a),(()=>{2==a.estado&&location.reload()}),(()=>{2==a.estado&&location.reload()}))})).catch((e=>{msgError("Error al procesar los datos: "+e)})).finally((()=>{a.setAttribute("data-kt-indicator","off"),a.disabled=!1}))}),(()=>{a.setAttribute("data-kt-indicator","off"),a.disabled=!1}))}}))})),document.querySelector("#kt_modal_filtro_usuario_submit").addEventListener("click",(function(e){e.preventDefault(),msgLoad("Procesando..."),$("#kt_usuario_filtro_modal").modal("hide"),new Promise((e=>{t.ajax.reload((function(){e()}))})).then((()=>{msgSuccessMixin("Los filtros se han aplicado exitosamente","")}))})),(()=>{const e=document.querySelector("#kt_modal_masiva_usuario_submit");e.addEventListener("click",(function(a){a.preventDefault(),msgLoad("Procesando..."),e.setAttribute("data-kt-indicator","on"),s.files.length>0?(e.disabled=!0,s.processQueue()):(msgError("No se ha seleccionado ningún archivo",(()=>{}),(()=>{})),e.setAttribute("data-kt-indicator","off"),e.disabled=!1)}))})(),document.querySelector("#kt_modal_filtro_usuario_limpiar").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("form_modal_filtro_usuario").reset(),$('[name="filtro-usuario"]').val(null).trigger("change"),$('[name="filtro-supervisor"]').val(null).trigger("change"),document.querySelector('input[name="filtro-estado"][value="1"]').checked=!1,document.querySelector('input[name="filtro-estado"][value="0"]').checked=!1,new Promise((e=>{t.ajax.reload((function(){e()}))})).then((()=>{msgSuccessMixin("Los filtros se han limpiado exitosamente","")}))})),n.addEventListener("click",(function(){$('[name="usuario"]').val(null).trigger("change"),$('[name="supervisor"]').val(null).trigger("change"),$("#kt_modal_agregar_usuario").modal("hide")})),document.querySelector("#carga-masiva").addEventListener("click",(function(e){e.preventDefault(),$("#kt_usuario_masiva_modal").modal("show")})),document.querySelector("#boton-exportar-usuario").addEventListener("click",(function(e){e.preventDefault(),msgLoad("Procesando...");var a=new FormData(o);a.append("servicio",$('[name="filtro-servicio"]').val()),a.append("supervisor",$('[name="filtro-supervisor"]').val()),a.append("usuario",$("#session_usuario_id").val()),a.append("usuario_rol",$("#session_rol_id").val()),fetch(`${environment.apiSRD}/API/julia/usuarios/listar`,{method:"POST",body:a}).then((e=>{if(e.ok)return e.blob();throw new Error("Error al generar el CSV")})).then((e=>{const a=window.URL.createObjectURL(e),o=document.createElement("a");o.href=a,o.download="CE_Lista_Usuarios.csv",document.body.appendChild(o),o.click(),o.remove()})).catch((e=>{msgError("Error al procesar los datos: "+e,(()=>{}),(()=>{}))})).finally((()=>{msgSuccessMixin("Se ha descargado el documento exitosamente","")}))})),document.querySelector("#btn-plantilla").addEventListener("click",(function(e){e.preventDefault(),fetch(`${environment.apiSRD}/API/usuarios/plantilla`,{method:"POST"}).then((e=>{if(e.ok)return e.blob();throw new Error("Error al generar el CSV")})).then((e=>{const a=window.URL.createObjectURL(e),o=document.createElement("a");o.href=a,o.download="JULIA_Plantilla.csv",document.body.appendChild(o),o.click(),o.remove()})).catch((e=>{msgError("Error al procesar los datos: "+e,(()=>{}),(()=>{}))})).finally((()=>{msgSuccessMixin("Se ha descargado el documento exitosamente","")}))}))}}}();function ObtenerDatos(){var e,a=Boolean(document.querySelector('input[name="filtro-estado"][value="1"]').checked),o=Boolean(document.querySelector('input[name="filtro-estado"][value="0"]').checked);0==a&&0==o?e="":1==a&&0==o?e="1":0==a&&1==o&&(e="0");var n=new Array;return n.codigo=$("[name='filtro-codigo']").val(),n.nombres=$("[name='filtro-nombres']").val(),n.documento=$("[name='filtro-documento']").val(),n.ocupacion=$("[name='filtro-ocupacion']").val(),n.desempenio=$("[name='filtro-desempenio']").val(),n.nacionalidad=$("[name='filtro-nacionalidad']").val(),n.rol=$("[name='filtro-rol']").val(),n.estado=e,n.usuario=$("#session_usuario_id").val(),n.usuario_rol=$("#session_rol_id").val(),n}function AbrirModalUsuario(e,a){if(msgLoad("Procesando..."),"editar"==a||"ver"==a){"ver"==a?($("#form_modal_agregar_usuario").find("input, select, textarea").prop("disabled",!0),$("#kt_modal_agregar_usuario_submit").hide()):($("#form_modal_agregar_usuario").find("input, select, textarea").prop("disabled",!1),$("#kt_modal_agregar_usuario_submit").show());var o=new FormData;o.append("usuario",$("#session_usuario_id").val()),o.append("usuario_rol",$("#session_rol_id").val()),o.append("id",e),fetch(`${environment.apiSRD}/API/julia/usuarios/obtener-por-id`,{method:"POST",body:o}).then((e=>e.json())).then((e=>{if(1==e.estado){var a=e.data;document.querySelector("#sh_img").style.backgroundImage="url('assets/media/avatars/"+a.img+"')",$('[name="id"]').val(a.idusuario).trigger("change"),$('[name="codigo"]').val(a.codigo).trigger("change"),$('[name="documento"]').val(a.documento).trigger("change"),$('[name="nombres"]').val(a.nombres).trigger("change"),$('[name="desempenio"]').val(a.desem).trigger("change"),$('[name="ocupacion"]').val(a.ocup).trigger("change"),$('[name="nacionalidad"]').val(a.naci).trigger("change"),$('[name="correo"]').val(a.correo).trigger("change"),document.querySelector(`input[name="estado"][value="${a.estado}"]`).checked=!0;var o=a.rol,n=$('[name="rol"]');n.val(null).trigger("change"),o.forEach((function(e){var a=n.find('option[value="'+e.id+'"]');a.length&&a.prop("selected",!0)})),n.trigger("change"),msgAutoClose(),$("#kt_modal_agregar_usuario").modal("show")}else msgError(ErrorMensaje(e),(()=>{2==e.estado&&location.reload()}),(()=>{2==e.estado&&location.reload()}))})),document.getElementById("div-estado").style.display="block",document.getElementById("titulo_modal").innerText="Editar Usuario"}else document.getElementById("div-estado").style.display="none",document.getElementById("titulo_modal").innerText="Agregar Usuario",$('[name="usuario"]').prop("disabled",!1),$("#kt_modal_agregar_usuario_submit").show(),msgAutoClose(),$("#kt_modal_agregar_usuario").modal("show")}function EliminarUsuario(e){var a=new FormData;a.append("usuario",$("#session_usuario_id").val()),a.append("usuario_rol",$("#session_rol_id").val()),a.append("id",e),msgWarning("¿Está seguro que desea eliminar el usuario?","Si, Eliminar",(()=>{msgLoad("Procesando..."),fetch(`${environment.apiSRD}/API/julia/servicios/eliminar-servicios`,{method:"POST",body:a}).then((e=>e.json())).then((e=>{if(1==e.estado){var a=$("#tb_usuarios").DataTable();new Promise((e=>{a.ajax.reload((function(){e()}))})).then((()=>{msgSuccessMixin("El usuario ha sido eliminado exitosamente","")}))}else msgError(ErrorMensaje(e),(()=>{2==e.estado&&location.reload()}),(()=>{2==e.estado&&location.reload()}))}))}))}KTUtil.onDOMContentLoaded((function(){KTPersonalList.init()})),window.AbrirModalUsuario=AbrirModalUsuario,window.EliminarUsuario=EliminarUsuario;