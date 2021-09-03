const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./afdb.db');

//Connection to the database

class audioFilesModels {
    static getFile() {
        let files = [];
        let query = 'SELECT * FROM WORKS LIMIT 150';
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
        console.log(files);
        return files;
        })
    }
}

module.exports = audioFilesModels;