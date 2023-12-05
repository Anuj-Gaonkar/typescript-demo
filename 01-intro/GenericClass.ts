interface Product {}

interface Quiz extends Product{
    name: string,
    type: string
}

class MathQuiz implements Quiz {
    constructor(
        public name: string,
        public type: string
    ) {}
}

interface Course extends Product{
    name: string,
    type: string,
    author: string,
    subject: string
}

class MathCourse implements Course {
    constructor(
        public name: string,
        public type: string,
        public author: string,
        public subject: string
    ) {}
}

interface User {
    name: string
}

class Sellable<T extends Product> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

class Customer implements User {
    constructor(public name: string){}
}

let newCustomer = new Customer("Anuj")
let mathQ = new MathQuiz("Math", "CDAC")
let mathC = new MathCourse("", "", "", "")

let sell = new Sellable<User>();
sell.addToCart(mathQ);
sell.addToCart(mathC);

console.log(sell.cart);

export {}