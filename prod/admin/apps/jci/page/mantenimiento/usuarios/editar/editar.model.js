"use strict";import{environment}from"../../../../../../../environment.js";var KTPersonalList=function(){var e,a,t,n,o;return $("#custom-pdf").on("click",(function(e){e.preventDefault(),o.button(".buttons-pdf").trigger()})),$("#custom-excel").on("click",(function(e){e.preventDefault(),o.button(".buttons-excel").trigger()})),$("#custom-csv").on("click",(function(e){e.preventDefault(),o.button(".buttons-csv").trigger()})),$("#custom-copy").on("click",(function(e){e.preventDefault(),o.button(".buttons-copy").trigger()})),{init:function(){t=document.getElementById("form_modal_agregar_usuario"),a=document.getElementById("kt_modal_agregar_usuario_submit"),n=document.getElementById("kt_modal_agregar_usuario_cancel"),(o=$("#tb_usuarios").DataTable({searchDelay:500,processing:!0,serverSide:!0,scrollX:!0,order:[[3,"asc"]],select:{style:"single",toggleable:!1},stateSave:!1,ajax:{type:"POST",url:`${environment.apiSRD}/API/julia/usuarios/lista`,data:function(e){var a=ObtenerDatos();e.ocupacion=a.ocupacion,e.desempenio=a.desempenio,e.nacionalidad=a.nacionalidad,e.estado=a.estado,e.usuario=$("#session_usuario_id").val(),e.usuario_rol=$("#session_rol_id").val()}},columns:[{data:null,name:"acciones"},{data:0,name:"NUSUA_ID"},{data:1,name:"CUSUA_CODIGO"},{data:2,name:"CUSUA_DOCUMENTO"},{data:3,name:"CUSUA_NOMBRES"},{data:4,name:"COCUP_DESCRIPCION"},{data:5,name:"CNACI_DESCRIPCION"},{data:6,name:"CNACI_IMAGEN"},{data:7,name:"CUSUA_CORREO"},{data:8,name:"CUSUA_IMG"},{data:9,name:"CROLE_NOMBRE"},{data:10,name:"ESTADO"},{data:11,name:"FEC_MODIFICACION"},{data:12,name:"USR_MODIFICACION"}],columnDefs:[{targets:0,visible:!0,orderable:!1,className:"text-start",render:function(e,a,t){return`\n                            <a href="javascript:AbrirModalUsuario('${t[0]}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">\n                                <i class="ki-duotone ki-notepad-edit text-info fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </a>\n                        `}},{targets:1,visible:!1},{targets:2,visible:!1},{targets:3,visible:!1},{targets:4,visible:!0,className:"d-flex align-items-center",render:function(e,a,t){var n=t[8];if("blank.png"!=n)var o='<div class=symbol-label><img src="assets/media/avatars/'+n+'" alt="Avatar" class="w-100"></div>';else{var i=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],r=e.match(/\b\w/g)||[];o='<div class="symbol-label fs-3 bg-light-'+i+" text-"+i+'">'+(r=((r.shift()||"")+(r.pop()||"")).toUpperCase())+"</div>"}return`                        \n                        \x3c!--begin:: Avatar --\x3e\n                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">\n                            <span class="text-gray-800 text-hover-primary mb-1" data-bs-toggle="tooltip">\n                                ${o}\n                            </span>\n                        </div>\n                        \x3c!--end::Avatar--\x3e\n\n                        \x3c!--begin::User details--\x3e\n                        <div class="d-flex flex-column">\n                            <span class="mb-1" data-bs-toggle="tooltip" title="Haga click aquí para cerrar su sesión">${e}</span>\n                            <span>${t[7]}</span>\n                        </div>\n                        \x3c!--end::User details--\x3e                        \n                        `}},{targets:5,visible:!0},{targets:6,visible:!0,render:function(e,a,t){return`                        \n                          \x3c!--begin::Flag--\x3e\n                          <img src="assets/media/flags/${t[6]}" class="w-25px me-3" style="width: 20px;border-radius: 4px" alt="" />\n                          \x3c!--end::Flag--\x3e\n                          <span class="fs-7">${e}</span>                      \n                        `}},{targets:7,visible:!1},{targets:8,visible:!1},{targets:9,visible:!1},{targets:10,visible:!1},{targets:11,visible:!0,render:function(e,a,t){return`\n                            <div class="badge badge-light-${"ACTIVO"==e?"success":"danger"} fw-bold">${e}</div>\n                        `}},{targets:12,visible:!0},{targets:13,visible:!0},{targets:14,visible:!1,title:"Colaborador",render:function(e,a,t){return t[3]}}],buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle mx-3",text:'<i class="bx bx-upload me-2"></i>Exportar',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Imprimir',className:"dropdown-item",action:newexportaction,filename:"Reporte de Usuarios",exportOptions:{columns:[2,3,14,5,6,8,10,11,12,13]}},{extend:"csv",bom:"true",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",action:newexportaction,filename:"Reporte de Usuarios",exportOptions:{columns:[2,3,14,5,6,8,10,11,12,13]}},{extend:"excel",text:'<i class="bx bx-file me-2" ></i>Excel',className:"dropdown-item",action:newexportaction,filename:"Reporte de Usuarios",exportOptions:{columns:[2,3,14,5,6,8,10,11,12,13]}},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",action:newexportaction,filename:"Reporte de Usuarios",exportOptions:{columns:[2,3,14,5,6,8,10,11,12,13]},customize:function(e){e.content.unshift({text:"Reporte de Usuarios",fontSize:14,alignment:"center",margin:[0,10]}),e.defaultStyle.fontSize=9,e.styles.tableHeader.fontSize=11,e.pageOrientation="landscape",e.pageSize="A4"}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copiar',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[2,3,14,5,6,8,10,11,12,13]}}]}]})).on("draw.dt",(function(){o.row(":eq(0)").select()})),o.$,o.on("draw",(function(){KTMenu.createInstances()})),document.querySelector('[data-kt-usuario-table-filter="search"]').addEventListener("keyup",(function(e){o.search(e.target.value).draw()})),e=FormValidation.formValidation(t,{fields:{codigo:{validators:{notEmpty:{message:"El código es requerido"}}},documento:{validators:{notEmpty:{message:"El número de documento es requerido"}}},nombres:{validators:{notEmpty:{message:"El nombre es requerido"}}},desempenio:{validators:{notEmpty:{message:"El desempeño es requerido"}}},ocupacion:{validators:{notEmpty:{message:"La ocupación es requerida"}}},nacionalidad:{validators:{notEmpty:{message:"La nacionalidad es requerida"}}},rol:{validators:{notEmpty:{message:"El rol es requerido"}}},correo:{validators:{notEmpty:{message:"El correo es requerido"},emailAddress:{message:"El correo no es válido"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),a.addEventListener("click",(n=>{n.preventDefault(),e&&e.validate().then((function(n){if("Valid"==n){a.setAttribute("data-kt-indicator","on"),a.disabled=!0;var i=new FormData(t);i.append("key",$('[name="id"]').val()),i.append("nombres",$('[name="nombres"]').val()),i.append("codigo",$('[name="codigo"]').val()),i.append("usuario",$("#session_usuario_id").val()),i.append("usuario_rol",$("#session_rol_id").val()),i.append("desempenio",$('[name="desempenio"]').val()),i.append("ocupacion",$('[name="ocupacion"]').val()),i.append("nacionalidad",$('[name="nacionalidad"]').val()),i.append("rol",$('[name="rol"]').val()),fetch(`${environment.apiSRD}/API/julia/usuarios/editar-usuarios`,{method:"POST",body:i}).then((e=>e.json())).then((a=>{1==a.estado?(Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los cambios han sido guardados exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),e.resetForm(),o.ajax.reload(),$("#kt_modal_agregar_usuario").modal("hide")):Swal.fire({html:ErrorMensaje(a),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})})),a.setAttribute("data-kt-indicator","off"),a.disabled=!1}}))})),document.querySelector("#kt_modal_filtro_usuario_submit").addEventListener("click",(function(e){e.preventDefault(),o.ajax.reload(),$("#kt_usuario_filtro_modal").modal("hide"),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han aplicado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),document.querySelector("#kt_modal_filtro_usuario_limpiar").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("form_modal_filtro_usuario").reset(),$('[name="filtro-ocupacion"]').val(null).trigger("change"),$('[name="filtro-desempenio"]').val(null).trigger("change"),$('[name="filtro-nacionalidad"]').val(null).trigger("change"),document.querySelector('input[name="filtro-estado"][value="1"]').checked=!1,document.querySelector('input[name="filtro-estado"][value="0"]').checked=!1,o.ajax.reload(),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han limpiado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),n.addEventListener("click",(function(){$('[name="usuario"]').val(null).trigger("change"),$('[name="supervisor"]').val(null).trigger("change"),$("#kt_modal_agregar_usuario").modal("hide")}))}}}();function AbrirModalUsuario(e,a){if("editar"==a){var t=new FormData;t.append("usuario",$("#session_usuario_id").val()),t.append("usuario_rol",$("#session_rol_id").val()),t.append("id",e),fetch(`${environment.apiSRD}/API/julia/usuarios/obtener-por-id`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{if(1==e.estado){var a=e.data;document.querySelector("#sh_img").style.backgroundImage="url('assets/media/avatars/"+a.img+"')",$('[name="id"]').val(a.idusuario).trigger("change"),$('[name="codigo"]').val(a.codigo).trigger("change"),$('[name="documento"]').val(a.documento).trigger("change"),$('[name="nombres"]').val(a.nombres).trigger("change"),$('[name="desempenio"]').val(a.desem).trigger("change"),$('[name="ocupacion"]').val(a.ocup).trigger("change"),$('[name="nacionalidad"]').val(a.naci).trigger("change"),$('[name="rol"]').val(a.rol).trigger("change"),$('[name="correo"]').val(a.correo).trigger("change"),document.querySelector(`input[name="estado"][value="${a.estado}"]`).checked=!0,$("[name='nombres']").prop("disabled",!0),$("[name='codigo']").prop("disabled",!0)}else Swal.fire({html:ErrorMensaje(e),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})})),document.getElementById("titulo_modal").innerText="Editar Usuario"}else $('[name="id"]').val(null).trigger("change"),$('[name="codigo"]').val(null).trigger("change"),$('[name="documento"]').val(null).trigger("change"),$('[name="nombres"]').val(null).trigger("change"),$('[name="desempenio"]').val(null).trigger("change"),$('[name="ocupacion"]').val(null).trigger("change"),$('[name="nacionalidad"]').val(null).trigger("change"),$('[name="rol"]').val(null).trigger("change"),$('[name="correo"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,document.querySelector("#sh_img").style.backgroundImage="url('assets/media/avatars/blank.png')",$("[name='nombres']").prop("disabled",!1),$("[name='codigo']").prop("disabled",!1),document.getElementById("titulo_modal").innerText="Agregar Usuario";$("#kt_modal_agregar_usuario").modal("show")}function ObtenerDatos(){var e,a=Boolean(document.querySelector('input[name="filtro-estado"][value="1"]').checked),t=Boolean(document.querySelector('input[name="filtro-estado"][value="0"]').checked);0==a&&0==t?e="":1==a&&0==t?e="1":0==a&&1==t&&(e="0");var n=new Array;return n.ocupacion=$("[name='filtro-ocupacion']").val(),n.desempenio=$("[name='filtro-desempenio']").val(),n.nacionalidad=$("[name='filtro-nacionalidad']").val(),n.estado=e,n.usuario=$("#estado").val(),n.usuario_rol=$("#fechain").val(),n}KTUtil.onDOMContentLoaded((function(){KTPersonalList.init()})),window.AbrirModalUsuario=AbrirModalUsuario;