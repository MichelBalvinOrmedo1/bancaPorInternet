let ejem = document.getElementById("ejemplo");
const select = document.getElementById("documentos");
let selectedOption = select.options[select.selectedIndex].value;
select.addEventListener("change", function() {
    ejem.value = '';
    selectedOption = select.options[select.selectedIndex].value;
    console.log(`La opción seleccionada es: ${selectedOption}`);
  });
ejem.addEventListener("input",(e)=>{
    let valor = e.target.value;

    ejem.style.color = "black"
    valor = valor.replace(/[^0-9]/,'');

    if(selectedOption == 1){
        
        valor = valor.substring(0,7);
        console.log(valor.length)
        

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

ejem.addEventListener("blur",(e)=>{
    console.log(selectedOption)
    let valor = ejem.value;
    if(selectedOption == 1){
        
        valor = valor.substring(0,7);
        console.log(valor.length)
        if(valor.length===0){
            ejem.classList.add("invalid");
        }else if(valor.length === 7){
            ejem.classList.remove("invalid");
        }else{
            ejem.classList.add("invalid")
        }

        e.target.value = valor;
    }
})
ejem.addEventListener("click", (e) => {
    if (ejem.classList.contains("invalid")) {
        ejem.classList.remove("invalid");
    }
});