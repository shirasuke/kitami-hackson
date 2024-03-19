import { GOOGLE_API } from '../../const';
import { Loader } from '@googlemaps/js-api-loader';

export const loader = new Loader({
	apiKey: GOOGLE_API,
	version: 'weekly',
	libraries: ['places']
});
