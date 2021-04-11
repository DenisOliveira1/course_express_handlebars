const express = require("express")
const router = express.Router()
const orm = require("../config/orm")

//rotas
router.get("/",(req, res) => {
    orm.selectBy("is_favorite",0, (erro, burgers) => {
        if(erro){
            return res.status(501).send("Erro recuperando lista: " + erro)
        }else{
            return res.render("index", {burgers})
        }

    })
})

router.post("/burgers/add",(req, res) => {
    const burgerName = req.body.bName

    orm.insertOne(burgerName ,(erro, burger) => {
        if(erro){
            return res.status(401).send("Erro ado adicionar o Burger: " + erro)
        }else{
            return res.json({
                burger_name: burgerName,
                id: burger.insertId,
                is_favorite:0
            })
        }

    })
})

router.get("/burgers/all",(req, res) => {
    orm.selectAll((erro, burgers) => {
        if(erro){
            return res.status(501).send("Erro recuperando lista: " + erro)
        }else{
            return res.render("todosburgers", {burgers})
        }

    })
})

router.get("/burgers/fav",(req, res) => {
    orm.selectBy("is_favorite",1, (erro, burgers) => {
        if(erro){
            return res.status(501).send("Erro recuperando lista: " + erro)
        }else{
            return res.render("favoritosburgers", {burgers})
        }

    })
})

router.delete("/burgers/delete/:id",(req, res) => {
    const id = req.params.id
    orm.deleteOne(id, (erro) => {
        if(erro){
            return res.status(301).send("Erro deletando Burger " + erro)
        }else{
            return res.json({
                id 
            })   
        }
    })
})

router.put("/burgers/update/:id/:updated_favorite",(req, res) => {
    const id = req.params.id
    const updated_favorite = req.params.updated_favorite

    orm.updateOne(id, updated_favorite, (erro) => {
        if(erro){
            return res.status(301).send("Erro atualizando o Burger " + erro)
        }else{
            return res.json({
                id,
                is_favorite:updated_favorite
            })   
        }
    })
})

module.exports = router