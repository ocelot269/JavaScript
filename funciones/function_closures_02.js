
var scope = "global scope";         // A global variable

function checkscope() {
    let scope = "local scope";      // A local variable
    function f() { 
        return scope;               // Return the value in scope here
    }
    return f;                   
}

console.log(checkscope()());        // What does this return?
