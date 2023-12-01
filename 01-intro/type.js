"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log("logging user: " + user);
    return user;
}
var newUser = createUser({ id: 1, name: "anuj", email: "anuj@email.com", isActive: false });
console.log(newUser.email);
