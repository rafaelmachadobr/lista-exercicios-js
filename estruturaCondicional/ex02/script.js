const nota1 = prompt("Digite a primeira nota");
const nota2 = prompt("Digite a segunda nota");

const media = (Number(nota1) + Number(nota2)) / 2;

document.write("Média: " + media);

if (media === 10) {
  alert("Aprovado com distinção");
} else if (media >= 7) {
  alert("Aprovado");
} else {
  alert("Reprovado");
}
