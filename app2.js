const numbers = [1,2,3,4,5];
const friends = ['balam','salam','kuddus'];
const product = [
    {id:1 , name:'laptop' , price: 500 , },
    {id:2 , name:'mobile' , price: 100 , },
    {id:3 , name:'watch' , price: 50 , },
    {id:4 , name:'tablet' , price: 90 , },
];
// const names = product.map(pd => pd.name);
// const names2 = product.map(pd => pd.price);
// const names3 = product.map(pd => pd.id);
// console.log(names);
// console.log(names2);
// console.log(names3);

// for each
// product.forEach(element => console.log(element));

//filter
const has = product.filter(pd=> pd.price <= 100)
console.log(has);

// find
