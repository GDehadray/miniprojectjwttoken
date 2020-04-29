let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
let app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/login",require("./login/login"));
app.use("/about",require("./about/about"));
app.use("/home",require("./home/home"));
app.use("/contact",require("./contact/contact"));
app.use("/logout",require("./logout/logout"));
app.listen(8080);
console.log("server listening the port no.8080");