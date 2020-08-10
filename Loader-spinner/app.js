const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const request = require("request-promise");

const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var tableData = "";
var result = "";
const firstUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Anthony%20Martial";
const secondUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Cristiano%20Ronaldo";
const thirdUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Lionel_Messi";

const urls = [
  "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Anthony%20Martial",
  "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Cristiano%20Ronaldo",
  "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Lionel_Messi"
]

const ua = "CoolToolName/0.0 (https://example.org/CoolTool/; CoolTool@example.org) UsedBaseLibrary/0.0";
// const url =  "https://en.wikipedia.org/w/api.php?format=json";

// (async function main() {
  //   try {
  //     urls.forEach(async (url) => {
  //       try {
  //         result = await request({
  //           url,
  //           method: "GET",
  //           headers: {
  //             'User-Agent': ua
  //           }
  //         });
  //         console.log("done", url);
  //
  //
  //
  //
  //       } catch (e) {
  //         console.log(e.message);
  //       }
  //     });
  //     console.log("done the loop");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // })();


        app.get("/", function(req, res) {

          (async function main() {
            try {

              // request.setHeaderData(200, { 'Content-Type': 'text/plain'});

              urls.forEach(async (url) => {
                try {
                  result = await request({
                    url,
                    method: "GET",
                    headers: {
                      'User-Agent': ua
                    }
                  });
                  console.log("done", url);
                  var jsonDATA = JSON.parse(result).parse.title;
                  // var jsonText = jsonDATA.title;
                  //
                  console.log(jsonDATA);
                  console.log("here");

                  res.write(jsonDATA);
                  res.end(jsonDATA);
                  res.send(jsonDATA);
                  // res.render("index", {
                  //   tableData: jsonDATA,
                  // });


                } catch (e) {
                  console.log(e.message);
                }
              });
              console.log("done the loop");
            } catch (e) {
              console.log(e.message);
            }
          })();
          // The whole response has been received. Print out the result.

          // console.log(result);
          // var jsonDATA = JSON.parse(result).parse.title;
          // // var jsonText = jsonDATA.title;
          // //
          // console.log(jsonDATA);
          // console.log("here");

          // res.render("index", {
          //   tableData: tableData,
          // });
        });





app.listen(3000, () => console.log('Example app listening on port 3000!'));
