DROP DATABASE IF EXISTS projectlogin;
CREATE DATABASE projectlogin;

USE projectlogin;

CREATE TABLE chat_user(
	chat_id INT(11) AUTO_INCREMENT PRIMARY KEY,
	chat_name VARCHAR (66),
	start_time DATETIME
);

CREATE TABLE message(
	message_id INT (11) AUTO_INCREMENT PRIMARY KEY,
	room_id INT (11),
	idUsers INT (11),
	usernameUsers VARCHAR (64),
	message TEXT,
	post_time DATETIME
);

CREATE TABLE scoreboard(
	score_id INT (11) AUTO_INCREMENT PRIMARY KEY,
	room_id INT (11),
	idUsers INT (60),
	score VARCHAR (60)
);

CREATE TABLE users(
	idUsers INT (11) AUTO_INCREMENT PRIMARY KEY,
	usernameUsers TINYTEXT,
	emailUsers TINYTEXT,
	pwdUsers LONGTEXT
);

INSERT INTO users (usernameUsers, emailUsers, pwdUsers) VALUES ('Bob', 'bob@gmail.com' , '1234');


INSERT INTO users (usernameUsers, emailUsers, pwdUsers) VALUES ('user', 'user@gmail.com' , '1');
























