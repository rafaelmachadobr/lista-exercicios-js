# Estrutura de repetição

## Introdução

A estrutura de repetição é utilizada para executar um bloco de código várias vezes, de acordo com uma condição ou com um contador.

## For

O for é uma estrutura de repetição que executa um bloco de código um número determinado de vezes. É muito utilizado quando se sabe a quantidade de vezes que o bloco de código deve ser executado.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

## For In

O for in é uma estrutura de repetição que executa um bloco de código para cada propriedade de um objeto.

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  altura: 1.8,
};

for (let propriedade in pessoa) {
  console.log(propriedade);
}
```

## For Of

O for of é uma estrutura de repetição que executa um bloco de código para cada item de um array.

```javascript
const frutas = ["Maçã", "Banana", "Pera"];

for (let fruta of frutas) {
  console.log(fruta);
}
```

## While

O while é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira. É muito utilizado quando não se sabe a quantidade de vezes que o bloco de código deve ser executado.

```javascript
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

## Do While

O do while é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira. É muito utilizado quando não se sabe a quantidade de vezes que o bloco de código deve ser executado.

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

## Exercícios

- [Exercício 1](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaRepeticao/ex01/)
- [Exercício 2](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaRepeticao/ex02/)
- [Exercício 3](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaRepeticao/ex03/)
- [Exercício 4](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaRepeticao/ex04/)
- [Exercício 5](https://rafaelmachadobr.github.io/lista-exercicios-js/estruturaRepeticao/ex05/)