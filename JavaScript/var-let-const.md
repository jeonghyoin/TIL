# 자바스크립트 변수
<br>

## * 변수
+ ### **var**
  + ES6 이전 방식
  + **변수** 선언 시 사용한다.
  + `var = "variable"` 과 같이 사용한다.
  + 선언할 때 타입을 구분하지 않으므로 타입이 나중에 결정된다.
+ ### **let**
  + ES6 방식
  + **변수** 선언 시 사용한다.
  + `let variable;` 이처럼 초기값을 할당하지 않으면 암시적으로 `undefined` 을 할당한다.
  + `let boost = “boost”, course = “course”` let문 하나에서 변수를 여러개 선언할 수 있다.
+ ### **const**
  + ES6 방식
  + **상수, 고정 값** 선언 시 사용한다.
  + 선언과 동시에 값을 할당해주어야 한다.
+ ### **차이점**
  + var, let은 값을 재할당할 수 있지만, const는 재할당이 불가능하다.
  + var의 문제점을 보완한 것이 let이다.
    + var는 `var = "variable1"`으로 선언하고 뒤에 `var = "variable2"`으로 또 선언해도 문제가 발생하지 않는다.
    + 반면 let은 이러한 재선언 시 이미 선언된 변수라는 에러를 발생시킨다.
  + var는 **호이스팅 관련 문제**가 발생할 수 있다.
    + 위쪽에서 아직 선언되지 않은 변수를 호출해도 호이스팅으로 선언만 끌어올려지기 때문이다.
    + 이때, 변수에 할당은 되지 않기 떄문에 추후 문제가 발생할 수 있다.
    ```
    console.log(var);
    var var = "string";
    console.log(var);
    ```
    + var에서는 위처럼 선언되어 있지 않은 변수를 출력했음에도 에러가 발생하지 않는다.
    + 반면 let에서는 호출했을 때 변수가 선언되어 있지 않은 경우 오류를 발생시킨다.
  + var는 `Function-scope`인 반면 let과 const는 `Block-scope`이다.
    + let은 변수의 유효범위가 {}로 감싸지므로 유효범위와 관련해 발생하는 문제를 줄일 수 있다.
<br>
