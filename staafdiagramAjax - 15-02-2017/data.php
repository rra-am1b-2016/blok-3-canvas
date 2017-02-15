<?php

$serverName = "localhost";
$userName = "root";
$password = "";
$databaseName = "am1b_2017_diagram";

$conn = mysqli_connect($serverName, $userName, $password, $databaseName);

$query = "SELECT * FROM `users`";

$resource = mysqli_query($conn, $query);

$resultArray = mysqli_fetch_array($resource, MYSQLI_ASSOC);

echo json_encode($resultArray);


