export const getChats = async () => {
	try {
		const response = await fetch('http://localhost:8000/chat');
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error sending request:', error);
	}
};
