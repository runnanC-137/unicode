prompt = require("prompt-sync")()
const { quantidadeDeEspacos } = require("./main")
const palavra = (prompt("Digite uma palavra: "))
console.log(`A frase tem ${quantidadeDeEspacos(palavra)} espaço`)