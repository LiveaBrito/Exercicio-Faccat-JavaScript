/*Descrição   : Escreva um algoritmo para ler o salário mensal atual de um
funcionário e o percentual de reajuste. Calcular e escrever o valor do
novo salário.*/

// Seção de Declarações das variáveis 
alert("Lendo o salário mensal e atual do funcionário")

// Seção de Comandos, procedimento, funções, operadores, etc... 
let salarioMensal = parseFloat(prompt("Digite o salario mensal atual: "))

let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste do salario: "))

let valorReajuste1 = (percentualReajuste / 100) * salarioMensal
let novoSalario1 = (salarioMensal + valorReajuste)

alert("O valor do reajuste: R$ " + valorReajuste1)
alert("O novo Salario do funcionário: R$ " + novoSalario1)
