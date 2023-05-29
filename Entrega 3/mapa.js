// Crear una instancia del mapa
var mapa = L.map('mapa').setView([6.247249, -75.569769], 10);

// Añadir una capa de mosaicos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(mapa);

// Crear un marcador y agregarlo al mapa
var marker = L.marker([40.4167, -3.70325]).addTo(mapa);

// Añadir un evento de clic al marcador
marker.on('click', function() {
  alert('Madrid es la capital de España.');
});

// Crear otro marcador y agregarlo al mapa
var marker2 = L.marker([41.3851, 2.1734]).addTo(mapa);

// Añadir un evento de clic al segundo marcador
marker2.on('click', function() {
  alert('Barcelona es la capital de Cataluña.');
});

var marker3 = L.marker([6.247249, -75.569769]).addTo(mapa);

marker3.on('click', function() {
  alert('Medellin es la capital de Antioquia.');
});

var marker4 = L.marker([6.165298, -75.619174]).addTo(mapa);

marker4.on('click', function() {
  alert('Casa de Wbeimar');
});