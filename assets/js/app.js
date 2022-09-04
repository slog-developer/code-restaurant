var $menu = $('.list'),
    $menuLink = $('.section'),
    $doc = $('html, body');

$(function () {
  $menu.on('click', 'a', function(e) {
      var $target = $(this).parent(),
            idx = $target.index(),
            section = $menuLink.eq(idx),
            offsetTop = section.offset().top;

      $doc.stop().animate({
          scrollTop: offsetTop - 96
      }, 300);
      return false;
  });
});

$(window).scroll(function() {
    var sclTop = $(window).scrollTop();

    $.each($menuLink, function(idx, item) {
      var $target = $menuLink.eq(idx),
      // i = $target.index(),
      targetTop = $target.offset().top;
      
      if((targetTop - 96) <= sclTop) {
        $menu.removeClass('active');
        $menu.eq(idx).addClass('active');
        console.log(idx);
      }
    })
})
