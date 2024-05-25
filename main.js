// Using Currentuser Array
var currentUser = ["Ali", "Sana", "Ahmad", "Kamran", "Zain"];
// Create NewUser Array
var newUser = ["Usman", "Ali", "Zain", "Hussan", "Adnan"];
// Loop through new User check for avaiblility
newUser.forEach(function (new_one_user) {
    // Making a condition for Username Already exist and save Ourcondition variable
    var ourCondition = currentUser.some(function (currentUser) { return currentUser.toLowerCase() === new_one_user.toLowerCase(); });
    // print difffernt massge using If else statement 
    if (ourCondition) {
        console.log("\n Sorry ".concat(new_one_user, " is already taken!\n"));
    }
    else {
        console.log("\n Welcome ".concat(new_one_user, " Username is available!\n"));
    }
});
