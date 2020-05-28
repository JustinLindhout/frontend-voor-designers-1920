$(function button() {

	var inWrap = $('.inner-wrapper');



	$('.prev').on('click', function prev(prev) {

		inWrap.animate({
			left: '0%'
		}, 300, function () {

			inWrap.css('left', '-100%');

			$('.slide').first().before($('.slide').last());

		});


	});



	$('.next').on('click', function next(next) {

		inWrap.animate({
			left: '-200%'
		}, 300, function () {

			inWrap.css('left', '-100%');

			$('.slide').last().after($('.slide').first());

		});


	});




});

$(function keys(){
	var inWrap = $('.inner-wrapper');
	
	$("slide-wrapper").addEventListener("keypress", nextSlide);
	
function nextSlide(slide) {

		inWrap.animate({
			left: '-200%'
		}, 300, function () {

			inWrap.css('left', '-100%');

			$('.slide').last().after($('.slide').first());

		});


	};
});