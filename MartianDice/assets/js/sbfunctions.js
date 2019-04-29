/*
* CHAT FUNCTIONS JAVASCRIPT
*/
var sendReq = agetXmlHttpRequest();
var getReq = agetXmlHttpRequest();
var refTimer;
var room_ID =  0;


function agetXmlHttpRequest() {
  if (window.XMLHttpRequest) { // if modern browser
    return new XMLHttpRequest();
  }
  else if(window.ActiveXObject) { // if IE browser
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  else {
    console.log("Chat is unable to start. Please try a different browser"); // if browser doesnt work
  }
}

// Loading the score board
function loadSB() {
  if (getReq.readyState == 4 || getReq.readyState == 0) {
    getReq.open("GET", 'getSB.php?roomid=' + room_ID, true);
    getReq.onreadystatechange = updateRecSB;
    getReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    getReq.send(null);
  }
}

// Sending the score to the server
function sendScore(score) {
    score = getScore();
  if(score== "") { // if message box is empty
    return;
  }
  if (sendReq.readyState == 0 || sendReq.readyState == 4) { // 4/0 - ok
    sendReq.open("POST", 'getSB.php?roomid=' + room_ID, true); // post the score
    sendReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); // text - not binary
    sendReq.onreadystatechange = updateSentSB;
    var param = 'newScore=' + score;
    sendReq.send(param);
  }
}

// Update score that has been sent
function updateSentSB() {
  clearInterval(refTimer);
  loadSB();
}

// Update score after recieving
function updateRecSB() {
  if (getReq.readyState == 4) { // 4- ok

    // JSON response
    var resp = eval("(" + getReq.responseText + ")");
    if(resp.scoreboard.score.length > 2) {
        document.getElementById('newRound').style.display = "block";
    }
    // showing the scores of other players
    for(i=0; i < resp.scoreboard.score.length; i++) {
      var player = document.getElementById('player' + (i + 1));
      player.innerHTML = resp.scoreboard.score[i].user + " got "; // adding to the div - name
      player.innerHTML += resp.scoreboard.score[i].text + '<br>'; // message - new line
    }
    refTimer = setTimeout('loadSB();', 1500); // Refreshes every 1.5 seconds
  }
}


// Clearing database - clear
function resetSB() {

  if (sendReq.readyState == 0 || sendReq.readyState == 4) { // 4/0 - ok
    sendReq.open("POST", 'getSB.php?roomid=' + room_ID, true);
    sendReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    sendReq.onreadystatechange = handleResetSB;
    var param = 'action=reset'; // resetting the chat
    sendReq.send(param);
    document.getElementById('msg').value = ""; // setting message value to empty string
  }

}

// Loading the score
function handleResetSB() {
  loadSB();
}

// Initialize new scoreboard
function initSB(newchat_id){
  room_ID = newchat_id;
  loadSB();
}

//
function updatingLocation() {
  if (getReq.readyState == 4 || getReq.readyState == 0) {
    sendReq.open("POST", 'getSB.php?room_id=' + room_ID, true); // post the message
    sendReq.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); // text - not binary
    sendReq.onreadystatechange = updateSentSB;
    sendReq.send(null);
  }
  setTimeout(function() {loadSB()}, 5000)
}

// starting a new round - resetting the scoreboard
function newRound(){
  resetSB();
  location.reload();
}
