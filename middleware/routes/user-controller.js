const axios = require('axios');
const { response } = require('express');
const serverIP = '172.17.0.1';

const getUsers = (req = Request, res = Response) => {
	let sendResponse = [
		{
			id: 123,
			name: 'akdnaa',
		},
		{
			id: 234,
			name: 'maria',
		},
		{
			id: 564,
			name: 'hola',
		},
	];

	// axios
	// 	.get('/users')
	// 	.then((response) => response.json())
	// 	.then((converted) => console.log(converted));

	res.status(200).send(sendResponse);
};

const postUser = (req = Request, res = Response) => {
	// axios
	// 	.post(`http://${serverIP}:2000/users`)
	// 	.then((response) => {
	// 		res.send(response.data);
	// 	})
	// 	.catch((error) => console.log('error en post usuario'));

	res.sendStatus(200);
};

module.exports = {
	getUsers,
	postUser,
};
