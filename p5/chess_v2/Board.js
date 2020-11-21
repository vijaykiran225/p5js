class Game {


    constructor(r) {

        this.grid = {};
        this.res = r
        this.pieceCount = 8;
        this.boardSize = this.res * this.pieceCount;

        this.pieces = [1, 2, 3, 4, 5, 6, 7, 8];
        this.ranks = ["A", "B", "C", "D", "E", "F", "G", "H"]
        this.showPosition = true;
        this.timer = undefined;
        this.previouslySelectedCell = undefined;

        this.toMark = [];

    }

    selectCell(x, y) {

        let rankX = Math.floor(x / 100);
        let fileY = Math.floor(y / 100);

        let currentlyChoosenCell = this.grid[this.ranks[rankX]][fileY];



        if (this.previouslySelectedCell) {

            if (this.previouslySelectedCell.getPiece()
                && validateMove(this.previouslySelectedCell, currentlyChoosenCell, this.grid)) {
                this.movePiece(
                    this.previouslySelectedCell.getRank(),
                    this.previouslySelectedCell.getFile(),
                    currentlyChoosenCell.getRank(),
                    currentlyChoosenCell.getFile());

                this.timer.press();
            }
            this.previouslySelectedCell.highlighted = false;
            this.previouslySelectedCell = undefined;


            this.toMark.forEach(element => {
                let r = this.ranks[element.rank];
                if (this.grid[r] && this.grid[r][element.file]) {
                    this.grid[r][element.file].highlighted = false;
                }
            });
            this.toMark = [];
        } else if (currentlyChoosenCell.getPiece()) {

            currentlyChoosenCell.highlighted = true;


            this.toMark = getPossibleMoveFromThisCell(currentlyChoosenCell, this.grid);

            this.toMark.forEach(element => {
                let r = this.ranks[element.rank];
                if (this.grid[r] && this.grid[r][element.file]) {
                    this.grid[r][element.file].highlighted = true;
                }
            });
            this.previouslySelectedCell = currentlyChoosenCell;
        }

    }

    placeInitialPieces() {

        // this.testPiece();
        this.placePiece("black", "D", 8, "♚", "king");
        this.placePiece("white", "D", 1, "♔", "king");

        this.placePiece("black", "E", 8, "♛", "queen");
        this.placePiece("white", "E", 1, "♕", "queen");

        this.placePiece("black", "G", 8, "♞", "knight");
        this.placePiece("white", "G", 1, "♘", "knight");

        this.placePiece("black", "H", 8, "♜", "rook");
        this.placePiece("white", "H", 1, "♖", "rook");

        this.placePiece("black", "C", 8, "♝", "bishop");
        this.placePiece("white", "C", 1, "♗", "bishop");

        this.placePiece("black", "F", 8, "♝", "bishop");
        this.placePiece("white", "F", 1, "♗", "bishop");

        this.placePiece("black", "B", 8, "♞", "knight");
        this.placePiece("white", "B", 1, "♘", "knight");

        this.placePiece("black", "A", 8, "♜", "rook");
        this.placePiece("white", "A", 1, "♖", "rook");

        for (let i = 0; i < 8; i++) {

            this.placePiece("black", this.ranks[i], 7, "♟", "pawn");
            this.placePiece("white", this.ranks[i], 2, "♙", "pawn");

        }

    }

    getBoardSize() {
        return this.boardSize;
    }

    initBoard() {
        for (let i = 0; i < this.pieceCount; i++) {

            let row = {};
            for (let j = 0; j < this.pieceCount; j++) {
                let x = i * this.res;
                let y = j * this.res;

                row[j] = (new Cell(this.ranks[i], this.pieces[j]));

            }
            this.grid[this.ranks[i]] = (row);

        }
    }

    initTimer(mins) {
        this.timer = new Timer(mins, this.getBoardSize());
    }

    startTimer() {
        this.timer.start();
    }

    stopTimer() {
        this.timer.stop();
    }
    drawBoard() {

        let counter = 1;
        for (let i = 0; i < this.pieceCount; i++) {

            for (let j = 0; j < this.pieceCount; j++) {
                let x = i * this.res;
                let y = j * this.res;

                fill(counter % 2 == 0 ? 155 : 185);
                // noFill();
                if (this.grid[this.ranks[i]][j].highlighted) {
                    fill(200, 10, 100);
                }
                counter++;
                stroke(55, 20, 101);
                rect(x, y, this.res, this.res);

                if (this.showPosition) {
                    noFill();
                    textAlign(CENTER);
                    stroke(125, 10, 100);
                    textSize(10);
                    text(this.grid[this.ranks[i]][j].showPos(), x + (this.res / 10), y + (this.res / 10));
                }
                if (this.grid[this.ranks[i]][j].getPiece()) {
                    textAlign(CENTER);
                    noFill();
                    if (this.grid[this.ranks[i]][j].getPiece().getColour() === "black") {
                        stroke(0);
                        // stroke(255, 100, 250);
                    }
                    else {
                        stroke(255);
                        // stroke(255, 255, 10);
                    }
                    textSize(64);
                    text(this.grid[this.ranks[i]][j].getPiece().getSuit(), x + (this.res / 2), y + (this.res / 2) + 30);
                }
            }
            counter++;
        }
    }

    placePiece(col, rank, file, suit, name) {
        let somePiece = new Piece(suit, col, name);

        this.grid[rank][file - 1].placePiece(somePiece);

    }

    movePiece(fromRank, fromFile, toRank, toFile) {

        let removed = this.grid[fromRank][fromFile - 1].removePiece();

        this.grid[toRank][toFile - 1].placePiece(removed);

    }

}