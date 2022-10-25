//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


// Snake Head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // this is used for the drawing on the board

    update();
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}