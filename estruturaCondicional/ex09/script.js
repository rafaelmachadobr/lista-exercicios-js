const valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "));
const horasTrabalhadas = parseFloat(
  prompt("Digite a quantidade de horas trabalhadas: ")
);

const salarioBruto = valorHora * horasTrabalhadas;

let ir = 0;
if (salarioBruto > 2500) {
  ir = salarioBruto * 0.2;
} else if (salarioBruto > 1500) {
  ir = salarioBruto * 0.1;
} else {
  ir = salarioBruto * 0.05;
}

const inss = salarioBruto * 0.1;

const fgts = salarioBruto * 0.11;

const totalDescontos = ir + inss;

const salarioLiquido = salarioBruto - totalDescontos;

alert(`Salário Bruto: (${valorHora} * ${horasTrabalhadas}) : R$ ${salarioBruto.toFixed(
  2
)}
(-) IR (${((ir / salarioBruto) * 100).toFixed(0)}%) : R$ ${ir.toFixed(2)}
(-) INSS (${((inss / salarioBruto) * 100).toFixed(0)}%) : R$ ${inss.toFixed(
  2
)}
FGTS (11%) : R$ ${fgts.toFixed(2)}
Total de descontos : R$ ${totalDescontos.toFixed(2)}
Salário Líquido : R$ ${salarioLiquido.toFixed(2)}`);
