import data from "./testData.json" with { type: "json" };

import Batsman from "./models/batsman.js";
import Bowler from "./models/bowler.js";
import AllRounder from "./models/allrounder.js";
import Team from "./models/team.js";

import AuctionUtils from "./utils/auctionUtils.js";

// Create Team Objects
const teams = data.teams.map(team => new Team(team.id, team.name));

const players = [];

// Create Player Objects
for (const p of data.players) {

    let player;

    switch (p.role) {

        case "Batsman":
            player = new Batsman(
                p.id,
                p.name,
                p.age,
                p.basePrice
            );
            break;

        case "Bowler":
            player = new Bowler(
                p.id,
                p.name,
                p.age,
                p.basePrice
            );
            break;

        case "AllRounder":
            player = new AllRounder(
                p.id,
                p.name,
                p.age,
                p.basePrice
            );
            break;

        default:
            console.log("Invalid Role");
            continue;
    }

    // Convert name to uppercase
    AuctionUtils.convertNameToUpperCase(player);

    // Validate age
    if (AuctionUtils.validateAge(player)) {
        players.push(player);
    } else {
    console.log(`${player.name} is not eligible for auction.`);
}
}
// Auction Process
players.forEach((player, index) => {

    AuctionUtils.setSoldPrice(
        player,
        player.basePrice + 20
    );

    if (index < 5) {
        player.team = teams[0].name;
        teams[0].addPlayer(player);
    } else {
        player.team = teams[1].name;
        teams[1].addPlayer(player);
    }

});
// Print Auction Result
console.log("========== AUCTION RESULTS ==========\n");

players.forEach(player => {

    console.log(
        `Player ID : ${player.id}
Player Name : ${player.name}
Role        : ${player.role}
Sold To     : ${player.team}
`
    );
console.log("-----------------------------");
});