/**
 * ---------------- npm init
 * ---------------- npm i express express-handlebars method-override mysql body-parser
 * ---------------- npm i -g nodemon
 */

const express = require("express")
const mo = require("method-override")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const routes = require("./routes/handlers")

//config
    //express
    const port = process.env.PORT || 9001 
    const app = express()
    app.use(express.static("public"))
    //handlebars
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    app.engine("handlebars", handlebars())
    app.set("view engine", "handlebars")
    //outros
    app.use(mo("_method"))
    //rotas
    app.use("/",routes)


//listener
app.listen(port,() => {
    console.log("Servidor online!")
})