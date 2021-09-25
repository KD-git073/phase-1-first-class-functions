const chai = ("chai");
const spies = ("chai-spies");
chai.use(spies);

const spy =chai.spy();

function spy(){
    console.log("I am the callback function");
}

function receivesAFunction(spy){
    console.log("Did this work");
}


/* The `receivesAFunction` function should:

- take a _callback function_ as an argument
- call the callback function
- it doesn't matter what this function returns, so long as it calls the
  callback function

- The `returnsANamedFunction` function should:

- take no arguments
- return a _named function_

- The `returnsAnAnonymousFunction` function should:
- take no arguments
- return an _anonymous function_ */


/* function test(a=3,b=3){  // just a function to call later
    return a + b;
}
test(); */

/* const chai = ("chai");
const spies = ("chai-spies");
chai.use(spies);

 function cbFunction(){     // 
    console.log("I am the callback function");
} */
//cbFunction();

/* function receivesAFunction(test){
    console.log("Did I receive it okay");
    cbFunction();
}
receivesAFunction();


 function returnsANamedFunction() {
        test(a + b );
        
} */
 
/* const returnsAnAnonymousFunction = (fn) => {
    return fn;
}
returnsAnAnonymousFunction(function() {return 2+3}); */

/* function returnsAnAnonymousFunction(){
    return function() {
        console.log (`Am I done!`)
    }
}   */
// cbFunction(("This is a different call to cbFunction"));

//function spy(){
//    console.log("I am the callback function");
//}

//spy();
//receivesAFunction(); 