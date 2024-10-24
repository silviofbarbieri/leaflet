// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.516357107383552, -46.835143207955774], 7);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var greenIcon = L.icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20230514/original/pngtree-smile-dog-on-white-background-png-image_9160783.png',

    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.516357107383552, -46.835143207955774]).addTo(map);
  marker.bindPopup("Amada turma de DMD, você está aqui, onde há muitas possibilidades de crescimento !").openPopup();


  
    // Create a marker with popup and add it to the map
  var marker2 = L.marker([-23.52026413037824, -46.83670586136634], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Amada turma de DMD, eu me perdi aqui").openPopup();

var markersLayer = new L.LayerGroup();
map.addControl( new L.Control.ListMarkers({layer: markersLayer}) );
  
var layers = L.LayerGroup(), //layers contains all markers..
    contained = [];          //makers in map boundingbox

layers.eachLayer(function(l) {
    if( l instanceof L.Marker && map.getBounds().contains(l.getLatLng()) )
        contained.push(l);
});


  
});
