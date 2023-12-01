let User = {
    id: 1,
    name: "anuj",
    email: "anuj@email.com",
}

function createUser({name: string, isPaid: boolean}) {
    // method values
}

// function createCourse({name: string, price: number}): {name: string} {
//     console.log(price);
    
//     return {name: "typescript"};
// }


function createCourse({name, price} : {name: string, price: number}): {name: string} {
    console.log(price);
    
    return {name: "typescript"};
}

function createCourse1(fn: {name: string, price: number}): {name: string} {
    console.log(fn.price);
    
    return {name: "typescript"};
}