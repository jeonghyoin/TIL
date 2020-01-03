# 자바스크립트 개념 정리

## 객체
- 함수, 배열 등
- 프로퍼티(Property)들의 집합
- 데이터를 의미하는 `프로퍼티`와 데이터를 참조, 조작할 수 있는 `메소드`의 집합
- 프로토타입(prototype)이라 불리는 객체의 프로퍼티와 메소드를 상속받는다.

- 객체 선언 방법
    1. 객체 리터럴
        - 가장 기본적인 객체 생성 방법
        - 중괄호 사용
        - var emp = {}; //프로퍼티가 없는 빈 객체
    2. new 사용
        - new 연산자는 객체를 만들고, 초기화한다.
        - 이 때 호출되는 함수를 `생성자`(새로운 객체 초기화)라고 한다.
        - var ob = new Object();
        - var ob2 = new Array();
    3. 프로토타입(아래)

## 프로퍼티(Property)
- key(이름)와 value(값)로 구성

## 메소드
- 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

## prototype(프로토타입)
- JS는 `프로토타입 기반` 언어(EC6에서는 class 추가)
- 클래스 없이 프로토타입 체인과 클로저 등으로 상속, 캡슐화 등의 개념 구현

~~~
function Person() {
    //2개의 속성
    this.eyes = 2;
    this.nose = 1;
}

var kim = new Person();
var lee = new Person();

//출력
console.log(kim.eyes); //2
console.log(lee.eyes); //2
~~~
=> 위 코드는 메모리에 4개가 할당(중복 발생)

~~~
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;

//함수로 객체를 생성
var kim  = new Person();
let lee = new Person();

//출력
console.log(kim.eyes);
console.log(lee.eyes);
~~~
=> 프로토타입 사용
같은 생성자를 통해서 만들어진 객체들은 하나의 prototype이라는 Object를 공유한다.

- Prototype Object
    - Object와 함수가 가지고 있는 prototype 속성과 연결
- Prototype Link
    - __proto__는 생성했던 함수가 가지고 있는 속성을 가르킨다.
        - 부모의 속성들을 물려받은 것
    - 데이터들의 연결

---

## 호이스팅(Hoisting)
- JS는 실행 전 함수 안에 있는 변수들을 모두 `끌어올려서` 최상단에 선언한다.
- 호이스팅 대상: var, 함수 선언문
- `선언만` 끌어올려진다.
~~~
console.log(tmp); //hello가 아닌 undefined 출력
var tmp = "hello";
~~~
- 할당 및 함수 표현식은 제외
- 가독성과 유지보수를 위해 호이스팅이 일어나지 않도록 한다.

- 함수 선언문
~~~
function foo() {
    console.log("hello");
}
~~~
- 함수 표현식
~~~
//익명 함수표현식
var foo2 = function() {
    console.log("hello2");
}

//기명 함수표현식
var foo3 = function foo3() { // 기명 함수표현식 
  console.log("hello3");
}
~~~
* 차이
    - 변수에 할당된 함수표현식은 `변수의 스코프 규칙`을 따른다.
    - 표현식의 장점: 클로져, 콜백(다른 함수의 인자)으로 사용 가능

## var, let, const
- var에서는 호이스팅 발생(ES5)
- let, const에서는 호이스팅이 발생하지 않는다(ES6)

## 클로저(Closure)
- 스코프 체인(scope chain)
- 외부함수의 변수에 접근할 수 있는 내부 함수

---

## 비동기
* setTimeOut
* requestanimation

## callback

---

## requirejs 

## commonjs

## iife

## this 정의
* bind
* call
* apply

---

참고한 곳
- https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-
- https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
