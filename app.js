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

    // Create a marker with popup and add it to the map
  var marker2 = L.marker([-23.52026413037824, -46.83670586136634]).addTo(map);
  marker2.bindPopup("Amada turma de DMD, aqui é o bom prato").openPopup();

});
