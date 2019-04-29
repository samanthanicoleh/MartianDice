<?php
session_start(); // start the session
require("database.php"); // for connection

$username = mysqli_get_var("SELECT usernameUsers FROM users WHERE idUsers=" . $_SESSION['userId']) or die(mysqli_error()); // get the user that was logged in or give an error

// Checking to see if a message was sent (and if message is empty)
if(isset($_POST['newScore']) && $_POST['newScore'] != null) {
	$sql = "INSERT INTO scoreboard(room_id, idUsers, score) VALUES (
    " . db_input($_GET['roomid']) . ", '" . $_SESSION['userId'] . "', '" . db_input($_POST['newScore']) . "')";
	dbQuery($sql);
}

// In case user wanted to reset the database (delete message)
if(isset($_POST['action']) && $_POST['action'] == "reset") {
	$sql = "DELETE FROM scoreboard WHERE room_id = " . db_input($_GET['roomid']);
	dbQuery($sql);
}

// Making the response using JSON
$jsonChat = '{"scoreboard": {';

	if(!isset($_GET['roomid'])) { // if user is not logged in
		error_log("You are not logged in");
	}
	else {
		$sql = "SELECT idUsers, score" .
			" FROM scoreboard WHERE room_id = " . db_input($_GET['roomid']);
		$msgQuery = dbQuery($sql);


		// Going through all the messages and making JSON object
		if(getNumRows($msgQuery) > 0) {
			$jsonChat .= '"score":[ ';
			while($msgArr = getArrayOfRows($msgQuery)) { // while there are messages
        $newUsername = mysqli_get_var("SELECT usernameUsers FROM users WHERE idUsers=" . $msgArr['idUsers']) or die(mysqli_error()); // get the user that was logged in or give an error
				$jsonChat .= '{';
				$jsonChat .= '"user": "' . htmlspecialchars($newUsername) . '",
							"text": "' . htmlspecialchars($msgArr['score']) . '"},';
			}
			$jsonChat .= ']';
		}
		else {
			// Sending message if none other is provided
			$jsonChat .= '"score":[]';
	}
}
$jsonChat .= '}}'; // close JSON being sent
echo $jsonChat;

// function to only return variable needed
// Found in https://css-tricks.com/snippets/php/return-only-one-variable-from-mysql-query/
function mysqli_get_var($query,$i=0) {
	global $dblink;

       $res = mysqli_query($dblink, $query);
       $row = mysqli_fetch_array($res);
       mysqli_free_result($res);
       $rec = $row[$i];
       return $rec;
}
