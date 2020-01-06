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
     - var grades = {'one': 1, 'two': 2, 'three': 3}; //key, value

     ```javascript
     var grades = {};
     grades['one'] = 1; //grades['one']
     grades['two'] = 2; //grades.two
     grades['three'] = 3;
     ```

  2. new 사용

     - new 연산자는 객체를 만들고, 초기화한다.
     - 이 때 호출되는 함수를 `생성자`(새로운 객체 초기화)라고 한다.
     - var ob = new Object();
     - var ob2 = new Array();

  3. 프로토타입(아래 참고)

## 프로퍼티(Property)

- 변수
- key(이름)와 value(값)로 구성

## 메소드

- 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

## prototype(프로토타입)

- JS는 `프로토타입 기반` 언어(ES6에서는 class 추가)
- 클래스 없이 프로토타입 체인과 클로저 등으로 상속, 캡슐화 등의 개념 구현

```javascript
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
```

=> 위 코드는 메모리에 4개가 할당(중복 발생)

```javascript
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;

//함수로 객체를 생성
var kim  = new Person();
let lee = new Person();

//출력
console.log(kim.eyes); //2
console.log(lee.eyes); //2
```

=> 프로토타입 사용. 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype이라는 Object를 공유한다.

- Prototype Object
  - Object와 함수가 가지고 있는 prototype 속성과 연결
- Prototype Link
  - `__proto__`는 생성했던 함수가 가지고 있는 속성을 가르킨다.
    - 부모의 속성들을 물려받은 것
  - 데이터들의 연결
- Q. 차이점



------



## 호이스팅(Hoisting)

- JS는 실행 전 함수 안에 있는 변수들을 모두 끌어올려서 최상단에 선언한다.
- 호이스팅 대상: var, 함수 선언문
- 선언만 끌어올려진다.

```javascript
console.log(tmp); //hello가 아닌 undefined 출력
var tmp = "hello";
```

- 할당 및 함수 표현식은 제외
- 가독성과 유지보수를 위해 호이스팅이 일어나지 않도록 한다.
- 함수 선언문

```javascript
function foo() {
    console.log("hello");
}
```

- 함수 표현식

```javascript
//익명 함수표현식
var foo2 = function() {
    console.log("hello2");
}

//기명 함수표현식
var foo3 = function foo3() { // 기명 함수표현식 
  console.log("hello3");
}
```

- 차이
  - 변수에 할당된 함수표현식은 `변수의 스코프 규칙`을 따른다.
  - 표현식의 장점: 클로져, 콜백(다른 함수의 인자)으로 사용 가능

## var, let, const

- `var`에서는 호이스팅 발생(ES5)
- `let, const`에서는 호이스팅이 발생하지 않는다(ES6)
- var은 function scope, let은 block scope

```javascript
for(var i = 0; i < 1; i++){
    var name = 'hello javascript';
}
alert(name); //for문 내의 변수임에도 출력 가능
```

## 정적 유효범위

```javascript
var i = 5; //전역 변수
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    console.log(i); //정의 될 때의 전역변수가 사용
}
 
a(); //5 출력(정적 유효범위)
```

이에 따라서 전역변수는 지양하는 것이 좋음.



------



## 클로저(Closure)

- 닫다, 좁히다
- 스코프 체인(scope chain)
- 외부함수의 변수에 접근할 수 있는 내부 함수
- 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.
- 외부함수의 값을 복사하는 것이 아니라, 실제 값을 참조한다. (객체 저장된 값을 그대로 참조)

```javascript
function outter(){ //외부 함수
		var title = 'outter title'; 
    function inner(){ //내부 함수
        console.log(title); //outter title 출력, 내부함수에서 외부함수의 지역변수에 접근 가능
    }
    inner();
}
outter();
```

```javascript
function outter(){
    var title = 'hello';  
    return function(){ //내부함수 리턴   
        console.log(title);
    }
}
var inner = outter(); //없을 경우 ReferenceError 발생
inner(); //호출 시 hello 출력
```

=> 외부함수 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다.

