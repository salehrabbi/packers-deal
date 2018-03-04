jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
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
