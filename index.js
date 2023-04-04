const inputDoUsuario = require("readline-sync");

let escolhaHistoria=inputDoUsuario.question("Qual historia deseja: Passeando no parque, Encontrando um rato, Viajando pelo espaço? ")
if(escolhaHistoria!=="Passeando no parque"&&escolhaHistoria!=="Encontrando um rato"&&escolhaHistoria!=="Viajando pelo espaço"){
    console.log("Valido apenas uma das 3 historias")
}else{
let adjetivo=inputDoUsuario.question("Escreva aqui um adjetivo")
let quantidade=inputDoUsuario.question("Digite aqui uma quantidade")
let quantidadeConvertida=Number(quantidade)
let aritmetica=quantidadeConvertida+quantidadeConvertida
let substantivo=inputDoUsuario.question("Escreva aqui um substantivo")
let pronome=inputDoUsuario.question("Escreva aqui um pronome")
let verbo=inputDoUsuario.question("Escreva aqui um verbo")
console.log(adjetivo,substantivo,pronome,verbo)


let historia='"'+pronome+ " Passeava pelo parque quando"+" "+aritmetica+" "+adjetivo+" passaro pousou em sua cabeça após "+verbo+" muito voltou para "+"\n"+
substantivo+" onde contou tudo para sua mae como recomendou pops"+'"'

let historiaDois=`${pronome} estava em um ${substantivo}
almoçando em um ambiente ${adjetivo}, quando comecei a
${verbo}, ${aritmetica} terriveis ratos começou a andar pelo restaurante.`

let historiaTres=`${pronome} viajavam pelo espaço, quando avistaram ${aritmetica} estrelas ${adjetivo},
sentiram ${substantivo} e ${verbo}, por fim voltaram para contar a NASA.`

if(escolhaHistoria==="Passeando no parque"){
    console.log(historia)
}else if(escolhaHistoria==="Encontrando um rato"){
    console.log(historiaDois)
} else if(escolhaHistoria==="Viajando pelo espaço"){
    console.log(historiaTres)
}

}


 
