//사용 방법
(function () {
    var name = "test";
})();

//ReferenceError: name is not defined 발생
//IIFE 내부에서 정의 된 변수는 외부 범위에서 접근 불가능
//console.log(name);

//case 1. 메세지 출력
//변수에 할당, 함수가 실행된 결과만 저장된다.
var result = (function () {
    var name = "test"; 
    return name; 
})(); 

console.log(result); //test 출력


//case 2. 함수호출 카운트
var f = (function() {
    var count = 1;
    return function() {
        return count++;
    }
})();

console.log(f()); //1
console.log(f()); //2


//case 3. 인자 전달하기
(function (name){
    console.log(name);
})('hi');


//case 4. IIFE + 클로저
//클로저는 만들어진 환경을 기억한다.
for (var i = 0; i < 10; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 1000); //1초 뒤에 실행
  })(i); //인자로 i를 넘기면 IIFE로 만든 10개의 스코프에 i라는 변수가 다른 값으로 생긴다.
}