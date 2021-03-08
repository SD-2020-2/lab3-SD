const { createInstance } = require('../scripts/execute-scripts');

const getInstance = (req = Request, res = Response) => {
	res.status(200).send('Instancia ...');
};

const postInstance = (req = Request, res = Response) => {
	createInstance();
	res.sendStatus(200);
};

module.exports = {
	getInstance,
	postInstance,
};
