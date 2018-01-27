var map, infoWindows, pos

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function (position){
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    initMap()
  })
}else {
  alert('Tu navegador no es compatible con la geolocalización')
}

function initMap(){
  var mapCOntainer = document.getElementById('map')
  var config={
    center: {lat: -34.397, lng: 150.644},
    zoom: 5
  }
  map=new google.maps.Map(mapCOntainer, config)
  infoWindows = new google.maps.InfoWindow({map: map})
}
var button = document.getElementById("btn-geo")

button.addEventListener("click", function(){
  alert('Se buscará su ubicacion en el mapa')
  map.setCenter(pos)
  map.setZoom(15)
  infoWindows.setPosition(pos)
  infoWindows.setContent('Ubicación encontrada')
})
