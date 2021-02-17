const person = {
    name:'shihab',
    age : 18,
    id : 1
}
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);
// localStorage.setItem('userId', 12345);
const UserId = localStorage.getItem('userId');
const setParson = localStorage.setItem('person',JSON.stringify(person));
const getParson = localStorage.getItem('person');
const parseParson = JSON.parse(getParson);
console.log(parseParson.age);

const keys = Object.keys(parseParson);
keys.forEach(element => {
    console.log(element);
});
console.log(keys);
const values = Object.values(parseParson);
console.log(values);
