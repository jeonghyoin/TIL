# prototype

JS의 모든 객체는 부모를 갖고있고, 부모와 연결되어 있다. 이로 인해 부모의 프로퍼티와 메서드를 물려받아(상속) 사용할 수 있다. 이때 부모 객체를 `prototype`이라 한다.

![img](https://t1.daumcdn.net/cfile/tistory/999DC63F5A716CE933)

* `__proto__`
  * 모든 객체가 갖고 있는 프로퍼티
  * 부모의 프로토타입 프로퍼티에 대한 정보를 의미
* `prototype`
  * 함수만 갖고 있는 프로퍼티(함수도 객체이다)
  * 자신의 `prototype` 객체이며 자식 객체는 이를 참조한다.

~~~javascript
var foo = {
  name: "hi" //객체
}

function goo(){} //생성자 함수

console.dir(foo);
console.dir(goo);
~~~

~~~
결과

Object
    name: "hi"
    __proto__: Object //Object 객체(Object.prototype)

ƒ goo()
    length: 0
    name: "goo"
    arguments: null
    caller: null
    prototype: {constructor: ƒ} //함수 goo에는 prototype 프로퍼티가 존재한다.
    __proto__: ƒ () //Function 객체(Function.prototype 객체)
    [[FunctionLocation]]: VM751:5
    [[Scopes]]: Scopes[1]
~~~

* 생성자 함수

~~~javascript
let foo = function() {
    this.name = 'hi',
    this.email = "hi@example.com"
}

let o = new foo();

//위와 같다
let foo2 = function() {}
foo2.prototype.name = 'hi';
foo2.prototype.email = "hi@example.com"

let o2 = new foo2();
~~~

# prototype chain

객체의 속성은`객체.프로퍼티명`으로 접근할 수 있다. 객체에 해당 property가 없을 경우 부모 객체의 property를 참조한다.

> **prototype chain**
>
> 현재 객체의 `__proto__` 프로퍼티를 참조해서 해당 프로퍼티가 있는지 체크하고, 그래도 없으면 부모의 `__proto__` 프로퍼티를 참조하는 것

# 상속(Inheritance)

JS에서 상속을 구현하기 위해서 prototype 객체를 사용한다. (`__proto__ 프로퍼티` 이용)

~~~javascript
let foo = function() {
    this.name = 'hi'
}
let goo = function() {
    //빈 객체
}

goo.prototype = new foo(); //name 프로퍼티 상속
goo.prototype.constructor = goo; //goo로 지정해주지 않으면 foo로 되어있음

let o = new goo();
//__proto__가 참조하는 prototype 객체로 찾아가 name 프로퍼티를 읽어온 것
console.log(o.name); //hi
console.log(o); //goo {} __proto__: foo name: "hi" constructor: ƒ () __proto__: Object
~~~

#  생성자(constructor)

prototype 객체(`__proto__`프로퍼티, prototype 객체)는 constructor 프로퍼티를 갖는다. constructor 프로퍼티는 **객체를 생성하는 생성자 함수 객체를 의미**한다.

constructor 프로퍼티를 이용하여 객체가 어떤 클래스의 객체인지 알아낼 수 있다.

![img](https://t1.daumcdn.net/cfile/tistory/99D24E335A146DF30F)

~~~javascript
var foo = function() {}; //생성자 함수
var goo = new foo(); //생성자 함수를 goo에 할당

/*
foo {}
    __proto__:
        constructor: ƒ ()
            length: 0
            name: "foo" //foo이름을 가진 함수를 값으로 갖고있다.
            arguments: null
            caller: null
            prototype: {constructor: ƒ}
            __proto__: ƒ ()
            [[FunctionLocation]]: VM1574:1
            [[Scopes]]: Scopes[1]
    	__proto__: Object
*/

console.log(goo);
~~~



---

### 【 참고한 곳 】

https://victorydntmd.tistory.com/52?category=704012

