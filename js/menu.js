$( document ).ready(function() {
	$('.menu-button, .overlay').click(function() {
		$('body').toggleClass('overflow-hidden');
		$('.menu-button').toggleClass('open').toggleClass('close');
		$('nav header').toggleClass('open');
		$('nav .posts').toggleClass('open');
		$('.overlay').fadeToggle();
	});
});
