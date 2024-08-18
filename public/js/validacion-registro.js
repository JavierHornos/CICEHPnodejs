let formulario = document.getElementById("formulario-registro");
let campoNombre = document.getElementById("Nombre");
let email = document.getElementById("Email");
let apellido = document.getElementById("apellido");


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/  
    let entrar = false
    if (campoNombre.value.length < 3) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>El nombre debe tener mas de 2 caracteres.</div>'
        entrar = true
    }
    if (campoNombre.value =="") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>Debe completar el nombre.</div>'
        entrar = true
    }
    if (!regexEmail.test(Email.value)) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>El Email no es valido.</div>'
        entrar = true
    }

    if (password.value.length < 8) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>La contraseña debe tener al menos 8 caracteres.</div>'
        entrar = true
    }

    if (!er.test(password.value)) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>La contraseña debe tener al menos una mayuscula y un número.</div>'
        entrar = true
    }

    if (password.value != password2.value) {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>Las contraseñas no coinciden.</div>'
        entrar = true
    }

    if (apellido.value.length < 3) {
        warnings += '<div class="errreg" > <i class="fa-solid fa-triangle-exclamation"></i>El apellido debe tener mas de 2 caracteres.</div>'
        entrar = true
    }
    if (apellido.value == "") {
        warnings += '<div class="errreg" ><i class="fa-solid fa-triangle-exclamation"></i>Debe completar el apellido.</div>'
        entrar = true
    }


        

function mostrarPassword1() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function mostrarPassword2() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

        if (entrar) {
            error.innerHTML = warnings
        } else {
            formulario.submit();
        }
    })
