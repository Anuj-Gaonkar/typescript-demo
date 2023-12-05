function Generics(user) {
    return user;
}
function GenericsOne(user) {
    return user + "";
}
function GenericsArray(user) {
    console.log(user.length);
    return user;
}
function GenericsArrayOne(user) {
    console.log(user.length);
    return user;
}
var photo = {
    cameraMode: "PRo Mode",
    filter: "B/W Filter"
};
var newUser = {
    id: 10,
    name: "Anuj"
};
console.log(Generics({ id: 10, name: "Anuj" }));
console.log(Generics(newUser));
console.log(Generics({ cameraMode: "camera", filter: "f" }));
console.log(Generics(photo));
console.log(GenericsOne("Test"));
console.log(GenericsOne(newUser));
console.log(GenericsOne(photo));
var arrowFunction = function (val) {
    console.log("in arrow function");
    return val;
};
console.log(arrowFunction(newUser));
