import type { SurveyUnit } from '../type';
import { addMarker } from './addMarker';

export const putMarker = (position, map: google.maps.Map) => {
	console.log(position);
	const markerPosition = new google.maps.LatLng(position[0], position[1]);

	const marker = new google.maps.Marker({
		position: markerPosition
		//icon: markerSymbol(position.iri)
	});

	if (map === null) return marker;

	const infowindow = new google.maps.InfoWindow({
		content: 'data',
		maxWidth: 235
	});

	map.addListener('click', (event: google.maps.MapMouseEvent) => {
		infowindow.close();
		addMarker(map, event.latLng!);
	});

	marker.addListener('click', () => {
		const latitude = marker.getPosition();
		if (latitude !== undefined && latitude !== null) {
			map.panTo(latitude);
		}

		//map.setZoom(20);

		infowindow.open({
			anchor: marker,
			map,
			shouldFocus: false
		});
	});
	marker.setMap(map);
	return marker;
};
