<?php
session_start(); // start the session
require("database.php"); // for connection


$username = mysqli_get_var("SELECT usernameUsers FROM users WHERE idUsers=" . $_SESSION['userId']) or die(mysqli_error()); // get the user that was logged in or give an error
$id = mysqli_get_var("SELECT idUsers FROM users WHERE idUsers=" . $_SESSION['userId']) or die(mysqli_error()); // get the user that was logged in or give an error

// Checking to see if a message was sent (and if message is empty)
if(isset($_POST['message']) && $_POST['message'] != "") {
	$sql = "INSERT INTO message(room_id, idUsers, usernameUsers, message, post_time) VALUES (
		" . db_input($_GET['roomid']) . ", " . db_input($id) . ", '" . db_input($username) . "', '" . db_input($_POST['message']) . "', NOW())";
	dbQuery($sql);
}

// In case user wanted to reset the database (delete message)
if(isset($_POST['action']) && $_POST['action'] == "reset") {
	$sql = "DELETE FROM message WHERE room_id = " . db_input($_GET['roomid']);
	dbQuery($sql);
}

// Making the response using JSON
$jsonChat = '{"messages": {';

	if(!isset($_GET['roomid'])) { // if user is not logged in
		error_log("You are not logged in");
	}
	else {
		$last = (isset($_GET['last']) && $_GET['last'] != '') ? $_GET['last'] : 0;
		$sql = "SELECT message_id, usernameUsers, message, date_format(post_time, '%h:%i') as post_time" .
			" FROM message WHERE room_id = " . db_input($_GET['roomid']) . " AND message_id > " . $last;
		$msgQuery = dbQuery($sql);

		// Going through all the messages and making JSON object
		if(getNumRows($msgQuery) > 0) {
			$jsonChat .= '"message":[ ';
			while($msgArr = getArrayOfRows($msgQuery)) { // while there are messages
				$jsonChat .= '{';
				$jsonChat .= '"id":  "' . $msgArr['message_id'] . '",
							"user": "' . htmlspecialchars($msgArr['usernameUsers']) . '",
							"text": "' . htmlspecialchars($msgArr['message']) . '",
							"time": "' . $msgArr['post_time'] . '"
						},';
			}
			$jsonChat .= ']';
		}
		else {
			// Sending message if none other is provided
			$jsonChat .= '"message":[]';
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
