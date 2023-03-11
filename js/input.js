document.addEventListener("DOMContentLoaded", function() {
    let numDocumento = document.getElementById("docu");
    let numTarjeta = document.getElementById("numeroTarjeta");
    let select = document.querySelector(".select");
    let selectedOption = select.options[select.selectedIndex].value;
    select.addEventListener("change", function() {
      numDocumento.value = '';
      selectedOption = select.options[select.selectedIndex].value;
      console.log(`La opción seleccionada es: ${selectedOption}`);
    });
    numDocumento.addEventListener("input",(e)=>{
    let valor = e.target.value;

    numDocumento.style.color = "black"
    valor = valor.replace(/[^0-9]/,'');

    if(selectedOption == 1){
        
        valor = valor.substring(0,8);
        
        
        

        e.target.value = valor;
    }else if(selectedOption == 2){
        valor = valor.substring(0,10);
        e.target.value = valor;
    }
    else if(selectedOption == 3){
        valor = valor.substring(0,10);
        e.target.value = valor;
    }
    
    })

    numDocumento.addEventListener("blur",(e)=>{
        let valor = e.target.value;
        let nombre = e.target.name;
        
        inputVacio(nombre,valor)
    })
    numTarjeta.addEventListener("blur", (e)=>{
        let valor = e.target.value;
        let nombre = e.target.name;
        inputVacio(nombre,valor)
        

    })
    numTarjeta.addEventListener("change",(e)=>{
        console.log(e.target.value.length)
        if(e.target.value.length != 19){
            numTarjeta.classList.add("invalid");
            numTarjeta.style.borderColor="red";
        }else{
            numTarjeta.classList.remove("invalid")
            numTarjeta.style.borderColor="";
        }
    })

    numDocumento.addEventListener("change",(e)=>{
        

        let valor = e.target.value;
        validacion(valor)
        
    
    })
   
    function inputVacio(nombreInput, valor) {
        let elemento = (nombreInput === "numDocumento") ? numDocumento : numTarjeta;
        
        if (valor.length === 0) {
          
          elemento.classList.add("invalid");
        } else {
          elemento.classList.remove("invalid");
        }
      }
    
    function validacion(valor){
        if(selectedOption == 1){
            if(valor.length===0){
                numDocumento.classList.add("invalid");
                numDocumento.style.borderColor="red";
                
            }else if(valor.length === 8){
                numDocumento.classList.remove("invalid")
                numDocumento.style.borderColor="";
            }else{
                numDocumento.classList.add("invalid");
                numDocumento.style.borderColor="red";
            }
        }else if(selectedOption == 2 || selectedOption==3){
            if(valor.length===0){
                numDocumento.style.borderColor="red";
            }else if(valor.length === 10){
                numDocumento.style.borderColor="";
            }else{
                numDocumento.style.borderColor="red";
            }
        }
    }
});