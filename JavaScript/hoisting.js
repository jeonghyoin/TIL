//호이스팅
//case 1
//선언보다 호출이 먼저 있어도 정상 실행 - 호이스팅 발생
printName(); //함수 호출

function printName() { //함수 선언문 
    var result = inner(); //선언 및 할당

    console.log(typeof inner); //function 출력
    console.log("name is " + result); //name is inner value 출력

    function inner() { //함수 선언문 
        return "inner value";
    }
}

//case 2
//TypeError: foo is not a function 출력
//printName2();

var printName2 = function() { //함수 표현식
    console.log("hello");
}

//case 3
//var이 아니라 let인 경우
//ReferenceError: Cannot access 'inner' before initialization
//printName3();

function printName3() { //함수 선언문 
    let result = inner(); //선언 및 할당

    console.log(typeof inner); //function 출력
    console.log("name is " + result); //name is inner value 출력

    let inner = function() { //함수 표현식
        return "inner value";
    }
}

//case 4
//변수
//printName4();

function printName4() { //함수 선언문
    console.log(typeof inner); //function 출력
    console.log("name is " + result); //name is inner value 출력

    var result = inner(); //선언 및 할당
    //ReferenceError: Cannot access 'result' before initialization
    //let result = inner();

    function inner() { //함수 선언문 
        return "inner value";
    }
}