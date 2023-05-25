<?php
require "connect.php";
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods:POST');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
  $error = mysqli_error($conn);
  $Email = $_POST['email'];
  $Password = $_POST['password'];
  $checkEmailQuery = "SELECT * FROM users WHERE email = '$Email'";
  $result = mysqli_query($conn, $checkEmailQuery);

  if ($result) {

    $emailCheck = mysqli_num_rows($result);
    $fetch = mysqli_fetch_assoc($result);
    $fetchPassword = $fetch['password'];
    $data = "";

    if ($emailCheck >= 1 && password_verify($Password, $fetchPassword)) {

      $result = mysqli_query($conn, $checkEmailQuery);
      $rows = mysqli_fetch_array($result);

      http_response_code(200);

      $data .= '{"Email":"' . $rows['email'] . '",';
      $data .= '"Username":"' . $rows["username"] . '",';

      echo $data .= '"Status":"200"}';
    } else {
      echo "Invalid User \n";
      http_response_code(422);

      echo $data = '{"Status":"422"}';
    }
  } else {
    http_response_code(422);

    echo $data = '{"Status":"422"}';

    mysqli_close($conn);
  }
}
