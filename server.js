const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const path = require("path")

const app = express();

const audioFileRoutes = require('./api/routes/audioFileRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send({message: "Website von Benjamin Vogels"});
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log("Server is running on port 8081")
});

app.use(cors())
app.use('/api/v1/audioFiles', audioFileRoutes);