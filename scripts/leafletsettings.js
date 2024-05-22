// Creates map options
var mapOptions = {
center: [-34.4346, 147.5225],
zoom: 13
}

// Creates a map object
var map = new L.map('map', mapOptions);

// Creates a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adds layer to the map
map.addLayer(layer);

var marker = L.marker([-34.42684, 147.51812]).addTo(map);

marker.bindPopup("<b>ADRIOT Technology</b><br>32 Tenefts St, Temora NSW").openPopup();