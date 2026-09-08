<<<<<<< HEAD
//creating an array of objects 
var myDog =[ {
    "name" : "Ferdinand",
    "legs" : 4,
    "tails": 2,
    "friends":["shreya","sriram", "siddhu"]
},
{
    "sister": "ginger",
    "leg" : 4,
    "tail": 1,
    "friend":["shreya","sriram", "siddhu"]
}];
console.log(myDog[0].name); 
console.log(myDog[1].sister);


myDog[0].bark ="woof";//adding values to objects using dot notation
console.log(myDog[0].bark);
myDog[0]["bark1"] = "woof woof";//adding values to objects using bracket notation
console.log(myDog[0].bark1);

delete myDog[0].bark1;//deleting values from objects using delete operator
console.log(myDog[0].bark1);


var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
console.log(myStorage.car.inside["glove box"]);



function random(){
    console.log(Math.floor(Math.random())*90);
}
random();
//conversion to integers
function convertToInteger(str){
    return parseInt(str ,2)}
    console.log(convertToInteger("10011"));
    // ternary operator
    function checkEqual(a,b){
        return a===b ? true : false;
    }
    console.log(checkEqual(2,2));
  
// anyonymous function changed to arrow function
var magic =() => new Date();
console.log(magic());
console.log(new Date());
const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4 ,5]));
 

//destricturing assignment to assign variables from objects
let stats={
  "max":56.78,
  "min":-0.75,
  "median":35.5,  
}
function half({max ,min}){
  return (stats.max + stats.min) / 2.0;
}
half(stats);console.log(half(stats));


//template literals
const person = {
    name : "shreya",
    age : 20
};
//template literals
const meSayHello=`hello my name is ${person.name} and my age is ${person.age}`;
console.log(meSayHello);

//class creation
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }}
class vegetable{
    constructor(name){
        this.name =name;
    }
}
let returnedValue = new vegetable("carrot");
console.log(returnedValue.name);
//getters and setters
 
=======
//creating an array of objects 
var myDog =[ {
    "name" : "Ferdinand",
    "legs" : 4,
    "tails": 2,
    "friends":["shreya","sriram", "siddhu"]
},
{
    "sister": "ginger",
    "leg" : 4,
    "tail": 1,
    "friend":["shreya","sriram", "siddhu"]
}];
console.log(myDog[0].name); 
console.log(myDog[1].sister);


myDog[0].bark ="woof";//adding values to objects using dot notation
console.log(myDog[0].bark);
myDog[0]["bark1"] = "woof woof";//adding values to objects using bracket notation
console.log(myDog[0].bark1);

delete myDog[0].bark1;//deleting values from objects using delete operator
console.log(myDog[0].bark1);


var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
console.log(myStorage.car.inside["glove box"]);



function random(){
    console.log(Math.floor(Math.random())*90);
}
random();
//conversion to integers
function convertToInteger(str){
    return parseInt(str ,2)}
    console.log(convertToInteger("10011"));
    // ternary operator
    function checkEqual(a,b){
        return a===b ? true : false;
    }
    console.log(checkEqual(2,2));
  
// anyonymous function changed to arrow function
var magic =() => new Date();
console.log(magic());
console.log(new Date());
const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4 ,5]));
 

//destricturing assignment to assign variables from objects
let stats={
  "max":56.78,
  "min":-0.75,
  "median":35.5,  
}
function half({max ,min}){
  return (stats.max + stats.min) / 2.0;
}
half(stats);console.log(half(stats));


//template literals
const person = {
    name : "shreya",
    age : 20
};
//template literals
const meSayHello=`hello my name is ${person.name} and my age is ${person.age}`;
console.log(meSayHello);

//class creation
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }}
class vegetable{
    constructor(name){
        this.name =name;
    }
}
let returnedValue = new vegetable("carrot");
console.log(returnedValue.name);
//getters and setters
 
>>>>>>> 61421b1d9b7e351506f20280c5bd023ad2aa3ef1
export const capitalizeString = str => str.toUpperCase();