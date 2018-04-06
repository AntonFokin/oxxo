$(document).ready(function(){
	$(".dropdown-btn").on("click", function(){
		var element = $(this).siblings("p");
		$(element).toggleClass("dropdown-active")
	});

});