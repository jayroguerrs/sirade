"use strict";var KTSigninGeneral=function(){var t,n,e;return{init:function(){t=document.querySelector("#kt_sign_in_form"),n=document.querySelector("#kt_sign_in_submit"),e=FormValidation.formValidation(t,{fields:{username:{validators:{notEmpty:{message:"El usuario es obligatorio"}}},password:{validators:{notEmpty:{message:"La contraseña es obligatorio"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row"})}}),n.addEventListener("click",(function(i){i.preventDefault(),e.validate().then((function(i){if("Valid"==i){n.setAttribute("data-kt-indicator","on"),n.disabled=!0;let i=new FormData(t);fetch("apps/jci/auth/sign-in/sign-in.model.php",{method:"POST",body:i}).then((t=>t.json())).then((i=>{"signinok"==i.resultado||"signin1ok"==i.resultado||"signin2x"==i.resultado?Swal.fire({text:"Bienvenido(a): "+i.usuario,icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, gracias",customClass:{confirmButton:"btn btn-primary"}}).then((function(n){n.isConfirmed&&(t.querySelector('[name="username"]').value="",t.querySelector('[name="password"]').value="",e.resetForm()),location.reload()})):(Swal.fire({text:"Lo siento,usuario o contraseña inválido",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, gracias",customClass:{confirmButton:"btn btn-primary"}}),e.resetForm()),t.reset(),n.removeAttribute("data-kt-indicator"),n.disabled=!1}))}}))}))}}}();KTUtil.onDOMContentLoaded((function(){KTSigninGeneral.init()}));