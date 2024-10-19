const name = "Abhay";
const repo = 2;

// console.log(name +" "+ repo);
console.log(`My name is ${name} and I made ${repo} repo`);

// Second way to print string

const str = new String('Abhay-sharma');
// console.log(str);
// console.log(str.__proto__);
// console.log(str.length);
// console.log(str.toUpperCase(str));
console.log(str.indexOf('y'));

const newString = str.substring(0,4);
// console.log(newString);
// console.log(str.substring(1,7));

// const anotherString = str.slice(-5,3);
// console.log(anotherString);

const str1 = new String("    Hello  Buddy   ");
// console.log(str1);
// console.log(str1.trim());

console.log(str1.trimStart());
console.log(str1.trimEnd());

// In url case browser is not understand space( ) so in this case browess put %20 in place of space so we remove %20 in replce() method.
const url = 'https://abhay.svce%20.com';
console.log(url.replace('%20', '-'));

// if you are ask, this is present or not in string so use include() methode
// const str3 = new String("abhaysharma_0154@.comGmail");
// console.log(str3.includes('com'));
// console.log(str3.includes(0154)); // Octal is not allowed in this method.
// console.log(str3.includes('Karma'));

const str4 = new String("My name is anthany gonsale base.");
console.log(str4.split(' '));




