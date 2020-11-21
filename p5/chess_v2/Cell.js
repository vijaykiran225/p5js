class Cell {

    constructor(r, f) {
        this.rank = r;
        this.file = f;
        this.piece = null;
        this.highlighted = false;
    }

    placePiece(p) {
        this.piece = p;
    }

    removePiece() {
        let deletedPiece = this.piece;
        this.piece = null;
        return deletedPiece;
    }

    showPos() {
        return this.rank + "" + this.file;
    }

    getPiece() {
        return this.piece;
    }

    getRank() {
        return this.rank;
    }

    getFile() {
        return this.file;
    }

}