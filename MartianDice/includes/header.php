<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="description" content="Game project">
  <meta name=viewport content="width=device-width, initial-scale=1">
  <title> Martian Dice </title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="/ProjectHolsteadSamantha/assets/images/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/ProjectHolsteadSamantha/assets/images/favicon.ico" type="image/x-icon">
  <!-- CSS Links -->
  <link rel="stylesheet" href="/ProjectHolsteadSamantha/assets/css/style.css">
  <link rel="stylesheet" href="/ProjectHolsteadSamantha/assets/css/grid.css">

  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

  <header>

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Martian Dice</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="/ProjectHolsteadSamantha/">Home</a></li>
          <li><a href="/ProjectHolsteadSamantha/instructions.php"> How to Play</a></li>
          <li><a href="/ProjectHolsteadSamantha/game/lobby.php"> Play Game </a></li>
        </ul>

        <div class="log-in">
          <?php
          if (isset($_SESSION['userId'])) { // only show login if not already logged in
            echo '<form action="/ProjectHolsteadSamantha/logout.php" method="post">
            <button type="submit" name="submitLogout"> Log Out</button>
            </form>';
          }
          else { // show logout only when not logged in
            echo '<form action="/ProjectHolsteadSamantha/login.php" method="post">
            <input type="text" name="mailUsername" placeholder="Username or E-mail">
            <input type="password" name="pwd" placeholder="Password">
            <button type="submit" name="submitLogin"> Log In</button>
            <button> <a href="signup.php"> Sign Up </a></button>
            </form>';
          }
          ?>
        </div>
      </div>
    </nav>
  </header>
