function sum(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw "\nInput must be a number\n";
    }
    //check data types first and throw error
    return x + y;
}

try {
    sum("1","2");
} catch (err) {
    console.log(err);
}


var user = {
    username: "sam",
    password: "123abc"
};

function login(username, password) {
    //check credentials
}