var x: number = 1;
var y;

var firstName = 'David';
var lastName: string = 'Kang';

var num1 = 100;
var num2: number = 20;

const addNumbers : (a:number, b:number, c:string) => void
= function addNumbers(n1, n2, n3) {
  var result = n1 + n2 + n3;
  var msg = 'Sum is = ' + result;
  console.log('msg', msg);
}

addNumbers(num1, num2, 'o');


