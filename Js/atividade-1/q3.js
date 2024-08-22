prompt = require("prompt-sync")()
const { Triangulo } = require("./main")


const lado1 = parseFloat(prompt("Digite o lado 1 do triangulo: "))
const lado2 = parseFloat(prompt("Digite o lado 2 do triangulo: "))
const base = parseFloat(prompt("Digite a base do triangulo: "))
const altura = parseFloat(prompt("Digite a altura do triangulo: "))
const triangulo = new Triangulo(
    altura,
    lado1,
    lado2,
    base
)
console.log(`O perimetro do triangulo é ${triangulo.perimetro}`)
console.log(`A area do triangulo é ${triangulo.area}`)