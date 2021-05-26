var db;
var player, form, game;
var gameState = 0;
var playerCount;
var backgroundImage;

function setup() 
{
    createCanvas(400, 400);

    db = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw() 
{
    if(playerCount === 4)
    {
        game.updateState(1);
    }
    if(gameState === 1)
    {
        clear();
        game.play();
    }
}





