const express = require("express");
const post_route = express();

const bodyParser = require("body-parser");
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const path = require("path");

post_route.use(express.static(path.static("public")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/uploads"),
      function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      }
    );
  },
  filename: function (req, file, cb) {
    Date.now() + "-" + file.originalname;
    cb(null, name, function (error, success) {});
  },
});

const upload = multer({ storage: storage });

post_route.post("/create-post");

post_route.post("/create-post");
module.exports = post_route;
