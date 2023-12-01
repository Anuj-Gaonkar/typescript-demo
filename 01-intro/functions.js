function getHero() {
    return "ironman";
}
var hero = getHero();
console.log(hero);
/*
type is not provided so it will add without type
*/
function addTwo(num) {
    // num.toUpperCase(); this wll throw error when number is passed as 
    return num + 2;
}
console.log(addTwo(5));
console.log(addTwo("5"));
// mentioning the type of method argument
function addTwoNumbers(num) {
    return num + 2;
}
console.log(addTwoNumbers(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("test"));
function defaultValue(val1) {
    if (val1 === void 0) { val1 = 0; }
    return val1;
}
console.log(defaultValue());
/*
function defaultValueNo(val1: number){
    return val1;
}
console.log(defaultValueNo());      // will show error as no argument is passed in function
*/
function returnNumber(num) {
    return num;
}
