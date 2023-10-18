/**
 * javascript 객체4: prototype 기반의 상속과 오버라이딩 : javascript oop 
 * 
 */

var MyObject = function(name, age){
    this.name = name;
    this.age = age;
};

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'java fullstack';
MyObject.prototype.info = function(){
    console.log(this.name, this.age, this.school, this.course);
};

//MyObject 인스턴스 생성
var o1 = new MyObject('dooly', 10);
o1.info();
o1.school = 'poscodx'; // 이걸...override라고함... 
o1.info();

//MyObject 인스턴스 생성2
var o2 = new MyObject('dooly', 10);
o2.info = function(){
    console.log("안 알랴쥼~");
}
o2.info();