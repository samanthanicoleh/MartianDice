<?php
// checking that the user got to this page through a proper way
if (isset($_POST['submitLogin'])) {
  require 'includes/dbh.inc.php';

  // getting user submitted variables
  $mailusername = $_POST['mailUsername'];
  $password = $_POST['pwd'];

  // if either of the fields are empty
  if (empty($mailusername) || empty($password)) {
    header("Location: index.php?error=emptyloginfield");
    exit();
  }
  else {
    /* using prepared statement for security */
    $sql = "SELECT * FROM users WHERE usernameUsers=? OR emailUsers=?;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) { // if sql statement has errors
      header("Location: index.php?error=sqlerror");
      exit();
    }
    else {
      mysqli_stmt_bind_param($stmt, "ss", $mailusername, $mailusername); //entering 2 strings
      mysqli_stmt_execute($stmt);
      $results = mysqli_stmt_get_result($stmt);
      if ($row = mysqli_fetch_assoc($results)) { // checking that the user exists
        $passwordCheck = password_verify($password, $row['pwdUsers']);
        if ($passwordCheck == false) { // if password is incorrect
          header("Location: index.php?error=wrongpasswordorusername");
          exit();
        }
        else if ($passwordCheck == true) { // correct password
          session_start();
          $_SESSION['userId'] = $row['idUsers'];
          $_SESSION['userName'] = $row['usernameUsers'];

          header("Location: index.php?login=success");
          exit();
        }
        else { // in case password doesn't return boolean value
          header("Location: index.php?error=wrongpasswordorusername");
          exit();
        }
      }
      else {
        header("Location: index.php?error=nouser");
        exit();
      }
    }

  }

} // end of POST
else {
  header("Location: index.php");
  exit();
}
