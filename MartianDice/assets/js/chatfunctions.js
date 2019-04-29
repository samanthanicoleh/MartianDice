/*
* CHAT FUNCTIONS JAVASCRIPT
*/
var sendRequest = getXmlHttpRequest();
var getRequest = getXmlHttpRequest();
var mostRecentMsg = 0;
var refreshTimer;
var room_id =  0; // id of the room that the user is currently in

// Basing the functions on the browser being used
function getXmlHttpRequest() {
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

// Getting the messages from server
// refresh
function loadChat() {
  if (getRequest.readyState == 4 || getRequest.readyState == 0) {
    getRequest.open("GET", 'getChat.php?roomid=' + room_id + '&last=' + mostRecentMsg, true);
    getRequest.onreadystatechange = updateRecChat;
    getRequest.send(null);
  }
}

// Sending a msg to the server
function sendMsg(message ) {
   message = document.getElementById('msg').value;
  if(message== "") { // if message box is empty
    return;
  }
  if (sendRequest.readyState == 0 || sendRequest.readyState == 4) { // 4 and 0 - if ok
    sendRequest.open("POST", 'getChat.php?roomid=' + room_id + '&last=' + mostRecentMsg, true); // post the message to the current room
    sendRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); // text - not binary
    sendRequest.onreadystatechange = updateSentChat;
    var param = 'message=' + message;
    sendRequest.send(param);
    document.getElementById('msg').value = '';
    var chat_div = document.getElementById('div_chat');
    chat_div.scrollTop = chat_div.scrollHeight;
  }
}

// Update chat that has been sent
function updateSentChat() {
  clearInterval(refreshTimer);
  loadChat();
}

// Update chat after recieving
function updateRecChat() {
  if (getRequest.readyState == 4) { // ready
    var chat_div = document.getElementById('div_chat'); // where to send the messages

    // JSON response
    var response = eval("(" + getRequest.responseText + ")");
    for(i=0; i < response.messages.message.length; i++) {
      chat_div.innerHTML += response.messages.message[i].user; // adding to the div - name
      chat_div.innerHTML += ' - ' +  response.messages.message[i].time + '<br>'; // time - (new line)
      chat_div.innerHTML += response.messages.message[i].text + '<br>'; // message - new line
      mostRecentMsg = response.messages.message[i].id;
    }
    refreshTimer = setTimeout('loadChat();', 1500); // Refreshes every 1.5 seconds
  }

}


// Clearing database - clear
function resetChat() {

  if (sendRequest.readyState == 0 || sendRequest.readyState == 4) { // 4 & 0 - ok
    sendRequest.open("POST", 'getChat.php?roomid=' + room_id + '&last=' + mostRecentMsg, true); // get room id, only refresh chat of one room
    sendRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    sendRequest.onreadystatechange = handleResetChat;
    var param = 'action=reset'; // resetting the chat
    sendRequest.send(param);
    document.getElementById('msg').value = ""; // setting message value to empty string
  }

}

// When page has been refreshed - getting prev. chat
function handleResetChat() {
  loadChat();
}

// If user presses enter instead of the send button
function blockSubmit() {
  sendMsg();
  return false;
}

// Initialize the chat - in a certain room
function initChat(newchat_id){
  room_id = newchat_id;
  loadChat();
}
