//클로저
//case 1. 유효 범위
function init() {
    var msg = "hello"; //name은 init에 의해 생성된 지역 변수

    function displayName() { //displayName() 은 내부 함수(클로저)
        //부모 함수 init()에서 선언된 변수 name에 접근
        console.log(msg);
    }
    displayName();
}

//init();
//init() 함수 본문에서만 사용 가능
//displayName();

//case 2
function makeFunc() {
    var msg = "hello";

    function displayName() {
        console.log(msg);
    }
    return displayName;
}
  
var myFunc = makeFunc();
myFunc();