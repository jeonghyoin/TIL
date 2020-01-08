# Ajax

* XMLHTTPRequest 통신
* 비동기로 서버로부터 데이터를 가져오는 것

![ajax-webpage-lifecycle](https://poiemaweb.com/img/ajax-webpage-lifecycle.png)

* 브라우저는 `XMLHttpRequest 객체`를 이용하여 Ajax 요청을 생성하고 전송한다.
* 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리한다.

### * 요청 전송하기

~~~javascript
function ajax(data) {
    var oReq = new XMLHttpRequest(); //XMLHttpRequest 객체 만들기
    
    //open.send까지 완료된 후 콜백함수 실행(비동기)
    oReq.addEventListener("load", function() {
        console.log(this.responseText);
    });
    
    //XMLHttpRequest.open(method, url[, async]) 형식으로 전송
    oReq.open("GET", "http://www.example.org/getData?data=data");//parameter를 붙여서 보낼 수 있음
    oReq.setRequestHeader('Content-type', 'application/json');
    
    //준비된 요청을 서버로 전송
    oReq.send();
}
~~~

* 코드 실행 순서

  1. `XMLHttpRequest 객체`를 생성해서 open 메서드로 요청을 준비한다.
  2. HTTP Request Header의 값을 JSON으로 설정한다.
  3.  send 메서드로 서버로 보낸다.

  3. 요청 처리가 완료되면(서버에서 응답이 오면) load 이벤트가 발생하고, 콜백 함수가 실행된다.

  4. 콜백 함수가 실행될 때 Ajax 함수는 반환되어 콜스택에서 사라진 상태이다.



### * 요청 응답 처리하기

* `XMLHttpRequest.onreadystatechange`는 Response가 클라이언트에 도달하여 발생된 이벤트를 감지하고 **콜백 함수**를 실행한다. 이벤트가 발생한 경우는 Request에 어떠한 변화가 발생한 경우(`XMLHttpRequest.readyState` 프로퍼티가 변경된 경우)이다.

~~~javascript
//XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

//비동기 방식으로 Request를 오픈
xhr.open('GET', 'data/test.json');
//Request를 전송
xhr.send();

//XMLHttpRequest.readyState 프로퍼티가 변경될 때마다 onreadystatechange 이벤트 핸들러 호출
xhr.onreadystatechange = function(e) {
  //readyStates는 XMLHttpRequest의 상태(state)를 반환
  //readyState: 4 => DONE(서버 응답 완료된 상태)
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //status는 response 상태 코드를 반환: 200 => 정상 응답 상태
  if(xhr.status === 200) {
      console.log(xhr.responseText);
  } else {
      console.log('Error!');
  }
};
~~~

| Value | State            | Description                                           |
| :---: | :--------------- | :---------------------------------------------------- |
|   0   | UNSENT           | XMLHttpRequest.open() 메소드 호출 이전                |
|   1   | OPENED           | XMLHttpRequest.open() 메소드 호출 완료                |
|   2   | HEADERS_RECEIVED | XMLHttpRequest.send() 메소드 호출 완료                |
|   3   | LOADING          | 서버 응답 중(XMLHttpRequest.responseText 미완성 상태) |
|   4   | DONE             | 서버 응답 완료                                        |



---

### 【 참고한 곳 】

https://poiemaweb.com/js-ajax