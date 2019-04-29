<?php
require '../includes/header.php'?>

<form class="row padding-30px" action="game.php" method="post">
    <div id="room-list">
        <div class="room">
            <p class="roomname">Game room number 1</p>
            <input class="joinbtn" name="rid" value="Join room 1" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
        <div class="room">
            <p class="roomname">Game room number 2</p>
            <input class="joinbtn" name="rid" value="Join room 2" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
        <div class="room">
            <p class="roomname">Game room number 3</p>
            <input class="joinbtn" name="rid" value="Join room 3" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
        <div class="room">
            <p class="roomname">Game room number 4</p>
            <input class="joinbtn" name="rid" value="Join room 4" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
        <div class="room">
            <p class="roomname">Game room number 5</p>
            <input class="joinbtn" name="rid" value="Join room 5" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
        <div class="room">
            <p class="roomname">Game room number 6</p>
            <input class="joinbtn" name="rid" value="Join room 6" type="submit"/>
            <p class="numspaces">0/3</p>
        </div>
    </div>
</form>
<?php require '../includes/footer.php'?>
