prompt = require("prompt-sync")()
const { imc } = require("./main")

const altura = parseFloat(prompt("Digite sua altura: "))
const peso = parseFloat(prompt("Digite sua peso: "))
const meuImc = imc(altura, peso)
console.log(`Seu imc é ${ meuImc } `)