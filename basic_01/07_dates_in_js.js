// dates

let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) //object



let myCreateedDate = new Date(2023,0,23) // => Mon jan 23 2023 (month start from 0th index)
console.log(myCreateedDate.toDateString());


let myDate1 = new Date (2023,0,23, 5, 3)
console.log(myDate1.toLocaleString());


let myCreateedDate1 = new Date("2023-01-14") //yy-mm-dd
let myCreateedDate2 = new Date("01-14-2023") //mm-dd-yy
console.log(myCreateedDate1.toLocaleString());
console.log(myCreateedDate2.toLocaleString());



let myTimeStam =  Date.now()
console.log(myTimeStam);
