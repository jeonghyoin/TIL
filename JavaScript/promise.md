# Promise

서버에서 받아온 데이터를 **화면에 표시**할 때 주로 사용한다.

* 콜백 사용

~~~javascript
function getData(callback) {
  $.get('url/products/1', function (response) {
      callback(response); //서버에서 받은 데이터 response를 callback 함수에 넘겨줌
  });
}

getData(function(data) {
  console.log(data); //$.get()의 response 값이 data에 전달됨
});
~~~

* promise 사용

~~~javascript
function getData(callback) {
    //promise 추가
    return new Promise(function(resolve, reject) {
        $.get('url/products/1', function(response) {
            //데이터를 받으면 resolve가 호출된다
            resolve(response);
        });
    });
}

//getData()의 실행이 끝나면 then이 호출된다.
getData().then(function(data) {
    //resolve의 값은 여기로 전달 됨
    //$.get()의 response 값이 data에 전달됨
    console.log(data);
});
~~~

* 프로미스의 상태(states), 프로미스의 처리 과정

  * `new Promise()`로 프로미스를 생성하고 종료할 때 까지 아래와 같은 상태를 갖는다.
  * Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
  * Fulfilled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 **반환**해준 상태
  * Rejected(실패): 비동기 처리가 **실패**하거나 **오류**가 발생한 상태

  ~~~javascript
  new Promise(function(resolve, reject) {
      //프로미스 메소드를 호출할 때 콜백 함수의 인자로 resolve, reject에 접근할 수 있다.
  });
  ~~~

  ~~~javascript
  new Promise(function(resolve, reject) {
  	//resolve를 실행하면 대기 상태가 된다.
      //그리고 이행 상태가 되면, then()을 이용하여 처리 결과 값을 받을 수 있다.
      resolve();
  });
  ~~~

  ~~~javascript
  function getData() {
    return new Promise(function(resolve, reject) {
        //reject() 메서드를 실행하면 실패 상태가 된다.
        reject(new Error("Request is failed"));
    });
  }
  
  //reject()의 결과 값 Error를 err에 받음
  //실패 상태가 되면 실패한 이유를 catch()로 받을 수 있다.
  getData().then().catch(function(err) {
  	console.log(err); //Error: Request is failed
  });
  ~~~

* 여러 개의 promise 사용하기

  ~~~javascript
  function getData() {
    return new Promise({
      //...
    });
  }
  
  //then()으로 여러 개의 프로미스를 연결
  getData()
    .then(function (data) {
      return
      //이행된 결과를 받아서 다음 then의 로직으로 넘긴다.
    })
    .then(function (data) {
      //...
    })
    .then(function (data) {
      //...
    });
  ~~~

* promise의 에러 처리 방법

  * 프로미스의 `reject()` 메서드가 호출되어 실패 된 경우 실행된다.

  * `then()`의 두 번째 인자로 에러를 처리하는 방법

    ~~~javascript
    getData().then(function() {
      // ...
    }, function(err) { //2번째 인자로 전달
        console.log(err);
    });
    ~~~

  * `catch()`를 이용하는 방법(추천)

    ~~~javascript
    getData().then().catch(function(err) {
        console.log(err);
    });
    ~~~

    

---

### 【 참고한 곳 】

https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

