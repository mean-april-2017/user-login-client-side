var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "client")));

app.get("/angular.js", function (request, response) {
    response.sendFile("angular.js", { root: "node_modules/angular" });
});

app.get("/angular-route.js", function (request, response) {
    response.sendFile("angular-route.js", { root: "node_modules/angular-route" });
});

app.listen(3000, function () {
    console.log("App Listening on Port 3000");
});
