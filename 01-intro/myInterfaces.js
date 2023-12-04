"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    _id: 1,
    username: "anuj",
    userId: 11,
    googleId: 123,
    myFunction: function (a, b) {
        return a + b + "";
    }
};
console.log(newUser.myFunction(1, 1));
