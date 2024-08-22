prompt = require("prompt-sync")()
const { isAnagrama } = require("./main")
const palavra1 = (prompt("Digite uma palavra: "))
const palavra2 = (prompt("Digite outra palavra: "))
console.log(`${palavra2} ${
    isAnagrama(palavra1, palavra2)
    ? "é"
    : "não"
} um anagrama de ${palavra1}`)
