/** @format */

const express = require("express");
const upload = require("./middleware/multerUpload");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("File uploaded");
});

app.on("error", (err) => {
  console.error(err);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
