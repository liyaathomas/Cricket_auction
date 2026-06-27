class Player {
    constructor(id, name, age, role, basePrice) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = 0;
        this.team = null;
    }
}

export default Player;