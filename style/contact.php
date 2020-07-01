<?php
    use PHPMailer/PHPMailer/PHPMailer/;

if(isset($_POST['submit'])){
    $emailDe = $_POST['name'];


    $mailTo = 'ubm11@uol.com.br'
    $headers =  'De:'.$emailDe;
    $txt = 'Oi, Ubirajara.'.$emailDe.'assinou a suas notícias no website da Pro-Alcance.'
    $subject = $_POST['subject'];
    $body = $_POST['body']
    mail($mailTo,$subject, $txt, $headers);
    header('Location : index.php?mailsend')



    require_once 'PHPMailer\src\Exception.php';
    require_once 'PHPMailer\src\OAuth.php';
    require_once 'PHPMailer\src\POP3.php';
    require_once 'PHPMailer\src\SMTP.php';

   
        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "vitor.fsm@hotmail.com";
        $mail->Password = 'souCAV99';
        $mail->Port = 465; //587
        $mail->SMTPSecure = "ssl"; //tls

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->addAddress("vitor.fsm@hotmail.com");
        $mail->Subject = $subject;
        $mail->Body = $body;

        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }

        exit(json_encode(array("status" => $status, "response" => $response)));
    }
}