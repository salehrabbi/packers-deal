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
    loop:true,
    margin:0,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1
        }
    }
})

