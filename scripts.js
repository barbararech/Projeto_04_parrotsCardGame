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


let baralho = [];
// Embaralhar cartas
baralho.sort(comparador);

function comparador(){
    return Math.random() -0.5;
}

let desenho =[ "bobrossparrot", "explodyparrot", "fiestaparrot", 
"metalparrot", "revertitparrot", "tripletsparrot", 
"unicornparrot"];

// Construir carta
function construirCarta(){
    for (let i=0; i==numerocartas; i++){
        novacarta = document.createElement("div");
        novacarta.classlist.add("carta");
        novacarta.innerHTML += ` <div class="frente-carta">
        <img src="Imagens/front.png"/>
      </div>
      <div class="verso-carta">
        <img src="Imagens/${desenho[i]}.gif"/>
      </div>`;
      document.querySelector(".container").appendChild(novacarta);
    }
 }
 construirCarta();


// Inserir carta
function colocarCartas(){
    const container = document.querySelector(".container");
    for(let i=0; i==numerocartas; i++){
        container.innerHTML+=`baralho[i]`;
    }
}
colocarCartas();
