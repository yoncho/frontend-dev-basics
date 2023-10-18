/**
 * 변수와 자료형
 * 
 * 기본타입
 *  - undefined
 *  - number
 *  - string
 *  - boolean
 *  
 * 객체
 *  - object
 *  - function
 *  
 */
console.log("=== 기본타입 (undefined, number, string, boolean) ====")
//myVariable //reference error 
var u = undefined; // var u; 랑 동일, Java script는 변수 정의와 선언을 구분한다.
var i = 10;
var s = 'hello world :)';
var b = true;

console.log(u +":"+typeof(u));
console.log(i +":"+typeof(i));
console.log(s +":"+typeof(s));
console.log(b +":"+typeof(b));

// class는 (1) 객체를 만드는 함수 / (2) 코드를 실행하는 함수 로 쓰인다.
// (1)의 경우 new 를 붙여서 사용해야한다..!!
console.log("=== 객체타입 (object) ====")
var i2 = new Number(10);
var s2 = new String('hello world 22');
var b2 = new Boolean(true);

var o = new Object();
var a = new Array();
var re = new RegExp();
var d = new Date();

var o2 = {}; //object re.
var a2 = []; //array re.
var reg2 = /^js%/gi; //js가 들어간 문자열...?
var n = null;

o.a = 10;  //object 안에 field값을 임의로 막 지정해서 값을 넣을 수 있음.!!

console.log(i2 +":"+typeof(i2) + ":" + (i2 instanceof(Number)));
console.log(s2 +":"+typeof(s2) + ":" + (s2 instanceof(String)));
console.log(b2 +":"+typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log(o +":"+typeof(o) + ":" + (o instanceof(Object)));
console.log(a +":"+typeof(a) + ":" + (a instanceof(Array)));
console.log(d +":"+typeof(d) + ":" + (d instanceof(Date)));
console.log(o2 +":"+typeof(o2) + ":" + (o2 instanceof(Object)));
console.log(a2 +":"+typeof(a2) + ":" + (a2 instanceof(Array)));
console.log(reg2 +":"+typeof(reg2) + ":" + (reg2 instanceof(RegExp)));
console.log(n +":"+typeof(n));

console.log("=== 객체타입 (function) ====")

function f1(a, b){
    return a + b;
}

var f2 = function f1(a, b){
    return a + b;
}

var f3 = new Function("a", "b",'return a + b;');
f3.call();

console.log(f1(10,20) +":"+typeof(f1) + ":" + (f1 instanceof(Function)));
console.log(f2(10,20) +":"+typeof(f1) + ":" + (f1 instanceof(Function)));
console.log(f3(10,20) +":"+typeof(f1) + ":" + (f1 instanceof(Function)));

// 유사 객체
console.log("=== 원시 타입도 메소드를 호출할 수 있다. (유사 객체) ====")
console.log(b2.valueOf());
console.log(b.valueOf()); // console.log(new Boolean(b).valueOf()) 이 코드로 변경됨.
console.log(new Boolean(b).valueOf());
