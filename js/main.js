var PersonalSite = PersonalSite || {};


PersonalSite.showContent = function(content) {
  content.data('state', 'visible');
  content.slideDown();

  if ($("#twitter").data('state') === 'visible'){
    $("#twitter-content").slideDown(700);
  }

  if ($("#about").data('state') === 'visible'){
    $("#about-content").slideDown(700);
  }

  if ($("#projects").data('state') === 'visible'){
    $("#projects-content").slideDown(900);
  }

};

PersonalSite.hideContent = function(content) {
  content.data('state', 'hidden');
  content.slideUp();
  if ($("#twitter").data('state') === 'hidden'){
    $("#twitter-content").slideUp(700);
  }

  if ($("#about").data('state') === 'hidden'){
    $("#about-content").slideUp(700);
  }

  if ($("#projects").data('state') === 'hidden'){
    $("#projects-content").slideUp(900);
  }

};

PersonalSite.toggleContent = function() {
  console.log(this);
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
  $("#about-content").hide();
  $("#projects-content").hide();
  $(".icon-box").click(PersonalSite.toggleContent);
};

$(PersonalSite.setup);




