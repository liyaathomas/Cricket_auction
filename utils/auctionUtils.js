class AuctionUtils {

    // Convert player name to uppercase
    static convertNameToUpperCase(player) {
        player.name = player.name.toUpperCase();
    }

    // Validate player's age
    static validateAge(player) {
        return player.age > 18;
    }

    // Set sold price (should not be less than base price)
    static setSoldPrice(player, soldPrice) {

        if (soldPrice >= player.basePrice) {
            player.soldPrice = soldPrice;
        } else {
            console.log(
                `Sold price cannot be less than base price for ${player.name}`
            );
        }
    }

}

export default AuctionUtils;