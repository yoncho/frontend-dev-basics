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

