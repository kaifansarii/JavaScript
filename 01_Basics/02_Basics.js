// * Basic Type conversion in javaScript

let number = "56";

console.log(typeof number);

let NumberInString = Number(number);
console.log(typeof(NumberInString));

// What if we have a variable with this values. let num = "34xyz";
// Now, we have a character in our number. and it is compulsory to have a proper number.
// So, it will give NaN( Not a Number ). 

// And if we have num = null;
// then it will print = 0;

// And if we have num = undefined;
// then it will print = NaN;

// And if we have num = true;
// then it will print = 1;


// Notes
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0;

let bool = Boolean(isLoggedIn);
console.log(bool);

// 1 >= true; 0 => false
// "" => false
// "Kaif" => true

let someNumber = 33

let StringNumber = String(someNumber);
console.log(StringNumber);
console.log(typeof StringNumber);
