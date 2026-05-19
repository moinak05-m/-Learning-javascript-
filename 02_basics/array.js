// //Array
// const array = [1,2,3,4,5]
// console.log(array[2])

// const myarray = new Array(10,20,30)
// console.log(myarray);
// myarray.push(40)
// console.log(myarray);


// const nums = [ 5,10,15,20]
// const convertnums = nums.join()
// console.log(typeof convertnums);
// console.log(convertnums)


const superheroes = ["Batman" , "Saktiman" , "Spiderman"]
const cartoonheroes = ["doraemon" , "Chota Bheem" , "Mighty Raju"]
// superheroes.push(cartoonheroes)
// console.log(superheroes[3][2]);

const all_new_heroes = [...superheroes, ...cartoonheroes]
console.log(all_new_heroes)


//To make array 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))