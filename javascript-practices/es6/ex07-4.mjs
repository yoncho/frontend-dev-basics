/**
 * named export + unnamed export
 *
 *  
 */

const add = (a, b) => {return a+b};
const subtract = (a, b) => {return a-b};

export {add,subtract};
export default {add, subtract};