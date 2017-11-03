// type saftey at compile time
var person;
person = 'David Kang';
var findName = person.substring(1, 5);
console.log('findName', findName);
// functions
var num1 = 100;
var num2 = 20;
var addNumbers = function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = 'Sum is = ' + result;
    console.log('msg', msg);
};
addNumbers(num1, num2, 'o');
//# sourceMappingURL=1.js.map