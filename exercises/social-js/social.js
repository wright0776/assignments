var socialize = {
    users: [{
            firstName: "Tom",
            lastName: "Winker",
            age: 30,
            hobbies: ["biking", "running", "yoga", "tree-climbing"],
            favoriteThing: "flexBox",
            friends: ["Crank", "Sally"],
            sayHello: function () {
                console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
            },
            addFriend: function (friendName) {
                this.friends.push(friendName)
            }
        },
        {
            firstName: "Crank",
            lastName: "Shaft",
            age: 31,
            hobbies: ["spinning", "twirling", "whirling"],
            favoriteThing: "oil",
            faroriteKindsOfOil: [{
                    brand: "Pensoil",
                    weight: "10W40",
                    placesToBuy: ["AutoZone","Lucky's"]
                },
                {
                    brand: "Motor1",
                    weight: "20W30",
                    placesToBuy: ["A'sAuto","Lucky's"]
                }
            ],
            friends: ["Tom", "Sally"],
            sayHello: function () {
                console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
            },
            addFriend: function (friendName) {
                this.friends.push(friendName)
            }
        },
        {
            firstName: "Sally",
            lastName: "Jones",
            age: 3,
            hobbies: ["eating", "askingQuestions", "gettingLost"],
            questions: {
                favoriteQuestion: "Why?",
                question2: "How?",
                question3: "When?",
                question4: "How many?",
                question5: "What is that?"
            },
            favoriteThing: "grass",
            friends: ["Mom", "Dad"],
            sayHello: function () {
                console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
            },
            addFriend: function (friendName) {
                this.friends.push(friendName)
            }
        }
    ]
}

socialize.users[2].sayHello()

socialize.users[2].addFriend("Rick")

console.log(socialize.users[2].friends)