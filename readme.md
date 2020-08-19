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

```ts
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

Para definir regras para o TypeScript, e para definir isso usamos um arquivo tsconfig.tson

Comando para criar o tsconfig.tson

```txt
tsc --init
```

Ficar assistindo as alterações

```txt
tsc --watch
```

## Types

**boolean** (true/false)

```ts
let isOpen: boolean
isOpen = true
```

**String** ('foo',"foo" e `foo`)

```ts
let message: string
message = 'foo'
```

**Number** (int, float, hex, binary)

```ts
let total: number
total = 0
```

**Array** (type[] or Array<type>)

```ts
let itens: number[]
itens = [0, 1, 2, 3]
```

```ts
let list: string[]
list = ['foo', 'foo']
```

```ts
let names: Array<string>
names = ['joão', 'maria']
```

**Enum**

```ts
enum Colors {
  white = '#fff',
  black = '#000'
}
```

**Any** (qualquer coisa)

```ts
let coisa: boolean
coisa = true
```

**Void** (vazio)

```ts
function logger():void {
  console.log('foo')
}
```

**Null/undefined**

```ts
let bla: string | undefined
bla = 'foo'
```

**Never** (nunca vai retornar)

```ts
function error():never{
  throw new Error('error')
}
```

**Object**

```ts
let cart: object
cart = {
  key:'foo'
}
```

**Type inference**: não preciso definir o tipo, e depois atribuir a variável, pois passei o valor ele já identifica

```ts
let message2 = "mensagem definida"
```

## Type alias e Union

**Union** para dizer que pode ter dois tipos

```ts
function logDetails(uid:number | string,item:string){
  console.log(`A product with ${uid} has a title as ${item}.`)
}
```

Posso criar um **Type alias** para reutilizar

```ts
type Uid = number | string

function logInfo(uid:Uid, user:string){
  console.log(`A user with ${uid} has a name as ${user}.`)
}
```

```ts
type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform:Platform){
  console.log(`Platform is ${platform}.`)
}
// renderPlatform('ios')// don't work
renderPlatform('Windows')
```

## Estendendo Type Aliases com Intersection

**union** = string | undefined
**intersection** = AccountInfo & CharInfo

```ts
type AccountInfo = {
  id: number,
  name: string,
  email?: string //opcional string | undefined
}

const account: AccountInfo = {
  id: 123,
  name: "leonardo",
  email: "leonardo@gmail.com"
}

type CharInfo = {
  nickName: string,
  level: number
}

const char : CharInfo = {
  nickName: "Leo",
  level: 33
}

// estendendo type aliases com intersection
type PlayerInfo = AccountInfo & CharInfo

const playerInfo = {
  id: 1234,
  name: "leonardo",
  nickName: "Leo131",
  level: 50
}
```

## Classes

### **modifiers** = [public, protected, private e readonly]

- **public**:  pode ler, editar, fazer tudo.
- **protected**: consegue chamar a propriedade dentro da classe ou classe que estende, mas não consegue chamar fora da classe.
- **private**: não pode alterar ou lido fora da classe CharAccount
- **readonly**: pode ser lido, porem não editado ex john.level = 99

### **accessors** = get e set

```ts
// get
get getCity(){
  return this.city
}
// how use
john.getCity

// set
set setCity(city:string){
  this.city = city
}
// how use
john.setCity= "São Paulo"

```

### abstract

Classe abstrata não conseguimos criar obj a partir dela, não posso const person = new UserAccount('Leo',24), mas posso estende-la, e ela vai ser um modelo para outras classes

```ts
abstract class UserAccount{}

class CharAccount extends UserAccount{
  constructor(name:string, age:number, nickName: string){
    super(name, age)

    ...others
  }
}
```

### Example class

```ts
abstract class UserAccount{
  public name: string;
  protected age: number;

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  logDetails():void {
    console.log(`This player ${this.name} is ${this.age} years old.`)
  }
}


class CharAccount extends UserAccount{
  private nickName: string;
  readonly level: number
  city:string

  get getCity(){
    return this.city
  }

  set setCity(city:string){
    this.city = city
  }

  constructor(name:string, age:number, nickName: string, level: number, city: string){
    super(name, age)

    this.nickName = nickName
    this.level = level
    this.city = city
  }

  logCharDetails():void {
    console.log(`The player ${this.name} has the char ${this.nickName} at level ${this.level}`)
  }
}

const john = new CharAccount('John',33,'nicksasd',33,'Presidente Prudente')
console.log(john.level)
john.logCharDetails()
```

## Interfaces

Conjunto de dados que busca descrever a estrutura do objeto. Usada para objetos mais complexos.

```ts
interface Game {
  title:string
  description: string
  readonly genre: string  
  platform?: string[] // optional
  // assinatura do método
  getSimilars?: (title:string)=>void
}

// myGame.genre="other"
// console.log(myGame.genre) // not cant
```

Criando um objeto baseado em uma interface

```ts
const myGame : Game = {
  title:'The last of us',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['ps3','ps4'],
  getSimilars: (title:string) => {
    console.log(`Similar games to ${title}: Uncharted, A plague tale, Metro`)
  }
}
```

Estendendo uma interface com extends

```ts
interface DLC extends Game {
  originalGame:Game,
  newContent: string []
}

