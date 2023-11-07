class Team {
    constructor(name, mascot, playerCount){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

const Packers = new Team("Packers", "Cheese", "54");
const Cowboys = Team("Cowboys", "Cowboy", "54");
const Chiefs = Team("Chiefs", "Arrowhead", "54");
const Raiders = Team("Raiders", "Pirate", "54");
const Dolphins = Team("Dolphins", "Dolphin", "54");

module.exports = {
    Team,
};