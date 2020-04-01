### 인터페이스
* **prototype**으로 인터페이스 구현하기
	* 클래스에서 어떠한 기능을 구현하지 않고, 서술만 한 타입
	* JavaScript에는 인터페이스가 존재하지 않으므로, 아래와 같이 prototype으로 인터페이스의 기능을 구현한다.
~~~js
var Runnable = function() {
	this.run = function() {  
		console.log("Error: must override run method");
	}
}

// run 메서드를 구성하지 않으면 오류가 발생한다.
/* Uncaught Error: 50
    at interfaceExample.Runnable.run (<anonymous>:3:9)
    at <anonymous>:16:6
*/
var interfaceExample = function() {
	this.run = function() { 
		console.log("execute run!");  
	}
}

interfaceExample.prototype = new Runnable();
var test = new interfaceExample();
test.run();

console.log(interfaceExample.prototype);
// Runnable {run: ƒ} 출력, 여기에서 run은 Runnable의 run 메서드를 가리킨다. (constructor가 Runnable)
// interfaceExample prototype에서 Runnable을 상속받고, run을 재구현한다.
// test는 interfaceExample의 속성을 물려받는다.
~~~
