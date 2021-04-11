//adicionar required no input nao funciona com jqery, tem que fazer assim
$("input[name='burgerName']").attr("required",true)

//add section
    const burgerTemplate = (burgerName, id, is_favorite) => {
    const burgerCard = $("<div>").attr({
        class: "card mt-2 mx-auto",
        style: "width: 30rem",
        id: id
    })
    const burgerCardBody = $("<div>").attr({
        class: "card-body"
    })

    const name = $("<h4>")
    name.html(burgerName)

    const button = $("<button>").attr({
        "data-id": id,
        "data-state": is_favorite,
         class: "btn btn-primary favorite"
    })
    button.html("Adicionar aos Favoritos")

    burgerCardBody.append(name,$("<br>"),button)
    burgerCard.append(burgerCardBody)

    return burgerCard

}

const addBurgerSuccess = (burger) => {
    const nome = burger.burger_name
    const id = burger.id
    const favorito = burger.is_favorite

    newBurgerCard = burgerTemplate(nome,id,favorito)
    
    //$("body").append(newBurgerCard) //adiciona no final da lista
    $("#burgerContainer").prepend(newBurgerCard)
    $("input[name='burgerName']").val("")

    alert("Burger adicionado com sucesso")

    /**
     * apppend poe o componente no final do outro componente
     * prepend poe no inicio
     */
}

const addBurgerFails = (erro) => {
    alert(erro)
}

$("button[id='add']").on("click", (event) => {
    //event.preventDefault() //impede a página de atualizar e buga o required via js
    $("button[id='add']").attr("disabled","disabled")//se nao tiver isso da double click e faz a requsiição duas vezes

    const burgerName = $("input[name='burgerName']").val()

    if (burgerName != ""){

        const burger = {
            bName: burgerName
        }
    
        $.ajax({
            url:"/burgers/add",
            method: "POST",
            data: burger
        }).then((burger) => {
            addBurgerSuccess(burger)
        }).catch((erro) => {
            addBurgerFails(erro)
        })
    }

    $("button[id='add']").removeAttr("disabled")//habilita botão novamente
})

//delete section

const deleteBurgerSuccess = (burger) => {
    const id = burger.id

    $("#burger[data-id='"+id+"']").remove()
    alert("Burger deletado com sucesso")
}

const deleteBurgerFails = (erro) => {
    alert(erro)
}

$("button[id='delete']").on("click", (event) => {
    event.preventDefault() //impede a página de atualizar
    $("button[id='delete']").attr("disabled","disabled")//se nao tiver isso da double click e faz a requsiição duas vezes

    const id = $(event.target).attr("data-id")
    //modos de pegar esse id
    //1. console.log($(event.target).attr("data-id"))
    //2. console.log(event.currentTarget.attributes[0].nodeValue)

    $.ajax({
        url:"/burgers/delete/"+ id,
        method: "DELETE",
        data: id
    }).then((id) => {
        deleteBurgerSuccess(id)
    }).catch((erro) => {
        deleteBurgerFails(erro)
    })

    $("button[id='delete']").removeAttr("disabled")//habilita botão novamente
})

const updateBurgerSuccess = (burger) => {
    const id = burger.id
    const is_favorite = burger.is_favorite 
    
    $("#"+id).remove()

    if(is_favorite == 1){
        alert("Burger adicionado aos Favoritos com sucesso")
    }
    else{
        alert("Burger removido dos Favoritos com sucesso")
    }
   
}
const updateBurgerFails = (erro) => {
    alert(erro)
}

//update section
$(document).on("click", ".favorite", (event) => {
    event.preventDefault() //impede a página de atualizar

    const id = $(event.target).attr("data-id")
    const is_favorite = $(event.target).attr("data-state")
    
    const updated_favorite = is_favorite === "0" ? "1": "0"

    $.ajax({
        url:"/burgers/update/"+ id + "/" + updated_favorite,
        method: "PUT"
    }).then((burger) => {
        console.log(burger)
        updateBurgerSuccess(burger)
    }).catch((erro) => {
        updateBurgerFails(erro)
    })
})