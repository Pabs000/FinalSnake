const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
class Snake{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


//GameBOARD--------------------------------------------------------
let Speed = 10;
let TileCount = 20;
let TileSize = canvas.width / TileCount;

//Sizing of the snake//---------------------------------------------
let HeadX = 12;
let HeadY = 12;


const SnakeItself = [];//snakeBODY
let Tail = 1; //ADDTO Body
//items collecting increasing the size//-----------------------------
let SquareX=5;
let SquareY=5;



//Movement and Speed//
let InputsVelocityX = 0;
let InputsVelocityY = 0;
let VelocityX = 0;
let VelocityY = 0;
let Score = 0;



function DrawGame() {
VelocityX = InputsVelocityX;
VelocityY = InputsVelocityY;
//AddingGameOver for Replay
DestroyGameReset();
let Result = isGameOver();
  if(Result) 
  {return;}
  SquareBoard();
  SquareCollection();
  DrawSquare();
  DrawSnake();
  DrawScore();
//Control  SCORE----- Using Speed Increase
if (Score > 1) {
    Speed = 10;
} 
if (Score > 7) {
    Speed = 14;
}
if (Score > 10) {
    Speed = 16
}
if (Score > 15) {
    Speed = 18;
}
//Speed Timer Divide per set speed.
setTimeout(DrawGame,750/Speed); }


function DestroyGameReset() {
  let GameOver = false;
  if (VelocityY === 0 && VelocityX === 0) {
    return false;
  }
  if (HeadX < 0) {
    GameOver = true;
  } else if (HeadX === TileCount) {
    GameOver = true;
  } else if (HeadY < 0) {
    GameOver = true;
  } else if (HeadY === TileCount) {
    GameOver = true;
  }
}



//loop snake body----
for (let i = 0; i< SnakeItself.length; i++)
 {let part = SnakeItself[i];

if (part.x === HeadX && part.y === HeadY) {
      GameOver = true;
      break;
}}


//Score Keep Track 
function DrawScore() {
    ctx.fillStyle = "RED";
    ctx.font = "30px Roman";
    ctx.fillText("KEEP IT GOING :)   -SCORE- " + Score, canvas.width - 35, 5);
  }
//Game over Display
if (GameOver) {
ctx.fillStyle = "gray";
ctx.font = "70px Stylus";
  return GameOver;
}
function SquareBoard() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//Snake Size and loop for increasing size on GB.(GameBoard)
function DrawSnake() {
  ctx.fillStyle = "red";
  for (let i = 0; i < SnakeItself.length; i++) 
{let part = snakeParts[i];
ctx.fillRect(part.x * TileCount, part.y * TileCount, TileSize, TileSize);}

  SnakeItself.push(new SnakePart(HeadX, HeadY));
  while (SnakeItself.length > TailLength) 
  {SnakeItself.shift}//Keep Sizing going
  ctx.fillStyle = "white";
  ctx.fillRect(HeadX*TileCount, HeadY*TileCount,TileSize,TileSize);
}
function changeSnakePosition() 
{HeadX =HeadX + VelocityX;
  HeadY = HeadY +VelocityY;}
function DrawSquare() 
{
  ctx.fillStyle = "Green";
  ctx.fillRect(SquareX * TileCount, SquareY * TileCount, TileSize, TileSize);
}



//collecting squares
function SquareCollection() 
 
                {if (SquareX ===HeadX && SquareY == HeadY) {
                    SquareX = Math.floor(Math.random() * TileCount);
                    SquareY = Math.floor(Math.random() * TileCount);
                    TailLength++;
                    Score++;}}

                    document.body.addEventListener("keyup", keyUp);
                    //up
                    function keyUp(event)
                    {
                        if (event.keyCode == 38 || event.keyCode == 87) {
                            if (inputsYVelocity == 1) return;
                            inputsVelocityY = -1;
                            inputsVelocityX = 0;
                          }
                          //down
                          if (event.keyCode == 40 || event.keyCode == 83) {
                            if (inputsYVelocity == -1) return;
                            inputsYVelocity = 1;
                            inputsXVelocity = 0;
                          }
                          //left
                          if (event.keyCode == 37 || event.keyCode == 65) {
                            if (inputsXVelocity == 1) return;
                            inputsYVelocity = 0;
                            inputsXVelocity = -1;
                          }
                          //right
                          if (event.keyCode == 39 || event.keyCode == 68) {
                    
                            if (inputsXVelocity == -1) return;
                            inputsYVelocity = 0;
                            inputsXVelocity = 1;
                          }
                        }
                    // keycodes (W,A,S,D) (87,65,83,68)/////////(UP,RIGHT,DOWN,LEFT)   (38,39,40,37)
                    drawGame();