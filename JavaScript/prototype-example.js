//함수
function Car() {};

Car.prototype.handle = 1;
Car.prototype.wheel = 4;

var bmw = new Car();
var audi = new Car();

//Car.prototype을 참조하고 있다
console.log(bmw.wheel); //4

//case 2
function Duck() {};

Duck.prototype.swim = function() {
    console.log('swim');
};

function BlackDuck() {}

//BlackDuck의 Prototype Link는 Duck의 Prototype Object를 참조한다.
BlackDuck.prototype = new Duck();
BlackDuck.prototype.fly = function() {
    console.log('fly');
};

var blackDuck = new BlackDuck();
//swim 메소드를 정의하지 않았음에도 동작하게 됨
//Prototype Link를 따라서 타고 올라가다가 Duck의 Prototype Object에 정의된 swim을 발견했기 때문이다.
//그렇기 때문에 상속받은 것 처럼 동작하는 것!
blackDuck.swim();
blackDuck.fly();