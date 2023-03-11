
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("clave");
    let elementAdded = false;
    let grid = null;

    input.addEventListener("click", (e) => {
        if (!elementAdded) {
            e.preventDefault();
            const parentDiv = document.createElement("div");
            e.target.value = "";
            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            parentDiv.classList.add("grid");

            for (let i = 1; i <= 10; i++) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                const random = document.createElement("div");
                random.id = "random";
                random.textContent = numbers[randomIndex];
                random.addEventListener("click", function () {
                    let clave = document.getElementById("clave");
                    if (clave.value.length < 6) {
                        clave.value += this.textContent;
                    }
                    if (clave.value.length === 6) {
                        this.remove();
                    }
                });

                numbers.splice(randomIndex, 1);
                parentDiv.appendChild(random);
            }

            const borrarTodo = document.createElement("div");
            borrarTodo.style = "grid-column: 1 / span 1; grid-row: 3 / span 1;";
            borrarTodo.textContent = "borrar";
            parentDiv.appendChild(borrarTodo);

            const borrarCaracter = document.createElement("div");
            borrarCaracter.style = "grid-column: 4 / span 1; grid-row: 3 / span 1;";
            borrarCaracter.textContent = "borrar";
            parentDiv.appendChild(borrarCaracter);

            const newInput = document.getElementById("clave");
            const parentNode = newInput.parentNode;
            parentNode.insertBefore(parentDiv, newInput.nextSibling);
            elementAdded = true;
        }
    });



    document.addEventListener("click", function (event) {
        const clickedInsideInput = event.target.closest("#clave");
        const clickedInsideContainer = event.target.closest(".grid");
        grid = document.querySelector(".grid");

        if (!clickedInsideInput && !clickedInsideContainer && grid !== null) {
            elementAdded = false;
            grid.remove();
        }

    });

});
