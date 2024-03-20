export const sendMessage = async (userName: string, message: string) => {
	try {
		const requestBody = {
			user_name: userName,
			message: message
		};

		const response = await fetch('http://localhost:8000/chat/new_message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error sending request:', error);
	}
};
