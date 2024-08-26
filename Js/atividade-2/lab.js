prompt = require("prompt-sync")()

function um(){

    const idade = parseInt(prompt("Digite sua idade: "))

    if ((18 > idade  && idade > 15) || idade > 70) {
        console.log(`Você tem ${idade} anos e está apto a votar, pore, não e obrigado por lei`)
    } else if (idade < 15) {
        console.log(`Você tem ${idade} anos, não está apto a votar`)
    } 
    else {
        console.log(`Você tem ${idade} anos, está apto a votar e é obrigado por lei`)
    }
}

function dois() {
    const pares = []
    const impares = []
    let o = 51
    for(let i = 2; i<=50; i+=2) {
        pares.push(i)
        impares.push(o)
        o+=2
    }
    console.log(pares, impares)
}

function tres() {
    const numero = parseInt(prompt("Digite um numero: "))
    const potencia = parseInt(prompt("Digite uma potencia: "))
    let valor = numero
    for(let i=1; i<potencia; i++){
        valor *= numero
    }
    console.log(`a potencia do numero ${numero} elevado a ${potencia} e igual a ${valor}`)
}

function ePrimo(num) {
    for (let divisor = 2; divisor < num; divisor++) 
        if (num % divisor == 0) return false;
        return true;
}

function quatro() {
    const primos = []
    const numero = parseInt(prompt("Digite um numero: "))
    for(let i=1; i<numero; i++){
        if (ePrimo(i)) primos.push(i)
    }
    
    
}

function cinco() {
    const numeros = []
    valor = 0
    while  (true) {
        const numero = parseInt(prompt("Digite um numero: "))
        if (!numero) break
        valor =+ numero
        numeros.push(numero)

    }
    media = valor / numeros.length
    console.log(`a media do array ${numeros} é igual a ${media}`)
}

cinco()