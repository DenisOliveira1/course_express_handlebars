 const express = require("express")
 const app = express();
 const expbs = require("express-handlebars")

 const hbs = expbs.create({
     partialsDir: "views/pieces",//renomeando o caminho padrao do partials
     layoutsDir: "views/pattern",
     defaultLayout:"main",
     //craindo custom helpers
     helpers:{
         mais10: (value) => {
            return value + 10
         },
         compara:(a,sinal,b, options) => {
             if(sinal == "=="){
                 if(a == b){
                    return options.fn(this)//true
                 }
                 else{
                    return options.inverse(this) //false
                 }
             }
             if(sinal == "!="){
                if(a != b){
                   return options.fn(this)//true
                }
                else{
                   return options.inverse(this) //false
                }
            }
         },
         list: (value) => {//tem que tem {{\list}} lá para voltar html
            //value = people
            console.log(value)
            var out =  "<ul>"
            for (let i=0; i<value.length; i++){  
                console.log(value[i].nome)    
                out += "<li>" + value[i].nome + "</li>"
            }
            console.log(out)
            return out + "</ul>"
         }

     }
 })

//ativa handlebars
 app.engine("handlebars", hbs.engine);
 app.set("view engine","handlebars")

//rotas
app.get("/",(req,res)=>{
    res.render("index",{
        title: "Home",
        name: "Denis",
        age: 5,
        isDisplayName: true,
        isDisplayAge: false,
        people:[
            {nome:"Denis"},
            {nome:"Peter"},
            {nome:"George"},
            {nome:"Matthew"}
        ],
        test:"<p>test</p>",
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

app.get("/look",(req,res)=>{
    res.render("lookup",{
        user:{
            name:"Julia",
            age:20,
            phone:12345
        },
        colors:["yellow","green","blue"]
    })
})

//inicia servidor
 app.listen(8000, () => {
     console.log("Servidor online!")
 })