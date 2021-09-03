const audioFilesModel = require('../models/audioFilesModels');

class audioFilesController {
    static async getFiles(req, res) {
         const files = await audioFilesModel.getFile();
         res.send(files);

    }
}

module.exports = audioFilesController;

