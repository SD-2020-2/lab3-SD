const axios = require('axios');
const serverIP = '172.17.0.1';

const getUsers = (req = Request, res = Response) => {
	axios.get(`http://${serverIP}:4000/users`).then((response) => {
		res.status(200).send(response.data);
	});
};

const postUser = (req = Request, res = Response) => {
	let newUser = req.body;

	axios
		.post(`http://${serverIP}:4000/users`, newUser)
		.then((response) => {
			res.sendStatus(200);
		})
		.catch((error) => {
			res.sendStatus(300);
			console.log('error en post usuario');
		});
};

module.exports = {
	getUsers,
	postUser,
};
