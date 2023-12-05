interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface makeFocus {
    focusOnObject(): string;
}

class Instagram implements TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
    constructor(
        cameraMode: string,
        filter: string,
        burst: number    
    ){
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}

class Youtube implements TakePhoto, makeFocus {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,    
        public short: string
    ) {}

    focusOnObject(): string {
        return "focused";
    }
}