import Swipers from "./components/Swipers";

class Cyberspace {
    constructor() {
        new Swipers();
        this.hello()
    }

    hello() {
        console.log('Wake up Neo');
    }
}

new Cyberspace;