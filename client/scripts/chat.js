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
    var $roomname = $('<div></div>');
    $roomname.addClass(roomName);
    $roomname.text(roomName);
    $message.text(message);
    $username.text("From: " + username);
    $feed.append($message);
    $message.append($username);
    $message.append($roomname);

 }
}

var getRooms = function(array){
  // debugger;
  var rooms = {};
  // debugger;
  for(var y = 0; y < array.length; y++){
    rooms[array[y].roomname] = 'room';
  }
  for(var key in rooms) {
    var room = key;
    var $room = $('<option></option>');
    $room.text(room);
    $room.val(room);
    $dropdown = $('#dropdown');
    $dropdown.append($room);
  }
  console.log(rooms);

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
  $('#dropdown').on('change', function (){

    var selected = $('#dropdown').find(":selected").val();
    $('.message').hide();
    $('.'+selected).closest('.message').show()
    console.log('hi');
  })




