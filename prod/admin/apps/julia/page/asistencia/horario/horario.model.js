"use strict";import{environment}from"../../../../../../environment.js";var KTPeriodo=function(){var e,o,a,t,n=[],r=()=>{var o=new FormData(e);return o.append("usuario",$("#session_usuario_id").val()),o.append("usuario_rol",$("#session_rol_id").val()),o.append("periodo",$('[name="filtro-periodos"]').val()),o.append("colaborador",$('[name="filtro-colaborador"]').val()),o.append("ocupacion",$('[name="filtro-ocupacion"]').val()),o.append("desempenio",$('[name="filtro-desempenio"]').val()),o.append("areaperiodo",$('[name="filtro-areaperiodo"]').val()),o.append("estado",$('[name="filtro-estado"]').val()),fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar-paginado`,{method:"POST",body:o}).then((e=>e.json())).then((e=>{if(1==e.estado){const o=e.data;if(o.length>0){const e=Object.keys(o[0]),t=o.map((e=>Object.values(e)));a.updateSettings({data:t,colHeaders:e,columns:e.map((()=>({type:"text"})))}),a.updateSettings({hiddenColumns:{columns:[4]}})}else a.updateSettings({data:[]}),msgWarning("No se encontraron registros para mostrar")}}))},i=()=>{const e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;a.updateSettings({height:e-300})};return{init:function(){a=new Handsontable(document.querySelector("#HSTable"),{width:"100%",height:"auto",dropdownMenu:!0,fixedColumnsStart:1,hiddenColumns:{columns:[5]},multiColumnSorting:!0,filters:!0,rowHeaders:!0,manualColumnResize:!0,autoWrapRow:!0,autoWrapCol:!0,licenseKey:"non-commercial-and-evaluation"}),t=(e,o,...a)=>{Handsontable.renderers.TextRenderer(e,o,...a),o.style.fontWeight="bold",o.style.color="green",o.style.background="#d7f1e1"},Handsontable.renderers.registerRenderer("customStylesRenderer",t),(()=>{msgLoad("Procesando...");var t=new FormData(e);t.append("usuario",$("#session_usuario_id").val()),t.append("usuario_rol",$("#session_rol_id").val());var n=$('[name="filtro-periodos"]').find("option");o=n.eq(1).val(),$('[name="filtro-periodos"]').val(o).trigger("change"),t.append("periodo",o),fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar-paginado`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{if(1==e.estado){const o=e.data,t=Object.keys(o[0]),n=o.map((e=>Object.values(e)));a.updateSettings({data:n,colHeaders:t,columns:t.map((()=>({type:"text"}))),with:"100%"}),a.updateSettings({hiddenColumns:{columns:[4]}}),msgAutoClose()}else msgError(ErrorMensaje(e),(()=>{}),(()=>{}))}))})(),i(),document.querySelector("#kt_modal_filtro_periodos_submit").addEventListener("click",(function(e){e.preventDefault(),msgLoad("Procesando..."),$("#kt_modal_filtro_periodos").modal("hide"),r().then((()=>{msgSuccessMixin("Los filtros se han aplicado exitosamente","")}))})),a.addHook("afterChange",((e,t)=>{if("loadData"!==t&&e){n=[],e.forEach((([e,t,r,i])=>{if(r!==i){var s=a.getCell(e,a.propToCol(t));s&&(s.style.fontWeight="bold",s.style.color="green",s.style.background="#d7f1e1");var d=a.getColHeader(a.propToCol(t));n.push({colaborador:a.getDataAtRow(e)[0],id_horario:a.getDataAtRow(e)[4],area:a.getDataAtRow(e)[1],area_dia:null,nombre_columna:d,id_periodo:o,valor_nuevo:i,valor_anterior:r})}}));let t=new FormData;t.append("cambios",JSON.stringify(n)),t.append("usuario",$("#session_usuario_id").val()),t.append("usuario_rol",$("#session_rol_id").val()),fetch(`${environment.apiSRD}/API/julia/asistencia/horario/modificar-horario`,{method:"POST",body:t}).then((e=>e.json())).then((e=>{1==e.estado?r().then((()=>{msgSuccessMixin("Los cambios se han aplicado exitosamente","")})):msgError(ErrorMensaje(e),(()=>{}),(()=>{}))}))}})),document.querySelector("#boton-actualizar-horario").addEventListener("click",(function(e){e.preventDefault(),msgLoad("Procesando..."),r().then((()=>{msgSuccessMixin("Se han actualizado la tabla exitosamente","")}))})),document.querySelector("#boton-exportar-horario").addEventListener("click",(function(o){o.preventDefault(),msgLoad("Procesando...");var a=new FormData(e);a.append("usuario",$("#session_usuario_id").val()),a.append("usuario_rol",$("#session_rol_id").val()),a.append("periodo",$('[name="filtro-periodos"]').val()),a.append("colaborador",$('[name="filtro-colaborador"]').val()),a.append("ocupacion",$('[name="filtro-ocupacion"]').val()),a.append("desempenio",$('[name="filtro-desempenio"]').val()),a.append("areaperiodo",$('[name="filtro-areaperiodo"]').val()),a.append("estado",$('[name="filtro-estado"]').val()),fetch(`${environment.apiSRD}/API/julia/asistencia/horario/listar`,{method:"POST",body:a}).then((e=>e.text())).then((e=>{console.log(e);const o=new Blob([e],{type:"text/csv;charset=utf-8;"}),a=window.URL.createObjectURL(o),t=document.createElement("a");t.href=a,t.download="CE_Lista_horario.csv",document.body.appendChild(t),t.click(),t.remove()})).catch((e=>{msgError("Error al procesar los datos: "+e,(()=>{}),(()=>{}))})).finally((()=>{msgSuccessMixin("Se ha descargado el documento exitosamente","")}))}))},updateTableHeight:i}}();KTUtil.onDOMContentLoaded((function(){KTPeriodo.init()})),window.addEventListener("resize",KTPeriodo.updateTableHeight);