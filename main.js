var userNames = ["Azka", "Kamran", "Kinza", "Admin", "Ahmad"];
userNames = [];
// Using lenght user Name 
if (userNames.length == 0) {
    console.log("\n Your Array in Empty We need to find some users!\n");
}
else {
    // Using ForEach loop Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report? "));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging in again"));
        }
    });
}
