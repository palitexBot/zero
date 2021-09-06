const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
app.use("/",express.static(path.join(__dirname,"public")))
app.engine("pug",require('pug').renderFile)
app.get("/",(req,res)=>{
  //  console.dir(req.connection)
    function random(string_length=10){
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return randomstring;
    }
res.render("index.pug",{random,fetch,printx:console.log})
})
app.listen(3000)