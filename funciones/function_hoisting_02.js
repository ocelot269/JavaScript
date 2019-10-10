
/**
 * Function DECLARATION Hoisting
 * 
 * used to describe the illusion that all variable declarations
 * are “hoisted” to the top of the containing function. 
 * JavaScript builds its execution environment in two passes. 
 * The declaration pass sets up the runtime environment, 
 * where it scans for all variable and function declarations and
 * creates the identifiers. The second pass is the execution pass. 
 * After the first pass, all declared functions are available, 
 * but variables are still undefined.
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */


function number() {
        return 1;
}

function f() {
    console.log(number());      //, 2, 'Inner scope wins.
    function number() {         // the identifier and the body are hoisted
        return 2;
    }
}

f();
console.log((number()));         // 1, 'Outer scope still works.

