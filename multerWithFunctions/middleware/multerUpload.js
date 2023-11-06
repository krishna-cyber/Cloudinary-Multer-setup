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

// upload using functions instead of objects

function singleUpload(req, res, next) {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    next();
  });
}

//multiple file upload

function multipleUpload(req, res, next) {
  upload.array("images", 3)(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    next();
  });
}

module.exports = { singleUpload, multipleUpload };
