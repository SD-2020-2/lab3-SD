const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/routes'));
app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Middleware listening on port: ${port}`);
});
