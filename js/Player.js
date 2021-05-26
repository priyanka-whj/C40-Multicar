class Player
{
    constructor()
    {
    }
    getCount()
    {
        var PlayerCountRef = db.ref('playerCount');
        PlayerCountRef.on("value", function(data){playerCount = data.val()});
    }
    updateCount(count)
    {
        db.ref('/').update({playerCount: count});
    }
};