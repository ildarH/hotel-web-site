<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$mailconfig = include 'mailconfig.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
// $subscribe = $_POST['subscribe'];

$title = "Письмо от Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
// $subscribtion =

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    $mail->Host       = $mailconfig['host'];
    $mail->Username   = $mailconfig['login'];
    $mail->Password   = $mailconfig['password'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = $mailconfig['ssl_port'];
    $mail->setFrom('ildar.habibrahmanov@gmail.com', 'Neon Trip');

    $mail->addAddress($mailconfig['recipient']);

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: thankyou.html');
