$(document).ready(function() {
  $('#login-submit-form').click(function() {
    var arr = $('#login-form').serializeArray();
    var body = {};
    arr.forEach(function(d) {
      body[d.name] = d.value;
    });

    $.ajax({
      url: '/login',
      method: 'POST',
      data: body
    });
  });
});