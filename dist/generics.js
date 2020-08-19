"use strict";
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
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
// defini como padrão/default string <S extends number | string = string>
//const newState = useState() // vai passar a aceitar string
// s => unknown/desconhecido
// passei um number ele passa a aceitar só number
var newState = useState();
newState.setState(123); // number
console.log(newState.getState());
// quero que depois de definido não mude o tipo
// newState.setState("foo") // dê erro
// console.log(newState.getState())
