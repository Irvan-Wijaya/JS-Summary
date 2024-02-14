// 3 browser-specific functions to interact with visitors

// alert
alert("Hello");

// prompt
var age = prompt("Testing Prompt", "oke") // default value can string or number

// confirm
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

/*======================================================================================*/

// String, Number, Boolean conversion
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number


alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

/*======================================================================================*/

// Conditional | ternary
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
   
/*======================================================================================*/

// Nullish coalescing operator "??"
// let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/*======================================================================================*/

// Loop -> Breaking the Loop
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;

}
alert( 'Sum: ' + sum );

// Continue to next iteration
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}