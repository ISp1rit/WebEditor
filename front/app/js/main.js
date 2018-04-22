$(function () {
  function initToolbarBootstrapBindings() {
    $('a[title]').tooltip({container: 'body'});

    $('[data-role=magic-overlay]').each(function () {
      var overlay = $(this), target = $(overlay.data('target'));
      overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
    });
  };

  initToolbarBootstrapBindings();

  $('#editor').wysiwyg();
});