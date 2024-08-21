prompt = require("prompt-sync")()
//primeiro
const um = "1"
const dois = 2

//segundo
const valorUm = parseFloat(prompt("Digite o primeiro numero: "))
const valorDois = parseFloat(prompt("Digite o segundo numero: "))
const valorTres = parseFloat(prompt("Digite o terceiro numero: "))
const mediaGeometrica = Math.pow(valorUm * valorDois * valorTres, 1/3)
console.log(mediaGeometrica)

//terceito
const PI = Math.PI
const R = parseFloat(prompt("Digite o valor do raio: "))
const perimetro = 2 * PI * R
console.log(perimetro)

//quarto
const palavra = prompt("Digite uma palavra: ")
const novaPalavra = palavra.replace("a", "e")
console.log(novaPalavra)

//quinto
const A = "A mama"
const comecaComA = A.charAt(0) == "A"
console.log(
    `A palavra começa com A? ${comecaComA ? "Sim" : "Não"}`
)