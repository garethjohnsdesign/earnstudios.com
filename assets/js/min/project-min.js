var carousel=document.querySelector(".index__gallery");$(".index__gallery").flickity({
// options
contain:!0,setGallerySize:!1,wrapAround:!0,autoPlay:!0,initialIndex:Math.floor(Math.random()*carousel.children.length),arrowShape:"M93,44.7v10.6H27.6l29.9,30.2L50,93L7,50L50,7l7.5,7.5L27.6,44.7L93,44.7L93,44.7z"});