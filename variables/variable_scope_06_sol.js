
/**
 * global vs local
 * function scope and hoisting
 * 
 * The local variable is defined throughout the body of the function, 
 * which means the global variable by the same name
 * is hidden throughout the function. 
 * Although the local variable is defined throughout, 
 * it is not actually initialized until the var statement
 * is executed.
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */

function f() {

    var scope;                  // Local variable is declared at the top of the function
    console.log(scope);         // It exists here, but still has "undefined" value
    scope = "local";            // Now we initialize it and give it a value
    console.log(scope);         // And here it has the value we expect
}

f();

console.log(scope);