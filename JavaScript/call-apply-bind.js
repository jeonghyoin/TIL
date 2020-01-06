//call
//case 1
const one = {
    name: 'one'
};
const two = {
    name: 'two'
};

function greet() {
    return this.name;
};

//this로 사용할 객체(one,two)를 넘긴다.
console.log(greet()); //undefined
console.log(greet.call(one)); //one
console.log(greet.call(two)); //two

//case 2
function greet2() {
    return this.person + this.role;
};

var i = {
    person: 'hi! ',
    role: 'developer'
};

console.log(greet2.call(i)); //hi! developer


//apply
//case 1
//첫 번째인자로 null을 정해주어 window 객체를 인자로 넘긴다.
//numbers 배열 넘겨 값을 순서대로 호출한 메소드의 인자로 보낸다.
var numbers = [1, 2, 3, 4, 5];
var max = Math.max.apply(null, numbers);

console.log(max); //5

//case 2

//bind