const express = require('express');
const app = express();
const port = 3000;

const { checkInstanceStatus, postInstance } = require('./routes/instance-controller');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/routes'));
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Middleware listening on port: ${port}`);
});

setInterval(() => {
	console.log('... Monitoreo ...');
	let isOK = checkInstanceStatus();
	if (isOK) {
		console.log('Instancia OK ✔ 🔛', '\n');
		//crear copia db
	} else {
		console.log('Instancia caida !! ❌', '\n');
		console.log('Creando instancia auxiliar ...');
		postInstance();
	}
}, 5000);
