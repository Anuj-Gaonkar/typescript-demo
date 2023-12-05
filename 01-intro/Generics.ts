type user = {
    id: number,
    name: string
}

type TakePhoto = {
    cameraMode: string,
    filter: string
}

function Generics<Type> (user: Type) : Type {
    return user;
}

function GenericsOne<Type> (user: Type) : string {
    return user + "";
}

function GenericsArray<Type> (user: Type[]) : Type[] {
    console.log(user.length);
    return user;
}


function GenericsArrayOne<Type> (user: Array<Type>) : Array<Type> {
    console.log(user.length);
    return user;
}

let photo: TakePhoto = {
    cameraMode: "PRo Mode",
    filter: "B/W Filter"
}

let newUser: user = {
    id: 10,
    name: "Anuj"
}

console.log(Generics({id: 10, name: "Anuj"}));
console.log(Generics(newUser));
console.log(Generics({cameraMode: "camera", filter: "f"}));
console.log(Generics(photo));

console.log(GenericsOne("Test"));
console.log(GenericsOne<user>(newUser));
console.log(GenericsOne<TakePhoto>(photo));


const arrowFunction = <T>(val: T): T => {
    console.log("in arrow function");
    return val;
}

console.log(arrowFunction<user>(newUser));