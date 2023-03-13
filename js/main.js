
document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos el elemento de entrada de texto "numeroTarjeta" y el formulario "formulario"
  let inputCadena = document.getElementById("numeroTarjeta");
  let form = document.getElementById("formulario");

  // Agregamos un "escucha" para detectar cuando se introduce un valor en el campo de entrada de texto
  inputCadena.addEventListener("input", (e) => {
    // Obtenemos el valor actual del campo de entrada de texto y eliminamos cualquier caracter que no sea un número
    let valor = e.target.value;
    valor = valor.replace(/[^0-9]/g, '').substring(0, 16);
    

    // Dividimos el valor de entrada en grupos de 4 caracteres y los almacenamos en un array
    const groups = [];
    for (let i = 0; i < valor.length; i += 4) {
      groups.push(valor.substring(i, i + 4));
    }
    // Unimos los grupos de 4 caracteres con espacios y establecemos el valor del campo de entrada de texto
    const valorSeparado = groups.join(' ');
    e.target.value = valorSeparado;
  });

  // Seleccionar los botones de radio tanto de personas como de empresas
  let bcpRadios = document.querySelectorAll('input[name="bcp"]');

  // Agregar un evento click a cada botón de radio
  for (let i = 0; i < bcpRadios.length; i++) {
    bcpRadios[i].addEventListener('click', function () {
      let chec = document.querySelector('input[name="bcp"]:checked').value;
      let numeroTarjeta = document.getElementById('numeroTarjeta');

      if (chec === 'personas' && numeroTarjeta.value !== '') {
        numeroTarjeta.value = '';
        
      } else {
        numeroTarjeta.value = 4912;
      }
    });
  }
   

})
