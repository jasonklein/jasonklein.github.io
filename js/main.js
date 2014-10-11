$(document).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top -20
    }, 2000, 'easeInOutExpo', function() {
      window.location.hash = href;
    });
    return false;
  });
});

var PersonalSite = PersonalSite || {};

PersonalSite.headerTextSliding = function() {
  $(".initially-up").hide().delay(1000).slideDown(500, "linear");
};

PersonalSite.setup = function() {
  PersonalSite.headerTextSliding();
}

$(PersonalSite.setup);


