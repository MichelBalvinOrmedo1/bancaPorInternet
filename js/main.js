const inputCadena = document.getElementById("numeroDocumento");


 // Agregar un escucha de evento para cuando se escriba en la entrada
 inputCadena.addEventListener("input", () => {
    // Obtener el valor de entrada sin espacios en blanco
    const inputValue = inputCadena.value.replace(/\s/g, '');

    // Dividir el valor de entrada en grupos de 4 caracteres
    const groups = [];
    for (let i = 0; i < inputValue.length; i += 4) {
      groups.push(inputValue.substr(i, 4));
    }

    // Unir los grupos con espacios
    const outputValue = groups.join(' ');

    // Establecer el valor de entrada con los espacios insertados
    inputCadena.value = outputValue;
  });