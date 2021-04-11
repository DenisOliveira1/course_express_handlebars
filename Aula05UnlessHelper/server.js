 /**
  * fazer lista rapido no html:
  * ul>li*3
  * 
  * No handle bars o helper unless é o contrario do if
  * O mesmo efeito acontece se usar só o else do if ou colocar um ! na condição
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
    res.render("index",{
        title: "Home",
        name: "Denis",
        age: 5,
        isDisplayName: true,
        isDisplayAge: false
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title: "Sobre"
    })
})

app.get("/dash",(req,res)=>{
    res.render("dashboard",{
        isListEnabled: true
    })
})


//inicia servidor
 app.listen(8000, () => {
     console.log("Servidor online!")
 })