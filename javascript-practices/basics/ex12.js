/**
 * array 확장(prototype 기반의 확장)
 * 
 */

Array.prototype.remove = function(index){
    this.splice(index, 1);
}
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for (var i = 0; i < value.length; i++){
        //     this.splice(index + i, 0, value[i]);
        // }
        
        // 오류!! 
        // callback 함수 안의 this는 구문 상의 this와 일치하지 않는다..
        // value.forEach(function(e){
        //     // this.splice(index++, 0, e);
        // });

        // 해결방법1 : closure 사용
        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });
        
        // 해결방법2 : this를 함수에 bind 해주기
        // Function.prototype.bind() 를 사용
        // callback 함수 블록 안의 this를 setting할 수 있음. (외부 this를 callback 내부 this로 변경 가능)
        var f = function(e){
            this.splice(index++, 0, e);
        }; //.bind(this); 해도 됨.
        
        f = f.bind(this);
        value.forEach(f);

    }else{
        this.splice(index, 0, value);
    }
}

//list 함수
var a = [0, 1, 2, 3, 4, 5, 6];
console.log(a);
a.remove(3);
console.log(a);
a.insert(4, 6666);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);