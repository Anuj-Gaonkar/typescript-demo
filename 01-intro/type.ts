type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
    confirmDate?: string;
}

type creditCardDetails = cardNumber & cardDate & {
    cvv: string
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: creditCardDetails;
}

function createUser(user: User): User {
    console.log("logging user: " + user);
    return user;
}

// type cardNumber = {
//     cardNumber: string;
// }

// type cardDate = {
//     cardDate: string;
// }

// type creditCardDetails = cardNumber & cardDate & {
//     cvv: string
// }

let creditCardDetails = {
    cardDate: "",
    cardNumber: "",
    cvv: "",
}

let newUser = createUser({id: 1, name: "anuj", email: "anuj@email.com", isActive: false, creditCardDetails});
console.log(newUser.email);
newUser.creditCardDetails?.confirmDate;
export {}