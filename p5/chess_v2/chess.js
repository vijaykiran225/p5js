const res = 100;


let game;


function setup() {
    game = new Game(res);
    createCanvas(game.getBoardSize(), game.getBoardSize());
    background(121);

    game.initBoard();
    game.initTimer(3);
    game.placeInitialPieces();
    game.drawBoard();


}

function mousePressed() {

    let x = mouseX;
    let y = mouseY;
    if (x > game.getBoardSize() || y > game.getBoardSize()) {

    } else {
        game.selectCell(mouseX, mouseY);
    }
    game.drawBoard();
}

// function draw() {
//     board.drawBoard();
// }


