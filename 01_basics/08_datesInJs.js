// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
console.log( typeof myDate);

 let myCreatedDate  = new Date(2024,9,21);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("10-26-2004");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(`Today date is ${newDate.getDate()} and month is  ${newDate.getMonth()+1}`);


console.log(newDate.toLocaleString('default',
    {
       weekday: "long"
    }
));






