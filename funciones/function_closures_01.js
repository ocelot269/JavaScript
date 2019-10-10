
/**
 * Closures
 * JavaScript uses lexical scoping. This means that functions
 * are executed using the variable scope that was in effect when
 * they were defined, not the variable scope that is in effect
 * when they are invoked. 
 * In order to implement lexical scoping, the internal state
 * of a JavaScript function object must include not only the code
 * of the function but also a reference to the current scope chain.
 * 
 * This combination of a function object and a scope 
 * (a set of variable bindings) in which the function’s variables
 * are resolved is called a closure in the computer science literature.
 * 
 * Technically, all JavaScript functions are closures: 
 * they are objects, and they have a scope chain associated with them.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var scope = "global scope";         // A global variable

function checkscope() {
    let scope = "local scope";      // A local variable
    function f() { 
        return scope;               // Return the value in scope here
    }
    return f();
}

console.log(checkscope());                     // What does this return?

