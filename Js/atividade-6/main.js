prompt = require("prompt-sync")()

function um(){

    const numero = parseInt(prompt("Digite um numero: "))
    console.log(`O numero ${numero} ${(!(numero%3)  &&  !(numero%5))? "é": "não é"} divisivel por 3 e por 5 ao mesmo tempo.`)
}
function dois() {
    const numeros = []

    for(let i=0; i<3; i++) {
        const numero = parseInt(prompt("Digite um numero: "))
        numeros.push(numero)
    }

    maior = Math.max.apply(null, numeros)
    menor = Math.min.apply(null, numeros)
    console.log(`O maior número é ${maior} e o menor número é ${menor}`)
}
function tres() {
    const idade_pessoas = []
    for(let i=1; i<=3; i++) {
        const idade = parseInt(prompt(`Digite a idade da pessoa ${i}: `))
        idade_pessoas.push(idade)
    }

    const maior_de_idade = idade_pessoas.filter((idade) => idade >=18)

    switch (maior_de_idade.length) {
        case idade_pessoas.length: 
            console.log(`Todos são maiores de idade`)
            break
        case 0: 
            console.log(`Todos são menores de idade`) 
            break
        default: idade_pessoas.forEach(
            (idade, index) => console.log(`A pessoa ${index+1} é ${idade>=18 ? "maior" : "menor"} de idade`)
        )

    }
}

function quatro() {

    const dia_da_semana = prompt(`Digite um dia da semana: `).toLowerCase().replace("-feira", '').replace('ç', 'c')
    
    const dias_da_semana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    
    switch (dias_da_semana.indexOf(dia_da_semana)) {
        case 0: case dias_da_semana.length-1:
            console.log(`${dia_da_semana} não é um dia útil`)
            break
        case -1:
            console.log(`${dia_da_semana} não é um dia da semana`)
            break
        default:
            console.log(`${dia_da_semana}-feira é um dia útil`)
    }
}

function cinco() {

    const ePrimo = n => {
        if (n<2) return false
        for(let i=2; n>i; i++) 
            if (n%i==0) return false
        return true
    }
    const numero = parseInt(prompt(`Digite um numero: `))
    const menores_lista = []
    for (let menores=numero-1; menores>=0; menores--) {
        if (ePrimo(menores)) menores_lista.push(menores)
    }
    console.log(menores_lista)
}

const fibonacci = n => (n<=1) ? n : fibonacci(n-1) + fibonacci(n-2)
function seis() {
    const fibo_sec = []
    const numero = parseInt(prompt(`Digite um numero: `))
    for (let i=1; i<=numero; i++) fibo_sec.push(fibonacci(i))
    console.log(fibo_sec)
}


function sete() {
    const numeros = []
    while (true) {
        const numero = parseInt(prompt("Digite um numero: "))
        if (!numero) break
        numeros.push(numero)

    }
    maior = Math.max.apply(null, numeros)
    console.log(`O maior numero do array é ${maior}`)
    console.log(numeros)
}

function oito() {

    const frase = prompt(`Digite uma frase: `)
    const quant_vogais = frase.match(/[aáàeéiíoóuú]/gi).length
    console.log(`A frase '${frase}' tem ${quant_vogais} vogais`)
    /* let quant_vogais = 0
    for (let i=0;i<frase.length;)
        if ('aáàeéiíoóuú'.includes(frase)) quant_vogais++ */
}