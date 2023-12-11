<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];

//Server settings
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host = 'smtp-pulse.com';                     //Set the SMTP-server to send through
$mail->SMTPAuth = true;                                   //Enable SMTP authentication
$mail->Username = 'dante391.roman@gmail.com';                     //SMTP username
$mail->Password = 'nrDNmtQpDnF7s7F';                               //SMTP password
$mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
$mail->Port = 465;                                    // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->setFrom('davydyuk.r1308@lntu.edu.ua', 'Roman');
$mail->addAddress($email, $name);     //Add a recipient

//Content
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Mailing test';
$mail->Encoding = 'base64';

$mail->Body = 'Біля озера у літню ніч<br>
Ми були з тобою віч-на-віч,<br>
Цілувались під зорями ми,<br>
Били лебеді поруч крильми,<br>
І несла понад світом луна,<br>
І у мене кохана одна.<br>
Хлюпотіла тихенько вода,<br>
Що для нас і біда - не біда.<br>

Цей сон, цей сон<br>
Мені щоночі сниться.<br>
Крізь сон, крізь сон<br>
Вона мені сміється.<br>
Цей сон, цей сон<br>
Мене не покидає.<br>
Любов, о сон,<br>
Вона мене кохає.<br>

Біля озера знову ідем,<br>
Та у серці моїм тихий щем<br>
Зірка в небі нічна дoгора,<br>
Розставання приходить пора.<br>
А благання моє: "Зупинись!"<br>
Лебедята підняли у вись.<br>
І бере нас розлука в полон,<br>
А вночі ти приходиш, мій сон.';
$mail->AltBody = 'Це є тіло в короткий текст для не HTML-mail клієнтів';

try {
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
