const express = require('express');
const app = express();
const port = 2000;

const clientMongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

// Nombre de bd
const dbName = 'names';

// Conexión URL (estas corriendo en local :D)
let array = [];

clientMongo.connect(url, function (err, db) {
	if (err) throw err;
	var dbo = db.db('names');
	dbo
		.collection('names')
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			array = result;
			db.close();
		});
});

/**
 * Conectamos al servidor
 * retornamos la conexión con el nombre de la bd a usar
 */
app.get('/', (req, res) => {
	res.send('Llego xD');
	for (let i = 0; i < array.length; i++) {
		if (array[i] != undefined) {
			console.log(array[i].NOMBRE);
		}
	}
});

app.listen(port, () => {
	console.log(`App listening in the port: ${port}`);
});
