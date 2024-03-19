import { loader } from '../googleMap/loader';

type Args = {
	centerLatitude: number;
	centerLongitude: number;
};

export const createMap = async ({ centerLatitude, centerLongitude }: Args) => {
	const element = document.getElementById('map');
	if (element === null) throw new Error('element is null');

	const { Map } = await loader.importLibrary('maps');
	return new Map(element, {
		center: {
			lat: centerLatitude,
			lng: centerLongitude
		},
		zoom: 12
	});
};
