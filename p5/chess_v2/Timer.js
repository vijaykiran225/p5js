class Timer {

    constructor(mins, boardPos) {
        this.time = 60 * mins;
        this.timeRemaining = {
            white: this.time,
            black: this.time
        };
        this.turn = "white";
        this.started = false;
        this.inter = undefined;
        this.tLoc = createP("");
        this.tLoc.position(boardPos + 80, windowHeight / 2);

        this.button = createButton('start');
        this.button.position(boardPos + 80, windowHeight / 10);
        this.button.mouseClicked(() => this.start());
        this.stopbutton = createButton('stop');
        this.stopbutton.position(boardPos + 160, windowHeight / 10);
        this.stopbutton.mouseClicked(() => this.stop());
    }

    decrement() {
        if (this.timeRemaining["white"] <= 0 || this.timeRemaining["black"] <= 0) {
            this.stop();
        }

        if (this.started) {
            this.timeRemaining[this.turn] -= 1;
            this.show();
        }


    }

    start() {
        if (!this.started) {
            this.inter = setInterval(() => this.decrement(), 1000);
            this.started = true;
        }
    }

    stop() {
        if (this.started) {
            this.started = false;
            clearInterval(this.inter);
        }
    }

    isRunning() {
        return this.started;
    }

    show() {
        this.tLoc.html(
            "cand : White <br>time : " +
            this.timeRemaining["white"] +
            "<br>cand : Black <br>time : " +
            this.timeRemaining["black"])
    }

    press() {
        if (this.turn === "black") {
            this.turn = "white";
        } else {
            this.turn = "black";
        }
    }
}