- 클로저 사용하는 이유
  - 안정성
  - 캡슐화, 은닉화(https://meetup.toast.com/posts/90)
    - Javascript는 접근제어자가 없기 때문이다
- Q. 클로저 사용하는 경우

## IIFE

* 즉시 실행 함수 표현식(Immediately Invoked Function Expressions)
* 즉시 실행되어 값으로 평가되는 함수
* 괄호`()`로 둘러싸인 익명함수와 즉시 실행 함수를 생성하는 괄호로 구성된다.

```javascript
(function () {
    statements
})();
```

* 언제 사용되는지?
  * **private scope(private state)**를 만들기 위해 사용한다.
  * 젼역 영역(Global Scope)를 오염 시키지 않기 위해서 사용한다.
  * 변수와 메소드를 외부 접근으로부터 보호한다.



------



## Callback

### * 함수의 용도

```javascript
function a(){ } //함수
a = {
    b: function(){ //b는 key, function은 value
    }
};
```

=> 여기에서 b는 프로퍼티(속성, 변수의 역할), 함수는 메소드(객체 안에 정의)라고 부른다.

- 함수는 `변수, 매개변수, 리턴값, 배열의 값` 등으로 다양한 용도로 사용될 수 있다.

```javascript
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode]; //반환 값으로 함수 사용
}
console.log(cal('plus')(2,1)); //3
console.log(cal('minus')(2,1)); //1
```

```javascript
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];

var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input); //11, 121, 60.5
```

### * 콜백

- 값으로 사용될 수 있는 특성을 이용하면 `함수의 인자로 함수를 전달`할 수 있다.
- 값으로서 함수를 사용

```javascript
function sortNumber(a,b){
    return b-a;
}
var numbers = [20,10,9,8,7,6,5,4,3,2,1];
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]
```

=> 여기에서 sortNumber는 `콜백 함수`이다.

### * 비동기

- 콜백은 비동기 처리에서 유용하게 사용

- 작업이 완료된 후 처리해야 할 일을 콜백으로 지정하면, 해당 작업이 끝났을 때 미리 등록한 작업을 실행하도록 할 수 있다.

- 비동기 처리 사례

  - Ajax

  ```javascript
  function getData() {
  	var tableData;
  	$.get('https://domain.com/products/1', function(response) {
  		tableData = response;
  	});
  	return tableData;
  }
  console.log(getData()); // undefined
  ```

  `$.get()`로 데이터를 요청한 후, 받아올 때까지 기다려주지 않고 `return tableData;`를 실행

  - setTimeOut

    - 지정한 시간만큼 기다렸다가 로직 실행

    ```javascript
    console.log('Hello'); //1번째
    setTimeout(function() {
    	console.log('Bye'); //3번째
    }, 3000); //3초만큼 기다렸다가 실행
    console.log('Hello Again'); //2번째
    ```

  - requestAnimationFrame

    - 애니메이션을 위한 전용 함수(setTimeout, setInterval의 대안으로 나온 것
    - 자바스크립트로 복잡한 애니메이션처리를 처리해야 할 때 사용

    ```javascript
    function updateScreen(time) {
      // Make visual updates here.
    }
    window.requestAnimationFrame(updateScreen);
    ```

    ```javascript
    var count = 0;
    var el = document.querySelector(".outside");
    el.style.left = "0px";
    
    function run() {
       if(count > 70) return; //탈출 조건을 만족할 때 까지 연속적으로 호출
       count = count + 1;
       el.style.left =  parseInt(el.style.left) + count + "px";
       requestAnimationFrame(run);
    }
    
    requestAnimationFrame(run);
    ```

    - setTimeout
      - 지정된 시간 이후 `한 번만 실행`한다.
      - `재귀호출`을 사용해서 반복적인 애니매이션을 구현할 수 있다.
    - setInterval
      - 지정된 시간마다 `반복 실행`한다.
      - setTimeout, setInterval로 연속적인 함수 호출하여 애니메이션을 구현하는 경우 delay가 발생할 수 있다.



------



## 모듈화

* 스코프(Scope): 모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다.
  * 전역변수와 지역변수의 분리
* 정의(Definition): 모듈 정의는 `exports 객체`를 이용한다.
* 사용(Usage): 모듈 사용은 `require 함수`를 이용한다.
* 사용 이유
  * 전역변수로 인한 충돌 방지
  * 유지 보수성 향상

### 1. AMD

* `Asynchronous Module Definition`
* 비동기적 모듈 선언
* 모듈을 정의하는 방법과 모듈이 필요할 때 비동기로 로딩하는 방법을 정의한 API

### 2. RequireJS 

* AMD API 명세를 구현한 구현체
* 사용 이유
  * 모듈 단위 개발에 용이
  * 모듈 간의 의존도를 낮추고, 재사용성을 높일 수 있다.
  * 동적인 로딩이 가능하다. (첫 로딩에 필요하지 않은 모듈은 나중에 비동기 형태로 가져온다)

### 3. CommonJS



------



## this

- **this**의 개념

  - [MDN 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
  - **생성자(constructor)**

  ~~~javascript
  function Person(name, age) {
      this.name = name;
      this.age = age;
  }
  
  var one = new Person('one', 1);
  
  console.log(one.name); //one
  console.log(one.age); //1
  ~~~

  - **전역 문맥**

    - 아무 함수에도 속하지 않은 범위에서 `this`는 전역 객체(window)를 참조

    ~~~javascript
    console.log(this === window); // true
    
    a = 37;
    console.log(window.a); //37
    ~~~

    ~~~javascript
    function f1() {
    	return this;
    }
    f1() === window; //true
    ~~~

  - **함수 문맥**

    - 함수 내부에서  `this`는 호출한 방법에 의해 달라진다.
    - 함수를 어떤 객체의 메서드로 호출하면 `this`의 값은 그 객체를 사용

    ~~~javascript
    var o = {
        prop: 37,
        f: function() {
            return this.prop; //o의 prop
        }
    };
    console.log(o.f()); //37
    ~~~

  - **call, apply**

    * `this`의 값을 한 문맥에서 다른 문맥으로 넘기기 위해 사용한다. (특정 값으로 지정)
    * `call, apply`와의 차이점
      * `apply`는 매개변수를 배열로 받는다.
      * `fun.call(thisArg[, arg1[, arg2[, ...]]])`
      * `fun.apply(thisArg, [argsArray])`
        * `thisArg`는 `func` 를 호출하는데 제공될 `this` 의 값
        * `argsArray`는 `func` 이 호출되어야 하는 인수를 지정하는 유사 배열 객체

  - **bind**

    * `this`의 값을 영원히 바꿀 수 있다.
    * `fun.bind(thisArg[, arg1[, arg2[, ...]]])`

---



##  상속



------

### 【 참고한 곳 】

- https://velog.io/@afant/Javascript-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-Prototype%EC%9D%98-%EA%B0%9C%EB%85%90-
- https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
- https://opentutorials.org
- https://d2.naver.com/helloworld/12864
