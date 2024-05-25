let userNames = ["Azka","Kamran","Kinza","Admin","Ahmad"];

userNames = []
// Using lenght user Name 
    if (userNames.length == 0){
 console.log("\n Your Array in Empty We need to find some users!\n");
    }
else{
    // Using ForEach loop Array
    userNames.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like to see a status report? `);
        }
         else{
            console.log(`Hello ${oneUser}, Thank you for logging in again`);
         }
         }
        )
    }
