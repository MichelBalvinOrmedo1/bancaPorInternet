<?php
session_start();


    
if(isset($_POST['submit'])){
    // Verificar el valor del captcha
    if($_POST['captcha_code'] == $_SESSION["captcha_code"]){
        // Captcha es correcto
        echo "¡Captcha es correcto!";
    }else{
        // Captcha es incorrecto
        echo "¡Captcha es incorrecto!";
    }
}
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>Document holaa</title>
</head>
<body>
    <div class="padre">
        <div class="imagen">
            <img src="" alt="">
        </div>
        <div class="formulario-padre">
            <div class="volver"></div>
            <div class="formulario-hijo">
                <form method="POST" id="formulario">
                    <h1>Banca por internet</h1>
                    <div class="opciones">
                        
                        <label><input type="radio" name="bcp" id="persona" value="personas" checked>  Persona</label>
                        <label><input type="radio" name="bcp" id="empresa" value="empresas"> Empresa</label>
                    </div>
                    <div class="Documentos">
                        <select name="DNI" id="documentos">
                            <option value="dni">DNI</option>
                            <option value="ce">CE</option>
                            <option value="pas">PAS</option>
                        </select>
                        <div class="valor-Documento">
                            <input type="text" name="numeroDocumento" id="numeroDocumento" maxlength="19">
                        </div>
                            
                        <div class="form-group">
                            <p>Captch Code</p>   
                            <img src="captcha_gen.php" />
                            <input type="text" name="captcha_code" class="form-control" autocomplete="off"/>
                            <a href="" id="cl">Cambiar</a>
                            <input type="submit" name='submit' value="submit" id="st" class="btn btn-danger btn-block" />                            <p id="show" style="text-align:center;">
                            <?php  
                                if(isset($message)){
                                    echo $message;
                                }else{
                                    
                                }
                                session_unset();
                             ?></p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="temporisador"></div>
        
          <script>
            console.log("error");
                   
            $(document).ready(function(){
               
               $("#st").on('click',function(){
                       $("#msg").css('display','block');
                       
                   });
                   $("#cl").on('click',function(){
                        
                        location.reload();
                   });
   
                  
             });
          </script>
    </div>
    <script src="js/main.js"></script>
    
</body>
</html>