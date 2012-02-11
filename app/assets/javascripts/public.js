//= require gko_store_public_all
//= require twitter/bootstrap/carousel.js 

jQuery(document).ready(function ($) {
	$('#orbit').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true });
	if($('.product-images:first').length > 0) {
		Gallery.init();
	}
 $('.carousel').carousel()
});