const audioFilesModel = require('../models/audioFilesModels');

class audioFilesController {
    static async getFiles(req, res) {
         const x = await audioFilesModel.getFile();
         res.send(x);

    }
}

module.exports = audioFilesController;

