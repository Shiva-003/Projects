const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// for env files
const dotenv = require("dotenv");
dotenv.config({path:"config.env"});

// Http server
const app = express();

const port_number = process.env.port || 3000;

// for reading form data
app.use(express.urlencoded({extended:true}));

// for static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));

// Set Cookie Parser, Sessions & flash
app.use(cookieParser("d38a03b5bf52aefc6fbb6ebe"));
app.use(session({
    secret : "9f14f8c064bb9c1c76e09103",
    cookie : { maxAge: 5000},
    resave : true,
    saveUninitialized : true
}));

app.use(flash());

// for setting ejs as view engine
app.set("views","./src/views");
app.set("view engine", "ejs");

const home_route = require("./src/routes/router");
app.use("/", home_route);

app.listen(port_number, ()=>{
    console.log(`Server is listening at port : http://localhost:${port_number}`);
});

app.use((req, res) =>{
    res.render("404page",{page:"404 Page"});
});