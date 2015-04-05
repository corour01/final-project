console.log('map.js loaded')

var keyword;
var values;
var sceneList = []
var mapOptions = {
  center: { lat: 40.78, lng: -73.95},
  zoom: 12
};


$(function (){
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
  console.log('initialize has run')
  // $.ajax({
  //   url: '/scenes',
  //   method: 'GET',
  //   dataType: 'json',
  //   success: renderScenes
  // });
  $('#search').on('submit', function(e){
    e.preventDefault();
    
    values = {
      keyword: document.getElementById("search-picture-keyword").value
    }

    console.log(values)

    $(this).children('input').not('input[type=submit]').val('');
    $.ajax({

      url: '/scenes/search',
      method: 'POST',
      data: values,
      dataType: 'json',
      success: renderScenes
    })
  })
};
// setup search population


var renderScenes = function(scenes){
  scenes.forEach(function(scene){
    var sceneinfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + scene.film + '</h1>'+
      '<div id="bodyContent"> Director: '+ scene.director + ' <a href="' + scene.director_imdb + '" target = "_blank">IMDB </a>' +
      '</div>'+
      '<div id="bodyContent"> Year: '+ scene.year + 
      '</div>'+
      '<div id="bodyContent"> Scene Location: '+ scene.client_loc + 
      '<div id="bodyContent"> More info on <a href="' + scene.imdb + '" target = "_blank"> IMDB </a>' +
      '</div>'+
      '</div>'+
      '</div>';
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(scene.latitude, scene.longitude),
      map: map,
      icon: "http://www.atleurasia.com/in/wp-content/uploads/2015/04/film-icon.png"
      });
    var infowindow = new google.maps.InfoWindow({
      content: sceneinfo
    });
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.open(map, marker);            
    });
    // google.maps.event.addListener(marker, 'mouseexit', function(){
    //   infowindow.close(map, marker);
    // });
  });
}