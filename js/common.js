$(document).ready(function(){
	$(".dropdown-btn").on("click", function(){
		var siblingP = $(this).siblings("p"),
			siblingIcon = $("i", this),
			allP = $(".dropdown-div p"),
			allIcon =  $(".dropdown-btn i");
		//if(siblingP.hasClass("dropdown-active")){
		//	changeClasses();
		//	return
		//}
		if(allP.hasClass("dropdown-active") && allIcon.hasClass("fas fa-minus-circle")){
			changeClasses();
		}
		function changeClasses(){
			allIcon.removeClass("fas fa-minus-circle");
			allIcon.addClass("fas fa-plus-circle");
			allP.removeClass("dropdown-active");
		}
		$(siblingP).addClass("dropdown-active");
		$(siblingIcon).removeClass("fas fa-plus-circle");
		$(siblingIcon).addClass("fas fa-minus-circle");
	});
//STICKY-NAV-START
	var aboutUsOffset = $("#about-us-section").offset().top;
		$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
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

// SMOOTH SCROLLING-START
	$(".main-nav, .morphing-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		if(id == "#"){
			return;
		}
		var top = $(id).offset().top - $(".main-nav").outerHeight();
		$('body,html').animate({scrollTop: top}, 700);
	});
// SMOOTH SCROLLING-END

//LIGHTBOX-GALLERY-START
	var $items    = $(".portfolio-item"),
		$links    = $(".lightbox-link > a"),
		$lightbox = $(".lightbox"),
		$overlay  = $(".overlay"),
		$prev     = $(".lightbox-prev"),
		$next     = $(".lightbox-next"),
		itemIndex = 0,
		targetImg = "";

	function replaceImg(src){
		$lightbox.find('img').attr('src', src);
	}
	function getHref(index){
		return $items.eq(index).find(".lightbox-link > a").attr("href");
	}

	$links.on('click', function(event){
		event.preventDefault();
		itemIndex = $(this).closest(".portfolio-item").index();
		targetImg = $(this).attr("href");
		replaceImg(targetImg);
		$lightbox.fadeIn();
		$("body").css("position", "fixed");
	});

	$overlay.on("click", function(){
		$lightbox.fadeOut();
		$("body").css("position", "static");
	});

	$next.on('click', function(){
		if((itemIndex + 1) < $items.length){
			targetImg = getHref(itemIndex + 1);
			itemIndex ++;
		}else{
			targetImg = getHref(0);
			itemIndex = 0;
		}
		replaceImg(targetImg);
	});

	$prev.on('click', function(){
		if(itemIndex > 0){
			targetImg = getHref( itemIndex - 1);
			itemIndex --;
		}else{
			targetImg = getHref($items.length - 1);
			itemIndex = $items.length - 1;
		}
		replaceImg(targetImg);
	});
//LIGHTBOX-GALLERY-END
});
