"use strict";
// method decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function delay(ms) {
    return function (target, key, descriptor) {
        console.log(target); // Greeter { greet: [Function] }
        console.log(key); // greet
        console.log(descriptor); // { value: [Function], writable: true, enumerable: true, configurable: true }
        // minha função greet
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                console.log('args', args); // []
                console.log(_this); // Greeter { greeting: 'pessoa' }
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    // esperar um tempo, e ai sim rodar o método
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(1000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var person = new Greeter("pessoa");
person.greet();
