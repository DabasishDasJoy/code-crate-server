const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Code Crate server is running!");
});

app.listen(port, () => {
  console.log(`Code Crate is listening on port ${port}`);
});
