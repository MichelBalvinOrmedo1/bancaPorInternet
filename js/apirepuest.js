document.addEventListener("DOMContentLoaded", function () {
    var formulario  = document.getElementById("formulario");

    function traer(e){
        e.preventDefault();

        var dni = document.getElementById("docu").value;
        fetch(
            "https://apiperu.dev/api/dni/" + dni + "?api_token=fb8e800e8a62e7d8a22dabd2f95c68387298969548298ba396c7a0932e6fde1e"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success && data.data) {
                    console.log("El DNI existe");
                } else {
                    console.log("El DNI no existe");
                   

                }

            });

           
    }
    formulario.addEventListener("submit", traer);
})