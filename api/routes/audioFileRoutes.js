const {Router} = require('express');
const fileRoutes = Router();

const audioFilesController = require('../controllers/audioFilesController')

fileRoutes.get('/', audioFilesController.getFiles);

module.exports = fileRoutes;