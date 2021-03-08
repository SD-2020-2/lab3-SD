const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/routes'));
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Middleware listening on port: ${port}`);
});
