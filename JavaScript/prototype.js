//프로토타입
/*
* 함수를 선언하면 2개의 객체 생성(function 객체, prototype 객체)
* 함수에서는 프로토타입 객체에 prototype이라는 내부변수로 접근
* 프로토타입에서는 constructor라는 변수로 함수에 접근
*/
function Foo() {}

//속성 추가
Foo.prototype.proto_val = "원형 값";
Foo.prototype.constructor.construct_val = "생성자 값";

console.log(Foo.prototype);
console.log(Foo.prototype.proto_val); //원형 값
console.log(Foo.construct_val); //생성자 값
console.log(Foo.proto_val); //undefined

//new 키워드 사용
//Foo의 인스턴스 생성
var foo_instance = new Foo();
//프로토타입 값
console.log("----------");
console.log(foo_instance.proto_val); //원형 값

//프로토타입 값이 언제 메모리에 옮겨지는지?
console.log("----------");
//프로토타입에 값이 있는지 확인한 뒤 참조만 수행
console.log(foo_instance.proto_val === Foo.prototype.proto_val); //true
//인스턴스에 메모리가 주어지고, 프로토타입의 속성을 호출하여 받은 값을 연산한 후 할당된 메모리에 저장
foo_instance.proto_val ="변경 값";
console.log(foo_instance.proto_val === Foo.prototype.proto_val); //false

//prototype은 원형
//프로토타입은 인스턴스를 찍어낼 때 참조 가능한 기본값
foo_instance.proto_val ="다시 변경된 값";
console.log("----------");
console.log(foo_instance.__proto__.proto_val); //원형 값
console.log(foo_instance.proto_val); //변경 값

//원형 값 바꾸기
//Foo로 부터 생성된 객체는 다른 값을 가지게 됨
//원형이 변경될 위험이 존재하므로 주의
foo_instance.__proto__.proto_val = "바뀐 원형 값";
var foo_instance2 = new Foo();
console.log("----------");
console.log(foo_instance2.proto_val); //바뀐 원형 값
console.log(foo_instance.proto_val); //다시 변경된 값