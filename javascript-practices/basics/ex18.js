/**
 * 클로저(closure): 클로저 함수와 그 함수가 정의되었을 때 스코프와의 조합
 * 
 * 1. 자유 변수에 닫혀(closed, 엮어) 있는 함수 
 * 2. 클로저는 자신이 정의될 때의 스코프를 기억하고 있다. 
 * 3. 클로저는 함수가 자신이 정의 되었을 때 스코프를 기억하여 자신이 정의된 스코프 밖에서 호출되어도 그 스코프에 접근할 수 있는 함수
 * 4. 왜 쓰냐?
 *      - 전역 변수 회피 
 *      - 상태 유지*: useState
 *      - 정보 은닉 : useState
 * 5. 
 */

/*Lexical Scope*/
var f1 = function(){
    const s = "hello world";
    
    const inner = function(){
        console.log(s);
    }

    inner();
};

f1();

/*Closure Scope*/
const f2 = function(){
    const s = "hello world";
    
    const inner = function(){
        console.log(s);
    }

    return inner;
};

const closure = f2();
closure();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
