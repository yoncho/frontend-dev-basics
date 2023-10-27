/**
 * unamed export
 * default 키워드를 사용한다.
 * 
 */

// export default {
//     add: function(a, b){
//         return a+b;
//     },
//     subtract: function(a, b){
//         return a-b;
//     }
// }


const add = (a, b)=>{return a+b};
const subtract = (a, b)=>{return a-b};

export default{add, subtract};
// export {add, subtract};  가능...!!