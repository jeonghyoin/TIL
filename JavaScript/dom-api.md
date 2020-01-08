# DOM API

### * 자주 사용하는 속성

* tagName: 앨리먼트의 태그명 반환
* textContent: 노드의 텍스트 내용을 설정하거나 반환
* nodeType: 노드의 노드 유형을 숫자로 반환
* 탐색
  * querySelector: 해당하는 **첫번째 앨리먼트** 반환
    * nth-child()
    * querySelectorAll
  * childNodes: 앨리먼트의 **자식 노드의 노드 리스트** 반환
  * firstChild: 앨리먼트의 **첫번째 자식 노드** 반환
  * firstElementChild: **첫번째 자식 앨리먼트** 반환
  * parentElement: 앨리먼트의 **부모 앨리먼트** 반환
  * nextSibling: 동일한 노드 트리 레벨에서 다음 **노드** 반환
  * nextElementSibling: 동일한 노드 트리 레벨에서 다음 앨리먼트 반환
* 조작
  * removeChild: 앨리먼트의 **자식 노드 제거**
  * appendChild: **마지막 자식 노드에 앨리먼트 추가**
  * insertBefore: **기존 노드 앞에 자식 노드 추가**
  * cloneNode: **노드 복제**
  * replaceChild: 앨리먼트의 **자식 노드 변경**
  * closest: 상위로 올라가면서 **근접 앨리먼트**를 찾은 후 반환
  * createElement
  * createTextNode
* 문자열
  * innerText: 지정된 노드와 **모든 자손의 텍스트 내용을 설정하거나 변환**
  * innerHTML: 지정된 앨리먼트의 **내부 html을 설정하거나 반환**
  * insertAdjacentHTML(속성, 삽입 값): html로 텍스트를 **지정된 위치에 삽입**
    - beforebegin: element 앞에 넣을 때
    - afterbegin: element 안에 가장 첫번째 child로 넣을 때
    - beforeend: element 안에 가장 마지막 child로 넣을 때
    - afterend: element 뒤에 넣을 때

### * 실습

1. 새로운 앨리먼트 추가 및 삭제

~~~javascript
var ul = document.querySelector("ul");
var li = document.createElement("li");

var str = document.createTextNode("mango");

li.appendChild(str);
ul.appendChild(li);
~~~

2. 새로운 앨리먼트 추가

~~~javascript
* insertBefore
var li = document.createElement('li');
var str = document.createTextNode('mango');
li.appendChild(str);

//오랜지 아래, 바나나 위
//3번째 li 찾기
var banana = document.querySelector("li:nth-child(3)");

var ul = document.querySelector("ul");
//li를 banana 위에 넣는다
ul.insertBefore(li, banana);

* insertAdjacentHTML
//바나나 위치 찾기
var banana = document.querySelector("li:nth-child(3)");
//속성, 추가할 앨리먼트
banana.insertAdjacentHTML("beforebegin", "<li>mango<li>");
~~~

3. 앨리먼트 위치 옮기기

~~~javascript
//옮길 앨리먼트 찾기
var apple = document.querySelector('li:nth-child(1)');

//옮겨질 위치 찾기
var strawberry = document.querySelector('li:nth-child(5)');

//해당 ul 탐색
var ul = document.querySelector('ul');
//추가할 값, 옮길 위치
ul.insertBefore(apple, strawberry);
~~~

4.  CSS 속성으로 앨리먼트 삭제하기

~~~javascript
//class가 red인 모든 것 찾기
//배열
var red = document.querySelectorAll(".red");

//기준 ul
var ul = document.querySelector("ul");

//반복문 돌면서 삭제
for(var i=0; i<red.length; i++) {
	ul.removeChild(red[i]);
}
~~~
