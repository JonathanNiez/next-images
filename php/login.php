<?php
require "connect.php";
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods:POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$Email = $_POST['email'];
$Password = $_POST['password'];
$loginSQL = "SELECT * FROM users WHERE email = '$Email' AND password = '$Password'";
$result = mysqli_query($conn, $loginSQL);

if (mysqli_num_rows($result) > 0) {
  $fetch = mysqli_fetch_assoc($result);
  $fetch_pass = $fetch['password'];
  if (password_verify($Password, $fetch_pass)) {
    $rows = mysqli_fetch_array($result);

    http_response_code(200);

    $data = "";

    echo $data .= '{"Email":"' . $rows["Email"] . '",';
    echo  $data .= '"Status":"200"}';
  }
} else {
  echo "Invalid User";
}
