<?php
session_start();

if (count($_POST) > 0) {
    if ($_POST["captcha_code"] == $_SESSION["captcha_code"]) {
        $success_message = "Your message received as";
    } else {
        $error_message = "Incorrect Captcha Code";
    }
}
?>