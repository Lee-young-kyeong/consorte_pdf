$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('a').fadeIn();
    } else {
        $('a').fadeOut();
    }
});
