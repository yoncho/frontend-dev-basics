/*
 * 변수의 범위 (scope)
 * 
 * 1. javascript는 기본적으로 코드에서 변수의 범위를 알 수 있다. (정적 스코프, Lexical Scope)
 * 2. javascript의 scope
 *      1)전역 범위
 *     
 *      2)es6 이전 (<=es5)
 *          자바와 같은 블록 범위({})를 지원하지 않았다.
 *          함수 범위만 지원
 *          var 키워드를 사용해야 함수 범위를 가진다..
 *          만일 사용하지 않는다면 그 변수는 전역 범위를 가진다.(hosting)
 *      
 *      3) es6  이후 (es6 ~ es2022)
 *          자바와 같은 블록 범위를 지원한다.
 *          let 키워드를 사용해서 블록 범위를 가진다.
 *          const 키워드를 사용해서 블록 범위의 상수를 정의할 때 사용한다.
 *              *let/ const는 블록 범위
 *      
 *      4) 결론 : 
 *          const/ let만  사용하고 둘 중에 하나를 반드시 붙히자!!!! 
 *          안붙히면,, 전역 범위를 만든다...
 *          hosting...     
 */

var i = 10;
var f = function (){
    var i = 20;

    j = 100;
    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);

console.log("=== var 키워드는 함수 블록에서만 범위를 만든다.");
if (90 + 10 === 100){
    var k = 10;
}
console.log(k);

{// block
    let x = 100;
    const pi = 3.141592;

    pi = 0; //assign
}
// console.log(x); // error (block)

