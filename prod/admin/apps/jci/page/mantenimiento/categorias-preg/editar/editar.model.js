"use strict";import{environment}from"../../../../../../../environment.js";var KTCategoriaPregList=function(){var e,t,a,n;return $("#custom-pdf").on("click",(function(e){e.preventDefault(),n.button(".buttons-pdf").trigger()})),$("#custom-excel").on("click",(function(e){e.preventDefault(),n.button(".buttons-excel").trigger()})),$("#custom-csv").on("click",(function(e){e.preventDefault(),n.button(".buttons-csv").trigger()})),$("#custom-copy").on("click",(function(e){e.preventDefault(),n.button(".buttons-copy").trigger()})),{init:function(){a=document.getElementById("form_modal_agregar_categorias"),t=document.getElementById("kt_modal_agregar_categorias_submit"),document.getElementById("kt_modal_agregar_categorias_cancel"),(n=$("#tb_categorias").DataTable({searchDelay:500,processing:!0,serverSide:!0,scrollX:!0,order:[[2,"asc"]],select:{style:"single",toggleable:!1},stateSave:!1,ajax:{type:"POST",url:`${environment.apiSRD}/API/jci/preguntas-cat/lista`,data:function(e){var t=ObtenerDatos();e.categoria=t.categoria,e.estado=t.estado,e.usuario=$("#session_usuario_id").val(),e.usuario_rol=$("#session_rol_id").val()}},columns:[{data:null,name:"acciones"},{data:0,name:"NJCAP_ID"},{data:1,name:"NJCAP_ORDEN"},{data:2,name:"CJCAP_NOMBRE"},{data:3,name:"ESTADO"},{data:4,name:"FEC_MODIFICACION"},{data:5,name:"USR_MODIFICACION"}],columnDefs:[{targets:0,visible:!0,orderable:!1,className:"text-start",render:function(e,t,a){return`\n                            <a href="javascript:AbrirModalCategoria('${a[0]}', 'editar');" class="btn btn-sm btn-icon btn bg-light-info btn-active-color-primary w-30px h-30px">\n                                <i class="ki-duotone ki-notepad-edit text-info fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </a>\n                            <a href="javascript:EliminarCategoria('${a[0]}');" class="btn btn-sm btn-icon btn bg-light-warning btn-active-color-primary w-30px h-30px">\n                                <i class="ki-duotone ki-trash text-warning fs-2">\n                                    <span class="path1"></span>\n                                    <span class="path2"></span>\n                                    <span class="path3"></span>\n                                    <span class="path4"></span>\n                                    <span class="path5"></span>\n                                </i>\n                            </a>\n                        `}},{targets:1,visible:!1},{targets:4,visible:!0,render:function(e,t,a){return`\n                            <div class="badge badge-light-${"ACTIVO"==e?"success":"danger"} fw-bold">${e}</div>\n                        `}}],buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle mx-3",text:'<i class="bx bx-upload me-2"></i>Exportar',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Imprimir',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]}},{extend:"csv",bom:"true",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]},filename:"Reporte de Categorías de Preguntas"},{extend:"excel",text:'<i class="bx bx-file me-2" ></i>Excel',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]},ffilename:"Reporte de Categorías de Preguntas"},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]},filename:"Reporte de Categorías de Preguntas",customize:function(e){e.content.unshift({text:"Reporte de Preguntas",fontSize:14,alignment:"center",margin:[0,10]}),e.defaultStyle.fontSize=9,e.styles.tableHeader.fontSize=11,e.pageOrientation="landscape",e.pageSize="A4"}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copiar',className:"dropdown-item",action:newexportaction,exportOptions:{columns:[1,2,3,4,5,6]}}]}]})).on("draw.dt",(function(){n.row(":eq(0)").select()})),n.$,n.on("draw",(function(){KTMenu.createInstances()})),document.querySelector('[data-kt-categorias-table-filter="search"]').addEventListener("keyup",(function(e){n.search(e.target.value).draw()})),e=FormValidation.formValidation(a,{fields:{categoria:{validators:{notEmpty:{message:"La categoría es requerida"}}},orden:{validators:{notEmpty:{message:"El orden es requerido"},integer:{message:"El valor debe ser numérico"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(o=>{o.preventDefault(),e&&e.validate().then((function(o){if("Valid"==o){t.setAttribute("data-kt-indicator","on"),t.disabled=!0;var r=new FormData(a);r.append("usuario",$("#session_usuario_id").val()),r.append("usuario_rol",$("#session_rol_id").val()),r.append("orden",$('[name="orden"]').val()),r.append("categoria",$('[name="categoria"]').val());var i="Agregar Pregunta"==document.getElementById("titulo_modal").innerText?"agregar":"editar";Swal.fire({text:"¿Está seguro que desea guardar los cambios registrados?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Si, guardar",cancelButtonText:"No, cancelar",customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-active-light-primary"}}).then((function(t){t.value&&fetch(`${environment.apiSRD}/API/jci/preguntas-cat/${i}-categoria`,{method:"POST",body:r}).then((e=>e.json())).then((t=>{1==t.estado?("agregar"==i?swal.fire({text:"Se ha agregado la categoria correctamente",icon:"success",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}}):Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los cambios han sido guardados exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),$('[name="id"]').val(null).trigger("change"),$('[name="categoria"]').val(null).trigger("change"),$('[name="orden"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,e.resetForm(),n.ajax.reload(),$("#kt_modal_agregar_categorias").modal("hide")):Swal.fire({html:ErrorMensaje(t),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})}))})),t.setAttribute("data-kt-indicator","off"),t.disabled=!1}}))})),document.querySelector("#kt_modal_filtro_categorias_submit").addEventListener("click",(function(e){e.preventDefault(),$("#kt_categorias_filtro_modal").modal("hide"),n.ajax.reload(),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han limpiado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),document.querySelector("#kt_modal_filtro_categorias_limpiar").addEventListener("click",(function(e){e.preventDefault(),document.getElementById("form_modal_filtro_categorias").reset(),$('[name="filtro-categorias"]').val(null).trigger("change"),$('[name="filtro-categoria"]').val(null).trigger("change"),document.querySelector('input[name="filtro-estado"][value="1"]').checked=!1,document.querySelector('input[name="filtro-estado"][value="0"]').checked=!1,n.ajax.reload(),Swal.fire({toast:!0,position:"top-end",icon:"success",title:"Los filtros se han limpiado exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})),$("#kt_modal_agregar_categorias").on("hidden.bs.modal",(function(){$('[name="id"]').val(null).trigger("change"),$('[name="categoria"]').val(null).trigger("change"),$('[name="orden"]').val(null).trigger("change"),document.querySelector('input[name="estado"][value="1"]').checked=!1,document.querySelector('input[name="estado"][value="0"]').checked=!1,e.resetForm()}))}}}();function AbrirModalCategoria(e,t){if("editar"==t){document.getElementById("div-estado").style.display="block";var a=new FormData;a.append("usuario",$("#session_usuario_id").val()),a.append("usuario_rol",$("#session_rol_id").val()),a.append("id",e),fetch(`${environment.apiSRD}/API/jci/preguntas-cat/obtener-por-id`,{method:"POST",body:a}).then((e=>e.json())).then((e=>{if(1==e.estado){var t=e.data;$('[name="id"]').val(t.idcap).trigger("change"),$('[name="categoria"]').val(t.categoria).trigger("change"),$('[name="orden"]').val(t.orden).trigger("change"),document.querySelector(`input[name="estado"][value="${t.estado}"]`).checked=!0}else Swal.fire({html:ErrorMensaje(e),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})})),document.getElementById("titulo_modal").innerText="Editar Pregunta"}else document.getElementById("div-estado").style.display="none",document.getElementById("titulo_modal").innerText="Agregar Pregunta";$("#kt_modal_agregar_categorias").modal("show")}function EliminarCategoria(e){var t=new FormData;t.append("usuario",$("#session_usuario_id").val()),t.append("usuario_rol",$("#session_rol_id").val()),t.append("id",e),Swal.fire({title:"¿Está seguro que desea eliminar la categoria?",text:"Este proceso no podrá ser revertido",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",confirmButtonColor:"#f06445",cancelButtonText:"Cancelar"}).then((e=>{e.isConfirmed&&fetch(`${environment.apiSRD}/API/jci/preguntas-cat/eliminar-categoria`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{1==e.estado?(Swal.fire({toast:!0,position:"top-end",icon:"success",title:"La categoria ha sido eliminada exitosamente",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),$("#tb_categorias").DataTable().ajax.reload()):Swal.fire({html:ErrorMensaje(e),icon:"error",buttonsStyling:!1,confirmButtonText:"Entendido",customClass:{confirmButton:"btn btn-primary"}})}))}))}function ObtenerDatos(){var e,t=Boolean(document.querySelector('input[name="filtro-estado"][value="1"]').checked),a=Boolean(document.querySelector('input[name="filtro-estado"][value="0"]').checked);0==t&&0==a?e="":1==t&&0==a?e="1":0==t&&1==a&&(e="0");var n=new Array;return n.categoria=$("[name='filtro-categoria']").val(),n.estado=e,n.usuario=$("#session_usuario_id").val(),n.usuario_rol=$("#session_rol_id").val(),n}KTUtil.onDOMContentLoaded((function(){KTCategoriaPregList.init()})),window.AbrirModalCategoria=AbrirModalCategoria,window.EliminarCategoria=EliminarCategoria;