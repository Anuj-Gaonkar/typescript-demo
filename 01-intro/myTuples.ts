let tUple: [number, string, boolean] = [1, "test", true];
tUple = [2, "new", false];

let tUple1: [number | string, string, boolean] = ["1", "test", true];

console.log(tUple[0]);
// console.log(tUple[4]);

const user : [number, string] = [1, "name"];
user[0] = 2;
user[1] = "2";