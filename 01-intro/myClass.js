var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var newUser = new User();
newUser.name = "Anuj";
console.log(newUser.name);
var User1 = /** @class */ (function () {
    function User1(name, id, userEmail) {
        this.name = name;
        this.id = id;
        this.userEmail = userEmail;
    }
    return User1;
}());
var newUser1 = new User1("Anuj", 10, "a@a.com");
console.log(newUser1);
var User2 = /** @class */ (function () {
    function User2(name, id, userEmail) {
        this.name = name;
        this.id = id;
        this.userEmail = userEmail;
    }
    User2.prototype.m = function () {
        console.log(this.id + " " + this.name);
    };
    return User2;
}());
var newUser2 = new User2("Anuj", 1, "a@a.com");
console.log(newUser2);
newUser2.m();
