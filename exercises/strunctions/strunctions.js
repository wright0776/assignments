var question = {
    can: "Can I get ",
    will: "Will you get me",
    get: "Get me "
}

var items = {
    almondLatte: "an almond milk latte, ",
    letterOpener: "a letter opener, ",
    water: "a water, "
}

var manners = {
    relaxed: "when you have a minute?",
    polite: "please?",
    urgent: "now!",
    rude: "you idiot!"
}

var phrase = function (phrase1, phrase2, phrase3) {
    console.log(phrase1.concat(phrase2, phrase3))
}

phrase(question.get, items.water, manners.rude)

//

var findFirstInstance = function (str, letter) {
    console.log(str.indexOf(letter))
}

findFirstInstance(items.water, "a")

//

var findLastInstance = function(str, letter) {
    console.log(str.lastIndexOf(letter));
}

findLastInstance(manners.rude,"i")

//

var matchIt = function(str,recc){
    console.log(str.match(recc));
}

matchIt(manners.relaxed,"minute")

//

var dirty = "This is shit!"

var change = function(str1,str2,str3){
    console.log(str1.replace(str2, str3));
}

change(dirty,"shit","sh**")

//

var iSlasher = function(str){
    return str.slice(str.indexOf("i"),str.lastIndexOf("i"))
}

console.log(iSlasher(dirty));

// 

var caps = "!DEXIF M'I"

var reverseStringLower = function(str){
    var first = str.split("").reverse().join("").toLowerCase();
    var second = first.substr(0,1).toUpperCase();
    return second.concat(first.substr(1))
}

console.log(reverseStringLower(caps));

//

