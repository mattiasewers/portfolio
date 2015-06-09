

jQuery(document).ready(function($){

//open/close primary navigation
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-primary-nav-trigger, .cd-primary-nav li').bind("click touchstart", function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			if($('body').hasClass('lightbox-is-open')) $('body').removeClass('lightbox-is-open');
			$('.cd-primary-nav-trigger span').toggleClass('is-clicked');

			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	$('.view-more-click, .icon-wrapper').bind("click touchstart", function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('lightbox-is-open');
			if($('body').hasClass('navigation-is-open')) $('body').removeClass('navigation-is-open');
			if($('.cd-primary-nav-trigger span').hasClass('is-clicked')) $('.cd-primary-nav-trigger span').removeClass('is-clicked');

			var pic_id = $(this).attr('id');

			$('.navigation-wrapper div[id]').each(function(){

				if( pic_id == this.id  )
				{

					var h1_id = this.id;

					$('#'+h1_id).addClass("show")
					

				}
				else{
					
					$('#'+this.id).removeClass("show")
					$('#'+this.id).addClass('hide')

				}

			});


			
			

			$('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	if (window.matchMedia('(max-width: 768px)').matches)
	{
    	$("i, div").removeClass("wow");
	}

});


// Navigation Scroll Effect
$('.down-arrow, .cd-primary-nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 79;
    var target = $(id).offset().top - offset;
    $('html, body').delay(700).animate({
        scrollTop: target
    }, 800);
    event.preventDefault();
});

// Parallax Scene
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// WOW.js
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
  }
);
wow.init();

//waypoint
var inview = new Waypoint.Inview({
  element: $('.splash-page')[0],
  enter: function(direction) {
    $(".logo").addClass("fadeOutDown");
    $(".logo").removeClass("fadeInUp");
    $(".content-filter").removeClass("is-fixed");
  },
  offset: 205,	
  exited: function(direction) {
    $(".logo").removeClass("fadeOutDown");
    $(".logo").addClass("fadeInUp");
    $(".content-filter").addClass("is-fixed");
  },
  offset: 205 
});


	(function() {
				/* Mockup responsiveness */

				var body = docElem = window.document.documentElement,
					wrap = document.getElementById( 'wrap' ),
					mockup = wrap.querySelector( '.transform-container' ),
					mockupWidth = mockup.offsetWidth;

				scaleMockup();

				function scaleMockup() {
					var wrapWidth = wrap.offsetWidth,
						val = wrapWidth / mockupWidth;

					mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
				}
				
				window.addEventListener( 'resize', resizeHandler );

				function resizeHandler() {
					function delayed() {
						resize();
						resizeTimeout = null;
					}
					if ( typeof resizeTimeout != 'undefined' ) {
						clearTimeout( resizeTimeout );
					}
					resizeTimeout = setTimeout( delayed, 50 );
				}

				function resize() {
					scaleMockup();
				}
			})();

