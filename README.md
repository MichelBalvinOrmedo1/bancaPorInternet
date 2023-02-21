# captcha
Automatic generation of captcha and compares with user entered text in php

##Information
* `image.php` returns a unique png image of 58×30 in every refresh.
* this code generates a four character unique text. You can change the formula as per your wish to make it more secure.
`$text =substr(md5(time()+123456789% rand(4000, 55000000)),rand(0,25),4);`
* On click, Reload button calls the 'image.php' file via AJAX so that new image is produced.
* Font can be changed as per your wish `$font = 'fonts/font.ttf';`

## Demo
http://projects.psuresh.com.np/php-captcha
