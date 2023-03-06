const input = document.getElementById("clave");

let elementoAgregado = false;
input.addEventListener("click",(e)=>{
    if(!elementoAgregado){
        e.preventDefault();

        const divPadre = document.createElement("div");
        e.target.value = "";    
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


        divPadre.classList.add('grid');

         for (let i = 1; i <= 10; i++) {

            const randomIndex = Math.floor(Math.random() * numbers.length);
            const random = document.createElement("div");
            random.id = "random"
            random.textContent = numbers[randomIndex];
            random.addEventListener("click", function() {
                document.getElementById("clave").value += this.textContent;
            });
            numbers.splice(randomIndex, 1);
            divPadre.appendChild(random);
        }
        let borrarTodo = document.createElement("div");
        borrarTodo.style= "grid-column: 1 / span 1; grid-row: 3 / span 1;"
        borrarTodo.textContent = "borrar"
        divPadre.appendChild(borrarTodo);

        let borrarCaracter = document.createElement("div");
        borrarCaracter.style="grid-column: 4 / span 1; grid-row: 3 / span 1;";
        borrarCaracter.textContent = "deleter"
        divPadre.appendChild(borrarCaracter);



        const input = document.getElementById("clave");
        const parentNode = input.parentNode;
        parentNode.insertBefore(divPadre, input.nextSibling);
        elementoAgregado = true;

    }

})

document.addEventListener("click", function(event) {
    const clickedInsideInput = event.target.closest("#clave");
    const clickedInsideContainer = event.target.closest(".grid");
    if (!clickedInsideInput && !clickedInsideContainer) {
        elementoAgregado = false;
        document.querySelector(".grid").remove();
    }
});