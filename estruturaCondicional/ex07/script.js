const turno = prompt(
  "Digite o turno que você estuda: M (matutino), V (vespertino) ou N (noturno)"
);

if (turno === "M") {
  alert("Bom dia!");
} else if (turno === "V") {
  alert("Boa tarde!");
} else if (turno === "N") {
  alert("Boa noite!");
} else {
  alert("Valor inválido!");
}
