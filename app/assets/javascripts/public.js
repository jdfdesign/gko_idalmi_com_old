//= require gko_public_all 
//= require gko_store_public_all
//= require twitter/bootstrap.js

jQuery(document).ready(function ($) {

	if($('.product-images:first').length > 0) {
		Gallery.init();
	}
	$('#features').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true });
});