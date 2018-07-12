//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

function randomNumber(){ 
    let randoNum=Math.random();
    let randomNum20 = randoNum*21
    let randomInt = Math.floor(randomNum20);
    console.log(randomInt);
}

randomNumber();

function randomfoods(){ 
   let rando = Math.random();
   let x = rando*5;
   let y = Math.floor(x);
   console.log(foods[y])
}

randomfoods();

function randomStudent(){ 
    let rando = Math.random(); 
    let x = rando*6;
    let y = Math.floor(x)
    console.log(students[y])
}

randomStudent(); 

function randomGroup(){ 
    let rando = Math.random(); 
    let x = rando*6;
    let y = Math.floor(x)
    for(i=0; i<3; i++){
        console.log(students[y])
    }
}

randomGroup();