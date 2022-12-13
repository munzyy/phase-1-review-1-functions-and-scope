

// Deliverable # 1 - Write the code to declare a function named "sum" that adds two numbers together.

function sum (num1,num2) {
    return (num1 + num2);
}
    

    // function to add two numbers together


/*
 * Your code goes here
 */

// Deliverable # 2 - Write the code to invoke (call) your "sum" function.
sum(3,5);


/*
 * Your code goes here
 */

/* Exercise # 1 - Block Scope: The while loop as seen below contains a block of code.
 * A variable named "day" has been declared and assigned the value of "Monday" inside of this while loop.
 * What happens when you try to access the value of this variable outside of the while loop?
 */
let time = 10
while(time > 0){
    let day = "Monday"
    console.log(`Tick tock! ${time} seconds left`)
    time--
}
console.log("Time is up!")

// Print out the value of the "day" variable here using console.log(), and notice what happens in the console.


// Exercise # 2 - Function Scope: What happens when you try to console log the value of "iceCreamFlavor" inside the "createIceCream" function vs outside of the function?
let iceCreamFlavor = "Strawberry"
function createIceCream(iceCreamFlavor){
    console.log("exercise2",iceCreamFlavor);
    // Print out the value of the "iceCreamFlavor" variable here using console.log(), and notice what happens in the console.
}

createIceCream("Matcha")
// Print out the value of the "iceCreamFlavor" variable here using console.log(), and notice what happens in the console.
console.log("aftercreatematcha", iceCreamFlavor);
// Exercise # 3 - Global Scope: What happens when you create a variable in global scope and change that variable's value inside of a function or block of code?
let pasta = "Capellini"
function changePasta(){
    pasta = "Linguini"
}
changePasta()
// What will the value of "pasta" be now? Print out the value of the "pasta" variable using console.log() and find out!
console.log("global", pasta);
/* Deliverable # 3:
 * Step 1 - Declare a function named "guacamoleMaker" that accepts a function as its parameter.
 * Step 2 - Declare a function named "mixIngredients" that prints the string "Mixing Ingredients..." to the console.
 * Step 3 - Inside of the "guacamoleMaker" function, invoke the "mixIngredients" function. On the following line, print the string "All done!" to the console.
 * Step 4 - Invoke the "guacamoleMaker" function: Make sure to pass in the "mixIngredients" function as an argument of the "guacamoleMaker" function.
 */

/*
 * Your code goes here
 */
function guacamoleMaker () {
    mixIngredients();
    console.log("All done!");
};
function mixIngredients () {
    console.log("Mixing ingredients...");
}

guacamoleMaker(mixIngredients);//callback function

/*  

/* Deliverable # 4:
 * Step 1 - Declare a function named "playASport".
 * Step 2 - Inside of the "playASport" function, declare a function named "playSoccer" that prints the string "GOAL!!!" to the console.
 * Step 3 - The return value of the "playASport" function should be the "playSoccer" function. Thus making "playASport" a function that returns another function.
 * Step 4 - Invoke the "playASport" function.
 */

/*
 * Your code goes here
 */
function playASport() {
    function playSoccer () {console.log("GOAL!!!")};
        return playSoccer;
    }

 let sports = playASport ();
 sports();