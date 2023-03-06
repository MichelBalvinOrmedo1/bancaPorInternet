
document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos el elemento de entrada de texto "numeroTarjeta" y el formulario "formulario"
  let inputCadena = document.getElementById("numeroTarjeta");
  let form = document.getElementById("formulario");

  // Agregamos un "escucha" para detectar cuando se introduce un valor en el campo de entrada de texto
  inputCadena.addEventListener("input", (e) => {
    // Obtenemos el valor actual del campo de entrada de texto y eliminamos cualquier caracter que no sea un número
    let valor = e.target.value;
    valor = valor.replace(/[^0-9]/g, '').substring(0, 16);
    console.log(valor);

    // Dividimos el valor de entrada en grupos de 4 caracteres y los almacenamos en un array
    const groups = [];
    for (let i = 0; i < valor.length; i += 4) {
      groups.push(valor.substring(i, i + 4));
    }
    // Unimos los grupos de 4 caracteres con espacios y establecemos el valor del campo de entrada de texto
    const valorSeparado = groups.join(' ');
    e.target.value = valorSeparado;
  });

  // Agregamos un "escucha" para detectar cuando se produce un cambio en el formulario
  form.addEventListener("blur", function (e) {
    // Obtenemos el valor seleccionado en el campo "bcp" del formulario
    let chec = document.querySelector("input[name='bcp']:checked").value;
    // Obtenemos el campo de entrada de texto "numeroTarjeta"
    let numeroTarjeta = document.getElementById("numeroTarjeta");

    // Si el valor seleccionado en el campo "bcp" es "personas" y el campo de entrada de texto no está vacío, lo borramos
    if (chec == "personas" && numeroTarjeta.value != "") {
      numeroTarjeta.value = ""
    }
    // De lo contrario, establecemos el valor del campo de entrada de texto en 4912
    else {
      numeroTarjeta.value = 4912;
    }
  });

})
