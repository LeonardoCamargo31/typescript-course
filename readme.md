# Curso de TypeScript

## O que é TypeScript

É um superset do JavaScript, ou seja adiciona nova features ao JavaScript. E essas novas features são basicamente tipagem estática. E no final compila tudo para JavaScript.

**Tipagem estática**: é quando definimos o tipo das nossas variáveis e retorno de função, antes da compilação.

## Por que usar TypeScript

- **Evita retorno inesperados**: como JavaScript é dinâmico, isso acaba gerando retorno inesperados.

- **Avisa se estiver fazendo algo errado**: Por exemplo quando for somar um int com uma string ele vai avisar que não pode fazer isso.

- **Já funciona como uma espécie de documentação do código**: Vendo a interface tu já entende o que é cada coisa.

- **Deixa sua IDE poderosa**: Quando uma string por exemplo, já vai mostrar métodos que podemos usar.

## Desvantagens do TypeScript

- Necessita ser compilado, assim teremos alguns passos a mais, que seja no webpack e etc.

- Aprendizagem inicial dos tipos e boas práticas.

- Erros sem sempre muitos claros ou então grandes.

Código em JavaScript

```js
const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const button = document.getElementById('button')

function sum(a, b){
  return a + b
}

button.addEventListener('click',()=>{
  const result = sum(input1.value,input2.value)
  console.log(result)
})
```

Código em TypeScript

```ts
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement
const button = document.getElementById('button')

function sum(a:number, b:number){
  return a + b
}

button.addEventListener('click',()=>{
  const result = sum(Number(input1.value),Number(input2.value))
  console.log(result)
})

// para compilar: tsc index.ts --watch
```

Para definir regras para o TypeScript, e para definir isso usamos um arquivo tsconfig.json

Comando para criar o tsconfig.json

```txt
tsc --init
```
