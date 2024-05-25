// create admin Array
let userName = ["Iqra","Afnan","Ahmad","Kamran","Admin"];
 // using foreach loop
 userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report? `);
    }
     else{
        console.log(`Hello ${oneUser}, Thank you for logging in again`);
     }
     }
    )
