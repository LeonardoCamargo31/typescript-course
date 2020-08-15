"use strict";
var myGame = {
    title: 'The last of us',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ['ps3', 'ps4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A plague tale, Metro");
    }
};
console.log(myGame.genre); // not cant myGame.genre="other"
// como ele é opcional, preciso garantir que exista o método
if (myGame.getSimilars) {
    myGame.getSimilars(myGame.title);
}
var leftBehind = {
    title: 'The last of us - left behind',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ['ps4'],
    originalGame: myGame,
    newContent: ["3 hours story"]
};
// implementar classe baseada em uma interface
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
var newGame = new CreateGame('Left 4 dead', 'The best game in the world', 'Action');
console.log(newGame);
