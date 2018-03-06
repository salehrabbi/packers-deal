(function ($) {

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#myCarousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });





})(jQuery);


$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        console.log(scrollTop);
        $('.main-header').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.main-header').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});


$('body').addClass('preloader-active');

$(window).on('load', function () {
    $('.preloader').fadeOut();
    $('.preloader-spinner').delay(350).fadeOut('slow');
    $('body').removeClass('preloader-active');
});



jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

jQuery(function () {
    jQuery("a.play").YouTubePopUp({
        autoplay: 1
    }); // Disable autoplay
});

jQuery(document).ready(function () {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        enableZoom: false,
        selectedColor: '#2b95e6',
        hoverColor: '#2b95e6',
        backgroundColor: null,
        color: '#87c2ff',
        selectedRegions: ['CA', 'MX', 'AK', 'RU', 'UK', 'BD', 'PK', 'AU', 'BR', 'CN', 'SA'],
    });
});

$('.patner').hover(function () {
    $('.support').addClass('lightblue'); // add class when mouseover happen
}, function () {
    $('.support').removeClass('lightblue'); // remove class when mouseout happen
});
$('.operator').hover(function () {
    $('.support').addClass('blue'); // add class when mouseover happen
}, function () {
    $('.support').removeClass('blue'); // remove class when mouseout happen
});
$(".video-carosual .background .overlay").height($(".video").outerHeight(true));

$('.video-carosual').owlCarousel({
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    loop: true,
    margin: 0,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1
        }
    }
})

$('.client-review').owlCarousel({
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    loop: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
})
