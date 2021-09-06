const {Router} = require('express');
const fileRoutes = Router();

const audioFilesController = require('../controllers/audioFilesController')

fileRoutes.get('/', audioFilesController.getFiles);

//fileRoutes.get('/:id', audioFilesController.getFilesById);

fileRoutes.get('/:tag', audioFilesController.getFilesByTag);


module.exports = fileRoutes;