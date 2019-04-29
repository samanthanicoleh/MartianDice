<?php
session_start();
require("database.php"); // for connection
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

  <script type="text/javascript" src="/ProjectHolsteadSamantha/assets/js/chatfunctions.js"></script>
  <script type="text/javascript" src="/ProjectHolsteadSamantha/assets/js/dicefunctions.js"></script>
  <script type="text/javascript" src="/ProjectHolsteadSamantha/assets/js/sbfunctions.js"></script>

  <!--  Audio -->
  <audio id="dice-roll" src="/ProjectHolsteadSamantha/assets/audio/dice.mp3"></audio>
  <audio id="winner-clap" src="/ProjectHolsteadSamantha/assets/audio/winner.mp3"></audio>

  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<?php
$rid = $_POST['rid'];
$roomID = 0;
switch ($rid) {
    case 'Join room 1':
      $roomID = 1;
      break;
    case 'Join room 2':
      $roomID = 2;
      break;
    case 'Join room 3':
      $roomID = 3;
      break;
    case 'Join room 4':
      $roomID = 4;
      break;
    case 'Join room 5':
      $roomID = 5;
      break;
    case 'Join room 6':
      $roomID = 6;
      break;
    default:
      $roomID = 0;
  }
  if (isset($_SESSION['userId'])) {
  $query = "SELECT usernameUsers FROM users WHERE idUsers=" . $_SESSION['userId'] or die(mysqli_error()); // get the user that was logged in or give an error
  $res = mysqli_query($dblink, $query);
  $rec = mysqli_fetch_array($res)[0];
  $rec = '"' . $rec . '"';
  echo "<body onLoad='initEverything($roomID, $rec);'>"; 
} else {
  echo "<body onLoad='initEverything($roomID, 'unknown');'>";
}
 ?>
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
          if (isset($_SESSION['userId'])) { // only show logout button if not already logged in
            echo '<form action="/ProjectHolsteadSamantha/logout.php" method="post">
            <button type="submit" name="submitLogout"> Log Out</button>
            </form>';
          } else { // show login only when not logged in
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
  <?php
  if (isset($_SESSION['userId'])) { // only show this if user is logged in
    ?>

    <div class="row">
      <!-- CHAT DIV -->
      <div class="col-3">
        <div class="chat">

          <div id="div_chat"></div>
          <form onSubmit="return blockSubmit();">
            <input autocomplete="off" type="text" id="msg"/>
            <button class="startbtn" type="button" onClick="sendMsg();"> Send</button>
          </form>
        </div>

      </div>

      <!--  GAME DIV -->
      <div class="col-6">
        <div id="gameboard">

        </div>
      </div>

      <!-- SCORES DIV -->
      <div class="col-3 scores">
        <div class="diceScores" id="diceScores">
          <p class="urscore">

            Roll the dice to see your current score.
          </p>
        </div>
        <div id="allscores">
          <div id="player1">
            Player one has not played yet
          </div>
          <div id="player2">
            Player two has not played yet
          </div>
          <div id="player3">
            Player three has not played yet
          </div>
        </div>
        <button id="rollbutton" type="button" class="startbtn" onclick="rollDice()"> Roll </button>
        <button id="updatePositions" type="button" class="startbtn" onclick="endTurn()"> End Turn </button>
        <button id="newRound" type="button" class="startbtn" onclick="newRound()"> Start new Round </button>

        <div id="keepQuestion">
          <p>
            Which one are you keeping?
          </p>
            <img id="Cow" class="choseDice" src="/ProjectHolsteadSamantha/assets/images/dice/cow.svg" alt="Picture of a dice whos side up is a Cow" onclick="changeAnimal('Cow')">
            <img id="Chicken" class="choseDice" src="/ProjectHolsteadSamantha/assets/images/dice/chicken.svg" alt="Picture of a dice whos side up is a Chicken" onclick="changeAnimal('Chicken')">
            <img id="Human" class="choseDice" src="/ProjectHolsteadSamantha/assets/images/dice/human.svg" alt="Picture of a dice whos side up is a Human" onclick="changeAnimal('Human')">
        </div>

      </div>
    </div> <!--  row -->
  </div>
<?php } else {
  echo("<h1> It seems that you havent logged in, please log in if you wish to play the game. </h1>");
}
require '../includes/footer.php'?>
