//1st system
// function doubleIt(num){
//     return num * 2;
// }

//2nd system

// const doubleIt = function myFun(num){
//     return num *2;
// }

//es6 system

const doubleIt = num => num * 2;

const result = doubleIt(50);
console.log(result);

//jog

const add = (x, y, z) => x+y+z;

const result2 = add(50, 60, 70);
console.log(result2);

//multiline arrow function

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(20, 10);
console.log(result3);