// let state:number | string
// troca pelo S
// algumas letras padrões, mas pode ser o que quiser
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

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