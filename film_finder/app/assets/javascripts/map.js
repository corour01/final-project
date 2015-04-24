console.log('map.js loaded')

var keyword;
var map;
var values;
var markerArray = [];
var mapStyle = [
  {
    "stylers": [
      {"visibility": "on"},
      {"saturation": -100},
      {"gamma": 0.54}
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "water",
    "stylers": [{"color": "#4d4955"}]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{"visibility": "simplified"}]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#ffffff"}]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [{"visibility": "simplified"}]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#ffffff"}]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{"gamma": 0.48}]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{"gamma": 7.18}]
  }
]


var mapOptions = {
  center: { lat: 40.78, lng: -73.95},
  zoom: 12
};

function removeMarkers(){
  for(i=0; i<markerArray.length; i++){
      markerArray[i].setMap(null);
  }
  markerArray = [];
}

// function sceneSearch(e){
//   e.preventDefault();
//   if (document.getElementById("search-scene-keyword").value == ""){
//     alert("Please enter a value")
//   }
//   else {
//     values = {
//       keyword: document.getElementById("search-scene-keyword").value
//     }

//     console.log(values)

//     $(this).children('input').not('input[type=submit]').val('');
//     $.ajax({
//       url: '/scenes/search',
//       method: 'POST',
//       data: values,
//       dataType: 'json',
//       success: renderScenes
//     });
//   }
// }


$(function (){
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    google.maps.event.addDomListener(window, 'load', initialize);
    map.setOptions({styles: mapStyle})
});

function initialize() {

// $('#search').on('submit', sceneSearch(e));

  $('#search').on('submit', function(e){
    e.preventDefault();
    
    values = {
      keyword: document.getElementById("search-scene-keyword").value
    }

    console.log(values)

    $(this).children('input').not('input[type=submit]').val('');
    $.ajax({
      url: '/scenes/search',
      method: 'POST',
      data: values,
      dataType: 'json',
      success: renderScenes
    });
  });
  $('#show-all').on('submit', function(e){
    e.preventDefault();
    
    values = {
      keyword: ""
    }

    console.log(values)

    $(this).children('input').not('input[type=submit]').val('');
    $.ajax({
      url: '/scenes/search',
      method: 'POST',
      data: values,
      dataType: 'json',
      success: renderScenes
    });
  });
  $('#hide-all').on('submit', function(e){
    e.preventDefault();
    removeMarkers();
  });
}

// setup search population


var renderScenes = function(scenes){
removeMarkers()
  // if (scenes.length == 0){alert("your search returned no results")}
  var infowindow = new google.maps.InfoWindow
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
    markerArray.push(marker)
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(sceneinfo);
      infowindow.open(map, this);
    });
    // google.maps.event.addListener(marker, 'mouseexit', function(){
    //   infowindow.close(map, marker);
    // });
  });
}






