var tpj = jQuery;
/*--- progress js---*/
window.onload = function () {
	$('.circleGraphic1').circleGraphic({
		'color': '#30bae7'
	});
	$('.circleGraphic2').circleGraphic({
		'color': '#d74680'
	});
	$('.circleGraphic3').circleGraphic({
		'color': '#15c7a8'
	});

	$('.circleGraphic4').circleGraphic({
		'color': '#eb7d4b'
	});
	//filterizer
	$('.filtr-container').filterizr();
	var simplefilter = $('.simplefilter li');
	simplefilter.on('click', function () {
		simplefilter.removeClass('active');
		$(this).addClass('active');
	});


	//for menu fixed (Need to add a menue in navetag)
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.custom_nav').addClass('menu-bg');
		} else {
			$('.custom_nav').removeClass('menu-bg');
		}
	});
	//smooth scrolling
	$('a[href*="#"]:not([href="#').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
				return false;
			}
		}
	});

}