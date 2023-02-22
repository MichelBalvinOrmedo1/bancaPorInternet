let inputCadena = document.getElementById("numeroDocumento");
 // Agregar un escucha de evento para cuando se escriba en la entrada
 inputCadena.addEventListener("input", (e) => {
    //Ovtenemos el valor del nodo input
    let valor = e.target.value;
    console.log(valor);
    // Eliminar caracteres no numéricos y limitar el número de caracteres a 16
    valor = valor.replace(/[^0-9]/g, '').substring(0,16)
    
  
    // Dividir el valor de entrada en grupos de 4 caracteres
    const groups = [];
    for (let i = 0; i < valor.length; i += 4) {
      groups.push(valor.substring(i, 4));
      
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
