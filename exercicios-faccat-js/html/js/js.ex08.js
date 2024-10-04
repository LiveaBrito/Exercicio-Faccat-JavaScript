
/*Descrição   : Escreva um algoritmo para ler o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total de
eleitores.*/

alert("Lendo os números de votos brancos, nulos e válidos - Eleição")

// Seção de Comandos, procedimento, funções, operadores, etc... 
let totalEleitores = Number(prompt("Digite o total de eleitores: "))

let votosBrancos = Number(prompt("Digite a quantidade de votos Brancos: "))

let votosNulos = Number (prompt("Digite a quantidade de votos Nulos: "))

let votosValidos = Number(prompt(("Digite a quantidade de votos Válidos: ")))

let percentualBrancos = (votosBrancos/totalEleitores) * 100
let percentualNulos = (votosNulos/totalEleitores) * 100
let percentualValidos = (votosValidos/totalEleitores) * 100

alert(`Percentual de votos Brancos: ${percentualBrancos} %`)
alert(`Percentual de votos Brancos: ${percentualNulos} %`)
alert(`Percentual de votos Brancos: ${percentualValidos} %`)

