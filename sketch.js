var database;
var gamestate = 0;
var playerCount;
var form,game,player;
var allplayers;
var car1, car2, car3, car4, cars;
var carImage1,carImage2,carImage3,carImage4,trackImage
var Yvelocity = 0;
var Xvelocity = 0;
var obstacle, obstacleImage;
var slidingSound;
var obstacleGroup;
var finishedPlayers = 0;
var passedFinish;
function preload(){
carImage1 = loadImage("images/car1.png");
carImage2 = loadImage("images/car2.png");
carImage3 = loadImage("images/car3.png");
carImage4 = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg");
obstacleImage = loadImage("images/f1.png");
slidingSound = loadSound("Sounds/sounds_sliding.mp3");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.readState() 
    game.start() 

    obstacleGroup = new Group()
    for(var i = 0; i<5; i++ ) {
    obstacle = createSprite(random(300,width-300),random(-height*4,height-300),10,10);
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle)
    }
}

function dpraw(){

    background("white")
    if(playerCount === 4){
        game.updateState(1)

    }
    if(gamestate=== 1){
        clear();
       game.play();
    }
    if(finishedPlayers ===4){
        game.updateState(2);
    }
    //if(gamestate === 2){
       // game.end();
  // }

}

