
/**
 * global vs local
 * function scope and hoisting
 * 
 * In the following code, the variables i, j, and k 
 * are declared in different spots, but all have the same
 * scope. All three are defined throughout the body of the function.
 * 
 *  Javascript, the Definitive Guide. David Flanagan.
 */


function test(o) {
    
    var i = 0;                          // i is defined throughout function
    
    if (typeof o == "object") {
        
        var j = 0;                      // j is defined everywhere, not just block
    
        for(var k=0; k < 10; k++) {     // k is defined everywhere, not just loop
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // k is still defined: prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);
