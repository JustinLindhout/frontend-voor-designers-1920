$(function() {

  var inWrap = $('.inner-wrapper');
	
document.addEventListener('keypress', next)
	
  $('.prev').on('click', function next(prev) {

    inWrap.animate({left: '0%'}, 300, function(){

      inWrap.css('left', '-100%');

      $('.slide').first().before($('.slide').last());

    });


  });



  $('.next').on('click', function(next) {

    inWrap.animate({left: '-200%'}, 300, function(){

      inWrap.css('left', '-100%');

      $('.slide').last().after($('.slide').first());

    });


  });


});
