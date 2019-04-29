<?php

// Checking if can connect to the database
connect() or die("Cannot connect to the database");
define('MYSQL_ASSOC',MYSQLI_ASSOC);

// Function to make connection to the database
function connect($server = 'localhost', $username = 'root', $password = '', $database = 'projectlogin', $link = 'db_link') {
    global $dblink;

    $dblink = mysqli_connect($server, $username, $password); // making a connection
    if ($dblink) mysqli_select_db($dblink, $database); // if successfully connected - select which database to connect to (in this case - projectlogin - phpmyadmin created for this project)
    return $dblink; // returning the connection
}

// Sending queries to the database
function dbQuery($query, $link = 'db_link') {
  global $dblink;
  $result = mysqli_query($dblink, $query) or dbError(); // either it connects or gives an error
  return $result; // get the result from queries
}

// Handling any database errors
function dbError() {
  exit("Error connecting to the database");
}

// Getting a row based on the database query
function getArrayOfRows($dbQuery) {
  return mysqli_fetch_array($dbQuery, MYSQL_ASSOC);
}

// Getting the number of rows from the query (used later to check that messages have been sent)
function getNumRows($dbQuery) {
  return mysqli_num_rows($dbQuery);
}

// Adding backslashes which makes data safe before sending query to database
function db_input($query_string, $link = 'db_link') {
  global $dblink;

  if (function_exists('mysqli_real_escape_string')) { // using PHPs function mysqli_real_escape_string (if already added)
    return mysqli_real_escape_string($dblink, $query_string);
  }

  return addslashes($query_string); // PHP function that adds slashes for adding to database safely

}
