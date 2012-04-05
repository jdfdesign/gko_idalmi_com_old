//= require gko_store_public_all
//= require gko/jquery.elastidegallery
$(document).ready(function() {
	function init() {
		if($('.product-images:first').length > 0) {
			ZoomGallery.init();
		}
		if($('.images:first').length > 0) {
			Gallery.init($('.images:first'));
		} 
		$("body").fadeIn(3000).css("display", "block");
		$('.carousel').each(function(index) {
			var _self = $(this);
			if(_self.find('.item').length > 1) {
				_self.carousel();
			} else {
				_self.find('.carousel-control').each(function(index) {
					  $(this).css({display: 'none'})
				 });
			}
		}); 
	}
	init(); 
});