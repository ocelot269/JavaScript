
/**
 * Method invocations differ from function invocations 
 * in one important way, however: the invocation context. 
 * In a method invocation expression like this, 
 * the object o becomes the invocation context,
 * and the function body can refer to that object 
 * by using the keyword this.
 * 
 * Any function that is used as a method is effectively 
 * passed an implicit argument the object through which
 * it is invoked. 
 * Como los metodos Python con self.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var calculator = {              // An object literal
    
    operand1: 1,
    operand2: 1,
    add: function() {          // Note the use of the this keyword to refer to this object.
        this.result = this.operand1 + this.operand2;
    }
};

calculator.add();                   // A method invocation to compute 1+1.

console.log(calculator.result);     // => 2  Creamos una nueva propiedad del objeto al vuelo

