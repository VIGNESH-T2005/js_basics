// closures
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// A closure is created when a function is defined inside another function
//  and the inner function has access to the outer function's variables.
function outerFunction() {
    let outerVariable = "vicky";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction(); 
s
c