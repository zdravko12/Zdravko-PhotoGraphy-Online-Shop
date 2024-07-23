<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Debug: Display received form data
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "ZdravkoPhoto@yahoo.com";  // Replace with your email address
    $subject = "New Contact Form Submission";

    $body = "You have received a new message from the contact form on your website.\n\n" .
        "Here are the details:\n" .
        "First Name: $fname\n" .
        "Last Name: $lname\n" .
        "Email: $email\n" .
        "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
