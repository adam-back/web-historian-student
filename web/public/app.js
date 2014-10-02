var app = {
  initialize: function() {
    $('button').on('click', function() {
      app.send($('input').val());
    });

  },

  //post requests
  send: function(website) {
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      data: JSON.stringify(website),
      type: "POST",
      contentType: "application/json",
      success: function(data) {
        //depending on if the page is cached, send to loading or cached page,
        console.log('Post request successful.');
      },
      error: function(error) {
        console.log('Post request unsuccessful.');
      }
    })
  }
}
