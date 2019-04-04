/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);








//close the mobile nav menu after clicking an option
$(document).ready(function(){
	$('.navbar-nav>li>a').on('click', function(){
    		$('.navbar-collapse').collapse('hide');
	});


//laptop nav menu for services, dropdown on hover
//https://stackoverflow.com/questions/42183672/how-to-implement-a-navbar-dropdown-hover-in-bootstrap-v4
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 100 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);



});




$(document).ready(function(){
    //scroll to top of page
    var $navbar = $("#navbar");

    if ($navbar.length) {
        y_pos = $navbar.offset().top,
        height = $navbar.height();


    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

};
});




// Add smooth scrolling to all links
$(document).ready(function(){
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      //event.preventDefault(); - prevents go to anchor from another page

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




$(function () {
  $.scrollUp({
    scrollImg: {
                active: true,
                type: 'background'
                },
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 600, // Animation in speed (ms)
    animationOutSpeed: 600, // Animation out speed (ms)
    scrollText: '', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF',
    animation: 'fade'
  });

    /* =========================================
     * filter
     *  =======================================*/

    $('#filter a').click(function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).parent('li').addClass('active');

        var categoryToFilter = $(this).attr('data-filter');

        $('.mywork-item').each(function () {

            if ($(this).data('category') === categoryToFilter || categoryToFilter === 'all') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });


    /* =========================================
     * gallery functionality
     *  =======================================*/
    $('.mywork a').on('click', function (e) {

        e.preventDefault();

        var title = $(this).find('.mywork-title').text(),
            description = $(this).siblings('.mywork-description').html();

        $('#detail-title').text(title);
        $('#detail-content').html(description);

        var images = $(this).siblings('.mywork-description').data('images').split(',');
        if (images.length > 0) {
            sliderContent = '';
            for (var i = 0; i < images.length; ++i) {
                sliderContent = sliderContent + '<div class="item"><img src=' + images[i] + ' alt="" class="img-fluid"></div>';
            }
        } else {
            sliderContent = '';
        }


	/* go to top of gallery section when click an image in the gallery*/
	var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');



        openReference(sliderContent);

    });

    function openReference(sliderContent) {
        $('#detail').slideDown();
        $('#mywork-masonry').slideUp();


/*        if (sliderContent !== '') {

            var slider = $('#detail-slider');

            if (slider.hasClass('owl-loaded')) {
                slider.trigger('replace.owl.carousel', sliderContent);
            } else {
                slider.html(sliderContent);
                slider.owlCarousel({
                    nav: false,
                    dots: true,
                    items: 1
                });

            }
        }*/
    }



    function closeReference() {
        $('#mywork-masonry').slideDown();
        $('#detail').slideUp();
    }

    $('#filter button, #detail .close').on('click', function () {
        closeReference();
    });









    /* =========================================
     * services functionality
     *  =======================================*/
    $('.myServices a').on('click', function (e) {

        e.preventDefault();

        var title = $(this).find('.mywork-title2').text(),
            description = $(this).siblings('.mywork-description2').html();

        $('#detail-title2').text(title);
        $('#detail-content2').html(description);

        var images = $(this).siblings('.mywork-description2').data('images').split(',');
       
        sliderContent = '';


	/* go to top of services section when click a services button*/
	var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');


        openReference2(sliderContent);

    });

    function openReference2(sliderContent) {
        $('#detail2').slideDown();
        $('#mywork-masonry2').slideUp();


/*        if (sliderContent !== '') {

            var slider = $('#detail-slider2');

            if (slider.hasClass('owl-loaded')) {
                slider.trigger('replace.owl.carousel', sliderContent);
            } else {
                slider.html(sliderContent);
                slider.owlCarousel({
                    nav: false,
                    dots: true,
                    items: 1
                });

            }
        }*/
    }



    function closeReference2() {
        $('#mywork-masonry2').slideDown();
        $('#detail2').slideUp();
    }


    $('#detail2 .close').on('click', function () {
        closeReference2();
    });


    /* =========================================
     *  animations
     *  =======================================*/

    delayTime = 0;

    $('[data-animate]').waypoint(function (direction) {
        delayTime += 250;

        var element = $(this.element);

        $(this.element).delay(delayTime).queue(function (next) {
            element.toggleClass('animated');
            element.toggleClass(element.data('animate'));
            delayTime = 0;
            next();
        });

        this.destroy();

    }, {
        offset: '90%'
    });
    
    $('[data-animate-hover]').hover(function () {
        $(this).css({
            opacity: 1
        });
        $(this).addClass('animated');
        $(this).removeClass($(this).data('animate'));
        $(this).addClass($(this).data('animate-hover'));
    }, function () {
        $(this).removeClass('animated');
        $(this).removeClass($(this).data('animate-hover'));
    });




$('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    responsiveClass:true,
		    autoplay:9000,
		    rewind:true,
                    navSpeed:3000,
                    responsive:{
                        0:{
                            items:1,
                            nav:false,
			    smartSpeed: 1500,
		            autoplay:9000,
                            autoplayTimeout:7000,
                            autoHeight:true
                        },
                        400:{
                            items:1,
                            nav:false,
			    smartSpeed: 1500,
                            autoplay:9000,
                            autoplayTimeout:7000,
                            autoHeight:true
                        },
                        600:{
                            items:1,
                            nav:false,
			    smartSpeed: 1500,
	                    autoplay:9000,
                            autoplayTimeout:7000,
                            autoHeight:true
                        },
                        1000:{
                            items:1,
                            nav:false,
                            loop:true,
                            autoplay:9000,
                            autoplayTimeout:7000,  /*how long to show slide onscreen for*/
			    smartSpeed: 1500, /*transition speed*/
                            autoplayHoverPause:false,
			    slideSpeed: 9000,
                            autoHeight:false
                        }
                    }
                });
});




$(document).ready(function (){
  // Declare Carousel jquery object
  var owl = $('.owl-about-us-slide');	//"About Us" Slide

  // Carousel initialization
  owl.owlCarousel({	
  });


  // when drag slider to next slide, reset the timer
  owl.on('changed.owl.carousel', function(e) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay');
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");

      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  var round = 0;
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
    
      setAnimation ($elemsToanim, 'in');
  })
  
  owl.on('translated.owl.carousel', function(event) {
    //console.log (event.item.index, event.page.count);
    
      if (event.item.index == (event.page.count - 1))  {
        if (round < 1) {
          round++
        } else {
          owl.trigger('stop.owl.autoplay');
          var owlData = owl.data('owl.carousel');
          owlData.settings.autoplay = false; //don't know if both are necessary
          owlData.options.autoplay = false;
          owl.trigger('refresh.owl.carousel');
        }
      }
  });










// Declare Carousel jquery object
  var owl2 = $('.owl-reviews-slide');	//"Client Reviews" Slide

  // Carousel initialization
  owl2.owlCarousel({	
  });


  // when drag slider to next slide, reset the timer
  owl2.on('changed.owl.carousel', function(e) {
        owl2.trigger('stop.owl.autoplay');
        owl2.trigger('play.owl.autoplay');
  });



// Fired before current slide change
  owl2.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl2).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");

      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  var round = 0;
  owl2.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl2).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
    
      setAnimation ($elemsToanim, 'in');
  })
  
  owl2.on('translated.owl.carousel', function(event) {
    
      if (event.item.index == (event.page.count - 1))  {
        if (round < 1) {
          round++
        } else {
          owl2.trigger('stop.owl.autoplay');
          var owlData = owl2.data('owl.carousel');
          owlData.settings.autoplay = false; //don't know if both are necessary
          owlData.options.autoplay = false;
          owl2.trigger('refresh.owl.carousel');
        }
      }
  });




});



