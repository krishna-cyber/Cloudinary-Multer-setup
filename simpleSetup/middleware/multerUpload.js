/** @format */

const multer = require("multer");
const path = require("path"); // path is a core module of Node.js and does not need to be installed

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./uploads")); // __dirname is a global variable that contains the absolute path of the current directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload; // export the upload object to be used in server.js
