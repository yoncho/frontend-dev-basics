/**
 * import 하기 
 * 
 */

//1. unamed export module에서 import할 때는 반드시 이름을 지정한다. (마음대로..)
import myFunction from './ex07-1.mjs';
import myObject from './ex07-2.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));
console.log(myObject.subtract(10, 20));

//2. 객체 분해
// const {add, subtract} = myObject;
// console.log(add(10, 20), subtract(10, 20));


// 3. 
// 1)named 다수 객체 import시 객체 분해
// import {add, subtract} from './ex07-3.mjs';
console.log(add(10, 20));
console.log(subtract(20,10));
// 2)named export는 import해야할 대상이 다수가 될 수 있기 때문에 특정 이름을 지정할 수 없다.
//  대신에 * as ~ 을 사용할 수 있다.
import * as moduleName from './ex07-3.mjs';
moduleName.add(10,20);


//4. 
import math, {add, subtract} from './ex07-4.mjs';

console.log(add(10, 20), subtract(20, 10), math.add(10, 20), math.subtract(20, 10));

