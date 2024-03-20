//import type { IriSurveyUnit, IriSurvey } from '@/api/googleMap/type';

import type { SurveyUnit } from './type';

let samplKitamiSurveys: SurveyUnit[] = [];
export const mock = (): [] => {
	samplKitamiSurveys = [];
	//const v = getKitamiSampleSurveys();
	let defaultLatitude = 43.80300914079373;
	let defaultLongitude = 143.89450754603405;
	let id = '0';

	for (let i = 0; i < 50; i++) {
		const sampleData = {
			id: id,
			latitude: defaultLatitude,
			longitude: defaultLongitude,
			takenDate: '2021-11-21'
		};
		id = id + 1;
		defaultLatitude = defaultLatitude + 0.0001;
		defaultLongitude = defaultLongitude + Math.floor(Math.random() * 9) / 10000;
		samplKitamiSurveys.push(sampleData);
	}

	// const sample: SurveyUnit[] = [
	// 	{
	// 		id: '1',
	// 		latitude: v.,
	//     longitude:,
	// 		takenDate: '2022-5-04'
	// 	}
	// 	// {
	// 	// 	id: '2',
	// 	// 	places: vs,
	// 	// 	takenDate: '2023-5-05'
	// 	// }
	// ];
	// return sample;
};
