class Player {
    constructor(name = "no name", coins = 0, status = "Small" || "Big" || "Powered Up" || "Dead", star = false, gameActive = true) {
        this.name = name;
        this.totalCoins = coins;
        this.status = status;
        this.star = star;
        this.gameActive = gameActive;
    }
    setName(namePicked = "Mario" || "Luigi") {
        this.name = namePicked;
    }
    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else {
            this.status = "Dead";
        }
    }
    gotPowerup() {
        if (this.status === "Small") {
            this.status = "Big";
        } else {
            this.status = "Powered Up";
        }
    }
    // gameActiveF() {
    //     if (this.status === "Dead") {
    //         this.gameActive = false;
    //     } else {
    //         console.log("im alive!")
    //         this.gameActive = true;
    //     }
    // }
    addCoin() {
        this.totalCoins++;
    }
    print() {
        console.log(`
            Name: ${this.name}
            Coins: ${this.totalCoins}
            Status: ${this.status}
            Star: ${this.star}
                `
        )
    }
}

class randomRange extends Player {
    constructor(name = "no name", coins = 0, status = "Small" || "Big" || "Powered Up" || "Dead", star = false, gameActive = true) {
        super();
    }
    random() {
        let num = Math.floor(Math.random() * 3);
        if (num === 0) {
            this.gotHit();
        } else if (num === 1) {
            this.gotPowerup()
        } else {
            this.addCoin()
        }
        this.print();
    }
}


let player1 = new randomRange();
player1.setName("Luigi");
player1.random();
player1.random();
player1.random();
