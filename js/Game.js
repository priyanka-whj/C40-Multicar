class Game
{
    constructor()
    {
    }
    getState() //read the gameState from the database
    {
        var gameStateRef = db.ref('gameState'); //referring to the child node gameState
        gameStateRef.on("value", function(data){gameState = data.val()})
    }
    updateState(state) // update the gameState in the database
    {
        db.ref('/').update({gameState: state}); //'/' refers to main database inside which gameState is created
    }
    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await db.ref('playerCount').once("value"); //once is an asynchronous listener
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount(); //setup a permanent listener
            }
            form = new Form();
            form.display();
        }
    }
    play()
    {
        form.hideForm();
        textSize(30);
        text("Game Start", 120, 100);
    }
};