const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const data = require('./models/data')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// standard installs

app.get('/airNomad', (req,res) => {
    res.render('index.ejs', {data:data})
})

app.get('/airNomad/:id', (req,res) => {
    res.render('show.ejs', {data: data[req.params.id]})
})

app.get('/airNomad/:id/edit', (req, res) => {
    
})





app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
