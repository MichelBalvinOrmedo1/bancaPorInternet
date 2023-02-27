

let inputCadena = document.getElementById("numeroTarjeta"); //obtenemos el elemento seleccionado como un objeto

//Usamos el evento "input" para detectar cambios en los campos de entrada de texto, como los elementos input, textarea y select.
inputCadena.addEventListener("input", (e) => { // (e) es el evento
    //Obtenemos el valor actual del input
    let valor = e.target.value;
    
    
    valor = valor.replace(/[^0-9]/g, '').substring(0,16);
    console.log(valor);
    
  
    // Dividir el valor de entrada en grupos de 4 caracteres
    const groups = [];
    //Agregamos grupos de 4
    //divide el valor de entrada en grupos de cuatro caracteres utilizando un bucle for y el método substring() de JavaScript. 
    //Cada grupo de cuatro caracteres se agrega a un array llamado groups utilizando el método push().

    for (let i = 0; i < valor.length; i += 4) {
      groups.push(valor.substring(i, i+4));
      
    }
  
    // Unir los grupos con espacios
    const valorSeparado = groups.join(' ');
  
    // Establecer el valor separado por espacios en el campo de entrada
    e.target.value = valorSeparado;
  });
  
  
let form = document.getElementById("formulario") //Obtenemos el valor html del elemento

//Detectamos cualquier cambio de un elemento
form.addEventListener("change", function(e){
  //Se utiliza para obtener una referencia al elemento <input> seleccionado con el nombre "bcp" en un formulario.
  let chec = document.querySelector("input[name='bcp']:checked").value;
  let numeroTarjeta = document.getElementById("numeroTarjeta");
  if(chec == "personas"){
    numeroTarjeta.value=""
  }else{
    numeroTarjeta.value = 4912;
  }
});

