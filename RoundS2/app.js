const express = require("express");
const bodyParser = require("body-parser");

const allFunc = require(__dirname + "/allFunc.js");

const https = require("https");
const ejs = require("ejs");



// const DOMParser = require("dom-parser");

const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;

let app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(express.static('public'));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

// let str1 = "";
// var str2 = "";
// const jsonDATA = "";

var nickname1 = "";
var nickname2 = "";
var playingPosition1 = "";
var playingPosition2 = "";
var currentClub1 = "";
var currentClub2 = "";
var outprofileImage1 = "";
var outprofileImage2 = "";
var bday1 = "";
var bday2 = "";
var outprofileImage3 = "";
var bday3 = "";
var playingPosition3 = "";
var currentClub3 = "";
var nickname3 = "";

app.get("/", function(req, res) {

  // const url = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Cristiano%20Ronaldo";
    const firstUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Anthony%20Martial";
  const secondUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Cristiano%20Ronaldo";
  const thirdUrl = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Lionel_Messi";

  https.get(firstUrl, function(response) {
    https.get(firstUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var jsonDATA = JSON.parse(data).parse;
        var jsonText = jsonDATA.text;
        var str = JSON.stringify(jsonText);
        var str1 = str.replace(/\\n/g, '');

        var str2 = str1.replace(/\\"/g, '');

        const dom = new JSDOM(str2);

        bday1 = allFunc.getbday(dom);
        nickname1 = allFunc.getNickname(dom);
        playingPosition1 = allFunc.getplayingPosition(dom);
        // let birthPlace1 = allFunc.getbirthPlace(dom);
        currentClub1 = allFunc.getcurrentClub(dom);

        // console.log(nickname1 + "  " + playingPosition1 + "  " + currentClub1);

        let {
          tableData1,
          profileImage1
        } = allFunc.getImage(dom);
        console.log(profileImage1);
        outprofileImage1 = profileImage1;
        // let age1 = allFunc.getAge(dom);
        // let countryName1 = allFunc.getCountryName(dom);
        // let name1 = allFunc.getName(dom);
        // let jerseyNo1 = allFunc.getJurseyNo(dom);


        // res.render("index3", {
        //   FirstplayerDOB: bday1,
        //   FirstplayerImage: profileImage1,
        //   FirstplayerName: nickname1,
        //   FirstplayerCurrentTeam: currentClub1,
        //   FirstplayerPlayingPosition: playingPosition1,
        //
        // });
      });
    });
  });



  https.get(secondUrl, function(response) {
    https.get(secondUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var jsonDATA = JSON.parse(data).parse;
        var jsonText = jsonDATA.text;
        var str = JSON.stringify(jsonText);
        var str1 = str.replace(/\\n/g, '');

        var str2 = str1.replace(/\\"/g, '');

        const dom = new JSDOM(str2);

        // let bday2 = allFunc.getbday(dom);
        nickname2 = allFunc.getNickname(dom);
        playingPosition2 = allFunc.getplayingPosition(dom);
        // let birthPlace2 = allFunc.getbirthPlace(dom);
        currentClub2 = allFunc.getcurrentClub(dom);

        console.log(nickname2 + "  " + playingPosition2 + "  " + currentClub2);
        let {
          tableData2,
          profileImage2
        } = allFunc.getImage(dom);
        console.log(profileImage2);

        outprofileImage2 = profileImage2;
        // let age2 = allFunc.getAge(dom);
        // let countryName2 = allFunc.getCountryName(dom);
        // let name2 = allFunc.getName(dom);
        // let jerseyNo2 = allFunc.getJurseyNo(dom);

        // res.render("index3", {
        //   FirstplayerDOB: bday1,
        //   FirstplayerImage: profileImage1,
        //   FirstplayerName: nickname1,
        //   FirstplayerCurrentTeam: currentClub1,
        //   FirstplayerPlayingPosition: playingPosition1,
        //
        //   SecondplayerDOB: bday2,
        //   SecondplayerImage: profileImage2,
        //   SecondplayerName: nickname2,
        //   SecondplayerCurrentTeam: currentClub2,
        //   SecondplayerPlayingPosition: playingPosition2,
        //
        //
        // });
      });
    });
  });


  https.get(thirdUrl, function(response) {
    https.get(thirdUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var jsonDATA = JSON.parse(data).parse;
        var jsonText = jsonDATA.text;
        var str = JSON.stringify(jsonText);
        var str1 = str.replace(/\\n/g, '');

        var str2 = str1.replace(/\\"/g, '');

        const dom = new JSDOM(str2);

        // let bday2 = allFunc.getbday(dom);
        nickname3 = allFunc.getNickname(dom);
        playingPosition3 = allFunc.getplayingPosition(dom);
        // let birthPlace2 = allFunc.getbirthPlace(dom);
        currentClub3 = allFunc.getcurrentClub(dom);

        // console.log(nickname3 + "  " + playingPosition3 + "  " + currentClub3);
        let {
          tableData3,
          profileImage3
        } = allFunc.getImage(dom);

        console.log(profileImage3);
        outprofileImage3 = profileImage3;
        // let age2 = allFunc.getAge(dom);
        // let countryName2 = allFunc.getCountryName(dom);
        // let name2 = allFunc.getName(dom);
        // let jerseyNo2 = allFunc.getJurseyNo(dom);

        res.render("index3", {
          FirstplayerDOB: bday1,
          FirstplayerImage: outprofileImage1,
          FirstplayerName: nickname1,
          FirstplayerCurrentTeam: currentClub1,
          FirstplayerPlayingPosition: playingPosition1,

          SecondplayerDOB: bday2,
          SecondplayerImage: outprofileImage2,
          SecondplayerName: nickname2,
          SecondplayerCurrentTeam: currentClub2,
          SecondplayerPlayingPosition: playingPosition2,

          ThirdplayerDOB: bday3,
          ThirdplayerImage: outprofileImage3,
          ThirdplayerName: nickname3,
          ThirdplayerCurrentTeam: currentClub3,
          ThirdplayerPlayingPosition: playingPosition3,


        });
      });
    });
  });
  //   res.render("index3", {
  //     // FirstplayerDOB: bday1,
  //     FirstplayerImage: profileImage1,
  //     FirstplayerName: nickname1,
  //     FirstplayerCurrentTeam: currentClub1,
  //     FirstplayerPlayingPosition: playingPosition1,
  //     // SecondplayerDOB: bday2,
  //     SecondplayerImage: profileImage2,
  //     SecondplayerName: nickname2,
  //     SecondplayerCurrentTeam: currentClub2,
  //     SecondplayerPlayingPosition: playingPosition2,
  //
  // });
});


