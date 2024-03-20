import AddMarkerContent from '../../shared/addMarkerContent.svelte';
import { backfaceFixed } from '../../shared/modal/backFaceFixed';
import { uploadLatitude, uploadLongitude } from '../store';
import Modal from '../../component/modal/index.svelte';
import { openModal } from 'svelte-modals';

const handleOpen = () => {
	backfaceFixed(true);
	openModal(Modal);
};
export const addMarker = (
	map: google.maps.Map,
	position: google.maps.LatLng | google.maps.LatLngLiteral
) => {
	const createMarker = new google.maps.Marker({
		position,
		map
	});

	// const data = `
	// <p>この地点を登録しますか？</p>
	// <button class="button" onClick=${handleUpload(position)}>登録する</button>
	// `;
	// const infowindow = new google.maps.InfoWindow({
	// 	content: data,
	// 	maxWidth: 235
	// });
	// map.addListener('click', () => {
	// 	infowindow.close();
	// });
	createMarker.addListener('click', () => {
		const latitude = createMarker.getPosition();
		console.log(latitude?.lat());
		uploadLatitude.set(latitude?.lat());
		uploadLongitude.set(latitude?.lng());
		if (latitude !== undefined && latitude !== null) {
			map.panTo(latitude);
		}

		//map.setZoom(20);
		handleOpen();
		// infowindow.open({
		// 	anchor: createMarker,
		// 	map,
		// 	shouldFocus: false
		// });
	});
	createMarker.setMap(map);
};
