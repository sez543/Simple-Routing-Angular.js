const express = require("express");
var cors = require("cors");
const app = express();
const port = 1337;

app.use(cors());
app.use(express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
