/**
 * To understand how functions can be JavaScript data 
 * as well as JavaScript syntax, consider this function definition.
 * This definition creates a new function object and assigns it 
 * to the variable square. The name of a function is really immaterial;
 * it is simply the name of a variable that refers to
 * the function object. 
 * The function can be assigned to another variable and still work the
 * same way:
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


function square(x) { return x*x; }

var s = square;                 // Now s refers to the same function that square does
console.log(square(4));         // => 16
console.log(s(4));              // => 16


// Functions can also be assigned to object properties 
// rather than variables. When you do this, they’re called methods:

var o = {
    square: function(x) { return x*x; }
};                                       // An object literal

var y = o.square(16);                     // y equals 256
console.log(y);                           // ojo: no se invoca y()


// Functions don’t even require names at all, 
// as when they’re assigned to array elements:

var a = [function(x) { return x*x; }, 20];          // An array literal

console.log(a[0](a[1]));                            // => 400
