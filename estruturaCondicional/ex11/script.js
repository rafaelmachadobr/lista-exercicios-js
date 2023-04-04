const nota1 = parseFloat(prompt("Digite a 1ª nota: "));
const nota2 = parseFloat(prompt("Digite a 2ª nota: "));

const media = (nota1 + nota2) / 2;

document.write("Média " + media + "<br />")

if (media >= 9) {
    document.write("Conceito A");
} else if (media >= 7.5) {
    document.write("Conceito B");
} else if (media >= 6) {
    document.write("Conceito C");
} else if (media >= 4) {
    document.write("Conceito D");
} else {
    document.write("Conceito E");
}