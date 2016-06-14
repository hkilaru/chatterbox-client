// YOUR CODE HERE:

function getData(){


  $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox?order=-createdAt',
  type: 'GET',
  //data: JSON.parse(message),
  contentType: 'application/json',
  success: function (data) {
    console.log(data);
    //var messageArray = data[results];
    buildfeed(data.results);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

}


function sendMessage(message){


 $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log(message);
    console.log(data);
    getData();
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

}
