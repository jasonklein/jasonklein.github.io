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
  $(".initially-up").hide();
  $("header .initially-up").delay(700).slideDown(500, "linear", function() {
    $("#navbar .initially-up").show();
  });
};

PersonalSite.headerAppearance = function() {
  $(".initially-hide").hide();
  $("#underline").css("width", 0);
  $("#header-bike").show().delay(800).fadeOut("slow", function() {
    $("#header-name").fadeIn(800, function() {
      $("#sub-text-buddy").show();
      $("#underline").show();
      $("#underline").animate({width: "100%"}, 2000, function() {
        $("#role").fadeIn(700, function() {
          $("#text-separator").fadeIn(700, function() {
            $("#goals").fadeIn(700, function() {
              $("header .row").delay(600).fadeOut(function() {
                $("header").delay(450).slideUp("slow")}
              );
            });
          });
        });
      });
    });
  });
};

PersonalSite.setup = function() {
  PersonalSite.headerTextSliding();
  // PersonalSite.headerAppearance();
};

$(PersonalSite.setup);




