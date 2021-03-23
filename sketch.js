var balloon,database;
var position;
var backimage;
var balloonImage;
var balloon1;

function preload(){
  backimage = loadImage('Hot Air Ballon-01.png');
  balloonImage = loadImage('Hot Air Ballon-02.png')
}


function setup() {
    database = firebase.database();
    createCanvas(500,500);
    //balloon = createSprite(500,500,0,0);
    //balloon.shapeColor = "red";
    balloon1 = createSprite(250,250,10,10);
    balloon1.addImage("balloon1",balloonImage);
    balloon1.velocityX=-2;
    var balloonPosition=database.ref('ball/position');
    balloonPosition.on("value",readPosition,showError);
}

function draw(){
    background(backimage);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        balloon1.velocityX=-2;
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        balloon1.velocityX=+2;
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        balloon1.velocityY=-2;
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
        balloon1.velocityY=+2;
    }
    drawSprites();
}

function changePosition(x,y){
    balloon.x = balloon.x + x;
    balloon.y = balloon.y + y;
}
function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

