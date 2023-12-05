"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_id, name, email) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getId", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setId", {
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var newUser1 = new User(1, "Anuj", "anuj@email.com");
var newUser2 = new User(2, "Anuj2", "anuj2@email.com");
console.log(newUser1);
console.log(newUser2);
newUser1.setId = 10;
console.log(newUser1);
