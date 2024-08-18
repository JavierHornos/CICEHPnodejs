alert("editar-investigaciones")
let fechaCrecion = document.getElementById("fecha");
let form = document.getElementById("creacion-producto");


form.addEventListener("submit",function(e) {
   e.preventDefault();
   let titulo = document.getElementById("titulo").value
   let description = document.getElementById("description").value.trim()
   let category = document.getElementById("category").value
   let tituloLeerMas = document.getElementById("tituloLeerMas").value
   let subTituloLeerMas = document.getElementById("subTituloLeerMas").value
   let primerParrafo = document.getElementById("description1").value
   let segundoParrafo = document.getElementById("description2").value



   let fecha = new Date();     // variable fecha con toda la fecha y hora de hoy
              let dia = fecha.getDate();  // extraemos solo el dia de hoy
              let mes = fecha.getMonth() +1; // extraemos el mes de hoy
              let anio = fecha.getFullYear(); // extramos el año 
             
              
             
          
              if (!fechaCrecion.value.match(dia)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit

               return Swal.fire({
                  icon: 'error',
                  title: 'Validacion',
                  text: 'Día incorrecto, ingrese la fecha de hoy!'
               });
                  
             }
          
             if (!fechaCrecion.value.match(mes)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit

               return Swal.fire({
                  icon: 'error',
                  title: 'Validacion',
                  text: 'mes incorrecto, ingrese la fecha de hoy!'
               });
             
              }
          
              if (!fechaCrecion.value.match(anio)) {  // comparamos que no sea el dia, mes y año de hoy y tira error, else formulario.submit

               return Swal.fire({
                  icon: 'error',
                  title: 'Validacion',
                  text: 'año incorrecto, ingrese la fecha de hoy!'
               });
                 
                
                  }

              if (titulo == "") {
                return Swal.fire({
                     icon: 'error',
                     title: 'Validacion',
                       text: 'Escribe un título!'
                  });
            } else if (description == "") {
               return Swal.fire({
                   icon: 'error',
                    title: 'Validacion',
                    text: 'Agregue una descripcion!'
                   });
             } else if (category == "") {
                return Swal.fire({
                   icon: 'error',
                  title: 'Validacion',
                   text: 'Seleccione una categoria!'
                  });
            }
            
            
               else if (tituloLeerMas == "") {
               return Swal.fire({
                 icon: 'error',
                title: 'Validacion',
                 text: 'Ingresá un Título en Leer mas'
                  });
            } 

            else if (subTituloLeerMas == "") {
               return Swal.fire({
                 icon: 'error',
                title: 'Validacion',
                 text: 'Ingresá un Subtítulo en Leer mas'
                  });
            } 

            else if (primerParrafo == "") {
               return Swal.fire({
                 icon: 'error',
                title: 'Validacion',
                 text: 'Ingresá un Parrafo en Leer mas'
                  });
            } 

            else if (segundoParrafo == "") {
               return Swal.fire({
                 icon: 'error',
                title: 'Validacion',
                 text: 'Ingresá un Parrafo en Leer mas'
                  });
            } 

            
            else {
                      
                   form.submit();
                   window.onload = function() {
                     window.location.reload();
                 };
                 
                   return Swal.fire({
                     position: 'center',
                     icon: 'success',
                    title: 'Confirmación',
                     text: 'Se ha editado correctamente',
                     showConfirmButton: false,
                     timer: 1500
                      });
                      
                   
              } 

              
                    });






