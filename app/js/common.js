/* For preloader */
$(window).on('load', function(){
	$('.preloader').delay(200).fadeOut('slow');
});

/* scripts ready */
$(document).ready(function(){

	$(window).on('resize', function(){
		menuDown();
	});

	menuDown = function(){
		$('#hamburger').removeClass('hamburger--slider-r');
		$('#menu').slideUp();
	};

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
	});

	$('#hamburger').click(function(){
		$(this).toggleClass('hamburger--slider-r');
		$('#menu').slideToggle();
		$('#menu .menu__item').click(function(){
			$('#menu').slideUp();
		});
	});

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 60}, 1000);
	});

	$(window).scroll(function(){
		menuDown();
		
		var wScroll = $(this).scrollTop(),
				hPanel = $("#header-panel").height(),
				topServices = $('#services').offset().top - hPanel*1.2,
				topAbout = $('#about').offset().top - hPanel*1.2,
				topContact = $('#contact').offset().top - hPanel*3.4;

		if(wScroll > ( hPanel/2)){
			$('#header-panel').addClass('active');
		}
		else {
			$('#header-panel').removeClass('active');
		}

		if(wScroll > topServices) {
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=services]").addClass('is-active');
		}
		else {
			$('#menu').find('a').removeClass('is-active');
		}
		if(wScroll > topAbout){
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=about]").addClass('is-active');
		}
		if(wScroll > topContact){
			$('#menu').find('a').removeClass('is-active');
			$("#menu a[href*=contact]").addClass('is-active');
		}
		


	});

});
