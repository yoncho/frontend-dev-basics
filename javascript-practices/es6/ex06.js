/**
 * 구조 분해 (Destructing)
 *  
 */

//ex01 - basics
const user = {
    firstName: 'yon',
    lastName:'cho',
    email: 'yoncho@naver.com'
}
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email= user.email;

const {firstName, lastName, email} = user;

console.log(firstName, lastName, email);

//ex02 - default value
const goods = {
    name:'tv',
    price:1000,
    countStock:10
};

const {name,price, countStock,countSold=0} = goods;
console.log(name, price, countStock,countSold);

//ex03 - 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우
const person = {
    n:'micole',
    c:'korea'
}

const {n: fullName, c: country} = person;
console.log(fullName, country);

//ex04 - 내부객체(nested object)의 구조 분해
const student = {
    name: 'dooly',
    age: 15,
    score: {
        math: 30,
        korean: 100,
        science: 70
    }
};

const {name: studentName, score: {math, korean, science, music=0}} = student;

console.log(`${studentName}의 점수
국어 : ${korean}
수학 : ${math}
과학 : ${science}
음악 : ${music}
`);

//ex05 - 함수 파라미터 

const averageScore = ({score: {math, korean, science, music=0}})=>{
    return (math+korean+science+music)/4;
};
console.log(averageScore(student));

//ex06 - 배열의 구조 분해: 기본
const color = [155,225,55];
let [red, green, blue] = color;
console.log(red, green, blue);

//ex07 - 배열의 구조 분해: default value
[red, green, blue, alpha=0] = color;
console.log(red, green, blue, alpha);

//ex08 - 배열의 구조 분해: skip value
[,,colorOfBlue] = color;
console.log(colorOfBlue);

//ex09 - swap 
let x= 10;
let y= 20;
console.log(x,y);
const temp = x;
x = y;
y = temp;
console.log(x,y);

[y,x]=[x,y];
console.log(x,y);

//ex10 - 배열의 구조 분해: ...(array spread operator)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = colors; // yellow ~ violet까지 otherColor로 배열로 저장
console.log(otherColors);

console.log(colors);
console.log(...colors);

//ex11 - 배열의 구조 분해: ...를 함수의 파라미터로 사용하기, arguments 대용
const f = (...colors)=>{
    return colors.join(' ');
};

console.log(f('red','yellow','blue'));