const express = require('express');
const app = express();
const exec = require('child_process').exec;
const port = 2000;

setInterval(() => {
	exec('bash watchmv.sh', (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		} else {
			console.log('archivo creado jaja');
		}
	});
	readLastLines.read('asd.txt', 20).then((lines) => {
		let data = lines.split('\n');
		for (var i = 0; i < data.length; i++) {
			if (data[i].includes('Servidor')) {
				if (data[i + 1].includes('Funcionando') == false) {
					serverAStatus = 'FAIL';
					listaServidoresStatus[counter] = serverAStatus;
					counter++;
					i++;
				} else {
					serverAStatus = 'OK';
					listaServidoresStatus[counter] = serverAStatus;
					counter++;
					i++;
				}
			}
			var counAux = 0;
			for (let i = 0; i < listaServidores.length; i++) {
				if (listaServidores[i] != undefined) {
					counAux++;
				}
			}
			if (counter >= counAux) {
				counter = 0;
			}
			showListaServer();
		}
	});
}, 5000);


app.listen(port, () => {
	console.log(`App listening in the port: ${port}`);
});