var gameState = 0
var form,player,game,playerCount
var database
var allPlayers
var car1,car2,car3,car4
var cars

function setup(){
    database = firebase.database()
    createCanvas(windowWidth,windowHeight);
    game = new Game()
    game.readGameState()
    game.start()

    
  
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.updateGameState(1)
    }

    if (gameState === 1){
        game.play()
    }
 
}

