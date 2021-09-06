const audioFilesModel = require('../models/audioFilesModels');

class audioFilesController {
    static async getFiles(req, res) {
         const files = await audioFilesModel.getFile();
         res.send(files);
    }
    static async getFilesById(req, res) {
        const {id} = req.params;
        const track = await audioFilesModel.getFileById(id);
        res.send(track)
    }
    static async getFilesByTag(req, res) {
        const {tag} = req.params;
        const tracks = await audioFilesModel.getFilesByTag(tag)
        res.send(tracks)
    }
}

module.exports = audioFilesController;

