function validateMove(src, dest, aGrid) {
    if (isSameCell(src, dest)) {
        return false;
    }
    let allMoves = getPossibleMoveFromThisCell(src, aGrid);

    return allMoves.find((aMove) => aMove.rank == rankToInt(dest.getRank()) && aMove.file == (dest.getFile() - 1));

}

function isSameCell(src, dest) {
    return src.getRank() === dest.getRank() && src.getFile() === dest.getFile();
}

function getPossibleMoveFromThisCell(aCell, aGrid) {
    if (aCell.getPiece()) {
        let piece = aCell.getPiece();
        let moves = [];

        let curRank = rankToInt(aCell.getRank());
        let curFile = aCell.getFile() - 1;
        if (piece.getName() === "queen") {

            moves.push(...horizontal(curRank));
            moves.push(...vertical(curFile));
            moves.push(...diagonal(curRank, curFile));

        } else if (piece.getName() === "king") {

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    moves.push({
                        rank: curRank + i,
                        file: curFile + j
                    });

                }
            }

            moves.push(...checkForCastle(aGrid, curRank, curFile, piece));

        } else if (piece.getName() === "rook") {
            moves.push(...horizontal(curRank));
            moves.push(...vertical(curFile));

        } else if (piece.getName() === "knight") {

            moves.push(...knights(curRank, curFile));

        } else if (piece.getName() === "bishop") {
            moves.push(...diagonal(curRank, curFile));
        } else if (piece.getName() === "pawn" && piece.getColour() === "white") {
            moves.push({
                rank: curRank,
                file: curFile + 1
            });
            if (curFile === 1) {
                moves.push({
                    rank: curRank,
                    file: curFile + 2
                });
            }

        } else if (piece.getName() === "pawn" && piece.getColour() === "black") {
            moves.push({
                rank: curRank,
                file: curFile - 1
            });
            if (curFile === 6) {
                moves.push({
                    rank: curRank,
                    file: curFile - 2
                });
            }
        }

        return moves;

    }
    return [];
}

function rankToInt(rank) {
    return (rank.charCodeAt(0) - "A".charCodeAt(0));
}

function horizontal(curRank) {
    let m = [];
    for (let i = 0; i < 8; i++) {
        m.push({
            rank: curRank,
            file: i
        });
    }
    return m;
}

function vertical(curFile) {
    let m = [];
    for (let i = 0; i < 8; i++) {
        m.push({
            rank: i,
            file: curFile
        });
    }
    return m;
}

function knights(curRank, curFile) {
    let pos = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    let m = [];
    pos.forEach(element => {
        if (curRank + element[0] < 8
            && curFile + element[1] < 8
            && curRank + element[0] >= 0
            && curFile + element[1] >= 0) {
            m.push({
                rank: curRank + element[0],
                file: curFile + element[1]
            });
        }
    });
    return m;
}

function diagonal(curRank, curFile) {
    let m = [];


    for (let i = curRank, j = curFile; i < 8, j < 8; i++, j++) {
        m.push({
            rank: i,
            file: j
        });
    }
    for (let i = curRank, j = curFile; i < 8, j >= 0; i++, j--) {
        m.push({
            rank: i,
            file: j
        });
    }
    for (let i = curRank, j = curFile; i >= 0, j < 8; i--, j++) {
        m.push({
            rank: i,
            file: j
        });
    }
    for (let i = curRank, j = curFile; i >= 0, j >= 0; i--, j--) {
        m.push({
            rank: i,
            file: j
        });
    }
    return m;
}

function checkForCastle(aGrid, curRank, curFile, aPiece) {

    if (aPiece.getName() !== "king"
        || (curFile !== 0 && curFile !== 7)) {

        return [];
    }
    let m = [];
    if (aGrid["A"][curFile].getPiece()
        && aGrid["A"][curFile].getPiece().getName() === "rook"
        && aGrid["A"][curFile].getPiece().getColour() === aPiece.getColour()) {
        m.push({
            rank: curRank - 2,
            file: curFile,
            castle: "king"
        });


    }

    if (aGrid["H"][curFile].getPiece()
        && aGrid["H"][curFile].getPiece().getName() === "rook"
        && aGrid["H"][curFile].getPiece().getColour() === aPiece.getColour()) {
        m.push({
            rank: curRank + 2,
            file: curFile,
            castle: "king"
        });

    }

    return m;

}

function isCheck(params) {

    return false;
}