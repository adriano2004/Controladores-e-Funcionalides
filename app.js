const express = require("express");
const app = express();

app.get("/site/html/pag1.html", function (req, res){
    res.sendFile(__dirname + "/site/html/pag1.html");
});

app.get("/site/html/index.html", function (req, res){
    res.sendFile(__dirname + "/site/html/index.html");
});

app.get("/site/html/pag2.html", function (req, res){
    res.sendFile(__dirname + "/site/html/pag2.html");
});

app.get("/site/img/img-index.jpg", function(req, res) {
    res.sendFile(__dirname + "/site/img/img-index.jpg");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/site/html/index.html");
});

app.get("/pag1.html", function (req, res){
    res.sendFile(__dirname + "/site/html/pag1.html");
});

app.get("/pag2.html", function (req, res){
    res.sendFile(__dirname + "/site/html/pag2.html");
});

app.get("/img/img-pag1.jpg", function (req, res){
    res.sendFile(__dirname + "/site/img/img-pag1.jpg");
});

app.get("/img/img-pag2.jpg", function (req, res){
    res.sendFile(__dirname + "/site/img/img-pag2.jpg");
});

app.get("/img/img-index.jpg", function (req, res){
    res.sendFile(__dirname + "/site/img/img-index.jpg");
});

app.get("/html/index.html", function (req, res){
    res.sendFile(__dirname + "html/index.html");
});

app.get("html/pag2.html", function (req, res){
    res.sendFile(__dirname + "html/pag2.html");
});

app.get("/site/img/img-pag1.jpg", function(req, res) {
    res.sendFile(__dirname + "/site/img/img-pag1.jpg");
});

app.get("/site/img/img-pag2.jpg", function(req, res) {
    res.sendFile(__dirname + "/site/img/img-pag2.jpg");
});

app.get("/../img/img-pag2.jpg", function(req, res) {
    res.sendFile(__dirname + "../img/img-pag2.jpg");
});

app.get("/../img/img-index.jpg", function(req, res) {
    res.sendFile(__dirname + "../img/img-index.jpg");
});

app.get("/../img/img-pag1.jpg", function(req, res) {
    res.sendFile(__dirname + "../img/img-pag1.jpg");
});

app.get("/site/css/arquivo.css", function(req, res) {
    res.sendFile(__dirname + "/site/css/arquivo.css");
});

app.get("/css/arquivo.css", function(req, res) {
    res.sendFile(__dirname + "/site/css/arquivo.css");
});

app.listen(7000);