"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('foo',"foo" e `foo`)
var message;
message = 'foo';
// number (int, float, hex, binary)
var total;
total = 0;
// array (type[] or Array<type>)
var itens;
itens = [0, 1, 2, 3];
var list;
list = ['foo', 'foo'];
var names;
names = ['joão', 'maria'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa)
var coisa;
coisa = true;
// void (vazio)
function logger() {
    console.log('foo');
}
// null/undefined
var bla;
bla = 'foo';
// never (nunca vai retornar)
function error() {
    throw new Error('error');
}
// object
var cart;
cart = {
    key: 'foo'
};
// type inference
// não preciso definir o tipo pois passei o valor ele já identifica
var message2 = "mensagem definida";
// tipos complexos
