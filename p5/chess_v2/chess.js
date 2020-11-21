const res = 100;


let board;


function setup() {
    board = new ChessBoard(res);
    createCanvas(board.getBoardSize(), board.getBoardSize());
    background(121);

    board.initBoard();

    board.placeInitialPieces();
    board.drawBoard();
}

function mousePressed() {

    // board.movePiece("F", 7, "F", 5);

    board.selectCell(mouseX, mouseY);
    board.drawBoard();
}

// function draw() {
//     board.drawBoard();

// }