const leftBehind : DLC = {
  title:'The last of us - left behind',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['ps4'],
  originalGame: myGame,
  newContent: ["3 hours story"]
}
```

Implementar classe baseada em uma interface

```ts
class CreateGame implements Game{
  title:string
  description: string
  genre: string

  constructor(t:string, d:string, g:string){
    this.title= t
    this.description= d
    this.genre= g
  }
}
```

## Type alias vs Interface

### 1 - Definição

Type alias

```ts
type Game = {
  title: string
}

type DLC = {
  extra: string
}
```

Interface

```ts
interface Game {
  title: string
}

interface DLC {
  extra: string
}
```

### 2 - Intersection

Type alias: Vai ter que ter o title e extra

```ts
type GameCollection = Game & DLC
```

Interface

```ts
interface GameCollection extends Game, DLC {}
```

### 3 - Implements

Type alias

```ts
class CreateGame implements GameCollection {}
```

Interface

```ts
class CreateGame implements GameCollection {}
```

### 4 - Declarar função

Type alias

```ts
type getSimilars = (title: string) => void
```

Interface

```ts
interface getSimilars {
  (title: string): void
}
```

### 5 - Diferenças

A diferença é minima.

Com type pode declarar tipos primitivos, com interface não consigo.

```ts
type id = string | number
```

Apenas uma declaração por escopo

```ts
type Jquery = { a: string }
type Jquery = { b: string } // não deixa
```

Com interface consigo

```ts
interface Jquery{
  a:string
}

interface Jquery{
  b:string
}

// Ele vai fazer um merge das duas interfaces
const $: Jquery {
  a: "bla"
  b: "foo"
}
```

### Vantagem de type alias

- Digita menos, mais simples e flexível
- Mais simples de trabalhar com tipos primitivos
- Ele é mais recomendado na maioria das vezes
- Comece com types e caso for ficando mais complexo ou precise estender troque por interface

### Vantagem de interface

- Quando tiver criando libs, prefira interfaces, porque são mais extensíveis!
- Criando objetos/classes (POO)

## Generics

Sempre buscamos reutilizar código, mas quando começa a trabalhar com uma linguagem tipada, como por exemplo o typescript, tudo fica fortemente tipado, e isso acaba não sendo mais tão genérico.

Por isso temos o generics, não é o nível de uma linguagem dinâmica, mas já facilita bem mais o código e deixa ele bem mais flexível, para aceitar diferentes tipos de entradas.

### Algumas letras padrões, mas pode ser o que quiser

- S => State
- T => Type
- K => Key
- V => Value
- E => Element

```ts
// let state:number | string
// troca pelo S

// vamos estender de number e string
// e só aceitar esses tipos, não aceita mais
// const newState = useState<boolean>()
function useState<S extends number | string = string>(){
  let state: S

  function getState(){
    return state
  }

  function setState(newState: S){
    state = newState
  }
  
  return { getState, setState }
}
// defini como padrão/default string <S extends number | string = string>
//const newState = useState() // vai passar a aceitar string

// s => unknown/desconhecido
// passei um number ele passa a aceitar só number
const newState = useState<number>()

newState.setState(123) // number
console.log(newState.getState())

// quero que depois de definido não mude o tipo
// newState.setState("foo") // dê erro
// console.log(newState.getState())
```

## Type Utilities

Quando criamos tipos, seja com type alias ou interface, tem  alguns momentos que precisamos fazer uma operação ou outra, em cima do próprio tipo, e para isso temos os **type utilities**.

### Temos os Type Utilities mais comuns:

- Readonly
- Partial
- Pick
- Omit

A escrita deles é baseada em generics, exemplo:

```ts
const todo: Readonly<Todo>
```

Exemplo completo

```ts
type Todo = {
  title: string
  description: string
  completed: boolean
}

// todas as props viram readonly
const todo: Readonly<Todo> = {
  title: "Assistir curso",
  description: "Relembrar os detalhes",
  completed: false
}

// alterando diretamente o obj, isso pode ser um problema
// e não queremos que o obj seja alterado, quase como um freeze
// para isso vamos criar uma função updateTodo, para copiar e alterar os valores
// isso segue o principio de imutabilidade
// todo.completed = true

/// Partial
// fieldsToUpdate só props do todo
// ex passar uma prop diferente
// mas preciso passar o objeto inteiro, nada é opcional

// para isso uso o partial em fieldsToUpdate:Todo
// deixa todas as props opcionais para fieldsToUpdate
function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>){
  return {...todo,...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, { completed: true })
console.log(todo)


/// Pick
// quero que ele pegue do Todo o title e description
// type TodoPreview = {
//  title: string;
//  completed: boolean;
//}
type TodoPreview = Pick<Todo, "title"| "completed">

const todo3 : TodoPreview = {
  title: "Assistir de inglês",
  completed: true,
}

/// Omit
// quero omitir o description
// type TodoPreview2 = {
//  title: string;
//  completed: boolean;
//}
type TodoPreview2 = Omit<Todo, "description">

const todo4 : TodoPreview = {
  title: "Assistir de inglês",
  completed: true,
}
```

### Quando utilizar Pick e Omit

- Quando quero anular mais coisas, faz sentido usar o Pick. Se tenho 5 e quero só 1, use o Pick.
- Pegar mais coisas faz sentido o Omit. Exemplo tenho 5 props e quero 4, use o Omit.

No nosso exemplo faz mais sentido Omit