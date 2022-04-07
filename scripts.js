
function numeroCartas(){
    numerocartas=0;
   
    while(numerocartas % 2 != 0 || numerocartas <4 || numerocartas>14){
        numerocartas = Number(prompt("Com quantas cartas você quer jogar? (4 a 14)"));
      
        if(numerocartas % 2 != 0 || numerocartas <4 || numerocartas>14){
            alert("Valor inválido");
        }
    }
}
numeroCartas();

// let cartas = [];
// function colocarCartas(){
// const listacartas = document.querySelector(".container");
// for(let i=0; i=numerocartas; i++){
//     listacartas.innerHTML+=`cartas[i] `;
// }
// }
// colocarCartas();
