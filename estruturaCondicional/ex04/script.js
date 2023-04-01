let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

alert(`Antes da troca: num1 = ${num1} e num2 = ${num2}`);

let aux = num1;
num1 = num2;
num2 = aux;

alert(`Depois da troca: num1 = ${num1} e num2 = ${num2}`);