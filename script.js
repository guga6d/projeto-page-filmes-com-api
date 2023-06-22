const form = document.getElementById('form')
const lista = document.getElementById('lista')
const btn = document.getElementById('btn')

form.onsubmit = e => {
    e.preventDefault()
    let inputValue = document.getElementById('input').value

    if(!inputValue){
        alert('Preencha')
    }else{

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=3f4fd729`)
      .then(resulta => resulta.json())
      .then(json => construirLista(json))
    }
}

// form.addEventListener('submit',(e) => {
//     e.preventDefault()

//     async function conectarApi() {
//         let inputValue = document.getElementById('input').value
//         const apiDados = await fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=3f4fd729`)
//         const apiConvertida = apiDados.json()
        
//         construirLista(apiConvertida)
//             // form.addEventListener('submit',(e) => {
//             //     e.preventDefault()
//             //     construirLista(apiConvertida)
//             // })
//     }
    
//     btn.onclick = conectarApi()
// })




function construirLista(dados) {
    lista.innerHTML = ""
    
    if(dados.Response == "False"){
        lista.innerHTML = " <h2>Filme Nao Encontrado</h2>"
    }
    dados.Search.forEach(filme => {
        console.log(filme)
        lista.innerHTML += `<li>
    <img src="${filme.Poster}" alt="">
    <h2>${filme.Title}</h2>
</li>`
    })
}
