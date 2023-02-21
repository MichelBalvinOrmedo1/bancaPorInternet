<?php
/*
      Author  : Suresh Pokharel
      Email   : suresh.wrc@gmail.com
      GitHub  : github.com/suresh021
      URL     : psuresh.com.np
*/ 
?>

<?php
session_start();
header('Content-Type: image/png');
$img = imagecreatetruecolor(583, 1000);//size of the image
// defining some color codes
$color_1 = imagecolorallocate($img, 235, 235, 224);
$color_2 = imagecolorallocate($img, 214, 214, 194);
$color_3 = imagecolorallocate($img, 163, 163, 117);
imagefilledrectangle($img, 0, 0, 399, 29, $color_1);

// generating random 4 digit text using a complex formula
$text =substr(md5(time()+123456789% rand(4000, 55000000)),rand(0,25),4);//generating a unique 4 character with a complex formula
$_SESSION['text']=$text; //copying text to session variable so that it can be checked in another page.
$font = 'fonts/font.ttf';// name of the font being used

// adding texts in background
imagettftext($img, 17, 5, 12, 25, $color_2, $font, $text);
imagettftext($img, 20, 0, 14, 19, $color_2, $font, $text);

// the text to be shown
imagettftext($img, 14, 0, 10, 20, $color_3, $font, $text);
imagepng($img);
imagedestroy($img);
?>
