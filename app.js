//variable let, const
const myName= 'Tom';
let age = 6;
age = 10;

const person = {
    name:'shihab',
    age:18,
    address:'satpai'

}

const certificate = `my name is ${myName}, i am ${age} years old`
const certificate2 = `my name is ${person.name}, i am ${person.age} years old, i live in ${person.address}`
console.log(certificate);
console.log(certificate2);

//condition
// if (money > 20 && age >= 18) {
    
// }
// else{

// }
// array
const numbers =[50 , 60]
const name =['Motiur' , 'jahangir']
const product = [
    {name:'laptop',price:500},  {name:'watch',price:100}, {name:'phone',price:50}];
// loop :for loop
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
}

//function
function add(num1,num2) {
    return num1 + num2
}
const data = add(10,11)
console.log(data);

//arrow function
const five = (num) => num * 5 ; 
const add1 = (num1,num2) => num1 + num2; 
const add2 = (num1,num2) => {
    const sum = num1 + num2;
    return sum * 5;
}; 

//map