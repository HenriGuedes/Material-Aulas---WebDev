// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];
// const pessoa = { //estrutura objeto
//     nome:henrique,
//     idade: 18,
//     isAdmin : True
// }
// console.log(pessoa.nome)//como chamar uma propriedade do objeto

window.onload = function(){
    mostrarPost();
    document.querySelector("#postList").addEventListener("submit",addPost)// não é preciso chamar a função quando ela está dentro de um evento
}
//creat
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();
    const textoPost= document.querySelector("#postText").value 
    const categoriaPost= document.querySelector("#postCategory").value
    const imagemPost = document.querySelector("#postImage").value
    const dataPost = new Date().toLocaleDateString()
    const novoPost ={
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }
    posts.unshift(novoPost)

    mostrarPost()
}
//Read
function mostrarPost(){
    //pega a div que vão aparecer os posts
    const listaPost = document.querySelector("#postList")// chamando a div no HTML
    listaPost.innerHTML = ""// Limpar os elementos do HTML
    //passa em cada item  do array criando um tweet
    posts.forEach(pegaItem =>{
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        <p>${pegaItem.category}</p>
        <img src = "${pegaItem.image}"/>
        <p> ${pegaItem.date}</p>
        <button>Editar</button>
        <button>Apagar</button>
        `
        //adiciona o tweet ao html
        listaPost.append(cardPost)
        
    })
}
//Update
function editarPost(){}
//Delete
function deletarPost(){}