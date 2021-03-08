const getInstance = (req = Request, res = Response) => {
	res.send('Instancia ...');
};

const postInstance = (req = Request, res = Response) => {};

module.exports = {
	getInstance,
	postInstance,
};
