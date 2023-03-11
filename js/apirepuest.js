document.addEventListener("DOMContentLoaded", function () {
    var formulario  = document.getElementById("formulario");

    function traer(e){
        e.preventDefault();

        var dni = document.getElementById("docu").value;
        fetch(
            "https://apiperu.dev/api/dni/" + dni + "?api_token=bbf568c1ef8011ea7da56b6cba186e8cad4d7c8080160a8e65e7bad7eade0455"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success && data.data) {
                    console.log("El DNI existe");
                    console.log(data)
                } else {
                    console.log("El DNI no existe");
                   

                }

            });

           
    }
    formulario.addEventListener("submit", traer);
})