
/**
 * Nada nuevo: hoisting de variables
 * 
 * Programming JavaScript Applications. Eric Elliott.
 */

var x = 1;
function f() {
    console.log(x);
    var x = 2;
};

f();