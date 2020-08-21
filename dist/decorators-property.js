"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function minLength(length) {
    // target é minha classe, key minha propriedade title
    return function (target, key) {
        console.log(target); // Movie {}
        console.log(key); // title
        // movie.title
        var val = target[key];
        // get e set
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < length) { // definido no decorator @minLength(5)
                console.log("Error: N\u00E3o pode criar " + key + " com tamanho menor que " + length + ".");
            }
            else {
                val = value;
            }
        };
        // precisa definir no nosso objeto
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        minLength(5)
    ], Movie.prototype, "title", void 0);
    return Movie;
}());
var movie = new Movie("Foo");
//Error: Não pode criar title com tamanho menor que 5.
console.log(movie.title); // undefined
