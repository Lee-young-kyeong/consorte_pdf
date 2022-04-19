$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('a').fadeIn();
    } else {
        $('a').fadeOut();
    }
});

$( 'a' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

