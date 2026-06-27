import Player from "./player.js";

class Bowler extends Player {
    constructor(id, name, age, basePrice) {
        super(id, name, age, "Bowler", basePrice);
    }
}

export default Bowler;