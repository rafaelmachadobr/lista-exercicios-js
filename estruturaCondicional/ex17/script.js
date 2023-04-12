const numero = parseInt(prompt("Digite um número inteiro menor que 1000: "));

if (numero < 1 || numero > 999) {
  alert("Número inválido!");
  location.reload();
}

const centena = Math.floor(numero / 100);
const dezena = Math.floor((numero % 100) / 10);
const unidade = Math.floor(numero % 10);

const centenaExtenso = centena === 1 ? "centena" : "centenas";
const dezenaExtenso = dezena === 1 ? "dezena" : "dezenas";
const unidadeExtenso = unidade === 1 ? "unidade" : "unidades";

const mensagem = `O número ${numero} possui ${centena} ${centenaExtenso}, ${dezena} ${dezenaExtenso} e ${unidade} ${unidadeExtenso}.`;

document.write(mensagem);
