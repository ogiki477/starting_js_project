//import {apiKey} from "./util.js";

//import apiKey from "./util.js";

//console.log(apiKey);

//import * as util from "./util.js";

//console.log(util.apiKey);



//Variables And Values 

// let  userMessage = 'Hello World';

// userMessage = "World";

// console.log(userMessage);
// console.log(userMessage);
// console.log(userMessage);
// console.log(userMessage);


//OPERATORS

console.log(5 + 8);


if(10 === 10){

    console.log("Works");
}


// FUNCTONS 

function greeting(){
    console.log("Greetings");
}

greeting();
greeting();
greeting();
greeting();


function greetUser(userName,greeting){
    // console.log(userName);
    // console.log(greeting);

    return "Hello " + userName + " " + greeting + " There!!";
}

console.log(greetUser('Omo','Watsup'));



// OBJECTS AND CLASSES 

const user = {

    name: "Omo",
    age: 34,

    greeting(){
        console.log("Hello");
        console.log(this.name);
    }

};

//console.log(user);

console.log(user.age);
user.greeting();


//CLASSES

class User {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log("Yooo,How are You");
    }
}

const user1 = new User('omo',25);

console.log(user1);
console.log(user1.age);
console.log(user1.name);
user1.greetings();


const hobbies = ['sports','cooking','reading'];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);


const index = hobbies.findIndex((item)=> item === "reading");

console.log(index);



const [firstName, lastName] = ['Omo','Moses'];

console.log(firstName);
console.log(lastName);