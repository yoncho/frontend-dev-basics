const myAsyncFn = function(param){
    return new Promise(function(resolve, reject){
        //비동기 코드
        setTimeout(function(){
            if(param ==='data'){
                resolve('ok');
            }else{
                reject(new Error('fail'));
            }
        }, 2000);
    });
};

//usage I ~ then ~ catch
myAsyncFn('data')
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){t
        console.error(err);
    });

console.log("wait .....");
