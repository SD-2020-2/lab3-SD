const { exec, execSync } = require('child_process');

const createInstance = () => {
	let creatingStatus = execSync(`bash ${__dirname}/create-instance.sh`).toString();

	return creatingStatus;
};

const checkStatus = () => {
	let containerStatus = execSync(`bash ${__dirname}/check-status.sh`).toString();

	return containerStatus.trim() == 'running' ? true : false;
};

module.exports = {
	createInstance,
	checkStatus,
};
