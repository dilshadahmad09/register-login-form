const express = require('express');
const cookie = require('cookie-parser')
const db = require("./routes/db-config");

const app = express()

const PORT = process.env.PORT || 3000;
app.use("/js", express.static(__dirname + "./public/js"))
app.use("/css", express.static(__dirname + "./public/css"))
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(cookie());
app.use(express.json())

app.use("/", require("./routes/pages"))
app.use("/api", require("./controllers/auth"))

db.connect((err)=>{
    if(err) throw err;
    console.log("database connected");
})
app.listen(PORT);