const { exec } = require('child_process');

const createInstance = () => {
	exec(`bash ${__dirname}/create-instance.sh`, (error, stdout, stderr) => {
		if (error) throw error;
		if (stderr) {
			console.log('Error al ejecutar bash');
			console.log(stderr);
		}

		console.log(stdout);
	});
};

module.exports = {
	createInstance,
};
