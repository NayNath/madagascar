/* carrossel cultura gastronomia */
let index = 0;

function carrosselCima() {
    const slideCul = document.querySelector("#cima");
    const slideImg = document.querySelectorAll("#cima img");
    index++;                              // 1
    if (index > slideImg.length - 1) {// 1 > 1-1(0)
        index = 0;                        //0
    }
    slideCul.style.transform = `translateX(${-index * 600}px)`; //mexer foto no eixo x (-1 * 600)
}
function carrosselMeio() {
    const slideCul = document.querySelector("#meio");
    const slideImg = document.querySelectorAll("#meio img");
    index++;                              
    if (index > slideImg.length - 1) {
        index = 0;                        
    }
    slideCul.style.transform = `translateX(${-index * 600}px)`;
}
function carrosselBaixo() {
    const slideCul = document.querySelector("#baixo");
    const slideImg = document.querySelectorAll("#baixo img");
    index++;                              
    if (index > slideImg.length - 1) {
        index = 0;                       
    }
    slideCul.style.transform = `translateX(${-index * 600}px)`;
}

setInterval(carrosselCima, 3000);
setInterval(carrosselMeio, 3000);
setInterval(carrosselBaixo, 3000);

setInterval(carrosselMeio, 3000);
setInterval(carrosselBaixo, 3000);




/*
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