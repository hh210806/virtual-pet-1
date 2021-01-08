
var dog,happyDog, dogImg, dogImg1;
var database;
var foodS, foodStock;

function preload()
{
   dogImg = loadImage("dogImg.png");
   dogImg1 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  var foodStockRef = database.ref('Food');
  foodStockRef.on("value",readStock);

  dog = createSprite(230,230,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.15;
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
    //data.val() = data.val() - 1;
  }

  drawSprites();

  textSize(15);
  fill("black");
  stroke("white");
  text("Press Up Arrow key to feed the dog", 130, 20);
  text("Food Remaining:"+ foodS,170,60);

  //add styles here
}

function readStock(data){
  foodS = data.val();
} 

function writeStock(x){
  

if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
  Food:x
})

  }





