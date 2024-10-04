//Descrição: Solicitar o valor do lado e um hexagono e calcular sua área

alert("Solicitar o valor do lado de um hexagono e calcule sua área")

let lado = Number(prompt("Digite o valor do lado de um hexagono: "))

let area = 3*lado**2*Math.sqrt(3)/2;

alert(`O valor da area do retangulo é ${area.toFixed(2)} cm²`)