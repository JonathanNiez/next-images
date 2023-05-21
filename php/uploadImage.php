<?php
require 'connect.php';
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$UserDirectory = 'C:/xampp/htdocs/next-movies/public/uploadedImages/';
$AdminDirectory = 'C:/xampp/htdocs/next-movies-admin/public/uploadedImages/';

$ImageData = $_FILES['imageData']['tmp_name'];
$ImageDataName = $_FILES['imageData']['name'];
$ImageName = $_POST['imageName'];
$ImageCheck =
  "SELECT * FROM images WHERE imageData = '$ImageDataName'";
$ImageCheckResult = mysqli_query($conn, $ImageCheck);

if (mysqli_num_rows($ImageCheckResult) > 0) {
  echo "Image is already uploaded";
} else {
  $UserDestination = $UserDirectory . $ImageDataName;

  if (move_uploaded_file($ImageData, $UserDestination)) {
    echo "Image File Uploaded to Folder Success";
    $AdminDestination = $AdminDirectory . $ImageDataName;

    copy($UserDestination, $AdminDestination);

    $UploadImageSQL = "INSERT INTO images (imageData, imageName, uploadDate) VALUES ('$ImageDataName','$ImageName', NOW())";
    if (mysqli_query($conn, $UploadImageSQL)) {


      http_response_code(201);

      echo "Image Uploaded Successfully";
    } else {
      http_response_code(422);
      echo "Image Upload Failed";
    }
  } else {
    echo "Image File Upload Failed";
  }
}
