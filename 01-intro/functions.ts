function getHero(){
    return "ironman";
}

let hero = getHero();
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
function addTwoNumbers(num: number) {
    return num + 2;
}
console.log(addTwoNumbers(5));

function getUpper(val: string){
    return val.toUpperCase();    
}
console.log(getUpper("test"));

function defaultValue(val1: number = 0){
    return val1;
}
console.log(defaultValue());


/*
function defaultValueNo(val1: number){
    return val1;
}
console.log(defaultValueNo());      // will show error as no argument is passed in function
*/

function returnNumber(num: number): number {
    return num;
}

function logError(errorMessage: string): void {
    console.log(errorMessage);
}