 const express = require("express")
 const app = express();
 const expbs = require("express-handlebars")

//ativa handlebars
 app.engine("handlebars", expbs({
     layoutsDir: "views/pattern",
     defaultLayout:"main"
    }
 ));
 app.set("view engine","handlebars")

//rotas
app.get("/",(req,res)=>{
    res.render("index",{
        title: "Home",
        name: "Denis",
        age: 5,
        isDisplayName: true,
        isDisplayAge: false
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{title: "Sobre"})
})

//inicia servidor
 app.listen(8000, () => {
     console.log("Servidor online!")
 })