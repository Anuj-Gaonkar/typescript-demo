let u: number | string | boolean = 10;
u = "anuj";
u = true;

console.log(u);

type user = {
    name: string;
    email1: string;
}

type username = {
    username: string | number;
    email2: string;
}

let x: user | username = {
    name: "1234",
    email1: "@gmail",
    username: "test",
    email2: "1234"
};

console.log(x);

function checkDataType(id: string | number) : string | number {
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

let arr: number[] | string[] = [1, 2, 3];
arr = ["s", "t", "r"];

let arr1: (number | string)[] = [1, 2, 3, "s", "t", "r"];

let pi:3.14 = 3.14;
// pi = 1;
let name1: "Anuj" = "Anuj";
// name1 = "";