<?php
$smtp_server = include 'mailconfig.php';

echo $smtp_server['host'];
echo $smtp_server['tcp_port'];
echo $smtp_server['ssl_port'];
echo $smtp_server['login'];
echo $smtp_server['password'];
