var labels = 0;
var google;
// var labelIndex = 0;

function initialize() {
	var bangalore = { lat: 37.400133, lng: 127.119311 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: bangalore,
	});

	// This event listener calls addMarker() when the map is clicked.
	google.maps.event.addListener(map, 'click', function(event) {
		addMarker(event.latLng, map);
	});

	// Add a marker at the center of the map.
	addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
	// Add the marker at the clicked location, and add the next-available label
	// from the array of alphabetical characters.
	/* eslint-disable */
	var marker = new google.maps.Marker({
		position: location,
		label: (labels++).toString(),
		map: map,
	});
	/* eslint-enable */
}

google.maps.event.addDomListener(window, 'load', initialize);