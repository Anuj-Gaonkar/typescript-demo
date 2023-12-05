abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ) {}

    public m(): void {
        console.log("method m");
    }

    abstract focus() : string;
}

class Instagram extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    focus(): string {
        return "focused"
    }
}

// let camera = new TakePhoto();
let camera = new Instagram("Pro Mode", "Beauty", 10);
let str = camera.focus();

let photo: TakePhoto = new Instagram("Pro Mode", "Beauty", 10);
photo.m();
console.log(str);



export {}