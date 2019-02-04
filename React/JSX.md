# JSX
<br>

+ ### **JSX**
  + `Javascript + XML`로 기존 자바스크립트의 확장 문법이다.
  + XML-like syntax 를 native JavaScript 로 변경해준다.
  + " " 로 감싸지 않는다.
  + ( ) 를 사용하지 않아도 오류는 발생 하지 않지만 가독성을 위하여 사용하기
  + 자바스크립트 내애서 HTML코드를 자유롭게 작성할 수 있다.
```
var a = (
    <div>
        Welcome to <b>React</b>
    </div>
);

"use strict";

var a = React.createElement(
  "div",
  null,
  "Welcome to ",
  React.createElement(
    "b",
    null,
    "React.js CodeLab"
  )
);
```

<br>

---
<br>

### * 모든 JSX는 컨테이너 앨리먼트 안에 포함시켜야 한다.
```
render() {
    return (
        <h1>Hi</h1>
        <h2>I am Error</h2>
    )
}

/* 컴포넌트에서 여러 Element를 렌더링 할 때 꼭 container element 안에 포함시키기 */

render() {
    return (
        <div>
            <h1>Hi</h1>
            <h2>Error is gone.</h2>
        </div>
    )
}
```

<br>


### * 자바스크립트 코드를 사용할 떄는 {}
```
/* JSX 안에서 JavaScript를 표현하는 방법은 간단 => 그냥 { } 로 wrapping 하면 된다. */

render() {
    let text = "Hello React!";
    return (
        <div>{text}</div>
    );
}

/* If Else 문은 JSX에서 사용불가. 이에 대한 대안은 tenary expression이다.
   condition ? true : false 를 사용하기. */

render() {
    return (
        <p>{ 1==1 ? 'True' : ' False' }</p>
    );
}
```

<br>

### * JSX 안에서 style 을 설정 할때는, string 형식을 사용하지 않고 key 가 camelCase 인 객체가 사용된다.
```
render() {
    let style = { 
        color: 'aqua',
        backgroundColor: 'black' //camelCase
    };

    return (
        <div style={style}>React CodeLab</div> //{사용}
    );
}

/* JSX 안에서 class 를 설정 할 때는 class= 가 아닌 className= 을 사용 */
render() {
    return (
        <div className="box">React CodeLab</div>
    );
}
```

<br>

### * JSX 안에서 주석을 작성 할 때는 {  /* ... */  }형식으로 작성
```
/* Nested Element 부분에 설명했던것과 같이 container element 안에 주석이 작성되어야 한다.
  => 그렇지 않으면 에러 발생 */

render() {
    return (
        <div>
            { /* This is How You Comment */ }
            { /* Multi-line
                    Testing */ }
                React CodeLab
        </div>
    );
}
```
<br>

---
<br>

### * JS
```
class Codelab extends React.Component {
  render() { //모든 리액트 컴포넌트는 랜더 매소드가 있다. - 컴포넌트가 어떻게 생길지 정의하는 것
    let text = 'Hi Codelab'; 
    let style = {
      backgroundColor: 'aqua'
    };
    
    return (
      <div style={style}>{text}</div> //JSX
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Codelab/>
    );
  }
}

//랜더링
//랜더 메소드를 이용하여 컴포넌트를 랜더링한다.
//**첫번째 인수**: App컴포넌트를 랜더링
//**두번째 인수**: 이 컴포넌트를 랜더링할 앨리먼트

ReactDOM.render(<App/>, document.getElementById('root'));
```

<br>

### * HTML
```
<div id="root"></div>
```
<br>

---
<br>

**참고**
+ React & Express 를 이용한 웹 어플리케이션 개발하기<br>
+ [JSX 텍스트 강좌](https://velopert.com/867)
+ [let 키워드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)

