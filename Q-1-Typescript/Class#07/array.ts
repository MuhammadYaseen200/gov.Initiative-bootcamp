let myName: string = "jerry";
console.log(myName);

//basic array syntax
const shoppinglist:string[]= ["Milk","Bread",'Eggs']; 
console.log(shoppinglist);

const rashaanList:(string | number) []= ["Milk","Bread",'Eggs',5,6]; 
console.log(rashaanList);

const name:string[]=[];
name.push("jerry");//no error 
console.log(name);

//name.push(5);//error showing

//access value with the help of index number
const car = ["toyota","suzuki","honda"];
console.log(car) //adhura chordia hey search kr k complete krna he

//------Tuples------
//define our touple
let ourTouple : [number,boolean,string];
//initialize correctly
ourTouple = [5,false,'hello world..!'];
console.log(ourTouple);
