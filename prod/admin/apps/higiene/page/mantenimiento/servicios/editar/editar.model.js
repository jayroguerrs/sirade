"use strict";import{environment}from"../../../../../../../environment.js";var KTPersonalList=function(){var e,t,n,o;return $("#custom-pdf").on("click",(function(e){e.preventDefault(),o.button(".buttons-pdf").trigger()})),$("#custom-excel").on("click",(function(e){e.preventDefault(),o.button(".buttons-excel").trigger()})),$("#custom-csv").on("click",(function(e){e.preventDefault(),o.button(".buttons-csv").trigger()})),$("#custom-copy").on("click",(function(e){e.preventDefault(),o.button(".buttons-copy").trigger()})),{init:function(){n=document.getElementById("form_modal_agregar_servicio"),t=document.getElementById("kt_modal_agregar_servicio_submit"),document.getElementById("kt_modal_agregar_servicio_cancel"),(o=$("#tb_periodos").DataTable({searchDelay:500,processing:!0,serverSide:!0,scrollX:!0,order:[[1,"asc"]],select:{style:"single",toggleable:!1},stateSave:!1,ajax:{type:"POST",url:`${environment.apiSRD}/API/higiene/servicios/lista`,data:function(e){var t=ObtenerDatos();e.servicio=t.servicio,e.supervisor=t.supervisor,e.estado=t.estado,e.usuario=$("#session_usuario_id").val(),e.usuario_rol=$("#session_rol_id").val()}},columns:[{data:null,name:"acciones"},{data:0,name:"NASUP_ID"},{data:1,name:"CAREA_DESCRIPCION"},{data:5,name:"SUPERVISOR"},{data:2,name:"ESTADO"},{data:3,name:"FEC_MODIFICACION"},{data:4,name:"USR_MODIFICACION"}],columnDefs:[{targets:0,visible:!0,orderable:!1,className:"text-start",render:function(e,t,n){return`\n                            <a href="javascript:AbrirModalServicio('${n[0]}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">\n                                <i class="ki-duotone ki-notepad-edit text-info fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </a>\n                            <a href="javascript:EliminarServicio('${n[0]}');" class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px">\n                                <i class="ki-duotone ki-trash text-warning fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </a>\n                        `}},{targets:1,visible:!1},{targets:3,visible:!0,render:function(e,t,n){return null==e?'\n                                <div class="badge badge-light-danger fw-bold">SIN SUPERVISOR ASIGNADO</div>\n                            ':e}},{targets:4,visible:!0,render:function(e,t,n){return`\n                            <div class="badge badge-light-${"ACTIVO"==e?"success":"danger"} fw-bold">${e}</div>\n                        `}}],buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle mx-3",text:'<i class="bx bx-upload me-2"></i>Exportar',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Imprimir',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]}},{extend:"csv",bom:"true",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]},filename:"Reporte de Servicios"},{extend:"excel",text:'<i class="bx bx-file me-2" ></i>Excel',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]},filename:"Reporte de Servicios"},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",action:newexportaction,filename:"Reporte de Servicios",exportOptions:{columns:[1,2,3,4,5,6]},customize:function(e){e.content.unshift({text:"Reporte de Usuarios",fontSize:14,alignment:"center",margin:[0,10]}),e.defaultStyle.fontSize=9,e.styles.tableHeader.fontSize=11,e.pageOrientation="landscape",e.pageSize="A4"}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copiar',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]}}]}]})).on("draw.dt",(function(){o.row(":eq(0)").select()})),o.$,o.on("draw",(function(){KTMenu.createInstances()})),document.querySelector('[data-kt-servicio-table-filter="search"]').addEventListener("keyup",(function(e){o.search(e.target.value).draw()})),e=FormValidation.formValidation(n,{fields:{servicio:{validators:{notEmpty:{message:"El servicio es requerido"}}},supervisor:{validators:{notEmpty:{message:"El supervisor es requerido"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(i=>{i.preventDefault(),e&&e.validate().then((function(i){if("Valid"==i){t.setAttribute("data-kt-indicator","on"),t.disabled=!0;var a=new FormData(n);a.append("usuario",$("#session_usuario_id").val()),a.append("usuario_rol",$("#session_rol_id").val()),a.append("servicio",$('[name="servicio"]').val());var r="Agregar Servicio"==document.getElementById("titulo_modal").innerText?"agregar":"editar";Swal.fire({text:"¿Está seguro que desea guardar los cambios registrados?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Si, guardar",cancelButtonText:"No, cancelar",customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-active-light-primary"}}).then((function(t){t.value&&fetch(`${environment.apiSRD}/API/higiene/servicios/${r}-servicios`,{method:"POST",body:a}).then((e=>e.json())).then((t=>{1==t.estado?("agregar"==r?swal.fire({text:"Se ha agregado el servicio correctamente",icon:"success",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}}):Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los cambios han sido guardados exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),$('[name="servicio"]').val(null).trigger("change"),$('[name="supervisor"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,e.resetForm(),o.ajax.reload(),$("#kt_modal_agregar_servicio").modal("hide")):Swal.fire({html:ErrorMensaje(t),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})}))})),t.setAttribute("data-kt-indicator","off"),t.disabled=!1}}))})),document.querySelector("#kt_modal_filtro_servicio_submit").addEventListener("click",(function(e){e.preventDefault(),$("#kt_servicio_filtro_modal").modal("hide"),o.ajax.reload(),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han aplicado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),document.querySelector("#kt_modal_filtro_servicio_limpiar").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("form_modal_filtro_servicio").reset(),$('[name="filtro-servicio"]').val(null).trigger("change"),$('[name="filtro-supervisor"]').val(null).trigger("change"),document.querySelector('input[name="filtro-estado"][value="1"]').checked=!1,document.querySelector('input[name="filtro-estado"][value="0"]').checked=!1,o.ajax.reload(),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han limpiado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),$("#kt_modal_agregar_servicio").on("hidden.bs.modal",(function(){$('[name="servicio"]').val(null).trigger("change"),$('[name="supervisor"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,e.resetForm()}))}}}();function AbrirModalServicio(e,t){if("editar"==t){document.getElementById("div-estado").style.display="block";var n=new FormData;n.append("usuario",$("#session_usuario_id").val()),n.append("usuario_rol",$("#session_rol_id").val()),n.append("id",e),fetch(`${environment.apiSRD}/API/higiene/servicios/obtener-por-id`,{method:"POST",body:n}).then((e=>e.json())).then((e=>{if(1==e.estado){var t=e.data;$('[name="id"]').val(t.id).trigger("change"),$('[name="servicio"]').val(t.servicio).trigger("change"),$('[name="supervisor"]').val(t.usuario).trigger("change"),document.querySelector(`input[name="estado"][value="${t.estado}"]`).checked=!0}else Swal.fire({html:ErrorMensaje(e),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})})),document.getElementById("titulo_modal").innerText="Editar Servicio"}else document.getElementById("div-estado").style.display="none",document.getElementById("titulo_modal").innerText="Agregar Servicio";$("#kt_modal_agregar_servicio").modal("show")}function EliminarServicio(e){var t=new FormData;t.append("usuario",$("#session_usuario_id").val()),t.append("usuario_rol",$("#session_rol_id").val()),t.append("id",e),Swal.fire({title:"¿Está seguro que desea eliminar el servicio?",text:"Este proceso no podrá ser revertido",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",confirmButtonColor:"#f06445",cancelButtonText:"Cancelar"}).then((e=>{e.isConfirmed&&fetch(`${environment.apiSRD}/API/higiene/servicios/eliminar-servicios`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{1==e.estado?(Swal.fire({toast:!0,position:"top-end",icon:"success",title:"El servicio ha sido eliminado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),$("#tb_periodos").DataTable().ajax.reload()):Swal.fire({html:ErrorMensaje(e),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})}))}))}function ObtenerDatos(){var e,t=Boolean(document.querySelector('input[name="filtro-estado"][value="1"]').checked),n=Boolean(document.querySelector('input[name="filtro-estado"][value="0"]').checked);0==t&&0==n?e="":1==t&&0==n?e="1":0==t&&1==n&&(e="0");var o=new Array;return o.servicio=$("[name='filtro-servicio']").val(),o.supervisor=$("[name='filtro-supervisor']").val(),o.estado=e,o.usuario=$("#estado").val(),o.usuario_rol=$("#fechain").val(),o}KTUtil.onDOMContentLoaded((function(){KTPersonalList.init()})),window.AbrirModalServicio=AbrirModalServicio,window.EliminarServicio=EliminarServicio;