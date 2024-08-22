/** 
    @param { float } altura
    @param { float } peso  
*/
const imc = (altura, peso) => (peso/(altura*altura)).toFixed(2)
    
const volumeEsfera = (raio) => ((4 * Math.PI * (raio ** 3)) / 3).toFixed(2)

class Triangulo {
    altura
    b
    c
    a
    perimetro
    area
    constructor(altura, a, b, c) {
        this.altura = altura
        this.a = a
        this.b = b
        this.c = c
        this.perimetro = a + b + c
        this.area = (c * altura) / 2
    }
}

const calculaBaskara = (a, b, c) => {
    const delta = b**2 - 4*a*c
    const raizDeDelta = Math.sqrt(delta)
    return {
        x1: ((-b) + raizDeDelta)/2*a,
        x2: ((-b) - raizDeDelta)/2*a
    }
}

/** 
* @param { string } palavra 
*/
const isPalindromo = (palavra) => palavra === palavra.split("").reverse().join("")
/** 
* @param { string } palavra 
* @param { string } palavra2
*/
const isAnagrama = (palavra, palavra2) => palavra.split("").sort().join("") === palavra2.split("").sort().join("")
/** 
 * 7
* @param { string } palavra 
*/
const quantidadeDeEspacos = (palavra) => (palavra.length - palavra.split(" ").join("").length)
/** 
 * 7
* @param { string } nomeCompleto 
*/
const ultimoSobrenome = (nomeCompleto) => {
    nomeCompleto = nomeCompleto.split(" ")
    const ultimoNome = nomeCompleto.pop()
    const restoNome = nomeCompleto.join(" ")

    return `${ultimoNome} ${restoNome}`
}
module.exports = {
    imc,
    volumeEsfera,
    ultimoSobrenome,
    quantidadeDeEspacos,
    isAnagrama, 
    isPalindromo, 
    calculaBaskara,
    Triangulo
}
/* Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se
    pode ser lida da mesma forma de trás para frente).
    6. Crie um programa que leia duas palavras e verifique se a segunda palavra é um
    anagrama da primeira.
    7. Faça um programa que receba uma frase e exiba a quantidade de espaços em branco
    presentes na mesma.
    8. Escreva um programa que receba um nome completo e exiba o sobrenome (último
    nome) primeiro. */