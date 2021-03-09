const { exec, execSync } = require('child_process');

const createInstance = () => {
	let creatingStatus = execSync(`bash ${__dirname}/create-instance.sh`).toString();

	// execs(`bash ${__dirname}/create-instance.sh`, (error, stdout, stderr) => {
	// 	if (error) throw error;
	// 	if (stderr) {
	// 		console.log('Error al ejecutar bash');
	// 		console.log(stderr);
	// 	}
	//
	// 	console.log(stdout);
	// });

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
