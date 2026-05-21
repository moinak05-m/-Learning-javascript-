let a = 10
const b = 20
var c = 30
if (true) {
    let a = 25
    console.log("Inner :" ,a)
}
console.log(a);




//************ FACTS********//

console.log(addFive(10))
function addFive(num1) {
    return num1 + 5
}



// console.log(addten(50)); // we can't use this before the function because it is stored in a variable
const addten = function(num){
    return num + 10
}

