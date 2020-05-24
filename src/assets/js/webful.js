// JavaScript Document

//calling foundation js
$(document).foundation();

//calling Brand Crousel
$('.featured-products').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:2,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:4,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});

//calling Brand Crousel
$('.brand-carousel').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:3,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:5,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});

//Calling Categories Crousel
$('.categories-inner').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:3,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:4,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});

//Calling Testimonials Crousel
$('.testimonials-inner').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:1,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:2,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});
//<!-- Initialize Swiper -->
var swiper = new Swiper('.swiper-container', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable: true,
	autoplay:3000,
	slidesPerView: 5,
	spaceBetween: 8,
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 40
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		}
	}
});

//scroll effect
$(document).ready(function () {
	$("#top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});        

	jQuery('#top').click(function (event) {
		event.stopPropagation();                
		var idTo = jQuery(this).attr('data-atr');                
		var Position = jQuery('[id="' + idTo + '"]').offset().top;
		jQuery('html, body').animate({ scrollTop: Position }, 'slow');
		return false;
	});
});
$(window).scroll(function() { 
	if($(this).scrollTop() > 1000) { 
		$("#top").fadeIn();
	} else { 
		$("#top").fadeOut();
	}
});