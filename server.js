var express = require("express");
var app = express();
var path = require("path");
var http = require("http").Server(app);
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "dist")));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

http.listen(8000, function(){
    console.log("server running on port 8000");
})
