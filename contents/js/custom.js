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

function autoplay() {
	// if (!click){
		$('.carousel').carousel('next');
		setTimeout(autoplay, 4000);
	// }
}

$('.button-down a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

// ***** NOTES ***** //

//VID for JOJO
// <div class="video-container">
// <iframe width="640" height="360" src="https://www.youtube.com/embed/HKrXLUqouJQ" frameborder="0" allowfullscreen></iframe>
// </div>
//video: //www.youtube.com/embed/FyZroOKK28E

//INTRO TEXT
//I work as an <b> interaction designer</b> for <a href="http://www.gallagherdesign.com/" target="_blank">Gallagher & Associates</a>, designing multi-platform, physical and digital experiences and products for museum and corporate spaces.