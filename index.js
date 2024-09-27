/*function signature/sample */
function calculateTax(income, expenses) {

        if(0 > income){
                return "Invalid Input";
        }
const monthlyIncome = income;
const monthlyExpenses = expenses;
const neatIncome = monthlyIncome - monthlyExpenses;
       
const tax = neatIncome * .20;
return tax;

        
        
}


// const sampleInput = calculateTax(-9000,2000);
// console.log("The sales tax monthly:", sampleInput);


// ........Problem 02 .........................

/*function signature/sample */


function sendNotification(email) {

        if(email.includes("@") !== true){
                return "Invalid Email";
        }

        const result = email.split("@");
        const notificationMessage = result[0] + " sent you an email from "+ result[1];
        return notificationMessage;
       
}

// const input = sendNotification("nadim51365@gmail.com");
// console.log(input);


// ..........Problem 03..........................




/*function signature/sample */
function checkDigitsInName(name) {

        for(let i = 0; i<name.length; i++){
                // console.log(name[i]);
                
                if(name[i].isNaN){
                        return true;
                }
                
        }

        


    
}

const Name = checkDigitsInName("Raj123");
console.log("My name:",Name);















// ..........Problem 04.....................................
























/*function signature/sample */

const rajib = {
        name: "Rajib",
        textScore: 45,
        schoolGrade : 25,
        isFFamily : true,
}

function calculateFinalScore(obj) {
        // console.log(rajib);
}


// calculateFinalScore(rajib);










