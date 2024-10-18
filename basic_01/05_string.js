const name = "kodeX"
const repoCount = 50

console.log(name + repoCount + "Value"); // not recommend

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // It is known as string interpolation, and it a morden way to write any string.



const gameName = new String('kodeX-sn-com') // another way of declaring a string.
console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));
// go through MDN document for understnding the string properties.

const newString = gameName.substring(0,4) // it don't include the last index value.
// we can't give negative index in sunstring.
console.log(newString); //kode

const anothString = gameName.slice(2,4)
// we can give negative index in slicing.

console.log(anothString);


const newStringOne = "      kodeX     "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim has 2 more method that is trim-start and trim-end.

const url = "https://kodex.com/kodex%20som"

console.log(url.replace('%20','_'));



console.log(url.includes('kodex'));


console.log(gameName.split('-'));
