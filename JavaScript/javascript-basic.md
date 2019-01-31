# 자바스크립트 기본 문법
<br>

## * 연산자
+ 연산자 우선순위를 표현하기 위해서는 ( )를 사용한다.
+ 산술 연산자 (+, -, *, /, %, ++, --)
+ 논리연산자 (&&, ||, !)
  + if, else문을 사용하지 않아도 되므로 기본값을 할당할 때 편리하다.
```
const result = name || "hyo"; //name에 값이 있는 경우 출력되고, 없을 경우 hyo가 출력된다.
```
+ 관계 연산자 (<, >, >=, <=)
+ 삼항 연산자
```
const data = 11;
const result = (data > 10) ? “참” : “거짓”;
```
+ 비교 연산자
  + == : 동등
  + === : 일치, 정확한 타입까지 비교한다.
<br>

---
<br>

## * 제어문
+ ### **비교**
  + if, else if, else, 삼항 연산자
+ ### **분기**
  + Switch문
+ ### **반복**
  + for, while, do … while
  + **객체**는 `for … in` 을 사용한다.
    ```
    var obj = { a: 1, b: 2, c: 3 };

    for (var prop in obj) {
        console.log(prop, obj[prop]);
    }
    // 출력 결과: a 1, b 2, c 3
    ```
  + **배열**은 `forEach` 를 사용한다.
    ```
    var items = ['item1', 'item2', 'item3'];

    items.forEach(function(item) {
        console.log(item);
    });
    // 출력 결과: item, item2, item3
    ```
  + **컬랙션**에는 범용적 루프인 `for … of`를 사용한다.
    ```
    var iterable = [10, 20, 30];

    for (var value of iterable) {
      console.log(value); // 10, 20, 30
    }
    ```
<br>

---
<br>

## * 함수
+ 여러 개의 인자를 받아서 그 결과를 출력한다.
+ 파라미터의 개수와 인자의 개수가 일치하지 않아도 오류가 나지 않는다.
  + 파라미터 1개가 정의된 함수를 부를 때 인자를 넣지 않고 실행하면 `undefined`이라는 값 가진다.
+ return을 명식적으로 호출하지 않으면 반환 값은 `undefined`이 된다.
+ 함수를 나타내는 방법에는 **선언식**과 **표현식**이 존재한다.

+ ### **선언식**
  + 함수 표현식보다 더 많이 사용된다.
  + 함수 선언부를 다른 코드보다 먼저 읽고 실행하므로 **호이스팅의 영향**을 받는다.
    + **호이스팅(hoisting)**: 사용하는 것보다 선언하는 코드가 아래 쪽에 나타나도 마치 코드의 맨 윗부분에 선언한것처럼 동작하는 것
  ```
  function printName(firstname) {
    var myname = "jisu";
    return myname + " " +  firstname;
  }
  ```
+ ### **표현식**
  + 변수 값에 함수 표현식을 담아놓은 것이다.
  + 함수 이름 생략할 수 있다.
  + printName() 으로 호출한다.
  ```
  var printName = function() {
        return 'anonymouse';
  }
  ```
<br>

---
<br>

## * 배열
+ ### **배열의 선언**
  + 배열 안에는 모든 타입이 다 들어갈 수 있다. `(함수, 배열, 객체 …)`
  + index는 0부터 시작
  ```
  var a = [];
  var a = [1,2,3,"hello", null, true, []];
  ```
+ ### **배열 메소드**
  + **push**: 배열에 메서드 추가하기 (뒤에 순차적으로 추가)
  + **indexOf**: 특정 값의 index (없을 경우 -1)
  + **concat**: 배열 합치기
  + **Join**: 배열의 문자열로 합치기
  ```
  [1,2,3,4].indexOf(3) //2
  [1,2,3,4].join(); //"1,2,3,4" 
  [1,2,3,4].concat(2,3);  //[1,2,3,4,2,3]
  ```
+ ### **배열 탐색**
  + **forEach**: 배열 순회, 배열의 길이를 체크하는 for문을 추가하거나, i++과 같은 증가시켜주는 코드가 필요 없다.
  ```
  ["apple","tomato"].forEach(function(v) {
     console.log(v)
  });
  ```
  + **map**: 배열 순회, 원본 배열은 건들지 않고 **새로운 배열을 반환**하는 것이 forEach와의 차이점
  + return값이 존재한다.
  ```
  var newArr = [“apple”,"tomato"].map(function(value, index) {
     return index + "번째 과일 = “+ value
  });
  console.log(newArr)
  ```
  + **filter**: 특정한 요소들을 걸러내서 새로운 배열로 만들고 싶을 때
  ```
  var newArr = arr.filter(function(item){    
    return item.name === "orange";
  });  
  ```
<br>

---
<br>

## * 객체
+ JavaScript로 데이터를 표현하기 위해서는 Array, Object 사용
+ `key, value 구조`의 자료구조
+ Object형태는 {}로 자료를 표현
+ 배열과 같은 순서는 없지만 객체는 key값 존재하므로 데이터를 보관할 때 많이 사용한다.
+ ### **객체의 선언**
  + `var obj = { name : "crong"}` //name은 key값, "crong"은 value값이다.
+ ### **객체 추가, 삭제**
```
  const myFriend = {key : "value"};
  //추가
  myFriend.age = 34;
  //삭제
  delete(myFriend.age)
```
+ ### **객체 탐색**
```
var obj = {"name": "hyo", age: 22, data: [1,2,3,4,5]
};

for(value in obj) { //출력
  console.log(obj[value]);
}
```
<br>
