"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathQuiz = /** @class */ (function () {
    function MathQuiz(name, type) {
        this.name = name;
        this.type = type;
    }
    return MathQuiz;
}());
var MathCourse = /** @class */ (function () {
    function MathCourse(name, type, author, subject) {
        this.name = name;
        this.type = type;
        this.author = author;
        this.subject = subject;
    }
    return MathCourse;
}());
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    return Customer;
}());
var newCustomer = new Customer("Anuj");
var mathQ = new MathQuiz("Math", "CDAC");
var mathC = new MathCourse("", "", "", "");
var sell = new Sellable();
sell.addToCart(mathQ);
sell.addToCart(mathC);
console.log(sell.cart);
