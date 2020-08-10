
const jsdom = require("jsdom");
const {
  JSDOM
} = jsdom;



exports.getbday = function(dom) {
  var spans = dom.window.document.getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].className == 'bday') {
      // console.log(spans[i].innerHTML);  // working
      bday = spans[i].textContent; // success working
      // console.log("bday is " + bday);
      return bday;
    }
  }
}

exports.getAge = function(dom) {
  var spans = dom.window.document.getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].className == 'noprint') {
      // console.log(spans[i].innerHTML);  // working
      age = spans[i].textContent; // success working
      // console.log("Age is " + age);
      return age;
    }
  }
}

exports.getName = function(dom) {
  var captionTag = dom.window.document.getElementsByTagName("caption");
  for (var i = 0; i < captionTag.length; i++) {
    if (captionTag[i].className == 'fn') {
      name = captionTag[i].textContent; // success working
      return name;
    }
  }
}

exports.getCountryName = function(dom) {
  var spans = dom.window.document.getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].className == 'country-name') {
      // console.log(spans[i].innerHTML);  // working
      countryName = spans[i].textContent; // success working
      // console.log("country name  is " + countryName);
      return countryName;
    }
  }
}


exports.getNickname = function(dom) {
  var tdTag = dom.window.document.getElementsByTagName("td");
  for (var i = 0; i < tdTag.length; i++) {
    if (tdTag[i].className == 'nickname') {
      nickname = tdTag[i].textContent; // success working
      return nickname;
    }
  }
}

exports.getplayingPosition = function(dom) {
  var tdTag = dom.window.document.getElementsByTagName("td");
  for (var i = 0; i < tdTag.length; i++) {
    if (tdTag[i].className == 'role') {
      playingPosition = tdTag[i].textContent; // success working
      return playingPosition;
      // console.log("playing Position is " + playingPosition);
    }
  }
}
exports.getbirthPlace = function(dom) {
  var tdTag = dom.window.document.getElementsByTagName("td");
  for (var i = 0; i < tdTag.length; i++) {
    if (tdTag[i].className == 'birthplace') {
      birthPlace = tdTag[i].textContent; // success working
      return birthPlace;
      // console.log("birth Place is " + birthPlace);
    }
  }
}
exports.getcurrentClub = function(dom) {
  var tdTag = dom.window.document.getElementsByTagName("td");
  for (var i = 0; i < tdTag.length; i++) {
    if (tdTag[i].className == 'org') {
      currentClub = tdTag[i].textContent; // success working
      return currentClub;
      // console.log("current Club is " + currentClub);
    }
  }
}



exports.getImage = function(dom) {
  var tableTag = dom.window.document.getElementsByTagName("table");
  for (var i = 0; i < tableTag.length; i++) {
    if (tableTag[i].className == 'infobox') {
      // Get Infobox Tabletag data
      tableData = tableTag[i].outerHTML;
      const domInfoboxTable = new JSDOM(tableData);
      // profile pics - Working
      var imgTag = domInfoboxTable.window.document.getElementsByTagName("img");
      profileImage = imgTag[i].outerHTML;


      domInfoboxTable.window.document.querySelectorAll('a').forEach(link => {
        outer = link.outerHTML;
        inner = link.innerHTML;
        tableData = tableData.replace(outer, inner);
      });

      return {
        tableData,
        profileImage
      };

    }
  }
}


// // Jursey no
exports.getJurseyNo = function(dom) {
  var tableTag = dom.window.document.getElementsByTagName("table");
  for (var i = 0; i < tableTag.length; i++) {
    if (tableTag[i].className == 'infobox') {
      // Get Infobox Tabletag data
      tableData = tableTag[i].outerHTML;
      const domInfoboxTable = new JSDOM(tableData);

      //  Get TR tag data from table tag
      var trTag = domInfoboxTable.window.document.getElementsByTagName("tr");
      for (var j = 0; j < trTag.length; j++) {
        const trTagData = trTag[j].outerHTML;
        if (trTag[j].textContent.substring(0, 6) === "Number") {
          var num = trTag[j].textContent.substring(6, 10);
          // console.log("Jursey no is " + num);
          return num;
        }
      }
    }
  }
}


// //  function part 1 -- working
// module.exports.getadd = getadd;
//  function getadd(i, j) {
// var k  =  i + j;
// return k;
// };
// module.exports.getmul = getmul;
//  function getmul(i, j) {
// var l  =  i * j;
// return l;
// };

// //  function part 2 start working
// exports.getadd = function(i,j) {
// return i + j;
// }
// exports.getmul = function(i,j) {
// return i * j;
// }
// //  function part 2 end working
