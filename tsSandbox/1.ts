// type saftey at compile time

var person;
person = 'David Kang';
const findName = person.substring(1,5)
console.log('findName', findName);





// functions
var num1 = 100;
var num2: number = 20;

const addNumbers : (a:number, b:number, c:string) => void
= function addNumbers(n1, n2, n3) {
  var result = n1 + n2 + n3;
  var msg = 'Sum is = ' + result;
  console.log('msg', msg);
}

addNumbers(num1, num2, 'o');


