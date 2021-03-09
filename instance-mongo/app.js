const express = require('express');
const app = express();
const port = 2000;
const clientMongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var exec = require('child_process').exec;
// Nombre de bd
const dbName = 'names';
let array = [];

app.post('/users', (req, res) => {
	clientMongo.connect(url, { useUnifiedTopology: true }, function (err, db) {
		var dbo = db.db('names');
		const names = dbo.collection('names');
		// create a document to be inserted
		const doc = { ID: '1024453232', name: 'Federico xD' };
		const result = names.insertOne(doc);
		console.log('fue agregado con exito el documento');
	});

	exec('mongodump', (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
	});
});
// Conexión URL (estas corriendo en local :D)
function getConnect(infoName) {
	clientMongo.connect(
		url,
		{
			useUnifiedTopology: true,
		},
		function (err, db) {
			if (err) throw err;
			var dbo = db.db(infoName);
			dbo
				.collection('names')
				.find({})
				.toArray(function (err, result) {
					if (err) throw err;
					array = result;
					db.close();
				});
		}
	);
}
app.get('/', (req, res) => {
	res.send('Llego xD');
});

// Conectamos al servidor
app.get('/users', (req, res) => {
	res.send('Llego xD');
	for (let i = 0; i < array.length; i++) {
		if (array[i] != undefined) {
			console.log(array[i].NOMBRE);
		}
	}
	//copia de la base de datos a archivos, saca información
	//namesAux sera el nombre de la nueva base de datos
	//
	
	getConnect('names');
});

app.get('/restore', (req, res) => {
	exec('mongorestore -h 127.0.0.1:27017 -d namesAux ../instance-mongo/dump/names', (err, stdout, stderr) => {
		if (err) {
			console.error(`exec error: ${err}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

app.listen(port, () => {
	console.log(`App listening in the port: ${port}`);
});
