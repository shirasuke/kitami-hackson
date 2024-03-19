export const putMarker = (latitude, longitude, map: google.maps.Map) => {
	const markerPosition = new google.maps.LatLng(42, 143);

	const marker = new google.maps.Marker({
		position: markerPosition
		//icon: markerSymbol(position.iri)
	});

	if (map === null) return marker;

	const infowindow = new google.maps.InfoWindow({
		content: 'data',
		maxWidth: 235
	});

	map.addListener('click', () => {
		infowindow.close();
	});

	marker.addListener('click', () => {
		const latitude = marker.getPosition();
		if (latitude !== undefined && latitude !== null) {
			map.panTo(latitude);
		}
		scrollTo(0, 250);
		map.setZoom(20);

		infowindow.open({
			anchor: marker,
			map,
			shouldFocus: false
		});
	});
	marker.setMap(map);
	return marker;
};
