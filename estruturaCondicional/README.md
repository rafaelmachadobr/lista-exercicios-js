# Estrutura condicional

## Introdução

A estrutura condicional é uma estrutura de controle que permite que o programa execute uma ação ou outra dependendo de uma condição. A estrutura condicional é composta por uma expressão lógica que é avaliada como verdadeira ou falsa. Se a expressão for verdadeira, o programa executa uma ação. Se a expressão for falsa, o programa executa outra ação.

## Estrutura condicional simples

A estrutura condicional simples é composta por uma expressão lógica e uma ação. Se a expressão for verdadeira, o programa executa a ação. Se a expressão for falsa, o programa não executa a ação.

```javascript
if (condição) {
  ação;
}
```

## Estrutura condicional composta

A estrutura condicional composta é composta por uma expressão lógica e duas ações. Se a expressão for verdadeira, o programa executa a primeira ação. Se a expressão for falsa, o programa executa a segunda ação.

```javascript
if (condição) {
  ação1;
} else {
  ação2;
}
```

## Estrutura condicional encadeada

A estrutura condicional encadeada é composta por uma expressão lógica e duas ou mais ações. Se a expressão for verdadeira, o programa executa a primeira ação. Se a expressão for falsa, o programa executa a segunda ação. Se a segunda ação for falsa, o programa executa a terceira ação. E assim por diante.

```javascript
if (condição) {
  ação1;
} else if (condição) {
  ação2;
} else if (condição) {
  ação3;
} else {
  ação4;
}
```

## Exercícios

1 - Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex01/)

2 - Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

- A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
- A mensagem "Reprovado", se a média for menor do que sete;
- A mensagem "Aprovado com Distinção", se a média for igual a dez.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex02/)

3 - Faça um script que leia três números inteiros e mostre o maior deles.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex03/)

4 - Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex04/)

5 - Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex05/)

6 - Faça um script que leia três números inteiros e mostre-os em ordem crescente.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex06/)

7 - Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex07/)

8 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

- salários até R$ 280,00 (incluindo) : aumento de 20%
- salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
- salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
- salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
  - o salário antes do reajuste;
  - o percentual de aumento aplicado;
  - o valor do aumento;
  - o novo salário, após o aumento.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex08/)

9 - Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR:

- Salário Bruto até 900 (inclusive) - isento
- Salário Bruto até 1500 (inclusive) - desconto de 5%
- Salário Bruto até 2500 (inclusive) - desconto de 10%
- Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

  | Salário Bruto: (5 \* 220) | R$ 1100,00 |
  | ------------------------- | ---------- |
  | (-) IR (5%)               | R$ 55,00   |
  | (-) INSS ( 10%)           | R$ 110,00  |
  | FGTS (11%)                | R$ 121,00  |
  | Total de descontos        | R$ 165,00  |
  | Salário Liquido           | R$ 935,00  |

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex09/)

10 - Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex10/)

11 - Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

| Média de Aproveitamento | Conceito |
| ----------------------- | -------- |
| Entre 9.0 e 10.0        | A        |
| Entre 7.5 e 9.0         | B        |
| Entre 6.0 e 7.5         | C        |
| Entre 4.0 e 6.0         | D        |
| Entre 4.0 e zero        | E        |

O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex11/)

12 - Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

Dicas:

Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;

Triângulo Equilátero: três lados iguais;

Triângulo Isósceles: quaisquer dois lados iguais;

Triângulo Escaleno: três lados diferentes;

[Resolução](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaCondicional/ex12/)