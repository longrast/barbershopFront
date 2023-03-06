var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nb").style.top = "0";
  } else {
    document.getElementById("nb").style.top = "-14vh";
  }
  prevScrollpos = currentScrollPos;
}

ymaps.ready(init);

function init(){
  var map = new ymaps.Map('map-container', {
    center: [55.65, 37.43],
    zoom: 12,
    controls: ['zoomControl'],
    behaviours: ['drag']
  });
  var placemark1 = new ymaps.Placemark([55.65, 37.43], {
    hintContent: '<div class="map__hint1">55.65, 37.43</div>',
    balloonContent: 'KENT1'
  });
  var placemark2 = new ymaps.Placemark([55.67, 37.45], {
    hintContent: '<div class="map__hint2">56.65, 38.43</div>',
    balloonContent: 'KENT2'
  });
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  console.log("работает");
}
/*
ymaps3.ready.then(() => {
  // HTML-элемент.
  const moscow_map = new ymaps3.YMap(document.getElementById('#map-container'), {
    location: {
      center: [37.64, 55.76],
      zoom: 10
    }
  });
});*/