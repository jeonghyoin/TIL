# node.js

### * node.js 서버 구성

* npm 패키지들을 모아놓은 사이트: https://www.npmjs.com/ 

> **vscode에 아래 명령어 실행하여 설치**
>
> npm init
>
> npm install express --save
>
> npm install express
>
> `--save` 옵션을 통해 설치된 Node 모듈은 `package.json` 파일 내의 `dependencies` 목록에 추가된다.
>
> npm i ejs

### * Route, Controller

![img](https://mdn.mozillademos.org/files/14456/MVC%20Express.png)

* Routes: 는 지원된 요청(요청 URL에 어떤 인코딩된 정보)들을 알맞은 Controller로 보낸다.
* Controller: 모델로부터 요청된 데이터를 얻어내거나, 데이터를 나타내는 HTML을 생성하여 사용자에게 전달한다.
* View(템플릿): 데이터를 렌더링하는 컨트롤러에 의해서 사용된다.

### * 모듈화

모듈을 생성하기 위해 `exports` 전역 객체를 사용하고, 모듈을 불러오기 위해 `require()` 메서드를 사용한다.

~~~javascript
//exports에 직접 프로퍼티를 설정
exports.add = function(a, b) {
    return a + b;
}

exports.multiply = function(a, b) {
    return a * b;
}

//새로운 객체에 프로퍼티 설정 후 module.export에 할당하기
var calc = {};

calc.add = function(a, b){
    return a + b;
}

calc.multiply = function(a, b){
    return a * b;
}

module.exports = calc;
~~~

~~~javascript
//require()는 exports 객체를 반환
var calc = require("./calc");
~~~




---

### 【 참고한 곳 】

https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/routes

https://victorydntmd.tistory.com/16
