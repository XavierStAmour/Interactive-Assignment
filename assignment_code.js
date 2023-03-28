//Xavier St-Amour
//Nicholas Brown
//Web and Effects, section 3
//Tear
//https://openprocessing.org/sketch/1866673


//(instructions)

//Move the mouse to change the color of the tear, and click the mouse to increase its size.
//press space to reset the tear

//This piece is an interactive experiment where you can alter a tear in the page so that it can take over more of the page.
//I would advise to move the mouse around to give it more life and click the mouse if you want to increase its power.
//However if you feel that the tear is getting too out of hand, you can press space to reset its state.





function setup() {
  createCanvas(windowWidth, windowWidth);
  background(100);
  let x = random(windowWidth)
  let r= mouseX
  let g= mouseY
  let b= mouseY//mouse controlling color
 size=40
}
function draw() {
  x=random(windowWidth)
  r=mouseX
  g=mouseY
  b=mouseY
  rect(x, x, x, size);//makes the rectangles be in a line
  fill(r,g,b)
}

function mouseClicked(){
  if (size===size){
    size= size + 20//clicking makes size bigger
  }else{
    size =40
  }
}

function keyPressed() {
  if (key== " "){
       clear()
    size = 40// space clears the reactangles and resets the size
    
        
  }}
