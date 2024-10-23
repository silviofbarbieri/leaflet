// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.516357107383552, -46.835143207955774], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.516357107383552, -46.835143207955774]).addTo(map);
  marker.bindPopup("Amada turma de DMD, você está aqui, olha que legal!").openPopup();

var greenIcon = L.icon({
    iconUrl: 'https://t3.ftcdn.net/jpg/02/73/16/24/240_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg',
    shadowUrl: 'https://t3.ftcdn.net/jpg/02/73/16/24/240_F_273162497_ShAAB1TH0vhM4UUWbhBuao8jtGBDubwD.jpg',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  
    // Create a marker with popup and add it to the map
  var marker2 = L.marker([-23.52026413037824, -46.83670586136634]), {icon: greenIcon}.addTo(map);
  marker2.bindPopup("Amada turma de DMD, aqui é o bom prato").openPopup();

});
