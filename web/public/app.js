var app = {
  initialize: function() {
    $('button').on('click', function() {
      app.send($('input').val());
    });

  },

  //post requests
  send: function(val) {
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      data: val,
      type: "POST",
      success:
        //depending on if the page is cached, send to loading or cached page,
      error:
    })
  }
}
