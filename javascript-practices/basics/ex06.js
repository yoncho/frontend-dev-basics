/**
 * javascript 객체1 : Object Type
 * 
 * 1. javascript 객체는 function타입과 object타입 딱 두가지 뿐이다.
 * 2. 보통, function 타입의 객체는 함수라고 부른다.
 * 3. 따라서, javascript에서 객체라고 부르는것은 object type의 객체를 가리킨다. 
 * 
 */


// 생성 방법 1
// 1. Number/ Object/ String/ .. 내장 객체(내장 생성자)를 사용하는 방법
// 2. 사용자 정의 생성자 함수를 사용하는 방법
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 30;


console.log(o1);
// 생성 방법 2
// {} literal을 사용하는 방법
var o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = new Object();
o2.another.name = "마이콜";
o2.another.age = 30;

console.log(o2);
// 생성 방법 3
// JSON (JavaScript Object Notation) : java 객체를 표기하는 방식
var o3 = {
    name: '둘리',
    age: 10,
    another:{
        name: '마이콜',
        age: 30
    }
};

console.log(o3);

// XmlHttpRequest, fetch 
// const response = fetch("/mysite07/api/user/1", {});
response = '{"no":1, "age":10, "name":"둘리", "email": "yoncho@gmail.com"}';
var user = JSON.parse(response);

console.log(user.name, user.email);

