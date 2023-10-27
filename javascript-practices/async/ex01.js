/**
 * 
 * 
 */

const myAsyncFn = function(param, callback){
    //비동기 코드.. 결과를 callback에 전달!
    // 1) 파일 시스템 접근(file,io)
    // 2) 네트워크 통신
    // 3) SQL to DB
    // 4) setTimeout ...
    
    setTimeout(function(){
        if(param ==='data'){
            callback(null, 'ok');
        }else{
            callback(new Error('fail'), null);
        }
       
    }, 2000);
};


//test: success
myAsyncFn("data",function(error, result){
    if(error){
        console.error(error);
        return;
    }

    console.log(result);
});
console.log('wait...');

//fail
myAsyncFn("",function(error, result){
    if(error){
        console.error(error);
        return;
    }

    console.log(result);
});
console.log('wait...');