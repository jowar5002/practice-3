const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

const dom = new JSDOM();
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  console.log(" get in root directory");
  res.render("index")
});

var dropdownYear;

app.post("/", function(req, res) {
  console.log(" Post in root");
  console.log(req.body);
  console.log(req.body.Courses);

dropdownYear = req.body.Courses;
  res.redirect("page2");
});

app.get("/page2", function(req, res) {

  console.log("get from page2");

  res.render("page2", {
    wcupyear: dropdownYear,
  });
})

app.listen(4000, function() {
  console.log("post is listening at 4000");
});
