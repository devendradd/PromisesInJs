//with promises
let first = function(){
    return new Promise(function(resolve, reject){
        setTimeout(
            function(){
                 console.log("first");
                 resolve(2);
                }, 3000);

    })
 }

 let second = function(first){
    return new Promise(function(resolve, reject){
        setTimeout(
            function(){
                 console.log("second");
                 resolve(first + 2);
                }, 3000);

    })
 }

 let third = function(second){
    return new Promise(function(resolve, reject){
        setTimeout(
            function(){
                 console.log("third");
                 resolve(second + 2);
                }, 3000);

    })
 }

 first().then(function(result){
    console.log(result);
    return second(result);
 }).then(function(result){
    console.log(result);
    return third(result);
 }).then(function(result){
    console.log(result);
    console.log("all finished" + " " + result);
 })
