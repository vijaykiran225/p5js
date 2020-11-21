class Piece {

    constructor(s, c, n) {
        this.name = n;
        this.colour = c;
        this.suit = s;
    }


    getName() {
        return this.name;
    }

    getSuit() {
        return this.suit;
    }
    getColour() {
        return this.colour;
    }
}