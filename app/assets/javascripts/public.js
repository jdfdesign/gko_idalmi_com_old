//= require gko_store_public_all
//= require gko/jquery.elastidegallery

jQuery(document).ready(function ($) {
	$('#orbit').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true });
	if($('.product-images:first').length > 0) {
		ZoomGallery.init();
	}
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
 $('.carousel').carousel()
});