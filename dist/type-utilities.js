"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// todas as props viram readonly
var todo = {
    title: "Assistir curso",
    description: "Relembrar os detalhes",
    completed: false
};
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
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo);
var todo3 = {
    title: "Assistir de inglês",
    completed: true,
};
var todo4 = {
    title: "Assistir de inglês",
    completed: true,
};
