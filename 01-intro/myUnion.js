var u = 10;
u = "anuj";
u = true;
console.log(u);
var x = {
    name: "1234",
    email1: "@gmail",
    username: "test",
    email2: "1234"
};
console.log(x);
function checkDataType(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    if (typeof id === "number") {
        return id.toFixed();
    }
    return "none";
}
console.log(checkDataType("normal string here"));
console.log(checkDataType(1));
