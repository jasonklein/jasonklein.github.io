$(document).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top - 100
    }, 2000, 'easeInOutExpo');
    return false;
  });
});

var PersonalSite = PersonalSite || {};

PersonalSite.scrollBelowHeader = function() {
  setTimeout(function() {
    var $root = $('html, body');
    $root.animate({scrollTop: $("#main").offset().top + 10}, 2000, 'easeInOutExpo');
    return false;
  }, 500);
}

PersonalSite.headerAppearance = function() {
  $(".initially-hide").hide();
  $("#underline").css("width", 0);
  $("#header-name").delay(600).fadeIn(800, function() {
    $("#sub-text-buddy").show();
    $("#underline").show();
    $("#underline").animate({width: "100%"}, 2000, function() {
      if(window.innerWidth > 640) {
        $("#role").fadeIn(500, function() {
          $("#text-separator").fadeIn(500, function() {
            $("#goals").fadeIn(500, PersonalSite.scrollBelowHeader());
          });
        });
      } else {
        PersonalSite.scrollBelowHeader();
      };
    });
  });
};

PersonalSite.setup = function() {
  PersonalSite.headerAppearance();
};

$(PersonalSite.setup);




