const icone = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

icone.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

/* carrossel cultura gastronomia */
const slideCultura = document.querySelector("div.foto-cultura");
const slideImagens = document.querySelector("div.foto-cultura img");
const botaoEsquerdo = document.querySelector("#botao-esquerdo button")
const botaoDireito = document.querySelector("#botao-direito button")
let index = 0;

botaoEsquerdo.addEventListener('click',() =>{
    if (index<0) index = slideImagens.length -1
    index--;
    atualizarCarrossel();
})
botaoDireito.addEventListener('click',() =>{
    if (index> slideImagens.length -1) index = 0
    atualizarCarrossel();
})

const atualizarCarrossel = () =>{
    slideCultura.computedStyleMap.transform = `translateX(-${index*100}%)`;
}