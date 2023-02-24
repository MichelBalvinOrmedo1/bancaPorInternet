

let inputCadena = document.getElementById("numeroDocumento"); //obtenemos el elemento seleccionado como un objeto

//Usamos el evento "input" para detectar cambios en los campos de entrada de texto, como los elementos input, textarea y select.
inputCadena.addEventListener("input", (e) => { // (e) es el evento
    //Obtenemos el valor actual del input
    let valor = e.target.value;
    
    // Eliminar caracteres no numéricos y limitar el número de caracteres a 16
    //valor.remplace() hace cuando tenemos numeros de 0 a 9 se remplaza en ''
    //basicamente no ponemos escribir numeros de 0 a 9
    //.substring() para limitar la longitud del valor de entrada a 16 caracteres.
    valor = valor.replace(/[^0-9]/g, '').substring(0,16)
    
  
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
  
  

let chec = document.getElementById("empresa");
chec.addEventListener("change", function(){
  
  if(this.checked){
    inputCadena.value = 4555;
  }
});
let che = document.getElementById("persona");
che.addEventListener("change",function(){
  
  inputCadena.value = ""
  
})
