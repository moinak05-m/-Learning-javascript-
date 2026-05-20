// function addTwoNum(number1 , number2) {
//     console.log(number1+number2);
// }

// const sum = addTwoNum(2,8)
// console.log("sum : ",sum )


// function summation(num1 , num2) {
//     return num1 + num2
// }
// const result = summation(10,20)
// console.log("result :",result );


function loginusermessage(username) {
    if(username === undefined){
        console.log("Please enter valid user name");
        return;
        
    }
    return `${username} successfully logged in`
}

console.log(loginusermessage("Moinak"));
