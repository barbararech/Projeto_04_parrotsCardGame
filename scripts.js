let numerocartas=0;
function numeroCartas(){
      
    while(numerocartas % 2 != 0 || numerocartas <4 || numerocartas>14){
        numerocartas = Number(prompt("Com quantas cartas você quer jogar? (4 a 14)"));
      
        if(numerocartas % 2 != 0 || numerocartas <4 || numerocartas>14){
            alert("Valor inválido");
        }
    }
}
numeroCartas();


// let desenho =[ "bobrossparrot", "explodyparrot", "fiestaparrot", 
// "metalparrot", "revertitparrot", "tripletsparrot", 
// "unicornparrot"];


img1 = `<img src="Imagens/bobrossparrot.gif">`
img2 = `<img src="Imagens/explodyparrot.gif">`
img3 = `<img src="Imagens/fiestaparrot.gif">`
img4 = `<img src="Imagens/metalparrot.gif">`
img5 = `<img src="Imagens/revertitparrot.gif">`
img6 = `<img src="Imagens/tripletsparrot.gif">`
img7 = `<img src="Imagens/unicornparrot.gif">`

let desenhopar = [img1,img1,img2,img2,img3,img3,img4,img4,img5,img5,img6,img6,img7,img7];
let baralho =[];

for(let i=0; i<numerocartas;i++){
    baralho[i]=desenhopar[i];
}

// Embaralhar cartas
baralho.sort(comparador);
console.log(baralho);

function comparador(){
    return Math.random() -0.5;
}

// Construir carta e distribuir
function construirCarta(){
    for (let i=0; i<numerocartas; i++){
        novacarta = document.createElement("div");
        novacarta.classList.add("carta");
        novacarta.setAttribute("onclick","virarcarta(this)");
        novacarta.innerHTML += ` <div class="frente-carta" >
        <img src="Imagens/front.png"/>
      </div>
      <div class="verso-carta">
        ${baralho[i]}
      </div>`;
      document.querySelector(".container").appendChild(novacarta);
      baralho[i]=novacarta;
    }

 }
 construirCarta();


 
// Virar carta
 function virarcarta(){
      document.querySelector(".frente-carta").classList.add("virar-frente");
 }
 

