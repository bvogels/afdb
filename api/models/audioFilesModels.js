const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./afdb.db');

//Connection to the database

class audioFilesModels {
    static getFile() {
        let files = [];
        let query = 'SELECT * FROM WORKS';
        return new Promise((resolve) => {
            db.all(query, [], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach(row => {
                    files.push(row);
                });
                resolve(files);
            })
            return files;
        })
    }

    static getFileById(trackId) {
        let track;
        let query = 'SELECT * FROM WORKS WHERE id = ?';
        return new Promise((resolve) => {
            db.get(query, [trackId], (err, row) => {
                if (err) {
                    throw err;
                } else {
                    track = row;
                }
                resolve(track);
            })
            return track;
        })
    }

    static getFilesByTag(tag) {
        let match = '%' + tag + '%';
        console.log("Tag:", match)
        let tracks = [];
        let query = 'SELECT * FROM WORKS WHERE tags LIKE ?';
        return new Promise((resolve) => {
            db.all(query, [match], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach(row => {
                    tracks.push(row);
                    });
                resolve(tracks);
                console.log(tracks[1].tags)
            })
            return tracks;
        })
    }
}

module.exports = audioFilesModels;
