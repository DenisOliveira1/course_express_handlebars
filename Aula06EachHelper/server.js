 /**
  * no handlebars pode se usar log
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

app.get("/con",(req,res)=>{
    res.render("contact",{
        people:[
            "Denis",
            "Peter",
            "George",
            "Matthew"
        ],
        user:{
            name:"Julia",
            age:20,
            phone:12345
        },
        lists:[
            {
                itens:["batata","manga","banana"]
            },
            {
                itens:["alface","couve","acelga"] 
            } ,
            {
                itens:[]
            }  
        ],
        friend:[
            {name:"Roberto",age:22},
            {name:"Maria",age:32},
            {name:"Leticia",age:25}
        ]
    })
})



//inicia servidor
 app.listen(8000, () => {
     console.log("Servidor online!")
 })