
/**
 * global vs local
 * function scope and hoisting
 * 
 * JavaScript’s function scope means that all variables 
 * declared within a function are visible throughout 
 * the body of the function. 
 * Curiously, this means that variables are even visible 
 * before they are declared. 
 * This feature of JavaScript is informally known as hoisting: 
 * JavaScript code behaves as if all variable declarations 
 * in a function (but not any associated assignments) are “hoisted” 
 * to the top of the function. Consider the following code.
 *  
 * Javascript, the Definitive Guide. David Flanagan.
 */


var scope = "global";

function f() {

    console.log(scope);             // Prints "undefined", not "global"
    var scope = "local";            // Variable initialized here, but defined everywhere
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // prints "global"