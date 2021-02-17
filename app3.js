// array destructuring
const numbers = [45,92];
// const x =  numbers[0];
// const y =  numbers[1];
// const [x,y] = numbers;
// console.log(x,y);
function boxify(num) {
    return [ num , num + 5]
}
const [box1,box2] = boxify(1);
console.log(box1,box2);
// object destructuring
const person = {id:10, name:'Pomi', age:17,};
const {name} = person;
// console.log(name);
// console.log(name);
// console.log(name);

//create object shortcut
const x = 25;
const y = 35;

// const obj = {x:x, y:y}
const obj2 = {x,y}
console.log(obj2);

//3 dots 
numbers.push(66)
const newArray = [...numbers,56];
console.log(newArray);
console.log(numbers);

