<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $parentName = htmlspecialchars($_POST['parentName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $childName = htmlspecialchars($_POST['childName']);
    $childAge = htmlspecialchars($_POST['childAge']);
    $startDate = htmlspecialchars($_POST['startDate']);

    // Send an email to the daycare admin
    $to = "admin@sunshinedaycare.com";
    $subject = "New Child Registration";
    $message = "Parent's Name: $parentName\nEmail: $email\nPhone: $phone\nChild's Name: $childName\nChild's Age: $childAge\nPreferred Start Date: $startDate";
    $headers = "From: noreply@sunshinedaycare.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Registration submitted successfully!";
    } else {
        echo "Error submitting registration.";
    }
}
?>
