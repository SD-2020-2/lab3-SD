const express = require('express');
const router = express.Router();

const instanceCtrl = require('./instance-controller');

router.get('/', (req, res) => {
	res.send('<h1>Router working !</h1>');
});

// Instancias
router.route('/instance').get(instanceCtrl.getInstance);

module.exports = router;
