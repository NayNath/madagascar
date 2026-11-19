/* carrossel cultura gastronomia */
const slideCultura = document.querySelector(".container-direita.img");
const slideImagens = document.querySelector(".container-direita.img img");
let index = 0;

function carrossel(){
    index++
    if(index > slideImagens.length-1 ){
        index = 0;
    }

    slideCultura.computedStyleMap.transform = `translateX(${-index*500}px)`;
}
setInterval(carrossel, 500);


/*
const slideCultura = document.querySelector("div.foto-cultura");
const slideImagens = document.querySelector("div.foto-cultura img");
let index = 0;

function carrossel(){

    index++

    if(index > slideImagem.length-1 ){
        index = 0;
    }

    slideCultura.computedStyleMap.transform = `translateX(${-index*600}px)`;
}
setInterval(carrossel, 500);





const slideTamanho = slideImagens.length;

botaoEsquerdo.addEventListener('click',() =>{
    console.log("Clicou esquerdo")
    index--;
    if (index<0) index = slideTamanho -1
    atualizarCarrossel();
    
})
botaoDireito.addEventListener('click',() =>{
    console.log("Clicou direito")
    if (index> slideTamanho -1) index = 0
    atualizarCarrossel();
})

const atualizarCarrossel = () =>{
    slideCultura.computedStyleMap.transform = `translateX(-${index*100}%)`;
}*/