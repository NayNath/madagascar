/* carrossel cultura */
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

/* menu gastronomia */
const iconeGas = document.getElementById('menu-gastronommia-icon');
const menuGas = document.querySelector('.menu-gastronomia');
const fecharGas = document.getElementById('fechar-gastronommia-icon');

/* abiri menu gastronomia */
iconeGas.addEventListener('click', () => {
    menuGas.classList.toggle('ativoGas');
});
/* fechar menu gastronomia */
fecharGas.addEventListener('click', () => {
    menuGas.classList.remove('ativoGas');
});


/* cards gastronomia */
let descricao = document.querySelector(".descricao-pratos-tipicos");
let descricaoTitulo = document.querySelector(".descricao-pratos-tipicos h3");
let descricaotexto = document.querySelector(".descricao-pratos-tipicos p");
let imgGastro = document.querySelector(".gastronomia-imagem img");

let koba = document.querySelector("#koba");
let ravitoto = document.querySelector("#ravitoto");
let lasopy = document.querySelector("#lasopy");
let vary = document.querySelector("#vary");
let romazava = document.querySelector("#romazava");
let lasary = document.querySelector("#lasary");

ravitoto.addEventListener("click", mostarRavitoto);
koba.addEventListener("click", mostarKoba);
lasopy.addEventListener("click", mostarLasopy);
vary.addEventListener("click", mostarVary);
romazava.addEventListener("click", mostarRomazava);
lasary.addEventListener("click", mostarLasary);

function mostarRavitoto(){
    descricaoTitulo.innerText = "Ravitoto";
    descricaotexto.innerText = "Um das comidas típicas para provar em Madagascar é o ravitoto, que consiste em purê de folhas de mandioca acompanhado de carne de porco ou zebu. Claro, é servido com arroz e um molho picante de gengibre e pimenta. Ravitoto pode não ser muito apetitoso à primeira vista, mas a primeira mordida vai excitar o seu paladar. O prato é realmente delicioso e você rapidamente se apega ao sabor.";
    imgGastro.src = "https://tse2.mm.bing.net/th/id/OIP.KB1t6CtG8Y5DsZpnbb_MjQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
}
function mostarKoba(){
    descricaoTitulo.innerText = "Koba";
    descricaotexto.innerText = "O Koba ravina, pronunciado koub ‘rav’n, vindo de “koba”, massa, e “ravina”, folha: literalmente “massa com folha”), é um petisco doce feito com bananas, farinha de arroz glutinoso e amendoim, também chamado de kobandravina, moforavina ou koba akondro, extremamente popular em toda a “big island” (o apelido de Madagáscar). Aromatizados com a baunilha, a baunilha natural do Madagáscar, os koba são preparados por vendedores ambulantes no vapor, em folhas de bananeira, que os carregam sobre a cabeça, em uma cesta que os mantém quentes.";
    imgGastro.src = "https://doretdepices.com/wp-content/uploads/2025/05/koba-ravina.jpg";
}
function mostarLasopy(){
    descricaoTitulo.innerText = "Lasopy";
    descricaotexto.innerText = "A lapósia é uma sopa tradicional originária de Madagascar. Essa sopa requintada é feita com vegetais como nabos, feijões verdes, tomates, cenouras, cebolinhas, batatas e alho-poró. Os legumes são cozidos em uma panela com ossos de carne para dar sabor extra e, uma vez macios, são purês até formar uma sopa espessa e lisa.";
    imgGastro.src = "https://tkpe6wrwxmgsladx.public.blob.vercel-storage.com/recipes/lasopy-madagascan-vegetable-soup.jpg";
}
function mostarVary(){
    descricaoTitulo.innerText = "Vary amin anana";
    descricaotexto.innerText = "Vary amin anana é um prato tradicional originário de Madagascar. É feito com uma combinação de cebolas, gengibre, tomates, óleo, água, arroz e couve ou outras folhas verdes, como acelga suíça ou couve. O arroz é um alimento básico malgaxe que geralmente é comido três vezes ao dia no país. Os ingredientes são deixados em fogo brando até ficarem macios ou até que a água seja absorvida. Vary amin anana é frequentemente servida no jantar durante o inverno.";
    imgGastro.src = "https://tse1.mm.bing.net/th/id/OIP.AU6IMDBF2Cqga-VpYSrVfAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
}
function mostarRomazava(){
    descricaoTitulo.innerText = "Romazava";
    descricaotexto.innerText = "Romazava é um ensopado feito com carne e folhas verdes. É considerado o prato nacional de Madagascar e é servido com arroz cozido no vapor em quase todas as refeições, junto com sakay, um condimento picante feito de pimentas, alho e gengibre.";
    imgGastro.src = "https://tse3.mm.bing.net/th/id/OIP.RTHA2F3JprO0Zf3-HuicuwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
}
function mostarLasary(){
    descricaoTitulo.innerText = "Lasary";
    descricaotexto.innerText = "Lasary é um tipo de salada malgaxe. Acredita-se que o prato tenha origem no norte de Madagascar. O prato também é chamado de Antsary ou Ansary em alguns lugares. É popular como acompanhamento ou como recheio de um sanduíche de baguete. [2] Também pode ser adicionado a espetos e arroz. Nas montanhas, é feito de feijão verde, repolho, cenoura e cebola em um molho de vinagrete. Em áreas urbanas, é feito com mangas e limões em conserva.";
    imgGastro.src = "https://medmunch.com/wp-content/uploads/2020/10/Lasary.jpg";
}