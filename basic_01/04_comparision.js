console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);


console.log("2">1);
console.log("02">1);

console.log(null>0);  
// sometimes null converted to Nan or zero that's why we face problem
console.log(null==0);
console.log(null >=0);

//comparison convert null to a number ,treating it as 0.
// that's why null>=0 is true and null > 0 is false.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// In js comparision and equality check is 2 different things.

/// ===  strictly check

console.log(2 == "2");
console.log(2 === "2");





