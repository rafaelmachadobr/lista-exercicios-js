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
