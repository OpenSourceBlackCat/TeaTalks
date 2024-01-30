require("dotenv").config();
const express = require("express");
const path = require("path");
webApp = express();
webApp.use(express.static(path.join(__dirname, "static")));

webApp.use("/", async(req, res)=>{
    await res.sendFile(path.join(__dirname, "static/index.html"));
});
webApp.listen(process.env.PORT, async() =>{
    console.log("Server Started!");
});