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

img1 = `<img class="imgverso" src="Imagens/bobrossparrot.gif">`
img2 = `<img class="imgverso" src="Imagens/explodyparrot.gif">`
img3 = `<img class="imgverso" src="Imagens/fiestaparrot.gif">`
img4 = `<img class="imgverso" src="Imagens/metalparrot.gif">`
img5 = `<img class="imgverso" src="Imagens/revertitparrot.gif">`
img6 = `<img class="imgverso" src="Imagens/tripletsparrot.gif">`
img7 = `<img class="imgverso" src="Imagens/unicornparrot.gif">`

let desenhopar = [img1,img1,img2,img2,img3,img3,img4,img4,img5,img5,img6,img6,img7,img7];
let baralho =[];

for(let i=0; i<numerocartas;i++){
    baralho.push(desenhopar[i]);
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
        novacarta.innerHTML += ` <div class="face frente-carta" >
        <img src="Imagens/front.png"/>
      </div>
      <div class="face verso-carta">
        ${baralho[i]}
      </div>`;
      document.querySelector(".container").appendChild(novacarta);
    }
 }
 construirCarta();



// Virar carta
let qtdJogadas = 0;
let compararcarta = [];

 function virarcarta(elemento){
    elemento.classList.add("virar");

     if(compararcarta.length<2){
        compararcarta.push(elemento.querySelector(".imgverso"));
        
    
      if(compararcarta.length==2){
        if(compararcarta[0].src == compararcarta[1].src){
            compararcarta[0].classList.add("finalizado");
            compararcarta[1].classList.add("finalizado");
            setTimeout(finaljogo,500);
            parcerto();
        }
        else{
            setTimeout(desvirarcartas,1000);
        }
     }
    } 
    qtdJogadas++;
    console.log(qtdJogadas);
    console.log(compararcarta);
  
    }

 function desvirarcartas(){
     let desvirarcarta = document.querySelectorAll(".virar");
     desvirarcarta.forEach(carta=>{carta.classList.remove("virar")});
     compararcarta=[];
  }

  function parcerto(){
     let par = document.querySelectorAll(".finalizado");
     par.forEach(carta=>{carta.parentNode.classList.add("normal")});
     compararcarta=[];
  }
  

function finaljogo(){
    let cartasviradas = document.querySelectorAll(".finalizado").length;
    if(numerocartas == cartasviradas){
        alert(`Parabéns! Você finalizou o jogo em ${qtdJogadas} jogadas!`);
   }
   compararcarta=[];
   console.log(cartasviradas);
}
