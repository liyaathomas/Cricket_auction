class Team {

    constructor(id, name) {

        this.id = id;
        this.name = name;
        this.players = [];

    }

    addPlayer(player) {

        this.players.push(player);

    }

}

export default Team;