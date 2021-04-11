const connection = require("./connection")

const orm = {
    selectAll: (cb) => {//callback como parametro
        connection.query("SELECT * FROM restaurant_burger", (erro, data) => {
            if (erro){
                cb(erro,null)
            }
            cb(null,data)
        })

    },
    selectBy: (condition,value, cb) => {//callback como parametro
        connection.query("SELECT * FROM restaurant_burger WHERE "+condition+" = "+value, (erro, data) => {
            if (erro){
                cb(erro,null)
            }
            cb(null,data)
        })

    },
    insertOne: (burgerName,cb) => {//callback como parametro
        const sqlQuery = "INSERT INTO restaurant_burger (burger_name) VALUES ('"+burgerName+"')"
        connection.query(sqlQuery, (erro, data) => {
            if(erro){
                cb(erro,null)
            }
            cb(null,data)
        })

    },
    deleteOne: (id,cb) => {//callback como parametro
        const sqlQuery = "DELETE FROM restaurant_burger WHERE ID = '"+id+"'"
        connection.query(sqlQuery, (erro, data) => {
            if(erro){
                cb(erro,null)
            }
            cb(null,data)
        })
    },
    updateOne: (id, updated_favorite,cb) => {//callback como parametro
        const sqlQuery = "UPDATE restaurant_burger SET is_favorite = '"+updated_favorite+"' WHERE ID = '"+id+"'"
        connection.query(sqlQuery, (erro, data) => {
            if(erro){
                cb(erro,null)
            }
            cb(null,data)
        })
    }
}

module.exports = orm