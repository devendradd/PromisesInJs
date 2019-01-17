//without promises
first(0, function(firstResult, err){
    setTimeout(function(){
        console.log("first");
        console.log(firstResult);
        second(firstResult, function(secondResult, err){
            console.log("second");
            setTimeout(function(){
                console.log(secondResult);
                    third(secondResult, function(thirdResult, err){
                        console.log("third");
                        setTimeout(function(){
                            console.log(thirdResult);
                        }, 2000)
                    })
            }, 2000)

        })
    }, 2000)

})


function first(value, callbackFunction){
    callbackFunction(value+2, false);
}

function second(value, callbackFunction){
    callbackFunction(value+2, false);
}

function third(value, callbackFunction){
    callbackFunction(value+2, false);
}
