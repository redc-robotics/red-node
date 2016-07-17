$(document).ready(function() {
  $('#contact-submit-form').click(function() {
    $('.overlay').removeClass('hidden');
    $('#contact-success-modal').fadeIn(275);

    var arr = $('#contact-form').serializeArray();
    var body = {};
    arr.forEach(function(d) {
      body[d.name] = d.value;
    });

    console.log(body);
    $.ajax({
      method: "POST",
      url: "/contact",
      data: body
    }).done(function() {
      $('#contact-form').trigger('reset');

      window.setTimeout(function() {
        $('.ring-loader').addClass('hidden');
        $('.contact-modal-finish').removeClass('hidden');
      }, 500);
    });
  });

  $('.close-form').click(closeForm);
});

function closeForm() {
  $('.overlay').addClass('hidden');
  $('#contact-success-modal').fadeOut(0);
}
