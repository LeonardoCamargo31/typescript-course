// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo',"foo" e `foo`)
let message: string
message = 'foo'

// number (int, float, hex, binary)
let total: number
total = 0

// array (type[] or Array<type>)
let itens: number[]
itens = [0, 1, 2, 3]

let list: string[]
list = ['foo', 'foo']

let names: Array<string>
names = ['joão', 'maria']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa)
let coisa: boolean
coisa = true

// void (vazio)
function logger():void {
  console.log('foo')
}

// null/undefined
let bla: string | undefined
bla = 'foo'

// never (nunca vai retornar)
function error():never{
  throw new Error('error')
}

// object
let cart: object
cart = {
  key:'foo'
}

// type inference
// não preciso definir o tipo pois passei o valor ele já identifica
let message2 = "mensagem definida"