const app = require('./app');
const http = require('http');

var port = process.env.PORT

//Only for localhost
if(port == null || port == undefined) {
    http.createServer(app).listen(4000, function() {
        console.log("post is listening at 4000");
    });
//For hosted application
} else {
    http.createServer(app).listen(process.env.PORT);
}