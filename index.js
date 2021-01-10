const express = require("express");
const morgan = require("morgan");

var app = express();
app.listen(3000, ()=>{
    console.log("Servidor Levantado");
});