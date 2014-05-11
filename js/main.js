var PersonalSite = PersonalSite || {};


PersonalSite.showContent = function(content) {
  content.slideDown();
  content.data('state', 'visible');
}

PersonalSite.hideContent = function(content) {
  content.slideUp();
  content.data('state', 'hidden');
}

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
  $(".icon-box").click(PersonalSite.toggleContent);
};


$(PersonalSite.setup);


