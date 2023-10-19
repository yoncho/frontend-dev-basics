/** 
 * 1. string primitive type
 * 2. string 객체 함수: string.prototype.*
 */

//배열처럼 접근 가능하다.
var str1 = "hello world!";

for(var i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

//문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + str3;
console.log(str4);

//casting
var str5 = "5" + 5;
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

//객체함수
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2");//8
console.log(index);

var index2 = str7.indexOf("hello");//-1
console.log(index2);

var str8 = str7.substring(10 /*first index */, 13 /*last index - 1 : 12index*/);
console.log(str8);

var a = str7.split(" ");
console.log(a);

