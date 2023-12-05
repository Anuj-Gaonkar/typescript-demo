class User {
    private _id: number;
    private name: string;
    private email: string;

    constructor(_id: number, name: string, email: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }

    get getId(): number {
        return this._id;
    }

    set setId(_id: number) {
        this._id = _id;
    }

}

let newUser1 = new User(1, "Anuj", "anuj@email.com");
let newUser2 = new User(2, "Anuj2", "anuj2@email.com");

console.log(newUser1);
console.log(newUser2);

newUser1.setId = 10;

console.log(newUser1);



export {}