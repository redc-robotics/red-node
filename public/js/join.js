$(document).ready(function() {
  $('#join-btn').click(function() {
    $('.overlay').removeClass('hidden');
    //$('#join-modal').removeClass('hidden');
    $('#join-modal').fadeIn(275);
  });

  $('.modal-header > .close-form').click(closeForm);

  $('#join-submit-form').click(function() {
    $('#join-form').addClass('hidden');
    var loader = $('#join-modal .form-loader').removeClass('hidden');

    $('#join-modal').animate({
      top: '16%',
      height: '280px'
    }, 600);

    var arr = $('#join-form').serializeArray();
    var body = {};
    arr.forEach(function(d) {
      body[d.name] = d.value;
    });
    $.ajax({
      method: "POST",
      url: "/join",
      data: body
    }).done(function() {
      window.setTimeout(function() {
        loader.children('.ring-loader').addClass('hidden');
        $('#join-modal-done').removeClass('hidden');
      }, 500)
    });
  });
});

function closeForm() {
  $('.overlay').addClass('hidden');
  $('#join-modal').fadeOut(0);
}