var wcupYear;


app.get("/profile", function(req, res) {
  res.render("profile.ejs");
});

// app.post("/", function(req, res) {
//   console.log(req.body);
//   // wcupYear = req.body.wcup;
//   res.render("wcup.ejs");
// });


app.post("/", function(req, res) {
  playerName = req.body.player;

  console.log(req.body);
  // const url = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Anthony%20Martial";
  const url1 = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Rivaldo";
  // const url = "https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Cristiano%20Ronaldo";

  // let passUrl = allFunc.getDom(url);


  https.get(url1, function(response) {
    https.get(url1, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        const jsonDATA = JSON.parse(data).parse;
        var jsonText = jsonDATA.text;

        var str = JSON.stringify(jsonText);
        str1 = str.replace(/\\n/g, '');

        // perfecto
        str2 = str1.replace(/\\"/g, '');

        const dom1 = new JSDOM(str2);

        let bday = allFunc.getbday(dom1);
        let nickname = allFunc.getNickname(dom1);
        let playingPosition = allFunc.getplayingPosition(dom1);
        let birthPlace = allFunc.getbirthPlace(dom1);
        let currentClub = allFunc.getcurrentClub(dom1);
        let {
          tableData,
          profileImage
        } = allFunc.getImage(dom1);
        let age = allFunc.getAge(dom1);
        let countryName = allFunc.getCountryName(dom1);
        let name = allFunc.getName(dom1);
        let jerseyNo = allFunc.getJurseyNo(dom1);

        res.render("profile", {
          // playerProf: tableData,

          playerProf: tableData,
          // playerName: nickname,
          // PlayerImage: profileImage1,
          // playerDOB: bday,
          // playerAge: age,
          // playerCurrentTeam: currentClub
          // playerPlaceOfBirth: countryName,
          // playerPlayingPosition: playingPosition,
          // playerJurseyNo: num,
          // playerpic: mainPic,
        });
      });
    });
  });
});


//app.listen(4000, () => console.log('Example app listening on port 4000!'));

module.exports = app;