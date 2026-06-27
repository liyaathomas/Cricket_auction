import Player from "./player.js";

class Batsman extends Player {
    constructor(id, name, age, basePrice) {
        super(id, name, age, "Batsman", basePrice);
    }
}

export default Batsman;