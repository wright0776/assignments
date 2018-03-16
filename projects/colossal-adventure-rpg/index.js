var rs = require("readline-sync")

var data = {
    enter: false,
    choice: "",
    walk: "",
    fightOrFlee: "",
    action: "a",
    escaped: undefined,
    enemyTypes: ["Death Frog", "Hater", "Factory Farm", "Donald Trump"],
    attackTypes: ["Roundhouse Kick", "Karate Chop", "Sucker Punch", "Say mean words to"],
    itemTypes: ["Jar of Holy Water", "Lucky Cricket", "Brick Phone", "Greasy Toupe"]
}

var player = {
    name: "",
    hp: 200,
    attack: undefined,
    kills: 0,
    items: []
}

var randomInArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

var inventoryQuery = function (arr) {
    if (arr.length < 1) {
        return "You have no items."
    } else {
        return arr.join(", ")
    }
    // for (var i = 0; i < arr.length; i++){
    //     return arr[i] + ", "
    // }
}

var GenerateEnemy = function () {
    this.type = randomInArr(data.enemyTypes);
    this.hp = this.genHP();
    this.attack = Math.floor(Math.random() * 5 + 10);
}

var GenerateAttack = function () {
    this.type = randomInArr(data.attackTypes)
    this.power = Math.floor(Math.random() * 10 + 20)
}

var GenerateItem = function () {
    this.type = randomInArr(data.itemTypes)
}

GenerateEnemy.prototype.genHP = function () {
    switch (this.type) {
        case "Death Frog":
            return Math.floor(Math.random() * 20 + 80);
        case "Hater":
            return Math.floor(Math.random() * 30 + 50);
        case "Factory Farm":
            return Math.floor(Math.random() * 30 + 30);
        case "Donald Trump":
            return Math.floor(Math.random() * 30 + 20);
    }
}

var run = function (e) {
    if (Math.random() > .5) {
        player.hp -= 20;
        console.log("\n\nThe " + e + " deals a blow of damage while you try to escape. -20 hp!  ");
        console.log("\n* You fail to get away. *");
        data.escaped = false;
    } else {
        console.log("\n* You escape unscathed. *")
        data.escaped = true;
    }
}

var playGame = function () {
    data.choice = rs.keyIn("\n\n\tOptions: 's' look at player stats, 'i' look at player inventory, 'w' walk: \n", {
        limit: "siw"
    })
    switch (data.choice) {
        case "s":
            console.log("\n\n Player Name: " + player.name + "\tPlayer HP: " + player.hp + "\t\tPlayer Kills: " + player.kills);
            break;
        case "i":
            console.log("\n\n Inventory: " + inventoryQuery(player.items));
            break;
        case "w":
            walk();
    }
}

var walk = function () {
    if (Math.random() < .33) {
        enemyAppeared()
    } else {
        console.log("\n\nYou head deeper into the Forest of Endless Doom... seems safe enough...")
    }
}

var enemyAppeared = function () {
    var enemy = new GenerateEnemy()
    console.log("\n\nYou begin walking ... A " + enemy.type + " appears!");
    data.fightOrFlee = rs.keyIn("\n\tEnter 'f' to fight the " + enemy.type + ", enter 'r' to run away. \n\n", {
        limit: "fr"
    })
    switch (data.fightOrFlee) {
        case "f":
            console.log("\nYou charge courageously towards the " + enemy.type + "!")
            while (enemy.hp > 0 && data.action === "a") {
                var attack = new GenerateAttack();
                var damage = enemy.hp - attack.power;
                enemy.hp -= attack.power;
                console.log("\n\n\tYou " + attack.type + " the " + enemy.type + ", dealing " + attack.power + " damage. " + enemy.type + " hp: " + enemy.hp)
                if (enemy.hp <= 0) {
                    player.kills++;
                    var item = new GenerateItem();
                    console.log("\n\t\tYou defeated the " + enemy.type + "! You receive a " + item.type + " and regenerate 20 hp.");
                    player.hp += 20;
                    player.items.push(item.type);
                    break;
                }
                console.log("\n\nThe " + enemy.type + " fights back!")
                enemyAttack = enemy.attack
                playerDamage = player.hp -= enemy.attack;
                console.log("\n\tThe " + enemy.type + " does " + enemyAttack + " damage. " + player.name + " hp: " + player.hp);
                data.action = rs.keyIn("\n\nEnter 'a' to attack again, enter 'r' to run away. \n", {
                    limit: "ar"
                });
                if (data.action === "r") {
                    console.log("\n\nYou turn your back to the " + enemy.type + " and attempt to get away... ")
                    run(enemy.type);
                    if (data.escaped === true) {
                        break;
                    }
                }
            }
            break;

        case "r":
            console.log("\n\nYou turn your back to the " + enemy.type + " and attempt to get away... ")
            run(enemy.type);
            if (data.escaped === true) {
                break;
            }
            data.action = rs.keyIn("\n\nEnter 'a' to attack, enter 'r' to run away. ", {
                limit: "ar"
            });
    }
}

//////////////////////////////////////////

console.log("\nWelcome to The Forest of Endless Doom!\n");

player.name = rs.question("\tWhat is your name? \n\n");

console.log("\n\nWelcome, " + player.name + "...")

while (data.enter === false) {
    if (data.enter = rs.keyInYN("\nWill you enter the forest, " + player.name + "?\t")) {
        console.log("\n\n*You enter the forest...*")
    } else {
        console.log("\n\nThere is nowhere else to go...")
    }
}

while (player.hp > 0 && player.kills < 3) {
    playGame();
}

console.log("\n\nYou defeated 3 enemies!\n")

setTimeout(function () {
    console.log("YOU WIN!!!\n")
}, 200)