/* For preloader */
$(window).on('load', function(){
	//$('.preloader').delay(500).fadeOut('slow');
});

/* scripts ready */
$(document).ready(function(){

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
	});
});
