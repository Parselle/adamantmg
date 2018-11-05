'use strict';

export default function initMap() {
  const location = {lat: 55.629320, lng: 37.621216};
  const mapOptions = {
    center: new google.maps.LatLng(location),
    zoom: 16,
    disableDefaultUI: true
  };

  const map = new google.maps.Map(document.querySelector('.js-map'), mapOptions);
  map.panBy(-7, -29);

  const markerImage = new google.maps.MarkerImage(
    'img/contacts/map-adamant.svg',
    new google.maps.Size(114, 42)
  );

  new google.maps.Marker({
    position: location,
    map: map,
    icon: markerImage
  });

  window.addEventListener('resize', () => {
    map.setCenter(location);
    map.setZoom(16);
    map.panBy(-7, -29);
  });
}
