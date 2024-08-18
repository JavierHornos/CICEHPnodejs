let form = document.getElementById("creacion-producto");
console.log(form)
let category = document.getElementById("category");
let titulo = document.getElementById("titulo");
let fechaCrecion = document.getElementById("fecha");
let descripcion = document.getElementById("description");
let imagen = document.getElementById("cImage");



document.getElementById('cargar').onchange = function() {
   var cargar = this.value;

   switch (cargar) {
      case '1': // ninguna foto
      titulo.disabled = false;
      titulo.style.display = "block"
      fechaCrecion.disabled = false;
      fechaCrecion.style.display = "block"
      descripcion.disabled = false;
      descripcion.style.display = "block"

      imagen.disabled = true;
      imagen.style.display = "none";
      form.removeAttribute('enctype');
      console.log(form)
      form.addEventListener("submit", function (e) {
         e.preventDefault();
         let warnings = ""
         let entrar = false
     
         if (titulo.value.length < 3) {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> El título debe tener mas de 2 caracteres.</div>'
             entrar = true
         }
         if (titulo.value =="") {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el título.</div>'
             entrar = true
         }

         let fecha = new Date();     // variable fecha con toda la fecha y hora de hoy
         let dia = fecha.getDate();  // extraemos solo el dia de hoy
         let mes = fecha.getMonth() +1; // extraemos el mes de hoy
         let anio = fecha.getFullYear(); // extramos el año 
        
         
         if (!fechaCrecion.value.match(dia)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
             
            warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Día incorrecto, ingrese la fecha de hoy.</div>'
            entrar = true
        }
     
        if (!fechaCrecion.value.match(mes)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
        
         warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Mes incorrecto, ingrese la fecha de hoy.</div>'
         entrar = true
         }
     
         if (!fechaCrecion.value.match(anio)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
            
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Año incorrecto, ingrese la fecha de hoy.</div>'
             entrar = true
             }
     
            
     
         if (descripcion.value.length <= 0) {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese una descripción.</div>'
             entrar = true
         }
         if (descripcion.value =="") {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar una descripción.</div>'
             entrar = true
         }
     
             
     
             if (entrar) {
                 error.innerHTML = warnings
             } else {
               let warnings = ""
               error.innerHTML = warnings
              form.submit();
             }
         })
         window.onload = function() {
          window.location.reload();
      };
     break;


     case '2': // fotos
      titulo.disabled = false;
      titulo.style.display = "block"
      fechaCrecion.disabled = false;
      fechaCrecion.style.display = "block"
      descripcion.disabled = false;
      descripcion.style.display = "block"
      imagen.disabled = false;
      imagen.style.display = "block";
      form.setAttribute('enctype', 'multipart/form-data');
      console.log(form)
      form.addEventListener("submit", function (e) {
         e.preventDefault();
         let warnings = ""
         let entrar = false
     
         if (titulo.value.length < 3) {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> El título debe tener mas de 2 caracteres.</div>'
             entrar = true
         }
         if (titulo.value =="") {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el título.</div>'
             entrar = true
         }

         let fecha = new Date();     // variable fecha con toda la fecha y hora de hoy
         let dia = fecha.getDate();  // extraemos solo el dia de hoy
         let mes = fecha.getMonth() +1; // extraemos el mes de hoy
         let anio = fecha.getFullYear(); // extramos el año 
        
         
         if (!fechaCrecion.value.match(dia)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
             
            warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Día incorrecto, ingrese la fecha de hoy.</div>'
            entrar = true
        }
     
        if (!fechaCrecion.value.match(mes)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
        
         warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Mes incorrecto, ingrese la fecha de hoy.</div>'
         entrar = true
         }
     
         if (!fechaCrecion.value.match(anio)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit
            
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Año incorrecto, ingrese la fecha de hoy.</div>'
             entrar = true
             }
     
            
     
         if (descripcion.value.length <= 0) {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese una descripción.</div>'
             entrar = true
         }
         if (descripcion.value =="") {
             warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar una descripción.</div>'
             entrar = true
         }

         var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
                  if (!allowedExtensions.exec(imagen.value)) {
                      warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>Asegurese que la imgen sea una extension valida. (.jpg|.jpeg|.png)</div>'
                      entrar = true
                      imagen.value = '';
                      
                    }
     
     
             if (entrar) {
                 error.innerHTML = warnings
             } else {
               let warnings = ""
               error.innerHTML = warnings
              form.submit();
              
let timerInterval;
Swal.fire({
  title: "Espera unos segundos",
  html: "Subiendo fotos en <b></b> milliseconds.",
  timer: 7000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

             }
         })
         window.onload = function() {
          window.location.reload();
      };
     break;
     

   } 









}




   