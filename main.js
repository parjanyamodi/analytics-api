const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3073;

var n = 0;
app.use(express.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/:namespace/:keyname", (req, res) => {
  var nameSpace = req.params.namespace;
  var keyName = req.params.keyname;
  /*fs.readFile("./main.json", "utf8", (err, data) => {
        res.end(data);
    });*/
  res.end(`{name:"${nameSpace}",key:"${keyName}",visits:"${n}"}`);
  n++;
});

app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, () => {
  console.log(`App listenting at ${port}`);
});
