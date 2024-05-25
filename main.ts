// Using Currentuser Array
let currentUser = ["Ali","Sana","Ahmad","Kamran","Zain"]
// Create NewUser Array
let newUser = ["Usman","Ali","Zain","Hussan","Adnan"]
// Loop through new User check for avaiblility
newUser .forEach(new_one_user =>{
    // Making a condition for Username Already exist and save Ourcondition variable
    let ourCondition = currentUser.some(currentUser => currentUser.toLowerCase() === new_one_user.toLowerCase())
// print difffernt massge using If else statement 
    if(ourCondition){
console.log(`\n Sorry ${new_one_user} is already taken!\n`)
 }
 else{
    console.log(`\n Welcome ${new_one_user} Username is available!\n`)
 }
})
