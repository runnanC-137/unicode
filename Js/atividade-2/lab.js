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

function quatro() {
    const numero = parseInt(prompt("Digite um numero: "))
    let ePrimo = false
    for (let divisor = 2; divisor < num; divisor++) 
        if (num % divisor == 0) ePrimo = false;
        ePrimo = true;
    
}

function cinco() {
    const numeros = []
    while  (true) {
        const numero = parseInt(prompt("Digite um numero: "))
        if (!numero) break
        numeros.push(numero)

    }
    media = numeros.reduce((acumulador, valor) => acumulador+valor, 0) / numeros.length
    console.log(`a media do array ${numeros} é igual a ${media}`)
}

cinco()