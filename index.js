
function receivesAFunction(callback){
    callback();
    console.log("Did this work?");
}


function returnsANamedFunction() {
    return function namedFunction() {};
  }

function returnsAnAnonymousFunction(){
    
    return function() {

    }
}