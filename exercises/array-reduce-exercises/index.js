// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    const reducer = (a,c) => a + c;
    return arr.reduce(reducer);
}

// console.log(total([1,2,3])) // 6  

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const reducer = function (a,c) {
        return a.concat(c);
    };
    return arr.reduce(reducer, "");
}

// console.log(stringConcat([1,2,3])) // "123"  

// 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].voted) {
//             count++;
//         }
//     }
//     return count;
// }

// 3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.reduce(function(a,c) {
        if(c.voted) {
            a++
            return a;
        } else {
            return a;
        }
    }, 0)
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters)) // 7  

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    var reducer = function(a,c) {
        return a += c.price
    }
    return arr.reduce(reducer, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// console.log(shoppingSpree(wishlist)) // 227005  

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    return arr.reduce ( (a, b) => a.concat(b) )
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6]; 

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var results = { 
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0 
      }

    var x = function(a,b) {
        if (b.age >= 18 && b.age <= 25 && b.voted) {
            a++
            return a;
        } else {
            return a;
        }
    }

    var y = function(a,b) {
        if (b.age >= 26 && b.age <= 35 && b.voted) {
            a++
            return a;
        } else {
            return a;
        }
    }

    var z = function(a,b) {
        if (b.age >= 36 && b.age <= 55 && b.voted) {
            a++
            return a;
        } else {
            return a;
        }
    }

    var e = function(a,b) {
        if (b.age >= 18 && b.age <= 25) {
            a++;
            return a;
        } else {
            return a;
        }
    }

    var f = function(a,b) {
        if (b.age >= 26 && b.age <= 35) {
            a++;
            return a;
        } else {
            return a;
        }
    }

    var g = function(a,b) {
        if (b.age >= 36 && b.age <= 55) {
            a++;
            return a;
        } else {
            return a;
        }
    }

    results.youngVotes = arr.reduce(x, 0);
    results.midVotes = arr.reduce(y, 0);
    results.oldVotes = arr.reduce(z, 0);
    results.youth = arr.reduce(e, 0);
    results.mids = arr.reduce(f, 0);
    results.olds = arr.reduce(g, 0);
    return results;
}

console.log(voterResults(voters)) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/