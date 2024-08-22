prompt = require("prompt-sync")()
const { ultimoSobrenome } = require("./main")
const nomeCompleto = (prompt("Digite o seu nome completo: "))
console.log(ultimoSobrenome(nomeCompleto))