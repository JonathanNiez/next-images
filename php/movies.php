<?php
require 'connect.php';

header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$sql = "SELECT * FROM movies";
$result = mysqli_query($conn, $sql);

$id = "";
if (!$id) echo '[';
for ($i = 0; $i < mysqli_num_rows($result); $i++) {
    echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
}
if (!$id) echo ']';
