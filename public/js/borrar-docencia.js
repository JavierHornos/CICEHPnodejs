
let form = document.getElementById("borrado");
let boton = document.getElementById("boton-borrado");


form.addEventListener("submit",function(e) {
   e.preventDefault();


   boton.addEventListener('click', function() {



    Swal.fire({
      title: "Estas seguro?",
      text: "Vas a borrar esta publicacion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "Borrado",
          icon: "success"
        });
        form.submit();
        }
      });
    });         
 });






