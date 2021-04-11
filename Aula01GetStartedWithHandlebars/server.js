/**
 * cria um arquivo que salva as depencencias que forem futuramente baixadas
 * ----------- npm init -y
 * 
 * -s ou --save não são mais necessarios desde o node 5.0, agora eles são automaticos
 * eles serviam para que alem de baixar o modulo voce adicionasse ele a lista de dependencias no package.json
 * intalar 2 modulos juntos, express e express-hadlebars
 * ----------- npm install express express-handlebars
 * 
 * para não precisar atualizar o servidor toda hora
 * ----------- npm install -g nodemon
 * 
 * rodando
 * ----------- nodemon server.js
 * 
 * aparentemente agora é obrigatorio fazer o layouts/main.handlebars com o {{{body}}}
 * 
 */
 const express = require("express")
 const app = express();
 const expbs = require("express-handlebars")

//ativa handlebars
 app.engine("handlebars", expbs());
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