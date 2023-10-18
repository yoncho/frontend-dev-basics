/**
 * javascript 객체2: function 타입
 * 
 * 
 */

// 일반함수 (실행코드 블럭이 있는 함수, 관례대로 소문자로 시작한다.)
var myFunction = function(){
    console.log("일반함수");
}

// 생성자 함수 (관례대로 대문자로 시작한다.)
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
};

var o1 = new MyObject('둘리', 10);
var o2= new MyObject('마이콜', 30);

console.log(o1);
console.log(o2);