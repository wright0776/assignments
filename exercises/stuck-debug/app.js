var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while (option != 2) {
  option = ask.keyInSelect(options, "What would you like to do today?: ");
  if (option === 0) {
    // console.log("\noption = " + option)
    console.log("\n\tYou pick some flowers. You make a bouquet.");
  } else if (option < 0) {
    console.log("\nSELECT AN OPTION!! ('CANCEL' DOESN'T COUNT)")
  } else {
    // console.log("\noption = " + option)
    console.log("\n\tYou shoot guns.");
  }
}

console.log("\n\tYou fight a bear and get beat up!\n\n\tGAME OVER\n");