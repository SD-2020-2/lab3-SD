const express = require('express');
const router = express.Router();

const instanceCtrl = require('./instance-controller');

router.get('/', (req, res) => {
	res.status(200).send('<h1>Router working !</h1>');
});

// Instancias
router.route('/instance').get(instanceCtrl.getInstance);
router.route('/instance').post(instanceCtrl.postInstance);

module.exports = router;
