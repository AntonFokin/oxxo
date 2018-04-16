$(document).ready(function(){
	$(".dropdown-btn").on("click", function(){
		var element = $(this).siblings("p");
		$(element).toggleClass("dropdown-active");
	});

//STICKY-NAV-START
	var aboutUsOffset = $("#about-us-section").offset().top;
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		console.log($("#about-us-section").offset());
		console.log(scrollPos);
		if(aboutUsOffset <= scrollPos){
			$(".main-nav").addClass("fixed-nav");
		}else{
			$(".main-nav").removeClass("fixed-nav");
		}
	});
//STICKY-NAV-END

// MORPHING-MENU-START
	$('.morphing-menu').on('click', function (event) {
		$(this).toggleClass('button-animation');
		$('.nav-bar').toggleClass('opened');
		event.stopPropagation();
	});
	$('body').on('click', function () {
		$('.morphing-menu').removeClass('button-animation');
		$('.nav-bar').removeClass('opened');
	});
// MORPHING-MENU-END

//// SMOOTH SCROLLING
//	$(".menu-navigation, .morphing-menu, .arrow").on("click", "a", function (event) {
//		event.preventDefault();
//		var id = $(this).attr('href'),
//				top = $(id).offset().top;
//		$('body,html').animate({scrollTop: top}, 700);
//	});
//});
});
