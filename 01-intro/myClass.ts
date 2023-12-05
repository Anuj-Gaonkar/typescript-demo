class User {
    public name: string;
    private id: number;
    readonly userEmail: string;
}

let newUser = new User();
newUser.name = "Anuj";
console.log(newUser.name);

class User1 {
    public name: string;
    private id: number;
    readonly userEmail: string;

    constructor(name: string, id: number, userEmail: string) {
        this.name = name;
        this.id = id;
        this.userEmail = userEmail;
    }
}

let newUser1 = new User1("Anuj", 10, "a@a.com");
console.log(newUser1);

class User2 {
    constructor(
        public name: string, 
        public id: number, 
        public userEmail: string) {
    }

    m() {
        console.log(this.id + " " + this.name);
    }
}

let newUser2 = new User2("Anuj", 1, "a@a.com");
console.log(newUser2);
newUser2.m()

export {}