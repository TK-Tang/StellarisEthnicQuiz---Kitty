const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const engines = require("consolidate");

const HomeRouter = require("./routes/home.server.route");

const app = express();

// Translates URLs to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Used for css, js and html
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

// Sets the render engine for front end pages to html
// There are other replacements for html such pug or ejs
app.engine("/html", engines.mustache);
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use("/", HomeRouter);

app.listen(8080, function(){
    console.log("Stellaris ethnics quiz listening on port 8080!");
})