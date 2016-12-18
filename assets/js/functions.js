/* Equal Height of Element
==================================*/
function heightAdjust() { 
	if($(window).width() < 767) {	
		$('#signupGroup .gray-box').unSyncHeight();
		$('.same-ht').unSyncHeight();
		$('.product-box').unSyncHeight();
	} else {	
		$('#signupGroup .gray-box').syncHeight({updateOnResize: true});
		$('.same-ht').syncHeight({updateOnResize: true});	
		$('.product-box').syncHeight({updateOnResize: true});
	}
}

/* Responsive Menu + Dropdown
==================================*/
$('.header-nav .nav').flexMenu({ responsivePattern: 'toggle'}); 
$('.menu-icon').click(function(){ 
	$('.header-nav .nav').toggleClass('active');  
});

/*fix header on scroll*/
function stickyHeader(){
	//Check to see if the window is top if not then display button
  	$(window).scroll(function(){
	    if ($(this).scrollTop() > 50) {
	      $('header').addClass('sticky');
	    } else {
	      $('header').removeClass('sticky');
	    }
  	});
}



$(document).ready(function () {		
	//bannerCarousel();
	//heightAdjust();
});


$(window).on('resize', function() {	
  	
});

$(window).on('load', function() {
	
});	