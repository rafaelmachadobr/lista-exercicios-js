const tipoCarne = prompt(
  "Qual tipo de carne você deseja comprar? (File Duplo, Alcatra ou Picanha)"
);
const qtdCarne = parseFloat(prompt("Qual a quantidade de carne em Kg?"));

let precoCarne = 0;

if (tipoCarne === "File Duplo") {
  if (qtdCarne <= 5) {
    precoCarne = 4.9;
  } else {
    precoCarne = 5.8;
  }
} else if (tipoCarne === "Alcatra") {
  if (qtdCarne <= 5) {
    precoCarne = 5.9;
  } else {
    precoCarne = 6.8;
  }
} else if (tipoCarne === "Picanha") {
  if (qtdCarne <= 5) {
    precoCarne = 6.9;
  } else {
    precoCarne = 7.8;
  }
} else {
  alert("Tipo de carne inválido!");
}

const tipoPagamento = prompt(
  "Qual o tipo de pagamento? (Dinheiro ou Cartão Tabajara)"
);

let desconto = 0;
if (tipoPagamento === "Cartão Tabajara") {
  desconto = precoCarne * 0.05;
} else {
  alert("Tipo de pagamento inválido!");
}

let valorAPagar = precoCarne - desconto;

alert(
  `Tipo de carne: ${tipoCarne}
Quantidade de carne: ${qtdCarne} Kg
Preço total: R$ ${precoCarne}
Tipo de pagamento: ${tipoPagamento}
Valor do desconto: R$ ${desconto}
Valor a pagar: R$ ${valorAPagar}`
);
