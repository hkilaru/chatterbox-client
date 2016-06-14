var buildfeed = function(array){
  var $feed = $('#feed');
      $feed.html('');

  for(var x = 0; x < array.length; x++){
    if(array[x].username === "Courtesy of Colin & Andy (YOURE WELCOME!!)") {
      continue;
    }
    var username = array[x].username;
    var message = array[x].text;
    var roomName = array[x].roomname;
    var $message = $('<div class="message" style="background-color:#eee; margin:5px; width:100%;"></div');
    var $username = $('<div class="username"></div>');
    var $roomname = $('<div class="roomname"></div>');
    $message.text(message);
    $username.text("From: " + username);
    $roomname.text(roomName);
    $feed.append($message);
    $message.append($username);
    $message.append($roomname);

 }
}


  $("#refresh").on('click', function() {
    getData();
  })

  $("#sendMessage").on('click', function() {
    var message = {
    username: document.URL.slice(83),
    text: $("#message").val(),
    roomname: "lobby"
};
    sendMessage(message)
  })

