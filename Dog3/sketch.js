var word = 'Puggy';
var word2 = '? ? ? ? ? ? ? ? ?';
var age1 = 'Five year-old';
var age2 = '? ? ? ? ? ? ? ? ? ?';
var dislike = 'Dislike:';
var x = 0;

function preload() {
  frame = loadImage('image/Frame.png');
  dog1 = loadImage('image/Chihuahua.png');
  dog2 = loadImage('image/Beagle.png');
  dog3 = loadImage('image/Pug.png');
  bow = loadImage('image/bow.png');
  ribbon = loadImage('image/ribbon.png');
  
  ghost =loadImage('image/ghost.png');
  ghost1 = loadImage('image/ghost1.jpg');
  
  mail = loadImage('image/mail.png');
  mail1 = loadImage('image/mail1.jpg');
  
  cat = loadImage('image/cat.png');
  cat1 = loadImage('image/cat1.jpg');
  
  bone = loadImage('image/bone.png');
  bone1 = loadImage('image/bone1.jpg');
  
  tennis = loadImage('image/tennis.png');
  tennis1 = loadImage('image/tennis1.jpg');
  
  bird = loadImage('image/bird.png');
  bird1 = loadImage('image/bird1.jpg');
  
  male = loadImage('image/male.png');
  male1 = loadImage('image/male1.jpg');
  
  female = loadImage('image/female.png');
  female1 = loadImage('image/female1.jpg');
  
  love1 = loadImage('image/love.png');
  dislike1 = loadImage('image/dislike.png');
  
  Noname = loadImage('image/Noname.png');
  
  button = loadImage('image/button.png');
}
function setup(){
  createCanvas(1524,768);
  background(205,235,252);
}
function draw(){
  translate(100,0);
  push();
  
  push();
  textSize(50);
  text(word, 425, 80);
  pop();
  
  push();
  textSize(30);
  text(age1,770,250);
  text(dislike,770,400);
  pop();
  
  pop();
  
  push();
  scale(0.4);
  image(frame,200,100);
  image(dog3,200,100);
  image(male,0,300);
  image(love1,-350,700);
  image(dislike1,1500,700);
  image(button,680,1200);
  pop();
  
  push();
  scale(0.15);
  
  image(bird,4800,3500);
  image(cat,6000,3500);
  image(mail,5400,3500);
  
  image(bone,0,3500);
  image(tennis,600,3500);
  image(ghost,1200,3500);
  pop();
  
   if (mouseButton == RIGHT && mouseIsPressed)
      if (mouseX > 500 && mouseX < 800 && mouseY < 800 && mouseY > 500) {
        dot();
        x = x+1;
      if(x>50){
        dog3 = dog1;
        mail = ghost1;
      }
      if(x>60){
        dog1 = dog2;
        tennis = mail1;
      }
      if(x>70){
        dog2 = dog1;
        cat = bone1;
      }
      if(x>80){
        dog1 = dog3;
        bone = cat1;
      }
      if(x>90){
        dog3 = dog2;
        bird = ghost1;
      }
      if(x>100){
        dog2 = dog1;
      }
      if(x>110){
        dog2 = dog3;
      }
      if(x>120){
        dog2 = dog1;
      }
      if(x>130){
        dog2 = dog1;
      }
      if(x>140){
        dog3 = dog3;
      }
      if(x>170){
        dog3 = dog1;
      }
      if(x>200){
        
      }
      if(x>230){
        bone = ghost1;
      }
      if(x>240){
        tennis = ghost1;
      }
      if(x>250){
        bird = ghost1;
      }
      if(x>260){
        mail = ghost1;
      }
      if(x>270){
        cat = ghost1;
      }
      if(x>300){
        word = word2;
        male = female1;
        dog3 = Noname;
      }
      

      }
}
function dot(){
  ellipse(x,0,1,1);
}