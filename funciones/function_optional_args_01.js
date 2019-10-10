
/**
 * When a function is invoked with fewer arguments than declared parameters, 
 * the additional parameters are set to the undefined value. 
 * Uou must be able to assign a reasonable default value to parameters 
 * that are omitted.
 * 
 * Put the optional ones at the end of the arguments list.
 * 
 * Use the comment optional to emphasize.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.


function getPropertyNames(o, /* optional */ a) {
    a = a || [];                                 // If undefined, use a new array
    for(var property in o) a.push(property);
    return a;
}

// This function can be invoked with 1 or 2 arguments:

var o = {
    una: "una",
    dos: "dos",
    tres: "tres"
};

var a = getPropertyNames(o);        // Get o's properties into a new array

console.log(a);


var p = {
    cuatro: "cuatro",
    cinco: "cinco"
}

var b = getPropertyNames(p, a);     // append p's properties to that array

console.log(b);



