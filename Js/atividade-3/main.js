prompt = require("prompt-sync")()

function lerVetorDeInteiros(tamanho) {
    console.log(`criando uma lista de inteiros com ${tamanho} posições`)
    const vetor = []
    for(let i=0; i<tamanho; i++)
        vetor.push(parseInt(prompt(`Digite um numero para ser adicionado na lista na posição ${i}: `)))
    return vetor
}

function um() {
    const primeiroVetor = lerVetorDeInteiros(4)
    const segundoVetor = lerVetorDeInteiros(4)
    const soma = [...primeiroVetor, ...segundoVetor].reduce((acc, value)=>acc+value,0)
    console.log(`A soma dos vetores é igual a ${soma}`)
}

function dois() {
    const vetor = lerVetorDeInteiros(4)
    maior = vetor.sort((a,b)=>b-a)[0]
    console.log(`O maior valor da lista e ${maior}`)
}

function tres() {
    const vetor = lerVetorDeInteiros(4)
    const pares = vetor.filter(value=> value%2!=0).length
    console.log(!pares ? "Todos os elementos são pares" : "O vetor não possui somentes numeros pares")
}


function quatro() {
    function ePrimo(num) {
        if (num<2) return false
        for (let divisor = 2; divisor < num; divisor++) 
            if (num % divisor == 0) return false;
        return true;
    }
    function callback(vetor) {
        return vetor.filter(ePrimo)
    }
    vetorDeVetores = [
        [1, 2, 4, 5, 7,3, 29], 
        [11, 13, 56, 114, 34], 
        [45, 78, 17, 19, 35, 87]
    ]
    const vetMod = vetorDeVetores.map(callback)
    console.log(vetMod)
}

function cinco() {
    
}
