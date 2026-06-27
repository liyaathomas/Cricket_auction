import Player from "./player.js";

class AllRounder extends Player {
    constructor(id, name, age, basePrice) {
        super(id, name, age, "AllRounder", basePrice);
    }
}

export default AllRounder;