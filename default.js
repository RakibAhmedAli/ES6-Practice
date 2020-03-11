//ex:1
/*
function add(num1, num2){
    return num1+num2;
}
const total = add(15, 17);
console.log(total);
*/

//ex:2
/*
function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1+num2;
}
const total = add(15);
console.log(total);
*/

//ex:3
/*
function add(num1, num2){
    num2 = num2 || 20;
    return num1+num2;
}
const total = add(15);
console.log(total);
*/

//ex:4 ((5 is the default value or backup value))
function add(num1, num2 = 5){
    return num1+num2;
}
const total = add(15, 17);
console.log(total);