const numeroSemana = Number(prompt("Digite um número da semana de 1 a 7: "));

switch (numeroSemana) {
  case 1:
    alert("Domingo");
    break;
  case 2:
    alert("Segunda-feira");
    break;
  case 3:
    alert("Terça-feira");
    break;
  case 4:
    alert("Quarta-feira");
    break;
  case 5:
    alert("Quinta-feira");
    break;
  case 6:
    alert("Sexta-feira");
    break;
  case 7:
    alert("Sábado");
    break;
  default:
    alert("Número inválido");
}
