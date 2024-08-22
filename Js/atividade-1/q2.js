prompt = require("prompt-sync")()
const { volumeEsfera } = require("./main")


const raio = parseFloat(prompt("Digite o raio de uma esfera: "))

console.log(`O volume da esfera é ${volumeEsfera(raio)}`)
