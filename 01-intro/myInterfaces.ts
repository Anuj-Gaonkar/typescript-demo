interface User {
    readonly _id: number,
    username: string,
    userId: number,
    googleId?: number,
    // myFunction: (a: number, b: number) => string
    myFunction(a: number, b: number): string
}

// reopening the interface
interface User {
    githubToken: string;
}

interface Admin extends User {
    isAdmin: boolean
}

let newUser: User = {
    _id: 1,
    githubToken: "awd",
    username: "anuj",
    userId: 11,
    googleId: 123,
    myFunction: (a: 10, b: 100) => {
        return a + b + "";
    }
}

let newAdmin: Admin = {
    _id: 1,
    githubToken: "awd",
    username: "anuj",
    userId: 11,
    googleId: 123,
    isAdmin: true,
    myFunction: (a: 10, b: 100) => {
        return a + b + "";
    }
}

console.log(newUser.myFunction(1, 1));


export {}