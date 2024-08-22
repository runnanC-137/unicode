prompt = require("prompt-sync")()
const { isPalindromo } = require("./main")
const palavra = prompt("Digite uma palavra: ")
console.log(`A palavra ${palavra} ${isPalindromo(palavra) ? "é" : "não é" } um Palindromo`)
