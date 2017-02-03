var click;
var paused;

$(document).ready(function() {
	$(".button-collapse").sideNav({
		closeOnClick: true,
	});

	$('.materialboxed').materialbox();
	// click = false;
	// paused = false;

	$('.carousel.carousel-slider').carousel({full_width: true});
		autoplay();
});

// $('.carousel-item img').click(function(){
// 	if (!paused){
// 		paused = true;
// 		click = true;
// 	} else {
// 		click = false;
// 		paused = false;
// 		autoplay();
// 	}
// })

// $(window).scroll(function(){
// 	if (paused){
// 		console.log('scrolling')
// 		click = false;
// 		paused = false;
// 		autoplay();
// 	}	
// })

function autoplay() {
	// if (!click){
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4000);
	// }
}

$('.button-down a').click(function(){
    $('body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
});


