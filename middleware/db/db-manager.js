const { execSync } = require('child_process');

const backUpdatabase = () => {
	execSync('mongodump', (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
	});
};

const restoreDB = () => {
	execSync('mongorestore -h 127.0.0.1:27017 -d namesAux ../middleware/dump/names', (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
};

module.exports = {
	backUpdatabase,
	restoreDB,
};
