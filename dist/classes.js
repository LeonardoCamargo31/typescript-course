"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classe abstrata não conseguimos criar obj a partir dela
// não posso const person = new UserAccount('Leo',24)
// mas posso estende-la
// ela vai ser um modelo para outras classes
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("This player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickName, level, city) {
        var _this = _super.call(this, name, age) || this;
        _this.nickName = nickName;
        _this.level = level;
        _this.city = city;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getCity", {
        // accessors = get e set
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setCity", {
        set: function (city) {
            this.city = city;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " has the char " + this.nickName + " at level " + this.level);
    };
    return CharAccount;
}(UserAccount));
var john = new CharAccount('John', 33, 'nicksasd', 33, 'Presidente Prudente');
console.log(john.level);
john.logCharDetails();
console.log(john.getCity);
john.setCity = "São Paulo";
console.log(john.getCity);
