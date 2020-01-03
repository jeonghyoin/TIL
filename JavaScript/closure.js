//클로저
//case 1. 유효 범위
function init() {
    var name = "hello 1"; //name은 init에 의해 생성된 지역 변수

    function displayName() { //displayName() 은 내부 함수(클로저)
        //부모 함수 init()에서 선언된 변수 name에 접근
        console.log(name);
    }
    displayName();
}

init();
//init() 함수 본문에서만 사용 가능
//displayName();

//case 2
function makeFunc() {
    var name = "hello 2";

    function displayName() {
        console.log(name);
    }
    //함수 리턴
    return displayName;
}
  
//makeFunc: myFunc 변수에 displayName을 리턴
//myFunc: displayName 함수의 인스턴스에 대한 참조
var myFunc = makeFunc();
//리턴된 displayName 함수를 실행
myFunc();

/*
* makeFunc()으로 출력되지 않는 이유
* 유효범위(X), 리턴 함수가 클로저를 형성(O)
*/

//case 3
function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); //5 + 100 + 2 = 107
console.log(add10(2)); //10 + 100 + 2 = 112
