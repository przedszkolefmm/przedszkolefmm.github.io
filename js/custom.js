// Add here all your JS customizations
$(document).ready(function() {
	var headerHeight = $('#header').height();
	$('.parallax-full-height').css('height', ($(window).height() - headerHeight));
});