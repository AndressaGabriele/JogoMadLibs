const inputDoUsuario = require("readline-sync");

let adjetivo=inputDoUsuario.question("Escreva aqui um adjetivo")
let quantidade=inputDoUsuario.question("Digite aqui uma quantidade")
let quantidadeConvertida=Number(quantidade)
let aritimetica=quantidadeConvertida+quantidadeConvertida
let substantivo=inputDoUsuario.question("Escreva aqui um substantivo")
let pronome=inputDoUsuario.question("Escreva aqui um pronome")
let verbo=inputDoUsuario.question("Escreva aqui um verbo")
console.log(adjetivo,substantivo,pronome,verbo)


let historia='"'+pronome+ " Passeava pelo parque quando"+" "+aritimetica+" "+adjetivo+" passaro pousou em sua cabeça após "+verbo+" muito voltou para "+"\n"+
substantivo+" onde contou tudo para sua mae como recomendou pops"+'"'
console.log(historia);