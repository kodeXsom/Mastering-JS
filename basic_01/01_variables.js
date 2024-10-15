const accountId = 123321
let accountEmail = "heyy@gmail.com"
var accountPassword = "12345"
accountCity = "bbsr"

// accountId = 2 // not allowed
 
accountEmail = "hey@mail.com"
accountPassword = "212121"
accountCity = "ctc"
let accountState;

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


