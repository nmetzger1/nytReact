//Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Require Saved Articles Schema
var History = require("./models/Articles");

//Instance of Express
var app = express();
//Set Port #
var PORT = process.env.PORT || 3000;

//Use Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

//Configure MongoDB
mongoose.connect("mongodb://localhost/articles");
var db = mongoose.connection;
var Articles = require("./models/Articles");

db.on("error", function (err) {
    console.log("Mongoose Error: " + err)
});

db.once("open", function () {
    console.log("Connection to MongoDB was successful.")
});

//Default Router -- "/"
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

//Get Saved Articles Route
app.get("/api", function (req, res) {
    Articles.find({}).limit(5).exec(function (err, doc) {
        if(err){
            console.log(err);
        }
        else {
            console.log("MONGO RESULTS", doc);
            res.send(doc);
        }
    });
});

//Save Articles to MongoDB
app.post("/api", function (req, res) {
    Articles.create({
        url: req.body.url,
        title: req.body.title
    }, function (err) {
        if(err){
            console.log(err);
        }
        else {
            res.send("Article saved to MongoDB");
        }
    });
});

//---------------------------------------------------
// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});