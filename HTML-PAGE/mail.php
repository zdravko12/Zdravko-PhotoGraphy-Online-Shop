<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Required files
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Create an instance of PHPMailer
if (isset($_POST["send"])) {
  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'zdravkop555@gmail.com';  // Your email address
    $mail->Password = 'ubryovqvlcsquzta';  // Your Gmail App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;  // Use port 587 for TLS
    $mail->SMTPDebug = 0;  // Disable verbose debug output (set to 2 for debugging)
    $mail->SMTPOptions = array(
      'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );

    // Form data
    $fullName = $_POST['fname'] . ' ' . $_POST['lname'];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Recipients
    $mail->setFrom($email, $fullName);  // Sender email and name
    $mail->addAddress('zdravkop555@gmail.com');  // Your email as the recipient
    $mail->addReplyTo($email, $fullName);  // Reply-to sender email

    // Email content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = $subject;

    // Construct the email body with form data
    $mail->Body = "
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> {$_POST['fname']}</p>
      <p><strong>Last Name:</strong> {$_POST['lname']}</p>
      <p><strong>Email Address:</strong> {$_POST['email']}</p>
      <p><strong>Subject:</strong> {$_POST['subject']}</p>
      <p><strong>Message:</strong> {$_POST['message']}</p>
    ";

    // Send the email
    $mail->send();

    // Success alert and redirection
    echo "
    <script> 
      alert('Message was sent successfully!');
      window.location.href = 'Contact.html';
    </script>
    ";
    exit;  // Stop further execution to prevent any warnings

  } catch (Exception $e) {
    // Error handling
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}
?>