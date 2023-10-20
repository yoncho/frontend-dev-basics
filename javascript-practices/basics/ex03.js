/*
 * undefined와 null의 등치(equals) 비교 
 * 
 */

var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar2;             // 암시적으로 undefined 대입
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);
console.log(myVar1 == myVar3);  // true   값(의미) 비교
console.log(myVar1 === myVar3); // false  타입비교 + 값(의미)비교

console.log("==================================");
// == : equality, 값의 동치성, 형변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log('abc' + new String('def'));
console.log(1 + '111');
console.log(parseInt('1112') + 2);

// ===
// 1. 타입의 동일성
// 2. 타입이 같은 경우
//      1) primitive type : 값의 동일성
//      2) object type : 객체의 동일성

console.log('4' === 4);
console.log(true === 1);
console.log('abc' === new String('abc'));
console.log(2 === 4);
console.log(new Number(10) === new Number(10));
console.log(new String('hello') === new String('hello'));
console.log('hello' === 'hello');

