
/**
 * "Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.""
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 * 
 * Javascript, the Definitive Guide. David Flanagan.
 */


function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             // ¡misma variable!
        console.log(x);         // 71
    }

    console.log(x);             // 71
}


function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               // variable diferente
      console.log(x);           // 71
  }
    
    console.log(x);             // 31
}


function hoistingTest() {

    console.log(w);               // var permite hoisting => undefined
    // console.log(z);            // ReferenceError => let no permite hoisting == no undefined
    // console.log(y);            // ReferenceError: y is not defined => let no permite hoisting
    var x = 31;
    let y = 91;
    u = 1;                        // variable global, pero deleteable, sin var
    
    if (true) {
        let x = 71;               // variable diferente
        console.log(x);           // 71
        console.log(y);           // el alcance de y es interno tb, blockscope => prints 91
        let z = 101;
        var w = 1001;             // hoisting de w al lexical scope (la función hoistingTest)
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError => z definida solo en el bloque
    console.log(w);               // hoisting doin' work => prints 1001
  }


varTest();

letTest();

hoistingTest();

console.log(u);                    // variable global declarada en una funcion sin var => NO hoisting
