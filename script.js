const voltar = document.getElementById("voltar");
const avancar = document.getElementById("avancar");
const imagem = document.getElementById("pokemon");

let numerodoPokemon = 1;

function carregarPokemon(numero){
    fetch (`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(resposta => resposta.json())
    .then(dados => {
        imagem.src = dados.sprites.front_default;
    });
}

//botao avançar
avancar.addEventListener("click", ()=>{
    numerodoPokemon ++;
    carregarPokemon(numerodoPokemon);
});

//botao voltar
voltar.addEventListener("click", ()=>{
    if(numerodoPokemon <=1){
        alert("Informe um número maoir que 1")
    } else{
        numerodoPokemon --;
        carregarPokemon(numerodoPokemon);
    }
});

//chamando a função carregarPokemon
carregarPokemon(numerodoPokemon)
