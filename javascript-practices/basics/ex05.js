 /*
 * 구문(statement)
 * 
 * 1. 자바스크립트 실행 단위
 * 
 * 2. 구성 요소
 *      값, 연산식 : 표현식
 *      예약어 : var. if. for...
 *      주석: 구문이지만 실행하지 않는다.
 * 
 * 3. 구문의 예
 *      if문, if~else문, switch문
 *      while문, do~while문, for문
 *      for~in문
 *     cf) 표현식
 *      10          (리터럴) : 값을 표현
 *      5+5         (연산식)
 *      ten         (변수)
 *      add(5,5)    (함수 호출)
 * 
 * 4. 공백: 토큰 구분
 * 5. 세미콜론 (;)
 * 6. 개행 (\n)
 */

//세미콜론(;)은 표현식을 표현식구문으로 만들어서 실행 하는 역할
s = 'hello world'; i = 10 + 10; console.log(s)
console.log(s)
//개행의 역할
// 1. ';'(세미콜론) 대체
i = 10
console.log(i)

// 2. 하지만 상황에 따라서 토큰을 분리하는 역할
a
=
2
+
4;

console
.log(a)

con;
sole-log(a);