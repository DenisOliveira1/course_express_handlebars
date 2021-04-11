/**
 * aparentemente o main e o {{{body}}} agora são obrigatorios
 * e o {defaultLayout:"main"} não é mais necessario
 * 
 * se mudar o nome do diretorio padrao "layouts com"{ layoutsDir: "views/pattern"} ]
 * o {defaultLayout:"main"} pasar a ser necessario
 * 
 */
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
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

//inicia servidor
 app.listen(8000, () => {
     console.log("Servidor online!")
 })