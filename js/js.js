var sliderSettings = {
	infinite: true,
	slidesToShow:1
};

var slides = $('.slider-item');
var slidesContainer = $('.slider-container');
var slideWidth = slidesContainer.outerWidth() / sliderSettings.slidesToShow;

$(window).resize(function(){

	var slides = $('.slider-item');
	var slidesContainer = $('.slider-container');
	var slideWidth = slidesContainer.outerWidth() / sliderSettings.slidesToShow;

	slides.each(function(i, slideItem){
		$(slideItem).css({
			width: slideWidth,
			left: slideWidth * i
		});
	});

}).resize()

$('.next').on('click', moveRight);
$('.prev').on('click', moveLeft);

function moveLeft(){
	if(sliderSettings.infinite){
		var last = $('.slider-item').last();
		if(last.position().left < slidesContainer.outerWidth()){
			$('.slider-item').first().css('left', slidesContainer.outerWidth()).appendTo(slidesContainer)
		}
	}
	else{
		var last = $('.slider-item').last();
		if(last.position().left < slidesContainer.outerWidth()){
			return false;
		}
	}

	slides.each(function(i, slide){
		$(slide).animate({
			left: "-="+slideWidth
		}, 1000);
	});
}

function moveRight(){
	if(sliderSettings.infinite){
		var first = $('.slider-item').first();
		if(first.position().left >= 0){
			$('.slider-item').last().css('left', -slideWidth).prependTo(slidesContainer)
		}
	}
	else{
		var first = $('.slider-item').first();
		if(first.position().left >= 0){
			return false;
		}
	}

	slides.each(function(i, slide){
		$(slide).animate({
			left: "+="+slideWidth
		}, 1000);
	});
}
/*-------------my slider-----------------*/


$(document).ready(function(){

	//Hidden menu
	$('.menu, #nav-hidden a').click(function(){
		if( $('#nav-hidden').is(':hidden')){
			 $('#nav-hidden').show();
		} else{
			$('#nav-hidden').hide();
		}
	});

	//Scroll Page

	 $("a[rel='m_PageScroll2id']").mPageScroll2id();



	 //TO-top

    $('.to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    }).scroolly([
        {
            alias: 'hidden',
          //from: 'doc-top',
            to: 'doc-top + 100vp',
            css: {
                opacity: '0',
                bottom: '-100px'
            }
        },
        {
            alias: 'shown',
            from: 'doc-top + 100vp',
            to: 'doc-bottom',
            css: {
                opacity: '1',
                bottom: '30px'
            }
        }
    ]);
        
});