/** @format */

const express = require("express");
const { singleUpload, multipleUpload } = require("./middleware/multerUpload");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Image is the name of the upload filed in the form

app.post("/upload", singleUpload, (req, res) => {
  res.send("File uploaded");
});

//route for multiple files upload and count is 3 in this case
app.post("/uploadMultiple", multipleUpload, (req, res) => {
  res.send("Multiple files uploaded");
});

app.on("error", (err) => {
  console.error(err);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
