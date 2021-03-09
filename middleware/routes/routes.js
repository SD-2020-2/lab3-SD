const express = require('express');
const router = express.Router();

const instanceCtrl = require('./instance-controller');
const userCtrl = require('./user-controller');

// Instancias
router.route('/instance').get(instanceCtrl.getInstance);
router.route('/instance').post(instanceCtrl.postInstance);

// Usuarios
router.route('/users').get(userCtrl.getUsers);
router.route('/users').post(userCtrl.postUser);

module.exports = router;
