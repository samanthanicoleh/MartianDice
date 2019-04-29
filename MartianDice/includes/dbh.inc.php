<?php

// Attributes to connecting to the database
$servername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "projectlogin";

// connection method
$conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

// if fails to connect
if (!$conn) {
  die("Connection to database failed.".mysqli_connect_error());
}
