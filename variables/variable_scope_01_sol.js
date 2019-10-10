
/**
 * global vs local
 * 
 * Within the body of a function, a local variable takes precedence over a global variable
 * with the same name.
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */


var scope = "global";           // Declare a global variable

function checkscope() {
    var scope = "local";        // Declare a local variable with the same name
    return scope;               // Return the local value, not the global one
}

console.log(checkscope());      // => "local"
