// let add: number = 1+2;
// console.log(add);
var subtract = Math.pow(2, 4);
console.log(subtract);
//assignment operator
var pizzaprice = 1000;
var tax = 150;
//let total= pizzaprice + tax //long way
//console.log(total);
pizzaprice += tax; //short way pizzaprice =pizzaprice + tax
console.log("pizzaprice=", pizzaprice); //1000 + 150 = 1150
// let DataBasePassword:string= "1234";
// let PasswordIEntered=1234;
// console.log("",DataBasePassword==PasswordIEntered);
var DataBasePassword = "1234";
var PasswordIEntered = 1234;
//this check only the value 
console.log("line no 23", DataBasePassword == PasswordIEntered);
//this check value + type
console.log("line no 24", DataBasePassword === PasswordIEntered);
// this only determine the it is equal or not
console.log("line no 28", DataBasePassword != PasswordIEntered);
// this determine it is equal or not + type
console.log("line no 30", DataBasePassword !== PasswordIEntered);
