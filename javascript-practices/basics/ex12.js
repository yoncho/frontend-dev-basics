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
        
        console.log(this);
        value.forEach(function(e){
            console.log(this);
            // this.splice(index++, 0, e);
        });
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