
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"
