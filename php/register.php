<?php
require 'connect.php';
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$Username = $_POST['username'];
$Email = $_POST['email'];
$Password = $_POST['password'];
$hashedPassword = password_hash($Password, PASSWORD_DEFAULT);

$emailCheck =
  "SELECT * FROM users WHERE Email = '$Email'";
$emailCheckResult = mysqli_query($conn, $emailCheck);

if (mysqli_num_rows($emailCheckResult) > 0) {
  echo "Email is already used";
} else {
  $registerSQL = "INSERT INTO users (username, email, password) VALUES ('$Username','$Email', '$hashedPassword')";
  if (mysqli_query($conn, $registerSQL)) {

    http_response_code(201);

    echo "Register Success";
  } else {
    http_response_code(422);
    echo "Register Failed";
  }
}
