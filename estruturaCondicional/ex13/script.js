const a = parseFloat(prompt("Digite o valor de a: "));
const b = parseFloat(prompt("Digite o valor de b: "));
const c = parseFloat(prompt("Digite o valor de c: "));

const delta = b ** 2 - 4 * a * c;

if (delta < 0) {
  alert("Não existe raiz real");
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert("As raízes da equação são:");
  alert("x1 = " + x1);
  alert("x2 = " + x2);
}
