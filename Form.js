class Form{
    constructor(){
        this.input=createInput('name');
       this.button = createButton("play");
       this.greeting = createElement('h2');
    }
    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2-200,50);
       
    this.input.position(displayWidth/2-200,100);
        
        this.button.position(displayWidth/2,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount+=1;
             player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello"+ player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        });
    } 
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
