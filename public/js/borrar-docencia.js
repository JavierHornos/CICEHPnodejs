
let form = document.getElementById("borrado");
let boton = document.getElementById("boton-borrado");


form.addEventListener("submit",function(e) {
   e.preventDefault();


   boton.addEventListener('click', function() {

      
         Swal.fire({
         position: 'center',
         icon: 'success',
        title: 'Confirmación',
         text: 'Has borrado correctamente',
         showConfirmButton: false,
         timer: 3000
          });

       form.submit();
       window.onload = function() {
         window.location.reload();
     };
      
  });
                
 });






