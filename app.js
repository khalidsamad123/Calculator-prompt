let value1=+prompt("enter value1");
let operator=prompt("enter operator");
let value2=+prompt("enter value2");
let result;

if (operator == "+") {
    result= value1 + value2;
}
if (operator == "-") {
    result= value1 - value2;
}
if (operator == "*") {
    result= value1 * value2;
}
if (operator == "/") {
    result= value1 / value2;
}
alert(result);