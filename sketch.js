var canvas;
var music;

var greenSurface, yellowSurface, blueSurface, redSurface;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    greenSurface = createSprite(100,550,180,50);
    greenSurface.shapeColor = "green";

    yellowSurface = createSprite(300,550,180,50);
    yellowSurface.shapeColor = "yellow";

    blueSurface = createSprite(500,550,180,50);
    blueSurface.shapeColor = "blue";

    redSurface = createSprite(700,550,180,50);
    redSurface.shapeColor = "red";

    //create box sprite and give velocity

    box = createSprite(Math.round(random(20,750)),200,30,30);
    box.shapeColor = "white";

    box.velocityX = 2;
    box.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();

    

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(greenSurface) && box.bounceOff(greenSurface)){
        music.loop();
        box.shapeColor = "green";
    }
    if(box.isTouching(yellowSurface) && box.bounceOff(yellowSurface)){
        box.shapeColor = "yellow";
    }
    if(box.isTouching(blueSurface) && box.bounceOff(blueSurface)){
        box.shapeColor = "blue";
    }
    if(box.isTouching(redSurface) && box.bounceOff(redSurface)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "red";
        music.stop();
    }

    drawSprites();
}
