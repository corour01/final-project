console.log('map.js loaded')

// document.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhoAM9l_WcD3Y_fStvMX_ZTpRokLa-Y9o"



$(function(){
  function initialize() {
      var mapOptions = {
        center: { lat: 40.8, lng: -73.9},
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.8, -73.9),
      map: map,
      icon: "http://d32ogoqmya1dw8.cloudfront.net/images/eyesinthesky2/week2/movie_icon.v2.png"
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});