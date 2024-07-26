
var flkty = new Flickity( '.carousel', {
    imagesLoaded: true,
    percentPosition: false
  });
  
  var caption = document.querySelector('.caption');
  
  flkty.on( 'select', function() {
    // set image caption using img's alt
    caption.textContent = flkty.selectedElement.alt;
  });

  

  