/**
 * 
 * The arrow comes after the list of parameters 
 * and is followed by the function’s body. 
 * It expresses something like “this input (the parameters) 
 * produces this result (the body)”.
 * 
 * Eloquent JavaScript. Marijn Haverbeke.
 */


const power = (base, exponent) => {
    
    let result = 1;
    for (let count = 0; count < exponent; count++) {
            result *= base;
    }
    return result;
};

console.log(power(2, 3));


// When there is only one parameter name, 
// you can omit the parentheses around the parameter list.
// If the body is a single expression, rather than a block in braces, 
// that expression will be returned from the function.

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(3));
console.log(square2(3));



