const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3073;

var n=0;

app.get('/:namespace/:keyname', (req, res) => {
    var nameSpace = req.params.namespace;
    var keyName = req.params.keyname;
    /*fs.readFile("./main.json", "utf8", (err, data) => {
        res.end(data);
    });*/
    res.end(`${n}`);
    n++;
});

app.listen(port, () => {
    console.log(`App listenting at ${port}`)
});