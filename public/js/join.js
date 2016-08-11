$(document).ready(function() {
  $('#join-btn').click(function() {
    $('.overlay').removeClass('hidden');
    //$('#join-modal').removeClass('hidden');
    $('#join-modal').fadeIn(275);
  });

  $('.modal-header > .close-form').click(closeForm);

  $('#join-submit-form').click(submitPageForm);
});

function submitPageForm() {
  var selector = '#join-form-page';
  $(selector).addClass('hidden');
  var loader = $('.form-loader').removeClass('hidden');

  $('#join-modal').animate({
    top: '16%',
    height: '280px'
  }, 600);

  var arr = $(selector).serializeArray();
  var body = {};
  arr.forEach(function(d) {
    body[d.name] = d.value;
  });
  $.ajax({
    method: "POST",
    url: "/join",
    data: body
  }).done(function() {
    window.joined = true;
    window.setTimeout(function() {
      loader.children('.ring-loader').addClass('hidden');
      $('#join-modal-done').removeClass('hidden');
    }, 500)
  }).fail(function() {
    window.setTimeout(function() {
      loader.children('.ring-loader').addClass('hidden');
      $('#join-modal-fail').removeClass('hidden');
    }, 500);
  });
}

function submitForm() {
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
    window.joined = true;
    window.setTimeout(function() {
      loader.children('.ring-loader').addClass('hidden');
      $('#join-modal-done').removeClass('hidden');
    }, 500)
  }).fail(function() {
    window.setTimeout(function() {
      loader.children('.ring-loader').addClass('hidden');
      $('#join-modal-fail').removeClass('hidden');
    }, 500);
  });
}

function closeForm() {
  $('.overlay').addClass('hidden');
  $('#join-modal').fadeOut(0);
  if (!window.joined) {
    $('#join-modal-fail').addClass('hidden');
    $('#join-form').removeClass('hidden');
    $('#join-modal').css({
      top: '12%',
      height: '420px'
    });
  }
}
