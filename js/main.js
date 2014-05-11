var PersonalSite = PersonalSite || {};


PersonalSite.showContent = function(content) {
  content.data('state', 'visible');
  content.slideDown();
  if ($("#twitter").data('state') === 'visible'){
    $("#twitter-content").slideDown(800);
  }
};

PersonalSite.hideContent = function(content) {
  content.data('state', 'hidden');
  content.slideUp();
  $("#twitter-content").slideUp();
  if ($("#twitter").data('state') === 'hidden'){
    $("#twitter-content").slideUp(800);
  }
};

PersonalSite.toggleContent = function() {
  var content = $(this).find(".icon-name");
  if (content.data('state') === 'hidden') {
    PersonalSite.showContent(content);
  } else if (content.data('state') === 'visible') {
    PersonalSite.hideContent(content);
  }
};

PersonalSite.setup = function() {
  $(".icon-name").data('state', 'hidden').hide();
  $("#twitter-content").hide();
  $(".icon-box").click(PersonalSite.toggleContent);
};



$(PersonalSite.setup);


