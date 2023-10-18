/**
 * javascript 객체3: 확장
 * 
 */

var o = {
    name: 'dooly',
    age: 10
};
var f = function(){
    console.log("hello world");
}

console.log("=====확장(object type)=====");
o.another = {
    name: 'micole',
    age: 30,
    print: function(){
        console.log(this.name, this.age);
    }
};
console.log(o);
o.another.print();


console.log("=====확장(function type)=====");
f.another = {
    name: 'micole',
    age: 30,
    print: function(){
        console.log(this.name, this.age);
    }
};

console.log(f);
f.another.print();


console.log("=====확장(기본 타입은 확장되지 않는다.)=====");
var i1 = 10;
var i2 = new Number(10);

console.log(i1, i2, i1+i2);
i2.another = {
    name: 'micole',
    age: 30,
};

console.log(i2.another);

i1.another = {};            //유사 객체로 변환 : new Number(i1).another = {}
console.log(i1.another);    //유사 객체로 변환 : new Number(i1).another


