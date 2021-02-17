const money = 150;
const active = false;
let food;
// if (money > 100) {
//     food = 'biriayni'
// }
// else{
//     food = 'allu vorta'
// }
//ternary
food = money > 100 ? 'biriyani' : 'begun vorta';
console.log(food);

// if (active === true) {
//     cssClass = 'active'
// }
// else{
//     cssClass = 'inactive'
// }
const cssClass = active ? 'active' : 'inactive';
console.log(cssClass);
// function call shortcut alternative
// active ? display() : hide();
const x = active && 6;
const y = active || 6;
console.log(x);
console.log(y);
//string to number
const number = +'20';
// number to String
const numText = 40 + '';
console.log(numText);

function text(num1,num2=10) {
    // num2 = num2 || 10;
    return num1 + num2
}