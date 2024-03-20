export const getSurvey = async () => {
	try {
		const response = await fetch('http://localhost:8000/snow');
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error sending request:', error);
	}
};
