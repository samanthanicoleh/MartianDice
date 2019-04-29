<?php
// checking that the user got to this page through a proper way
if (isset($_POST['submit-signup'])) {

  require 'dbh.inc.php';

  $username = $_POST['username'];
  $email = $_POST['mail'];
  $password = $_POST['pwd'];
  $passwordconfirm = $_POST['pwd-confirm'];

  /* if any of the fields are empty */
  if (empty($username) || empty($email) || empty($password) || empty($passwordconfirm)) {
    header("Location: ../signup.php?error=emptyfield");
    exit();
  }
  /* if username AND email is invalid */
  else if(!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $username)) {
    header("Location: ../signup.php?error=invalidemailANDinvalidusername");
    exit();
  }
  /* if username is invalid */
  else if(!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
    header("Location: ../signup.php?error=invalidusername");
    exit();
  }
  /* if email is invalid */
  else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../signup.php?error=invalidemail");
    exit();
  }
  /* if passwords dont match */
  else if($password !== $passwordconfirm) {
    header("Location: ../signup.php?error=passworderror");
    exit();
  }
  /* if username is already taken */
  else {
    /* using prepared statement for security reasons */
    $sql = "SELECT usernameUsers FROM users WHERE usernameUsers=?";
    $stmt = mysqli_stmt_init($conn);

    /* if error connecting to sql */
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      header("Location: ../signup.php?error=sqlerror");
      exit();
    }
    else {
      mysqli_stmt_bind_param($stmt, "s", $username);
      mysqli_stmt_execute($stmt);
      mysqli_stmt_store_result($stmt); // storing the data retrieved from database
      $results = mysqli_stmt_num_rows($stmt); // giving the result - if 1 username exists, if 0 doesnt
      if ($results > 0) {
        header("Location: ../signup.php?error=usernametaken");
        exit();
      }
      else { // if no errors - proceed to insert into database
        $sql = "INSERT INTO users (usernameUsers, emailUsers, pwdUsers) VALUES (?,?,?)";
        $stmt = mysqli_stmt_init($conn);

        /* if error connecting to sql */
        if (!mysqli_stmt_prepare($stmt, $sql)) {
          header("Location: ../signup.php?error=sqlerror");
          exit();
        }
        else {
          /* hashing the password before putting into the database (security)*/
          $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

          mysqli_stmt_bind_param($stmt, "sss", $username, $email, $hashedPassword);
          mysqli_stmt_execute($stmt);

          // if all is ok - redirect user back with success message
          header("Location: ../signup.php?signup=success");
          exit();

        }
      }
    }
  }

  mysqli_stmt_close($stmt); // closing the mysql statement
  mysqli_close($conn); // closing the mysql connection

} // end of POST
else {
  header("Location: ../signup.php");
  exit();
}
