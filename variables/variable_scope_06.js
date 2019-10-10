
/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);