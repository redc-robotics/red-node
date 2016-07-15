var mobile = false;
var minWidth = 720;

$(document).ready(function() {
  respondView();
  $(window).resize(respondView);
});

function respondView() {
  if (!mobile && $(window).width() < minWidth)
    setMobile();
  else if (mobile && $(window).width() >= minWidth)
    setDesktop();
}

function setMobile() {
  mobile = true;
  $("#jumbo").addClass('hidden');
  $('#jumbo-mobile').removeClass('hidden');
}

function setDesktop() {
  mobile = false;
  $("#jumbo").removeClass('hidden');
  $('#jumbo-mobile').addClass('hidden');
}
