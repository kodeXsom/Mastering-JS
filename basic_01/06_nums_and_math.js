const score = 400 // JS automatically detect the datatype.
console.log(score);



const balance = new Number (100) //defining object using object. i.e. using new keyword.
console.log(balance);
// 
// Number properties........
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision:ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 100

console.log(balance.toString().length); // for converting number to string using string method.
console.log(balance.toFixed(1)); // checking the decimal after the number to the certern point.

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


const hundreds = 1000000
console.log(hundreds.toLocaleString()); // for adding comma in the number using american system
//.toLocalString('en-IN') => for indian number system. i.e 10,00,000

//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++//

console.log(Math);

console.log(Math.abs(-3)); // convert negative to positive not +ve to -ve.

console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // always choose upper round-up value
console.log(Math.floor(4.9)); // always choose lower round-up value.

console.log(Math.min(4,5,3,5)); // We have max() & min() for getting the value of max and min with in an array.





// **************** Important *****************//



console.log(Math.random()); //This method always give value between 0-1


console.log((Math.random()*10) + 1);//we multiply 10 to get the actual number and add 1 to avoid to zero
// we can wrap the above expression with Math.floor  for getting the number with out the decimal value.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)

