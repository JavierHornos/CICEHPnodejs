let titulo = document.getElementById("titulo");
let fechaCrecion = document.getElementById("fecha");
let descripcion = document.getElementById("description");
let link = document.getElementById("link");
let imagen = document.getElementById("cImage");
let tituloLeerMas = document.getElementById("tituloLeerMas");
let subTituloLeerMas = document.getElementById("subTituloLeerMas");
let parrafoUnoLeerMas = document.getElementById("description1");
let parrafoDosLeerMas = document.getElementById("description2");
let tema = document.getElementById("tema");
let nombre = document.getElementById("nombre");
let fuente = document.getElementById("fuente");
let form = document.getElementById("creacion-producto");
console.log(form)

document.getElementById('category').onchange = function() {
    var categoria = this.value;

    switch (categoria) {
        case '1': // Actividades
          titulo.disabled = false;
          titulo.style.display = "block"
          fechaCrecion.disabled = false;
          fechaCrecion.style.display = "block"
          descripcion.disabled = false;
          descripcion.style.display = "block"
          imagen.disabled = false;
          imagen.style.display = "block"
          console.log(imagen)

            link.disabled = true;
            link.style.display = "none";
            tituloLeerMas.disabled = true;
            tituloLeerMas.style.display = "none";
            subTituloLeerMas.disabled = true;
            subTituloLeerMas.style.display = "none";
            parrafoUnoLeerMas.disabled = true;
            parrafoUnoLeerMas.style.display = "none";
            parrafoDosLeerMas.disabled = true;
            parrafoDosLeerMas.style.display = "none";
            tema.disabled = true;
            tema.style.display = "none";
            nombre.disabled = true;
            nombre.style.display = "none";
            fuente.disabled = true;
            fuente.style.display = "none";
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
          
          
          
          
                  
                  
          
                  if (entrar) {
                      error.innerHTML = warnings
                  } else {
                     form.submit();
                  }
              })
          break;
        case '2': // Publicaciones
            titulo.disabled = false;
            titulo.style.display = "block"
            fechaCrecion.disabled = false;
            fechaCrecion.style.display = "block"
            descripcion.disabled = false;
            descripcion.style.display = "block"
            link.disabled = false;
            link.style.display = "block"
        
            imagen.disabled = true;
            imagen.style.display = "none";
            tituloLeerMas.disabled = true;
            tituloLeerMas.style.display = "none";
            subTituloLeerMas.disabled = true;
            subTituloLeerMas.style.display = "none";
            parrafoUnoLeerMas.disabled = true;
            parrafoUnoLeerMas.style.display = "none";
            parrafoDosLeerMas.disabled = true;
            parrafoDosLeerMas.style.display = "none";
            tema.disabled = true;
            tema.style.display = "none";
            nombre.disabled = true;
            nombre.style.display = "none";
            fuente.disabled = true;
            fuente.style.display = "none";       
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
                     form.submit();
                  }
              })
          break;
        case '3': // Investigaciones
            titulo.disabled = false;
            titulo.style.display = "block"
            fechaCrecion.disabled = false;
            fechaCrecion.style.display = "block"
            descripcion.disabled = false;
            descripcion.style.display = "block"
            tituloLeerMas.disabled = false;
            tituloLeerMas.style.display = "block"
            subTituloLeerMas.disabled = false;
            tituloLeerMas.style.display = "block"
            parrafoUnoLeerMas.disabled = false;
            parrafoUnoLeerMas.style.display = "block"
            parrafoDosLeerMas.disabled = false;
            parrafoDosLeerMas.style.display = "block"
            link.disabled = true;
            link.style.display = "none"
            tema.disabled = true;
            imagen.disabled = true;
            imagen.style.display = "none";
            tema.style.display = "none";
            nombre.disabled = true;
            nombre.style.display = "none";
            fuente.disabled = true;
            fuente.style.display = "none";
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



            if (tituloLeerMas.value.length <= 0) {
              warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese un título para la sección Leer Más.</div>'
              entrar = true
          }
          if (tituloLeerMas.value =="") {
              warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar un título para la sección Leer Más.</div>'
              entrar = true
          }

          if (parrafoUnoLeerMas.value.length <= 0) {
            warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Agregá el primer párrafo para la sección Leer Más.</div>'
            entrar = true
        }
        if (parrafoUnoLeerMas.value =="") {
            warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar el primer párrafo para la sección Leer Más.</div>'
            entrar = true
        }

        if (parrafoDosLeerMas.value.length <= 0) {
          warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Agregá el segundo párrafo para la sección Leer Más.</div>'
          entrar = true
      }
      if (parrafoDosLeerMas.value =="") {
          warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar el segundo párrafo para la sección Leer Más.</div>'
          entrar = true
      }
          
          
          
          
                  
                  
          
                  if (entrar) {
                      error.innerHTML = warnings
                  } else {
                     form.submit();
                  }
              })
          break;
        case '4': // Docencia
            titulo.disabled = false;
            titulo.style.display = "block"
            fechaCrecion.disabled = false;
            fechaCrecion.style.display = "block"
            descripcion.disabled = false;
            descripcion.style.display = "block"
            link.disabled = false;
            link.style.display = "block"

            imagen.disabled = true;
            imagen.style.display = "none";
            tituloLeerMas.disabled = true;
            tituloLeerMas.style.display = "none";
            subTituloLeerMas.disabled = true;
            subTituloLeerMas.style.display = "none";
            parrafoUnoLeerMas.disabled = true;
            parrafoUnoLeerMas.style.display = "none";
            parrafoDosLeerMas.disabled = true;
            parrafoDosLeerMas.style.display = "none";
            tema.disabled = true;
            tema.style.display = "none";
            nombre.disabled = true;
            nombre.style.display = "none";
            fuente.disabled = true;
            fuente.style.display = "none";
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

              if (link.value.length <= 0) {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese un link.</div>'
                entrar = true
            }
            if (link.value =="") {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar un link.</div>'
                entrar = true
            }
          
          
          
          
                  
                  
          
                  if (entrar) {
                      error.innerHTML = warnings
                  } else {
                     form.submit();
                  }
              })
          break;
          case '5': // Fotos
          imagen.disabled = false;
          imagen.style.display = "block"
          fechaCrecion.disabled = false;
          fechaCrecion.style.display = "block"
          tema.disabled = false;
          tema.style.display = "block";
          nombre.disabled = false;
          nombre.style.display = "block";
          fuente.disabled = false;
          fuente.style.display = "block";
        
          titulo.disabled = true;
          titulo.style.display = "none"
          descripcion.disabled = true;
          descripcion.style.display = "none"
          link.disabled = true;
          link.style.display = "none"
          tituloLeerMas.disabled = true;
          tituloLeerMas.style.display = "none";
          subTituloLeerMas.disabled = true;
          subTituloLeerMas.style.display = "none";
          parrafoUnoLeerMas.disabled = true;
          parrafoUnoLeerMas.style.display = "none";
          parrafoDosLeerMas.disabled = true;
          parrafoDosLeerMas.style.display = "none";
           form.setAttribute('enctype', 'multipart/form-data');   
           console.log(form)
           form.addEventListener("submit", function (e) {
            e.preventDefault();
            let warnings = ""
            let entrar = false
        
            
            
            if (tema.value.length < 3) {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> El tema debe tener mas de 2 caracteres.</div>'
                entrar = true
            }
            if (tema.value =="") {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe completar el tema.</div>'
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
        
               
        
            if (nombre.value.length <= 0) {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese un nombre.</div>'
                entrar = true
            }
            if (nombre.value =="") {
                warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar un nombre.</div>'
                entrar = true
            }

            if (fuente.value.length <= 0) {
              warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Ingrese una fuente.</div>'
              entrar = true
          }
          if (fuente.value =="") {
              warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i> Debe ingresar una fuente.</div>'
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
                   form.submit();
                }
            })
        break; 
      }
    

}



