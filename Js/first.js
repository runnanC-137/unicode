Math = require("Math")
//primeiro
const um = "1"
const dois = 2

//segundo
const valorUm = parceFloat(prompt("Digite o primeiro numero: "))
const valorDois = parceFloat(prompt("Digite o segundo numero: "))
const valorTres = parceFloat(prompt("Digite o terceiro numero: "))
Math.pow(valorUm * valorDois * valorTres, 1/3)
console.log(perimetro)

//terceito
const PI = Math.PI
const R = parceFloat(prompt("Digite o valor do raio: "))
const perimetro = 2 * PI * R
console.log(perimetro)

//quarto
const palavra = prompt("Digite uma palavra: ")
const novaPalavra = palavra.replace("a", "e")
console.log(novaPalavra)

//quinto
const A = "A mama"
const comecaComA = A.charAt(0) == "A"
cosole.log(
    `A palavra começa com A? ${comecaComA ? "Sim" : "Não"}`
)