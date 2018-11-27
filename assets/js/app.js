// $(document).on('turbolinks:load', function() {

// 1. Foundation
// --------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';

Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';

Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.off('scroll');
$window.on('scroll', function() {
    var scrollTop = $window.scrollTop();
    if (scrollTop < 0) scrollTop = 0;
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});


var carousel = document.querySelector('.index__gallery');

$('.index__gallery').flickity({
  // options
//   contain: true,
//   setGallerySize: false,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
//   autoPlay: true,
/*
  initialIndex: Math.floor( Math.random() * carousel.children.length ),
  arrowShape: 'M93,44.7v10.6H27.6l29.9,30.2L50,93L7,50L50,7l7.5,7.5L27.6,44.7L93,44.7L93,44.7z'
*/
});

$('#video-gallery').lightGallery({
    selector: '.excerpt',
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        autoplay: 0,
        title : 0,
        byline : 0,
        portrait : 0,
        color : 'FFFFFF'     
    }
});

/*

});
*/