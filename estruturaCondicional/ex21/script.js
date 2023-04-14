let contagem = 0;

alert("Responda as perguntas com sim ou não.");

const resposta1 = prompt(
  "Telefonou para a vítima? (sim ou não) "
).toLowerCase();
if (resposta1 === "sim" || resposta1 === "s") {
  contagem++;
}

const resposta2 = prompt(
  "Esteve no local do crime? (sim ou não) "
).toLowerCase();
if (resposta2 === "sim" || resposta2 === "s") {
  contagem++;
}

const resposta3 = prompt("Mora perto da vítima? (sim ou não) ").toLowerCase();
if (resposta3 === "sim" || resposta3 === "s") {
  contagem++;
}

const resposta4 = prompt("Devia para a vítima? (sim ou não) ").toLowerCase();
if (resposta4 === "sim" || resposta4 === "s") {
  contagem++;
}

const resposta5 = prompt(
  "Já trabalhou com a vítima? (sim ou não) "
).toLowerCase();
if (resposta5 === "sim" || resposta5 === "s") {
  contagem++;
}

if (contagem === 2) {
  alert("Você é suspeito(a) do crime.");
} else if (contagem >= 3 && contagem <= 4) {
  alert("Você é cúmplice do crime.");
} else if (contagem === 5) {
  alert("Você é o assassino(a)!");
} else {
  alert("Você é inocente.");
}
