const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res)=>{
    res.send("Llego xD");
});

app.listen(port, () => {
	console.log(`App listening in the port: ${port}`);
});