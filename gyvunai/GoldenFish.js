/*
Goldenfish:
- parametrus: name, color, sound, canSwim, grantsWishes
- metodai: voice, introduce, swimAway, makeWish
*/

const Fish = require("./Fish");

class Goldenfish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.grantsWishes = true;
    }

    makeWish() {
        if (this.grantsWishes) {
            console.log(`${this.name}: tell me your wish`);
        }
    }
}

module.exports = Goldenfish;