const { createInstance, checkStatus } = require('../scripts/execute-scripts');

const checkInstanceStatus = () => {
	return checkStatus();
};

const getInstance = (req = Request, res = Response) => {
	res.status(200).send({
		ip: '172.17.0.1',
		status: checkStatus(),
	});
};

const postInstance = () => {
	createInstance();
};

module.exports = {
	checkInstanceStatus,
	getInstance,
	postInstance,
};
