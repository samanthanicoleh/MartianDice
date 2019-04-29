<?php

session_start();
session_unset(); // takes all session variables and deletes them all
session_destroy();
header("Location: index.php");
