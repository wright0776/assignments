class Party {
    constructor(type) {
        this.population = 1000000;
        this.type = type;
    }
}
class NukeDamage {
    constructor() {
        this.damage = Math.floor(Math.random() * 500000);
    }
}
const communists = new Party("Communists");
const penguins = new Party("Penguins");
let firstAttacker = undefined;
let secondAttacker = undefined;
const attacksFirst = () => {
    let r = Math.floor(Math.random() * 2 + 1);
    if (r === 1) {
        firstAttacker = penguins;
        secondAttacker = communists;
    } else if (r === 2) {
        firstAttacker = communists;
        secondAttacker = penguins;
    }
}
const onMissFunc = (attacker, defender) => console.log(`
    The ${attacker.type}'s nuke missed the ${defender.type} and landed in the ocean.
    `);
const onHitFunc = (attacker, defender) => {
    let damage = new NukeDamage().damage;
    if (defender.population < damage) {
        damage = defender.population;
        defender.population = 0;
    } else {
        defender.population -= damage;
    }
    console.log(`
    The ${attacker.type}'s nuke hit the ${defender.type} and killed ${damage} ${defender.type}. 
    ${defender.type} population: ${defender.population}`);
}
let turn = 0
const sendNuke = (party, onHit, onMiss) => {
    const hit = (Math.random() > 0.33);
    // turn++;
    // console.log(`Turn ${turn}, Hit: ${hit}`);
    let def;
    if(party.type === "Penguins") {
        def = communists;
    } else {
        def = penguins;
    }
    if (hit) {
        onHit(party, def);
    } else {
        onMiss(party, def);
    }
}
attacksFirst()
while (penguins.population > 0 && communists.population > 0) {
    sendNuke(firstAttacker, onHitFunc, onMissFunc);
    if (secondAttacker.population > 0) {
        sendNuke(secondAttacker, onHitFunc, onMissFunc);
    }
}
if (penguins.population > 0) {
    console.log(`
    The war is over! The Penguins won!
    `)
} else {
    console.log(`
    The war is over. The Communists won...
    `)
}
