
/**
 * When a function is invoked with more argument values 
 * than there are parameter names, there is no way 
 * to directly refer to the unnamed values. 
 * The Arguments object provides a solution to this problem. 
 * Within the body of a function, the identifier arguments 
 * refers to the Arguments object for that invocation. 
 * The Arguments object is an array-like object 
 * that allows the argument values passed to the function
 * to be retrieved by number, rather than by name.
 * 
 * The first argument is accessible within the function
 * by the parameter name x or as arguments[0]. 
 * The second argument is accessible only as arguments[1]. 
 * Furthermore, like true arrays, arguments has a length property.
 * Thus, within the body of the function f, invoked with two arguments, 
 * arguments.length has the value 2.
 * 
 * One important use of the Arguments object is 
 * to write functions that operate on any number of arguments. 
 * 
 * Functions that can accept any number of arguments are called 
 * variadic functions, variable arity functions, or varargs functions. 
 * Colloquial term, varargs, which dates to the early days of the C programming language.
 *  
 * JavaScript. the Definitive Guide. David Flanagan.
 */


function max(/* ... */) {
    
    var max = Number.NEGATIVE_INFINITY;
    
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(var i = 0; i < arguments.length; i++)
        if (arguments[i] > max) 
            max = arguments[i];
    return max;       // Return the biggest
}

var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6);    // => 10000
console.log(max(largest));

largest = max(1);    // => 1
console.log(max(largest));

largest = max();    // => 1
console.log(max(largest));
