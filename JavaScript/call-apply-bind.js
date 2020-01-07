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

//case 3
var hi = {
    name: 'hi',
    email: 'hi@hi.com'
}

var person = {
    name: 'test',
    email: 'test@test.com',
    foo: function(val1, val2) {
        console.log('call: '+ val1 + val2); //36
        console.log(this); //hi 객체
    }
}

//hi 객체를 가리키게 된다.
person.foo.call(hi, 3, 6);


//apply
//case 1
//첫 번째인자로 null을 정해주어 window 객체를 인자로 넘긴다.
//numbers 배열 넘겨 값을 순서대로 호출한 메소드의 인자로 보낸다.
var numbers = [1, 2, 3, 4, 5];
var max = Math.max.apply(null, numbers);

console.log(max); //5

//case 2
//apply() 함수를 호출하여 person이 아닌 hi 객체로 바꾸기
var person = {
    name: 'apply',
    email: 'apply@email.com',
    foo: function() {
        sum = arguments[0] + arguments[1];

        console.log('apply: ' + sum); //9
        console.log(this); //hi 객체
    }
}

//배열로 넘긴다
let arr = [3, 6];
person.foo.apply(hi, arr);

//case 3. call, apply 차이점
var age = 100;

function foo (a, b, c, d, e) {
  console.log(this.age);
  console.log(arguments);
}

var per = {
  age: 35
};

//차이
foo.call(per, 1, 2, 3, 4, 5);
foo.apply(per, [ 1, 2, 3, 4, 5 ]);


//bind
//case 1
var age = 10;

function foo() {
    console.log(this.age); //26
    console.log(arguments); //배열이 넘어 온다
}

var person = {
    age: 26
};

//bar의 타입은 함수
var bar = foo.bind(person);
bar(1, 2, 3, 4, 5);
