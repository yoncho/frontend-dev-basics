/**
 * Arrow function (화살표함수)
 * 
 */

const power = function(x){ 
    return x*x;
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(n){
    process.stdout.write(`${n}:${power(n)}\t`);
});

//ex01
console.log("\n-------------------------------------");
numbers.forEach(function(n){
    // const result = (function(x){ 
    //     return x*x;
    // })(n);
    const result = (x=>x*x)(n);
    const result2 = ((x)=>{return x*x})(n);
    process.stdout.write(`${n}:${result}\t`);
});

//ex02
console.log("\n-------------------------------------");
numbers.forEach(function(n){
    process.stdout.write(`${n}:${(x=>x*x)(n)}\t`);
});

//ex03
console.log("\n-------------------------------------");
numbers.forEach(n=>process.stdout.write(`${n}:${(x=>x*x)(n)}\t`));

//ex04 : 다중행 함수
console.log("\n-------------------------------------");
[5, 3, 15, 1045, 43, 92].forEach(n =>{
    if(n % 5 == 0){
        process.stdout.write(`${n}:${(x=>x*x)(n)}\t`)
    }
});

//ex05 : - this를 어휘적으로 바인딩(Lexical Binding)
console.log("\n-------------------------------------");
const dooly = {
    name:'dooly',
    friends:['ddochi', 'micole', 'de'],
    printFriends: function(){
        this.friends.forEach(x=>console.log(`${this.name}'s friend ${x}`));
    }
};

dooly.printFriends();