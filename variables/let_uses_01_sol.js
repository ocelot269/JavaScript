
/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 * 
 *  Javascript, the Definitive Guide. David Flanagan.
 */


function oddsums(n) {

    let total = 0, result = [];         // Defined throughout the function
    
    for(let x = 1; x <= n; x++) {       // x is only defined in the loop
        let odd = 2*x-1;                // odd only defined in this loop
        total += odd;
        result.push(total);
    }

    // console.log(x);                  // que sucede y por que?
    // console.log(odd);                // que sucede y por que?
    console.log(total);              // que sucede y por que?
    
    return result;                      // Using x or odd here would cause a ReferenceError

}

console.log(oddsums(5));            // Returns [1,4,9,16,25]
