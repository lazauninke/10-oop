/*
Fish:
- parametrus: name, color, sound, canSwim
- metodai: voice, introduce, swimAway
*/

const Animal = require("./Animal");

class Fish extends Animal {
    constructor(name, color) {
        super(name, color)
        this.sound = 'splash splash';
        this.canSwim = true;
    }

    swimAway() {
        if (this.canSwim) {
            console.log(`${this.name}: swept away...`);
        }
    }
}

module.exports = Fish;