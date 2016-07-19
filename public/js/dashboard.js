$(document).ready(function() {
  $.ajax({
    url: '/users/cur'
  }).done(function(d) {
    $('#login-modal').css({ 'display': 'none' });
    $('.overlay').css({ 'display': 'none' });
  }).fail(function(a,b,c) {
    console.log('Failure');
  });

  $('#login-submit-form').click(function() {
    var arr = $('#login-form').serializeArray();
    console.log(arr);
    var body = {};
    arr.forEach(function(d) {
      body[d.name] = d.value;
    });

    $.ajax({
      url: '/login',
      method: 'POST',
      data: body
    }).done(function() {
      $('#login-fail').css({ opacity: 0 });
      $('#login-modal').fadeOut(300);
      $('.overlay').fadeOut(600);
    }).fail(function() {
      $('#login-fail').css({ opacity: 1 });
    });
  });
});
