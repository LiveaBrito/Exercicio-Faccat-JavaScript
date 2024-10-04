//Solicitar tres valores e exibir a quantidade dedias vividos
alert("Descobrindo a quantidade de dias vividos")

let ano = parseInt(prompt("Digite a quantidade de anos vividos: "))

let mes = parseInt(prompt("Digite a quantidade de meses passado do seu ultimo aniversario: "))

let diasVividos = parseInt(prompt("Digite a quantidade de dias passados do seu ultimo mesversario: "))

diasVividos = ano*365+mes*30+diasVividos

alert("A quantidade de dias vividos é: " + diasVividos)
