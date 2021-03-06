class Form 
{
    constructor() 
    {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }
    hideForm()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display() 
    {
        var title = createElement('h2'); 
        title.html("Car Racing Game"); 
        title.position(500, 100); 

        this.input.position(430, 200); 
        this.button.position(650, 200);

        this.button.mousePressed(() => 
        {
            this.input.hide();                       
            this.button.hide();                      
            player.name = this.input.value(); 
            playerCount = playerCount + 1;
            player.updateCount(playerCount);             
            this.greeting.html("Hello" + " " +player.name); 
            this.greeting.position(500, 200);
        });
    }
};